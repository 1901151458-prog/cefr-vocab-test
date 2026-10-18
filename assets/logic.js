/* =============================================================================
 * 英语词汇量 CEFR 定级测试 · 判分 / 定级 / 词汇量估算（纯逻辑）
 * 依赖：无（浏览器挂到 window.VT_LOGIC，Node 用 module.exports）
 * 规则：
 *   - 每级 20 题，答对 1 题 1 分；选错、超时未答 0 分
 *   - 每级答对 >= 16 题“通过”，12–15 题“边缘”，<= 11 题“未过”
 *   - 定级：从 A1 起取“连续通过”的最高级
 *   - 词汇量：以各级累计词汇量区间为锚点，用“通过级累计 + 下一级答对数占比 × 该级增量”估算
 * ========================================================================== */
(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.VT_LOGIC = api;
})(typeof window !== "undefined" ? window : null, function () {
  "use strict";

  var PASS = 16;        // 每级答对 >=16 通过
  var EDGE = 12;        // 12–15 边缘
  var NONE_INDEX = 3;   // 选项 D：以上都不正确

  /** 正确答案在 0–3 中的位置（-1 表示 D「以上都不正确」） */
  function answerOf(item) {
    return item.ans === -1 ? NONE_INDEX : item.ans;
  }

  /** 单题判分：correct / wrong / timeout / blank（blank = 未测） */
  function grade(item, choice) {
    if (choice === -1) return "timeout";
    if (choice === undefined || choice === null) return "blank";
    return choice === answerOf(item) ? "correct" : "wrong";
  }

  function levelStatus(count) {
    if (count >= PASS) return "pass";
    if (count >= EDGE) return "edge";
    return "fail";
  }

  /** 打平成 120 题，附级别信息 */
  function flatten(data) {
    var out = [];
    data.levels.forEach(function (lv, li) {
      lv.words.forEach(function (w) {
        out.push({
          n: w.n,
          w: w.w,
          pos: w.pos,
          meaning: w.meaning,
          opts: w.opts,
          ans: w.ans,
          trap: w.trap,
          levelId: lv.id,
          levelCode: lv.code,
          levelName: lv.name,
          levelIndex: li,
          color: lv.color,
          cum: lv.cum,
          inc: lv.inc,
          lo: lv.lo
        });
      });
    });
    return out;
  }

  function levelWords(data, li) {
    return data.levels[li].words;
  }

  /** 判定：输入各答对题数数组，输出定级与估算 */
  function evaluate(counts, data) {
    var levels = data.levels;
    var passed = 0;
    for (var i = 0; i < counts.length; i++) {
      if ((counts[i] || 0) >= PASS) passed = i + 1;
      else break;
    }

    // 一级都没通过：Pre-A1
    if (passed === 0) {
      var c1 = counts[0] || 0;
      var base0 = levels[0];
      var est0 = Math.round((c1 / 20) * base0.inc);
      return finish({
        code: "below",
        highest: 0,
        levelIndex: 0,
        label: "Pre-A1（未达 A1）",
        short: "A1 以下",
        estimate: est0,
        range: [0, Math.round((EDGE - 1) / 20 * base0.inc)],
        recommend: levels[0].code + " " + levels[0].name,
        recommendWhy: "从 A1 入门级开始系统补基础高频词",
        canDo: "目前还达不到 A1 的基本词汇量，先从最基础的日常词（数字、颜色、家庭、饮食、时间）开始。"
      }, counts, data);
    }

    var passedLv = levels[passed - 1];
    var base = passedLv.cum;

    // 六级全通过
    if (passed === 6) {
      return finish({
        code: "perfect",
        highest: 6,
        levelIndex: 5,
        label: "C2 精通级",
        short: "C2",
        estimate: levels[5].cum,
        range: [levels[5].cum, levels[5].cum],
        recommend: "保持广泛阅读原版材料，向学术 / 专业写作拓展",
        recommendWhy: "已达本单上限（约 16000 词）",
        canDo: levels[5].canDo
      }, counts, data);
    }

    var nextLv = levels[passed];
    var nextCount = counts[passed] || 0;
    var edge = nextCount >= EDGE;
    var estimate = edge
      ? base + Math.round((nextCount / 20) * nextLv.inc)
      : base;
    var range = edge
      ? [base + Math.round((EDGE / 20) * nextLv.inc), base + Math.round((PASS - 1) / 20 * nextLv.inc)]
      : [base, base + Math.round(((EDGE - 1) / 20) * nextLv.inc)];

    return finish({
      code: edge ? "edge" : "pass",
      highest: passed,
      levelIndex: passed - 1,
      label: edge
        ? passedLv.code + " " + passedLv.name + "（" + nextLv.code + " 边缘）"
        : passedLv.code + " " + passedLv.name,
      short: passedLv.code,
      estimate: estimate,
      range: range,
      recommend: nextLv.code + " " + nextLv.name,
      recommendWhy: edge
        ? "已在 " + nextLv.code + " 边缘，先巩固 " + nextLv.code + " 高频词"
        : "下一目标 " + nextLv.code + " " + nextLv.name,
      canDo: passedLv.canDo
    }, counts, data);
  }

  function finish(result, counts, data) {
    result.estimateText = "约 " + result.estimate + " 词";
    result.rangeText = result.range[0] + "–" + result.range[1] + " 词";
    result.cefrBand = result.estimate < 1000
      ? "A1 以下"
      : result.estimate < 2000
        ? "A1–A2"
        : result.estimate < 3000
          ? "A2–B1"
          : result.estimate < 5000
            ? "B1–B2"
            : result.estimate < 8000
              ? "B2–C1"
              : result.estimate < 16000
                ? "C1–C2"
                : "C2";
    return result;
  }

  /** 单题评分表（结果页逐题回顾 / 分布图） */
  function score(answers, data) {
    var items = flatten(data);
    var perLevel = data.levels.map(function (lv) {
      return {
        id: lv.id, code: lv.code, name: lv.name, color: lv.color,
        cum: lv.cum, inc: lv.inc,
        correct: 0, wrong: 0, timeout: 0, blank: 0
      };
    });
    var details = [];
    var trap = { total: 0, correct: 0, wrong: 0, timeout: 0, blank: 0 };

    items.forEach(function (item, i) {
      var choice = Object.prototype.hasOwnProperty.call(answers, i) ? answers[i] : undefined;
      var st = grade(item, choice);
      perLevel[item.levelIndex][st] += 1;
      details.push({
        n: item.n, w: item.w, pos: item.pos, meaning: item.meaning,
        opts: item.opts, ans: item.ans, trap: item.trap,
        levelId: item.levelId, levelCode: item.levelCode, levelName: item.levelName,
        levelIndex: item.levelIndex, color: item.color, cum: item.cum, inc: item.inc,
        choice: choice, state: st
      });
      if (item.trap) {
        trap.total += 1;
        if (st === "correct") trap.correct += 1;
        else if (st === "wrong") trap.wrong += 1;
        else if (st === "timeout") trap.timeout += 1;
        else trap.blank += 1;
      }
    });

    var total = { correct: 0, wrong: 0, timeout: 0, blank: 0, answered: 0, total: items.length };
    perLevel.forEach(function (p) {
      total.correct += p.correct;
      total.wrong += p.wrong;
      total.timeout += p.timeout;
      total.blank += p.blank;
    });
    total.answered = total.correct + total.wrong + total.timeout;

    var counts = perLevel.map(function (p) { return p.correct; });
    var result = evaluate(counts, data);

    return {
      items: items,
      details: details,
      perLevel: perLevel,
      counts: counts,
      total: total,
      trap: trap,
      result: result,
      accuracy: total.answered ? total.correct / total.answered : 0
    };
  }

  /** 词汇量 ↔ CEFR 速查表（用于结果页对照与教师说明） */
  function rangeTable(data) {
    var levels = data.levels;
    var rows = [];
    var firstInc = levels[0].inc;
    rows.push({
      label: "Pre-A1 以下",
      case: "A1 答对 ≤11 题（未达 A1）",
      range: [0, Math.round((EDGE - 1) / 20 * firstInc)]
    });
    levels.forEach(function (lv, i) {
      var next = levels[i + 1];
      if (!next) {
        rows.push({ label: lv.code + " " + lv.name, case: "C2 答对 ≥16 题（满级）", range: [lv.cum, lv.cum] });
        return;
      }
      rows.push({
        label: lv.code + " " + lv.name,
        case: "连续通过至 " + lv.code + "（" + next.code + " 答对 ≤11）",
        range: [lv.cum, lv.cum + Math.round(((EDGE - 1) / 20) * next.inc)]
      });
      rows.push({
        label: lv.code + "（" + next.code + " 边缘）",
        case: lv.code + " 通过、" + next.code + " 答对 " + EDGE + "–" + (PASS - 1) + " 题",
        range: [lv.cum + Math.round((EDGE / 20) * next.inc), lv.cum + Math.round(((PASS - 1) / 20) * next.inc)]
      });
    });
    return rows;
  }

  return {
    PASS: PASS,
    EDGE: EDGE,
    NONE_INDEX: NONE_INDEX,
    answerOf: answerOf,
    grade: grade,
    levelStatus: levelStatus,
    flatten: flatten,
    evaluate: evaluate,
    score: score,
    rangeTable: rangeTable
  };
});
