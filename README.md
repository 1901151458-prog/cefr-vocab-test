# 英语词汇量 CEFR 定级测试（A1–C2）

按 **Cambridge Dictionary** 词条 CEFR 标注与 **English Vocabulary Profile** 分级抽样的英语词汇量快速定级测试。

在线地址（GitHub Pages）：<https://1901151458-prog.github.io/cefr-vocab-test/>

> 这是一个**独立的新站点**，与「初中英语词汇量快速定级测试」互不影响。

## 这是什么

一份 **6 个 CEFR 等级 × 20 题 = 120 道选择题** 的英语词汇量定级测试。每题给出 A、B、C 三个中文释义，选出单词的正确含义；若三个选项都不是它的正确含义，就选 **D「以上都不正确」**（防止“蒙对”）。

- **等级**：A1 入门级、A2 基础级、B1 进阶级、B2 高阶级、C1 流利级、C2 精通级，每级 20 题。
- **正常题 96 道**（每级 16 道）＋ **无正确含义题 24 道**（每级 4 道，正确答案为 D）。
- **5 秒/题**：选完立即判对错（正确选项变绿、选错变红并给出答案），随后自动进入下一题；5 秒未选按“超时未答”处理，同样自动进入下一题。
- **全屏专注模式**：点“开始答题”后自动进入全屏；底部是 120 格题号进度图：**做对绿色、做错/超时红色、未测蓝色**。
- **连续 10 题答错（含超时）自动结束测试**：说明当前级别明显超出词汇水平，结果页会解释原因；未测题目按“未测”记录，定级时按 0 分计。
- **判分与定级**：答对 1 分，选错/超时 0 分；每级答对 ≥16 题“通过”、12–15 题“边缘”、≤11 题“未过”；定级取“连续通过”的最高级。
- **词汇量估算**：`前 k−1 级累计词汇量 + (第 k 级答对数 ÷ 20) × 第 k 级增量` 得到估算值，并给出区间与 CEFR 区间。
- **结果**：CEFR 等级、词汇量估算、正确率、正确/错误/超时/未测统计、CEFR 能力描述、参考考试（KET/PET/FCE/CAE/CPE、雅思大致对应）、答题分布图、词汇量刻度尺（0–16,000 词）、错词回补清单、逐题回顾、复测记录。
- **教师/自测**：教师答案表（120 题标准释义 + 正确选项 + 题型）、CEFR 分级依据说明、速查表、使用流程。
- **打印**：结果页可打印结果卡与错词清单；另有 **CEFR 选择题打印卷 PDF**（A4，含 120 格答题卡）。

## CEFR 词汇量参考区间

| 等级 | 名称 | 累计词汇量（近似） | 参考考试 |
|---|---|---|---|
| A1 | 入门级 | 约 1,000 词 | 剑桥 A1 / 雅思 3.0 以下 |
| A2 | 基础级 | 约 2,000 词 | 剑桥 A2 Key（KET）/ 雅思 3.0–4.0 |
| B1 | 进阶级 | 约 3,000 词 | 剑桥 B1 Preliminary（PET）/ 雅思 4.0–5.5 |
| B2 | 高阶级 | 约 5,000 词 | 剑桥 B2 First（FCE）/ 雅思 5.5–7.0 |
| C1 | 流利级 | 约 8,000 词 | 剑桥 C1 Advanced（CAE）/ 雅思 7.0–8.5 |
| C2 | 精通级 | 约 16,000 词 | 剑桥 C2 Proficiency（CPE）/ 雅思 8.5+ |

> 词汇量区间与考试对应为常用近似值（不同研究口径 word / word family 有差异），本测试统一按“单词”估算，**用于学习定位，不替代剑桥官方考试或正式评级**。

## 目录结构

```
index.html                       互动答题页（开始 / 全屏答题 / 结果 / 教师答案）
print.html                       选择题打印卷（可直接打印或导出 PDF）
assets/style.css                 样式（答题舞台、结果明细、A4 打印样式）
assets/data.js                   120 题数据（词条 / 词性 / 释义 / 选项 / 正确答案 / 题型）
assets/logic.js                  判分、CEFR 定级、词汇量估算、速查表（纯逻辑，可 Node 测试）
assets/app.js                    页面交互（5 秒倒计时、即时判对错、10 连错结束、结果渲染）
assets/vocab-test-cefr-print.pdf 选择题打印卷 PDF
```

## 本地打开

无需构建，直接双击 `index.html` 即可（建议 Chrome / Edge / Safari 最新版）。
如需本地服务器：

```bash
python -m http.server 8080
# 打开 http://localhost:8080
```

> 全屏功能需要浏览器允许；若被拒绝（如 iOS Safari 或内嵌网页），会自动退化为网页内的“专注模式”，不影响答题与判分。

## 部署到 GitHub Pages

```bash
git init
git add .
git commit -m "英语词汇量 CEFR 定级测试 v1.0"
git branch -M main
git remote add origin https://github.com/1901151458-prog/cefr-vocab-test.git
git push -u origin main
```

仓库 Settings → Pages → Deploy from a branch → `main` / `/ (root)` → Save。

## 数据与依据

- **词条级别**：参考 [Cambridge Dictionary](https://dictionary.cambridge.org/) 单词条目的 CEFR 标注（A1–C2）与 [English Vocabulary Profile (EVP)](https://www.englishprofile.org/english-vocabulary-profile) 的分级词表；中文释义取常用义项。
- **干扰项**：取同级别其它词的释义，减少“一眼排除”；“无正确含义题”的选项不含该词正确释义。
- **能力描述**：改写自 [CEFR 官方框架](https://www.coe.int/en/web/common-european-framework-reference-languages) 的等级描述与自评量表。
- **局限**：快速抽样测试，抽样误差约 ±10%；认识单词不等于能运用；不适合替代标准化考试。
- 答题进度、复测记录仅保存在浏览器 `localStorage`，不上传服务器。
- 版本：v1.0（2026-10）。可自由用于教学/自测，请保留说明。
