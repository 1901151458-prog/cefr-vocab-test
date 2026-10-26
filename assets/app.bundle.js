/* 英语词汇量 CEFR 定级测试 · 题库数据（120 题 = 6 级 × 20 题） */
var VT_DATA = {
  "meta": {
    "version": "v1.0",
    "title": "英语词汇量 CEFR 定级测试",
    "format": "mcq",
    "questions": 120,
    "choices": 4,
    "passMin": 16,
    "edgeMin": 12,
    "trapPerLevel": 4,
    "noneOption": "以上都不正确",
    "levelSystem": "CEFR",
    "minutesFast": "10–14",
    "minutesLimit": 20
  },
  "levels": [
    {
      "id": 1,
      "code": "A1",
      "name": "入门级",
      "cum": 1000,
      "inc": 1000,
      "lo": 0,
      "color": "#5B9BB8",
      "desc": "能理解并使用日常用语和非常基本的句子，能自我介绍并询问/回答个人信息。",
      "canDo": "能看懂菜单、时间表、简单告示；能就个人信息、家庭、购物等话题做最简单的问答。",
      "exam": "剑桥 A1（YLE Movers/Flyers 过渡）/ 雅思 3.0 以下",
      "advice": "先补最基础的高频词：数字、颜色、家庭、饮食、时间、身体部位；每天 15 词，配图卡与朗读，先做到“见词知义”。",
      "words": [
        {
          "n": 1,
          "w": "water",
          "pos": "n.",
          "meaning": "水",
          "opts": [
            "大的",
            "水",
            "朋友"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 2,
          "w": "book",
          "pos": "n.",
          "meaning": "书",
          "opts": [
            "书",
            "冷的",
            "吃"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 3,
          "w": "chair",
          "pos": "n.",
          "meaning": "椅子",
          "opts": [
            "孩子",
            "椅子",
            "学校"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 4,
          "w": "family",
          "pos": "n.",
          "meaning": "家庭",
          "opts": [
            "喝",
            "苹果",
            "教师"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 5,
          "w": "friend",
          "pos": "n.",
          "meaning": "朋友",
          "opts": [
            "睡觉",
            "苹果",
            "朋友"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 6,
          "w": "school",
          "pos": "n.",
          "meaning": "学校",
          "opts": [
            "早晨",
            "学校",
            "水"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 7,
          "w": "teacher",
          "pos": "n.",
          "meaning": "教师",
          "opts": [
            "教师",
            "高兴的",
            "走路"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 8,
          "w": "morning",
          "pos": "n.",
          "meaning": "早晨",
          "opts": [
            "书",
            "早晨",
            "听"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 9,
          "w": "happy",
          "pos": "adj.",
          "meaning": "高兴的",
          "opts": [
            "小的",
            "椅子",
            "打开"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 10,
          "w": "small",
          "pos": "adj.",
          "meaning": "小的",
          "opts": [
            "小的",
            "打开",
            "大的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 11,
          "w": "big",
          "pos": "adj.",
          "meaning": "大的",
          "opts": [
            "家庭",
            "冷的",
            "大的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 12,
          "w": "eat",
          "pos": "v.",
          "meaning": "吃",
          "opts": [
            "朋友",
            "吃",
            "大的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 13,
          "w": "drink",
          "pos": "v.",
          "meaning": "喝",
          "opts": [
            "喝",
            "吃",
            "孩子"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 14,
          "w": "sleep",
          "pos": "v.",
          "meaning": "睡觉",
          "opts": [
            "苹果",
            "学校",
            "喝"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 15,
          "w": "walk",
          "pos": "v.",
          "meaning": "走路",
          "opts": [
            "教师",
            "喝",
            "走路"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 16,
          "w": "listen",
          "pos": "v.",
          "meaning": "听",
          "opts": [
            "听",
            "睡觉",
            "水"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 17,
          "w": "open",
          "pos": "v.",
          "meaning": "打开",
          "opts": [
            "早晨",
            "书",
            "打开"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 18,
          "w": "cold",
          "pos": "adj.",
          "meaning": "冷的",
          "opts": [
            "高兴的",
            "走路",
            "冷的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 19,
          "w": "child",
          "pos": "n.",
          "meaning": "孩子",
          "opts": [
            "椅子",
            "听",
            "小的"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 20,
          "w": "apple",
          "pos": "n.",
          "meaning": "苹果",
          "opts": [
            "苹果",
            "家庭",
            "小的"
          ],
          "ans": 0,
          "trap": false
        }
      ]
    },
    {
      "id": 2,
      "code": "A2",
      "name": "基础级",
      "cum": 2000,
      "inc": 1000,
      "lo": 1000,
      "color": "#4C8CB5",
      "desc": "能理解最切身相关领域的句子和常用表达，能在简单日常任务中交流。",
      "canDo": "能应对购物、旅行、天气、健康、简单工作场景；能描述背景、环境与切身需求。",
      "exam": "剑桥 A2 Key（KET）/ 雅思 3.0–4.0",
      "advice": "补购物、旅行、天气、健康、电话用语等场景词，重点记动词短语与常用搭配；每天 15–20 词，并把词放进句子里记。",
      "words": [
        {
          "n": 1,
          "w": "travel",
          "pos": "v.",
          "meaning": "旅行",
          "opts": [
            "旅行",
            "描述",
            "计划"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 2,
          "w": "weather",
          "pos": "n.",
          "meaning": "天气",
          "opts": [
            "健康",
            "天气",
            "旅行"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 3,
          "w": "holiday",
          "pos": "n.",
          "meaning": "假日；假期",
          "opts": [
            "邀请",
            "假日；假期",
            "天气"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 4,
          "w": "medicine",
          "pos": "n.",
          "meaning": "药",
          "opts": [
            "锻炼；练习",
            "决定",
            "假日；假期"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 5,
          "w": "careful",
          "pos": "adj.",
          "meaning": "小心的",
          "opts": [
            "小心的",
            "消息；信息",
            "假日；假期"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 6,
          "w": "dangerous",
          "pos": "adj.",
          "meaning": "危险的",
          "opts": [
            "药",
            "到达",
            "危险的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 7,
          "w": "borrow",
          "pos": "v.",
          "meaning": "借入；借用",
          "opts": [
            "语言",
            "昂贵的",
            "借入；借用"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 8,
          "w": "describe",
          "pos": "v.",
          "meaning": "描述",
          "opts": [
            "小心的",
            "修理",
            "描述"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 9,
          "w": "invite",
          "pos": "v.",
          "meaning": "邀请",
          "opts": [
            "安静的",
            "危险的",
            "代替；反而"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 10,
          "w": "decide",
          "pos": "v.",
          "meaning": "决定",
          "opts": [
            "代替；反而",
            "决定",
            "计划"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 11,
          "w": "arrive",
          "pos": "v.",
          "meaning": "到达",
          "opts": [
            "旅行",
            "借入；借用",
            "到达"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 12,
          "w": "expensive",
          "pos": "adj.",
          "meaning": "昂贵的",
          "opts": [
            "描述",
            "健康",
            "昂贵的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 13,
          "w": "quiet",
          "pos": "adj.",
          "meaning": "安静的",
          "opts": [
            "天气",
            "安静的",
            "锻炼；练习"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 14,
          "w": "plan",
          "pos": "n.",
          "meaning": "计划",
          "opts": [
            "消息；信息",
            "邀请",
            "假日；假期"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 15,
          "w": "health",
          "pos": "n.",
          "meaning": "健康",
          "opts": [
            "决定",
            "消息；信息",
            "健康"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 16,
          "w": "exercise",
          "pos": "n.",
          "meaning": "锻炼；练习",
          "opts": [
            "药",
            "锻炼；练习",
            "语言"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 17,
          "w": "message",
          "pos": "n.",
          "meaning": "消息；信息",
          "opts": [
            "小心的",
            "消息；信息",
            "到达"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 18,
          "w": "language",
          "pos": "n.",
          "meaning": "语言",
          "opts": [
            "语言",
            "昂贵的",
            "修理"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 19,
          "w": "repair",
          "pos": "v.",
          "meaning": "修理",
          "opts": [
            "危险的",
            "安静的",
            "代替；反而"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 20,
          "w": "instead",
          "pos": "adv.",
          "meaning": "代替；反而",
          "opts": [
            "借入；借用",
            "代替；反而",
            "安静的"
          ],
          "ans": 1,
          "trap": false
        }
      ]
    },
    {
      "id": 3,
      "code": "B1",
      "name": "进阶级",
      "cum": 3000,
      "inc": 1000,
      "lo": 2000,
      "color": "#3D7CA3",
      "desc": "能理解工作、学习、休闲中遇到的标准语言要点，能应对旅行中大多数情况。",
      "canDo": "能读一般文章、写简单连贯的文字；能描述经历、事件、梦想与志向并简述理由。",
      "exam": "剑桥 B1 Preliminary（PET）/ 雅思 4.0–5.5",
      "advice": "补校园与社会话题词（环境、文化、交流、机会等）与构词法（前缀/后缀）；开始读分级读物，每天 20 词 + 每周 2 篇短文。",
      "words": [
        {
          "n": 1,
          "w": "achieve",
          "pos": "v.",
          "meaning": "实现；达到",
          "opts": [
            "实现；达到",
            "建议",
            "比较"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 2,
          "w": "advantage",
          "pos": "n.",
          "meaning": "优势",
          "opts": [
            "优势",
            "交流；沟通",
            "经验；经历"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 3,
          "w": "opportunity",
          "pos": "n.",
          "meaning": "机会",
          "opts": [
            "解释",
            "机会",
            "准备"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 4,
          "w": "environment",
          "pos": "n.",
          "meaning": "环境",
          "opts": [
            "改善；提高",
            "文化",
            "保护"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 5,
          "w": "experience",
          "pos": "n.",
          "meaning": "经验；经历",
          "opts": [
            "改善；提高",
            "收到",
            "经验；经历"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 6,
          "w": "explain",
          "pos": "v.",
          "meaning": "解释",
          "opts": [
            "意见",
            "解决办法",
            "解释"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 7,
          "w": "improve",
          "pos": "v.",
          "meaning": "改善；提高",
          "opts": [
            "改善；提高",
            "支持",
            "实现；达到"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 8,
          "w": "opinion",
          "pos": "n.",
          "meaning": "意见",
          "opts": [
            "优势",
            "提供",
            "意见"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 9,
          "w": "provide",
          "pos": "v.",
          "meaning": "提供",
          "opts": [
            "可能的",
            "机会",
            "减少"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 10,
          "w": "reduce",
          "pos": "v.",
          "meaning": "减少",
          "opts": [
            "比较",
            "机会",
            "减少"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 11,
          "w": "suggest",
          "pos": "v.",
          "meaning": "建议",
          "opts": [
            "减少",
            "建议",
            "环境"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 12,
          "w": "prepare",
          "pos": "v.",
          "meaning": "准备",
          "opts": [
            "交流；沟通",
            "建议",
            "准备"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 13,
          "w": "protect",
          "pos": "v.",
          "meaning": "保护",
          "opts": [
            "保护",
            "经验；经历",
            "文化"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 14,
          "w": "solution",
          "pos": "n.",
          "meaning": "解决办法",
          "opts": [
            "收到",
            "准备",
            "解释"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 15,
          "w": "support",
          "pos": "v.",
          "meaning": "支持",
          "opts": [
            "保护",
            "收到",
            "支持"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 16,
          "w": "likely",
          "pos": "adj.",
          "meaning": "可能的",
          "opts": [
            "可能的",
            "实现；达到",
            "改善；提高"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 17,
          "w": "compare",
          "pos": "v.",
          "meaning": "比较",
          "opts": [
            "解决办法",
            "意见",
            "比较"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 18,
          "w": "communicate",
          "pos": "v.",
          "meaning": "交流；沟通",
          "opts": [
            "交流；沟通",
            "支持",
            "优势"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 19,
          "w": "culture",
          "pos": "n.",
          "meaning": "文化",
          "opts": [
            "机会",
            "提供",
            "可能的"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 20,
          "w": "receive",
          "pos": "v.",
          "meaning": "收到",
          "opts": [
            "收到",
            "可能的",
            "减少"
          ],
          "ans": 0,
          "trap": false
        }
      ]
    },
    {
      "id": 4,
      "code": "B2",
      "name": "高阶级",
      "cum": 5000,
      "inc": 2000,
      "lo": 3000,
      "color": "#2E6C94",
      "desc": "能理解复杂文章的具体与抽象主题，能与母语者较流畅地互动而不费力。",
      "canDo": "能读新闻、说明文与议论文；能参与较深入的讨论，就议题说明利弊。",
      "exam": "剑桥 B2 First（FCE）/ 雅思 5.5–7.0",
      "advice": "补新闻、科普、议论话题词汇，练同义替换与固定搭配；每周精读 1–2 篇长文，做摘要与观点表达。",
      "words": [
        {
          "n": 1,
          "w": "accurate",
          "pos": "adj.",
          "meaning": "准确的",
          "opts": [
            "准确的",
            "容量；能力",
            "相关的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 2,
          "w": "budget",
          "pos": "n.",
          "meaning": "预算",
          "opts": [
            "预算",
            "准确的",
            "灵活的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 3,
          "w": "campaign",
          "pos": "n.",
          "meaning": "运动（宣传/竞选）",
          "opts": [
            "产生",
            "重要的",
            "运动（宣传/竞选）"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 4,
          "w": "consequence",
          "pos": "n.",
          "meaning": "后果",
          "opts": [
            "预算",
            "策略",
            "识别"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 5,
          "w": "efficient",
          "pos": "adj.",
          "meaning": "高效的",
          "opts": [
            "识别",
            "运动（宣传/竞选）",
            "高效的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 6,
          "w": "estimate",
          "pos": "v.",
          "meaning": "估计",
          "opts": [
            "估计",
            "解释；口译",
            "调查"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 7,
          "w": "evidence",
          "pos": "n.",
          "meaning": "证据",
          "opts": [
            "后果",
            "证据",
            "威胁"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 8,
          "w": "flexible",
          "pos": "adj.",
          "meaning": "灵活的",
          "opts": [
            "高效的",
            "谈判；协商",
            "灵活的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 9,
          "w": "generate",
          "pos": "v.",
          "meaning": "产生",
          "opts": [
            "潜在的",
            "转变",
            "估计"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 10,
          "w": "identify",
          "pos": "v.",
          "meaning": "识别",
          "opts": [
            "容量；能力",
            "估计",
            "识别"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 11,
          "w": "interpret",
          "pos": "v.",
          "meaning": "解释；口译",
          "opts": [
            "证据",
            "解释；口译",
            "相关的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 12,
          "w": "negotiate",
          "pos": "v.",
          "meaning": "谈判；协商",
          "opts": [
            "重要的",
            "谈判；协商",
            "准确的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 13,
          "w": "potential",
          "pos": "adj.",
          "meaning": "潜在的",
          "opts": [
            "潜在的",
            "灵活的",
            "预算"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 14,
          "w": "relevant",
          "pos": "adj.",
          "meaning": "相关的",
          "opts": [
            "产生",
            "策略",
            "运动（宣传/竞选）"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 15,
          "w": "significant",
          "pos": "adj.",
          "meaning": "重要的",
          "opts": [
            "重要的",
            "调查",
            "运动（宣传/竞选）"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 16,
          "w": "strategy",
          "pos": "n.",
          "meaning": "策略",
          "opts": [
            "识别",
            "策略",
            "后果"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 17,
          "w": "survey",
          "pos": "n.",
          "meaning": "调查",
          "opts": [
            "威胁",
            "解释；口译",
            "调查"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 18,
          "w": "threaten",
          "pos": "v.",
          "meaning": "威胁",
          "opts": [
            "高效的",
            "威胁",
            "转变"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 19,
          "w": "transform",
          "pos": "v.",
          "meaning": "转变",
          "opts": [
            "谈判；协商",
            "容量；能力",
            "估计"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 20,
          "w": "capacity",
          "pos": "n.",
          "meaning": "容量；能力",
          "opts": [
            "容量；能力",
            "转变",
            "潜在的"
          ],
          "ans": 0,
          "trap": false
        }
      ]
    },
    {
      "id": 5,
      "code": "C1",
      "name": "流利级",
      "cum": 8000,
      "inc": 3000,
      "lo": 5000,
      "color": "#1F5C82",
      "desc": "能理解广泛领域的高难度长文并把握隐含意义，能流畅自然地表达而不明显费力。",
      "canDo": "能读学术/专业文章，能就复杂主题写出结构良好的文字；能灵活有效地把语言用于社交、学术与职业场景。",
      "exam": "剑桥 C1 Advanced（CAE）/ 雅思 7.0–8.5",
      "advice": "补学术与专业词汇、抽象词义与语域差异，练 paraphrase 与议论文写作；每天 20 词 + 每周 1 篇长文精读。",
      "words": [
        {
          "n": 1,
          "w": "ambiguous",
          "pos": "adj.",
          "meaning": "模棱两可的",
          "opts": [
            "令人信服的",
            "有争议的",
            "模棱两可的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 2,
          "w": "coherent",
          "pos": "adj.",
          "meaning": "连贯的",
          "opts": [
            "恶化",
            "操纵",
            "连贯的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 3,
          "w": "comprehensive",
          "pos": "adj.",
          "meaning": "全面的",
          "opts": [
            "似乎合理的",
            "普遍的",
            "全面的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 4,
          "w": "controversial",
          "pos": "adj.",
          "meaning": "有争议的",
          "opts": [
            "仔细审查",
            "初步的",
            "夸大"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 5,
          "w": "deteriorate",
          "pos": "v.",
          "meaning": "恶化",
          "opts": [
            "初步的",
            "恶化",
            "可行的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 6,
          "w": "exaggerate",
          "pos": "v.",
          "meaning": "夸大",
          "opts": [
            "巩固",
            "强健的；稳健的",
            "夸大"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 7,
          "w": "feasible",
          "pos": "adj.",
          "meaning": "可行的",
          "opts": [
            "实施",
            "可行的",
            "模棱两可的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 8,
          "w": "implement",
          "pos": "v.",
          "meaning": "实施",
          "opts": [
            "不可避免的",
            "实施",
            "复杂精密的；老练的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 9,
          "w": "inevitable",
          "pos": "adj.",
          "meaning": "不可避免的",
          "opts": [
            "连贯的",
            "整合",
            "削弱"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 10,
          "w": "integrate",
          "pos": "v.",
          "meaning": "整合",
          "opts": [
            "整合",
            "不可避免的",
            "全面的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 11,
          "w": "manipulate",
          "pos": "v.",
          "meaning": "操纵",
          "opts": [
            "操纵",
            "整合",
            "令人信服的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 12,
          "w": "plausible",
          "pos": "adj.",
          "meaning": "似乎合理的",
          "opts": [
            "似乎合理的",
            "有争议的",
            "普遍的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 13,
          "w": "preliminary",
          "pos": "adj.",
          "meaning": "初步的",
          "opts": [
            "恶化",
            "初步的",
            "操纵"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 14,
          "w": "robust",
          "pos": "adj.",
          "meaning": "强健的；稳健的",
          "opts": [
            "夸大",
            "似乎合理的",
            "仔细审查"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 15,
          "w": "sophisticated",
          "pos": "adj.",
          "meaning": "复杂精密的；老练的",
          "opts": [
            "复杂精密的；老练的",
            "巩固",
            "夸大"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 16,
          "w": "undermine",
          "pos": "v.",
          "meaning": "削弱",
          "opts": [
            "削弱",
            "初步的",
            "可行的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 17,
          "w": "compelling",
          "pos": "adj.",
          "meaning": "令人信服的",
          "opts": [
            "强健的；稳健的",
            "令人信服的",
            "模棱两可的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 18,
          "w": "prevalent",
          "pos": "adj.",
          "meaning": "普遍的",
          "opts": [
            "普遍的",
            "连贯的",
            "实施"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 19,
          "w": "scrutiny",
          "pos": "n.",
          "meaning": "仔细审查",
          "opts": [
            "复杂精密的；老练的",
            "不可避免的",
            "全面的"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 20,
          "w": "consolidate",
          "pos": "v.",
          "meaning": "巩固",
          "opts": [
            "削弱",
            "巩固",
            "全面的"
          ],
          "ans": 1,
          "trap": false
        }
      ]
    },
    {
      "id": 6,
      "code": "C2",
      "name": "精通级",
      "cum": 16000,
      "inc": 8000,
      "lo": 8000,
      "color": "#12496E",
      "desc": "能轻松理解几乎所有听到、读到的内容，能非常流畅、精确地表达并区分细微含义。",
      "canDo": "能读原版文学、学术论文与专业文本；能综合不同来源的信息连贯转述，表达接近母语者水平。",
      "exam": "剑桥 C2 Proficiency（CPE）/ 雅思 8.5+",
      "advice": "补低频词、习语与细微语义差异；广泛阅读原版材料（文学、评论、学术），关注搭配、语体与修辞。",
      "words": [
        {
          "n": 1,
          "w": "abstruse",
          "pos": "adj.",
          "meaning": "深奥难懂的",
          "opts": [
            "过分讲究的",
            "深奥难懂的",
            "热心的；狂热的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 2,
          "w": "capricious",
          "pos": "adj.",
          "meaning": "反复无常的",
          "opts": [
            "独特的",
            "反复无常的",
            "典型的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 3,
          "w": "cogent",
          "pos": "adj.",
          "meaning": "有说服力的",
          "opts": [
            "深奥难懂的",
            "有说服力的",
            "顽抗的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 4,
          "w": "eclectic",
          "pos": "adj.",
          "meaning": "兼收并蓄的",
          "opts": [
            "伪善的",
            "反复无常的",
            "并置"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 5,
          "w": "ephemeral",
          "pos": "adj.",
          "meaning": "短暂的",
          "opts": [
            "伪善的",
            "短暂的",
            "宽宏大量的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 6,
          "w": "esoteric",
          "pos": "adj.",
          "meaning": "只有内行才懂的",
          "opts": [
            "意外的好运",
            "有说服力的",
            "只有内行才懂的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 7,
          "w": "fastidious",
          "pos": "adj.",
          "meaning": "过分讲究的",
          "opts": [
            "兼收并蓄的",
            "过分讲究的",
            "使模糊"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 8,
          "w": "idiosyncratic",
          "pos": "adj.",
          "meaning": "独特的",
          "opts": [
            "（人生的）变迁；兴衰",
            "独特的",
            "吝啬的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 9,
          "w": "juxtapose",
          "pos": "v.",
          "meaning": "并置",
          "opts": [
            "敷衍的",
            "短暂的",
            "无处不在的"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 10,
          "w": "magnanimous",
          "pos": "adj.",
          "meaning": "宽宏大量的",
          "opts": [
            "敷衍的",
            "宽宏大量的",
            "只有内行才懂的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 11,
          "w": "obfuscate",
          "pos": "v.",
          "meaning": "使模糊",
          "opts": [
            "热心的；狂热的",
            "典型的",
            "使模糊"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 12,
          "w": "parsimonious",
          "pos": "adj.",
          "meaning": "吝啬的",
          "opts": [
            "过分讲究的",
            "深奥难懂的",
            "吝啬的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 13,
          "w": "perfunctory",
          "pos": "adj.",
          "meaning": "敷衍的",
          "opts": [
            "顽抗的",
            "敷衍的",
            "独特的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 14,
          "w": "quintessential",
          "pos": "adj.",
          "meaning": "典型的",
          "opts": [
            "反复无常的",
            "伪善的",
            "并置"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 15,
          "w": "recalcitrant",
          "pos": "adj.",
          "meaning": "顽抗的",
          "opts": [
            "有说服力的",
            "顽抗的",
            "并置"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 16,
          "w": "sanctimonious",
          "pos": "adj.",
          "meaning": "伪善的",
          "opts": [
            "宽宏大量的",
            "伪善的",
            "意外的好运"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 17,
          "w": "serendipity",
          "pos": "n.",
          "meaning": "意外的好运",
          "opts": [
            "意外的好运",
            "兼收并蓄的",
            "（人生的）变迁；兴衰"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 18,
          "w": "vicissitude",
          "pos": "n.",
          "meaning": "（人生的）变迁；兴衰",
          "opts": [
            "使模糊",
            "（人生的）变迁；兴衰",
            "短暂的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 19,
          "w": "ubiquitous",
          "pos": "adj.",
          "meaning": "无处不在的",
          "opts": [
            "只有内行才懂的",
            "吝啬的",
            "（人生的）变迁；兴衰"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 20,
          "w": "zealous",
          "pos": "adj.",
          "meaning": "热心的；狂热的",
          "opts": [
            "只有内行才懂的",
            "热心的；狂热的",
            "无处不在的"
          ],
          "ans": 1,
          "trap": false
        }
      ]
    }
  ]
};
if (typeof window !== 'undefined') window.VT_DATA = VT_DATA;
if (typeof module !== 'undefined' && module.exports) module.exports = VT_DATA;

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
  function evaluate(counts, data, autoPassed) {
    var levels = data.levels;
    var passed = 0;
    for (var i = 0; i < counts.length; i++) {
      if ((counts[i] || 0) >= PASS || (autoPassed && autoPassed[i])) passed = i + 1;
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
  function score(answers, data, autoPassed) {
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
    var result = evaluate(counts, data, autoPassed);

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

/* =============================================================================
 * 英语词汇量 CEFR 定级测试 · 交互逻辑（v1：5 秒/题 · 全屏 · 即时判对错 · 10 连错结束）
 * 依赖：data.js（VT_DATA）、logic.js（VT_LOGIC）；无第三方库
 * ========================================================================== */
(function () {
  "use strict";

  var data = window.VT_DATA;
  var logic = window.VT_LOGIC;
  var levels = data.levels;
  var items = logic.flatten(data);
  var meta = data.meta;
  var NONE_OPTION = meta.noneOption;
  var STORAGE_KEY = "vt-cefr-placement-v1";
  var LETTERS = ["A", "B", "C", "D"];
  var QUESTION_MS = 5000;      // 每题 5 秒
  var FEEDBACK_MS = 1500;      // 反馈停留时间
  var STREAK_LIMIT = 10;       // 连续 10 题答错结束
  var PASS_PER_LEVEL = 15;     // 本级答对 15 题通过；前 15 题全对自动跳级
  var CD_CIRC = 2 * Math.PI * 20;

  /* ------------------------------ 状态 ------------------------------ */
  var state = {
    answers: {},          // { 全局题号: 0–3 | -1(超时) }
    autoPassed: {},       // { levelIndex: true } 前 15 题全对、自动跳级的级别
    current: 0,
    startedAt: null,
    elapsed: 0,
    timerId: null,
    finished: false,
    earlyStop: false,
    completedAll: false,
    stopLevel: 0,
    streak: 0,
    locked: false,
    phase: "idle",
    countdownId: null,
    countdownStart: 0,
    nextTimer: null,
    profile: { name: "", cls: "" },
    history: []
  };

  var els = {};
  var scoreCache = null;

  /* ------------------------------ 工具 ------------------------------ */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function fmtTime(ms) {
    var total = Math.max(0, Math.floor(ms / 1000));
    var m = Math.floor(total / 60);
    var s = total % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  function todayText() {
    var d = new Date();
    var p = function (n) { return (n < 10 ? "0" : "") + n; };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  }

  function toast(msg) {
    var t = els.toast;
    if (!t) return;
    t.textContent = msg;
    t.classList.add("is-show");
    clearTimeout(toast._tid);
    toast._tid = setTimeout(function () { t.classList.remove("is-show"); }, 2400);
  }

  function answeredCount() { return Object.keys(state.answers).length; }
  function isAnswered(g) { return Object.prototype.hasOwnProperty.call(state.answers, g); }

  function statusOf(g) {
    if (!isAnswered(g)) return "untested";
    var c = state.answers[g];
    if (c === -1) return "timeout";
    return c === logic.answerOf(items[g]) ? "correct" : "wrong";
  }

  function fmtNum(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  /* 当前级别的题号区间与答对数 */
  function levelRange(li) {
    var start = 0;
    for (var i = 0; i < li; i++) start += levels[i].words.length;
    return [start, start + levels[li].words.length];
  }
  function levelCorrect(li) {
    var range = levelRange(li), n = 0;
    for (var g = range[0]; g < range[1]; g++) {
      if (state.answers[g] === logic.answerOf(items[g])) n++;
    }
    return n;
  }
  function nextLevelStart(li) {
    return levelRange(li)[1];
  }

  function estimateLabel(result) {
    if (result.estimate < 1000) return "不足 1,000 词";
    return "约 " + fmtNum(result.estimate) + " 词";
  }

  function itemAnswerText(item) {
    if (item.ans === -1) return "D. " + NONE_OPTION;
    return LETTERS[item.ans] + ". " + item.opts[item.ans];
  }

  function choiceText(item, choice) {
    if (choice === null || choice === undefined) return "未测";
    if (choice === -1) return "超时未答";
    if (choice === 3) return "D. " + NONE_OPTION;
    return LETTERS[choice] + ". " + item.opts[choice];
  }

  /* ------------------------------ 存储 ------------------------------ */
  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        answers: state.answers,
        autoPassed: state.autoPassed,
        current: state.current,
        startedAt: state.startedAt,
        elapsed: state.elapsed,
        finished: state.finished,
        earlyStop: state.earlyStop,
        completedAll: state.completedAll,
        stopLevel: state.stopLevel,
        profile: state.profile,
        history: state.history,
        savedAt: Date.now()
      }));
    } catch (e) { /* 隐私模式忽略 */ }
  }

  function loadState() {
    var raw;
    try { raw = localStorage.getItem(STORAGE_KEY); } catch (e) { return; }
    if (!raw) return;
    try {
      var obj = JSON.parse(raw);
      if (!obj || typeof obj !== "object") return;
      state.answers = obj.answers && typeof obj.answers === "object" ? obj.answers : {};
      state.autoPassed = obj.autoPassed && typeof obj.autoPassed === "object" ? obj.autoPassed : {};
      state.current = Number.isFinite(obj.current) ? Math.min(items.length - 1, Math.max(0, obj.current)) : 0;
      state.finished = !!obj.finished;
      state.earlyStop = !!obj.earlyStop;
      state.completedAll = !!obj.completedAll;
      state.stopLevel = Number(obj.stopLevel) || 0;
      state.elapsed = Number(obj.elapsed) || 0;
      state.profile = obj.profile || { name: "", cls: "" };
      state.history = Array.isArray(obj.history) ? obj.history : [];
      if (obj.startedAt && !state.finished) state.startedAt = Date.now() - state.elapsed;
    } catch (e) { /* 数据损坏则忽略 */ }
  }

  /* ------------------------------ 计时 ------------------------------ */
  function startTimer() {
    if (state.timerId) return;
    if (!state.startedAt) state.startedAt = Date.now() - (state.elapsed || 0);
    state.timerId = setInterval(function () {
      state.elapsed = Date.now() - state.startedAt;
      updateTimer();
    }, 500);
    updateTimer();
  }

  function stopTimer() {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
  }

  function updateTimer() {
    var text = fmtTime(state.elapsed);
    if (els.timerText) els.timerText.textContent = text;
    if (els.outTimer2) els.outTimer2.textContent = text;
    if (els.stageTimer) els.stageTimer.textContent = text;
    if (els.timer) {
      els.timer.classList.toggle("is-warn", state.elapsed > 12 * 60000 && state.elapsed <= 18 * 60000);
      els.timer.classList.toggle("is-over", state.elapsed > 18 * 60000);
    }
  }

  /* ------------------------------ 全屏 ------------------------------ */
  function isFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement);
  }

  function requestFullscreen() {
    var el = document.documentElement;
    var fn = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    if (!fn) { toast("当前浏览器不支持全屏，已进入专注模式"); return; }
    try {
      var p = fn.call(el);
      if (p && p.catch) p.catch(function () { toast("浏览器未允许全屏，已进入专注模式"); });
    } catch (e) { /* 忽略 */ }
  }

  function exitFullscreen() {
    if (!isFullscreen()) return;
    var fn = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
    if (!fn) return;
    try {
      var p = fn.call(document);
      if (p && p.catch) p.catch(function () {});
    } catch (e) { /* 忽略 */ }
  }

  function syncFullscreenBtn() {
    if (!els.btnFullscreen) return;
    els.btnFullscreen.textContent = isFullscreen() ? "退出全屏" : "全屏";
  }

  /* ------------------------------ 首屏五级阶梯 ------------------------------ */
  function renderHeroLadder() {
    if (!els.heroLadder) return;
    var max = levels[levels.length - 1].cum;
    els.heroLadder.innerHTML = levels.map(function (lv) {
      return '<li class="ladder-row" style="--lv:' + lv.color + '">' +
        '<span class="lv-name">' + lv.code + '<small>' + lv.name + "</small></span>" +
        '<span class="ladder-bar"><i style="width:' + Math.round(lv.cum / max * 100) + "%;background:" + lv.color + '"></i></span>' +
        '<span class="lv-cum">≈ ' + fmtNum(lv.cum) + " 词</span>" +
        "</li>";
    }).join("");
  }

  /* ------------------------------ 答题进度图 ------------------------------ */
  function renderProgressMap() {
    if (!els.sheetMap) return;
    var html = "";
    levels.forEach(function (lv, li) {
      html += '<div class="stage-group" style="--lv:' + lv.color + '">' +
        '<span class="sgg-label">' + lv.code + "</span>" +
        '<div class="sgg-cells">';
      for (var i = 0; i < 20; i++) {
        var g = li * 20 + i;
        html += '<span class="stage-cell" data-g="' + g + '" title="第 ' + (g + 1) + ' 题">' + (i + 1) + "</span>";
      }
      html += "</div></div>";
    });
    els.sheetMap.innerHTML = html;
    updateProgressMap();
  }

  function updateProgressMap() {
    if (!els.sheetMap) return;
    $$(".stage-cell", els.sheetMap).forEach(function (b) {
      var g = Number(b.getAttribute("data-g"));
      var st = statusOf(g);
      b.className = "stage-cell is-" + st +
        (g === state.current && state.phase !== "finished" ? " is-current" : "");
    });
    if (els.streakNum) els.streakNum.textContent = state.streak;
    if (els.streak) {
      els.streak.classList.toggle("is-warn", state.streak >= 7);
      els.streak.classList.toggle("is-danger", state.streak >= 9);
    }
  }

  /* ------------------------------ 开始面板 ------------------------------ */
  function renderStartPanel() {
    if (!els.startPanel) return;
    var answered = answeredCount();
    var hasProgress = answered > 0 && !state.finished;

    els.startPanel.hidden = false;
    els.testStage.hidden = true;
    document.body.classList.remove("is-testing");

    if (state.finished) {
      els.startTitle.textContent = "本次测试已结束";
      els.startSub.textContent = scoreCache
        ? (state.earlyStop ? "提前结束 · " : "") + "答对 " + scoreCache.total.correct + " / 120 · 定级 " + scoreCache.result.label
        : "已完成";
      els.btnStart.hidden = true;
      els.btnResume.hidden = false;
      els.btnResume.textContent = "查看结果";
      els.btnRestart2.hidden = false;
      els.startNote.textContent = "如需重测，点击“重新开始”会清空本次答案与计时（复测记录保留）。";
    } else if (hasProgress) {
      els.startTitle.textContent = "继续上次答题";
      els.startSub.textContent = "已答 " + answered + " / 120 题 · 已用 " + fmtTime(state.elapsed);
      els.btnStart.hidden = true;
      els.btnResume.hidden = false;
      els.btnResume.textContent = "继续答题（进入全屏）";
      els.btnRestart2.hidden = false;
      els.startNote.textContent = "进度保存在本机浏览器；也可以重新开始一套新的。";
    } else {
      els.startTitle.textContent = "准备好了吗？";
      els.startSub.textContent = "共 120 题 · A1–C2 六个等级 · 每题 5 秒自动进入下一题";
      els.btnStart.hidden = false;
      els.btnResume.hidden = true;
      els.btnRestart2.hidden = true;
      els.startNote.textContent = "开始后进入全屏专注模式；连续 10 题答错会自动结束测试。";
    }
  }

  /* ------------------------------ 题目渲染 ------------------------------ */
  function renderQuestion() {
    var item = items[state.current];
    if (!item) return;
    state.phase = "testing";
    state.locked = false;

    if (els.qLevel) {
      els.qLevel.textContent = item.levelCode + " " + item.levelName;
      els.qLevel.style.setProperty("--lv", item.color);
    }
    if (els.qCount) els.qCount.textContent = "第 " + (state.current + 1) + " / " + items.length + " 题";
    if (els.qLevelCount) els.qLevelCount.textContent = "本级 " + item.n + "/20";
    if (els.qWord) els.qWord.textContent = item.w;
    if (els.qPos) els.qPos.textContent = item.pos;
    if (els.feedback) {
      els.feedback.hidden = true;
      els.feedback.className = "feedback";
      els.feedback.textContent = "";
    }

    var html = "";
    for (var i = 0; i < 4; i++) {
      html += '<button type="button" class="opt' + (i === 3 ? " opt-none" : "") +
        '" data-choice="' + i + '">' +
        '<span class="opt-letter">' + LETTERS[i] + "</span>" +
        '<span class="opt-text">' + (i === 3 ? NONE_OPTION : item.opts[i]) + "</span>" +
        "</button>";
    }
    els.qOptions.innerHTML = html;

    updateProgressMap();
    startCountdown();
  }

  /* ------------------------------ 5 秒倒计时 ------------------------------ */
  function startCountdown() {
    clearInterval(state.countdownId);
    state.countdownStart = Date.now();
    updateCountdown(QUESTION_MS);
    state.countdownId = setInterval(function () {
      var left = QUESTION_MS - (Date.now() - state.countdownStart);
      if (left <= 0) {
        clearInterval(state.countdownId);
        state.countdownId = null;
        updateCountdown(0);
        handleTimeout();
        return;
      }
      updateCountdown(left);
    }, 80);
  }

  function updateCountdown(left) {
    var sec = Math.max(0, Math.ceil(left / 1000));
    var ratio = Math.max(0, Math.min(1, left / QUESTION_MS));
    if (els.cdNum) els.cdNum.textContent = sec;
    if (els.cdFg) {
      els.cdFg.style.strokeDasharray = CD_CIRC;
      els.cdFg.style.strokeDashoffset = CD_CIRC * (1 - ratio);
    }
    if (els.countdown) {
      els.countdown.classList.toggle("is-urgent", sec <= 2 && state.phase === "testing");
      els.countdown.classList.toggle("is-paused", state.phase !== "testing");
    }
  }

  function stopCountdown() {
    clearInterval(state.countdownId);
    state.countdownId = null;
  }

  /* ------------------------------ 判题与反馈 ------------------------------ */
  function showFeedback(pkg) {
    var item = pkg.item;
    var answerIdx = logic.answerOf(item);
    var correct = pkg.state === "correct";

    $$(".opt", els.qOptions).forEach(function (b) {
      var idx = Number(b.getAttribute("data-choice"));
      b.classList.remove("is-right", "is-wrong");
      b.disabled = true;
      if (idx === answerIdx) b.classList.add("is-right");
      if (!correct && idx === pkg.choice) b.classList.add("is-wrong");
    });

    if (els.feedback) {
      els.feedback.hidden = false;
      els.feedback.className = "feedback " + (correct ? "is-correct" : pkg.timeout ? "is-timeout" : "is-wrong");
      els.feedback.innerHTML = correct
        ? '<b>✓ 正确</b><span>你是对的</span>'
        : '<b>' + (pkg.timeout ? "⏱ 超时未答" : "✗ 答错") + "</b><span>正确答案：" + itemAnswerText(item) +
          (item.ans === -1 ? '<i>（标准释义：' + item.meaning + "）</i>" : "") + "</span>";
    }
    if (els.cdNum) els.cdNum.textContent = "–";
    if (els.countdown) els.countdown.classList.add("is-paused");
  }

  function scheduleNext(delay, endAfter, target) {
    clearTimeout(state.nextTimer);
    state.nextTimer = setTimeout(function () {
      if (endAfter) { finishQuiz(true); return; }
      if (target == null) target = state.current + 1;
      if (target >= items.length) { finishQuiz(false); return; }
      state.current = target;
      saveState();
      renderQuestion();
    }, delay);
  }

  function selectChoice(choice) {
    if (state.locked || state.phase !== "testing" || state.finished) return;
    state.locked = true;
    stopCountdown();

    var item = items[state.current];
    var answerIdx = logic.answerOf(item);
    var st = choice === answerIdx ? "correct" : "wrong";
    state.answers[state.current] = choice;
    if (st === "correct") state.streak = 0;
    else state.streak += 1;
    state.stopLevel = item.levelId;

    showFeedback({ item: item, state: st, choice: choice, timeout: false });
    updateProgressMap();
    saveState();

    var end = state.streak >= STREAK_LIMIT;
    var target = null;
    if (st === "correct") {
      var range = levelRange(item.levelIndex);
      var correctNow = levelCorrect(item.levelIndex);
      if (correctNow >= PASS_PER_LEVEL && state.current === range[0] + PASS_PER_LEVEL - 1) {
        target = nextLevelStart(item.levelIndex);
        state.autoPassed[item.levelIndex] = true;
        var nextLv = levels[item.levelIndex + 1];
        toast(nextLv
          ? "本级已答对 15 题，通过；自动进入 " + (nextLv.code || ("Level " + nextLv.id)) + " " + nextLv.name
          : "本级已答对 15 题，测试完成");
      }
    }
    scheduleNext(FEEDBACK_MS + 150, end, target);
  }

  function handleTimeout() {
    if (state.locked || state.phase !== "testing" || state.finished) return;
    state.locked = true;
    var item = items[state.current];
    state.answers[state.current] = -1;
    state.streak += 1;
    state.stopLevel = item.levelId;
    showFeedback({ item: item, state: "timeout", choice: -1, timeout: true });
    updateProgressMap();
    saveState();
    var end = state.streak >= STREAK_LIMIT;
    scheduleNext(FEEDBACK_MS + 250, end);
  }

  /* ------------------------------ 开始 / 继续 / 重置 ------------------------------ */
  function enterTestMode() {
    document.body.classList.add("is-testing");
    els.startPanel.hidden = true;
    els.testStage.hidden = false;
    requestFullscreen();
    state.phase = "testing";
    state.locked = false;
    state.streak = 0;
    if (!state.startedAt) state.startedAt = Date.now();
    startTimer();
    renderQuestion();
    updateProgressMap();
    syncFullscreenBtn();
  }

  function startFresh() {
    if (answeredCount() > 0 && !state.finished) {
      if (!window.confirm("重新开始会清空已答的题目，确定吗？")) return;
    }
    state.answers = {};
    state.autoPassed = {};
    state.current = 0;
    state.startedAt = Date.now();
    state.elapsed = 0;
    state.finished = false;
    state.earlyStop = false;
    state.completedAll = false;
    state.stopLevel = 0;
    state.streak = 0;
    clearTimeout(state.nextTimer);
    clearInterval(state.countdownId);
    stopTimer();
    saveState();
    scoreCache = null;
    enterTestMode();
    toast("答题开始：每题 5 秒，选完自动进入下一题");
  }

  function resumeQuiz() {
    if (state.finished) {
      var r = document.getElementById("result");
      if (r) r.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    var idx = state.current;
    while (idx < items.length && isAnswered(idx)) idx++;
    state.current = Math.min(items.length - 1, idx);
    enterTestMode();
    var sec = document.getElementById("test");
    if (sec) sec.scrollIntoView({ block: "start" });
  }

  function restartQuiz() {
    var msg = state.finished ? "确定重新开始一套新的测试吗？当前结果将被清空（复测记录保留）。" : "确定重新开始吗？已答的题目会被清空。";
    if (!window.confirm(msg)) return;
    exitFullscreen();
    state.answers = {};
    state.current = 0;
    state.startedAt = null;
    state.elapsed = 0;
    state.finished = false;
    state.earlyStop = false;
    state.completedAll = false;
    state.stopLevel = 0;
    state.streak = 0;
    state.phase = "idle";
    clearTimeout(state.nextTimer);
    clearInterval(state.countdownId);
    stopTimer();
    updateTimer();
    saveState();
    document.body.classList.remove("is-testing");
    renderStartPanel();
    renderResult();
    renderLevelTable(null);
    var sec = document.getElementById("test");
    if (sec) sec.scrollIntoView({ behavior: "smooth", block: "start" });
    toast("已清空，可重新开始");
  }

  /* ------------------------------ 结束 ------------------------------ */
  function finishQuiz(early) {
    if (state.finished) return;
    state.finished = true;
    state.earlyStop = !!early;
    state.completedAll = !early && answeredCount() >= items.length;
    if (early) state.streak = STREAK_LIMIT;
    state.phase = "finished";
    state.locked = true;
    if (state.startedAt) state.elapsed = Date.now() - state.startedAt;
    clearTimeout(state.nextTimer);
    clearInterval(state.countdownId);
    stopTimer();
    exitFullscreen();
    document.body.classList.remove("is-testing");
    saveState();
    scoreCache = logic.score(state.answers, data, state.autoPassed);
    renderResult();
    renderStartPanel();
    updateTimer();
    toast(early ? "连续 10 题答错，测试已提前结束" : "测试已结束，结果已生成");
    var r = document.getElementById("result");
    if (r) r.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submitNow() {
    if (state.finished) {
      var r0 = document.getElementById("result");
      if (r0) r0.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    var blank = items.length - answeredCount();
    var ok = window.confirm(blank > 0
      ? "还有 " + blank + " 题未测，未测按 0 分计。确定结束测试吗？"
      : "确定结束测试并查看结果吗？");
    if (!ok) return;
    finishQuiz(false);
  }

  /* ------------------------------ 结果渲染 ------------------------------ */
  function resultSub(result) {
    if (result.code === "below") return "未达 A1 —— 建议从入门级高频词开始系统补起";
    if (result.code === "perfect") return "六级全部通过：词汇量约 16,000 词（C2 精通级）";
    if (result.code === "edge") {
      return "连续通过 " + levels[result.highest - 1].code + "，在 " + levels[result.highest].code +
        " 处于边缘（" + levels[result.highest].code + " 答对 12–15 题）";
    }
    return "连续通过 A1–" + levels[result.highest - 1].code + "，下一目标 " + levels[result.highest].code;
  }

  function examText(result) {
    var lv = levels[Math.min(levels.length - 1, Math.max(0, result.levelIndex))];
    return "参考考试：" + lv.exam;
  }

  function timeNote(ms) {
    var min = ms / 60000;
    if (ms <= 0) return "尚未开始计时";
    if (min > 20) return "明显超过预期用时，结果仅供参考";
    if (min > 14) return "用时略长";
    if (min < 1) return "用时很短，说明作答非常迅速";
    return "用时正常（每题 5 秒节奏）";
  }

  function renderResult() {
    var body = els.resultBody;
    var empty = els.resultEmpty;
    if (!state.finished || !scoreCache) {
      if (body) body.hidden = true;
      if (empty) empty.hidden = false;
      if (els.earlyBanner) els.earlyBanner.hidden = true;
      return;
    }
    if (body) body.hidden = false;
    if (empty) empty.hidden = true;

    var sc = scoreCache;
    var result = sc.result;

    if (els.earlyBanner) {
      els.earlyBanner.hidden = !state.earlyStop;
      if (state.earlyStop) {
        if (els.earlyReason) {
          var stopCode = levels[Math.min(levels.length - 1, Math.max(0, state.stopLevel - 1))].code;
          els.earlyReason.textContent = "连续 " + STREAK_LIMIT + " 题答错（含超时未答），测试在 " + stopCode +
            " 第 " + (state.current % 20 + 1) + " 题处提前结束。";
        }
        if (els.earlyNote) {
          els.earlyNote.textContent = "为什么提前结束：连续答错说明当前级别已明显超出你的词汇水平，继续测容易变成猜题，既测不出真实词汇量，也会浪费时间。未测题目记为“未测”，不参与答对计数；定级按已测部分计算（未测级别按 0 分计）。建议从 " + result.recommend + " 开始系统回补。";
        }
      }
    }

    els.resLevel.textContent = result.label;
    var bandTxt = (result.code === "perfect" || result.code === "below") ? "" : "（CEFR 区间 " + result.cefrBand + "）";
    els.resSub.textContent = resultSub(result) + bandTxt;
    var badge = els.resBadge;
    badge.textContent = result.code === "edge" ? "边缘" : result.code === "below" ? "未达" : result.code === "perfect" ? "满级" : "通过";
    badge.className = "rc-badge" + (result.code === "edge" ? " is-edge" : result.code === "below" ? " is-below" : "");

    els.resEstimate.textContent = estimateLabel(result);
    els.resRange.textContent = "区间 " + fmtNum(result.range[0]) + "–" + fmtNum(result.range[1]) + " 词";
    els.resCorrect.textContent = sc.total.correct + " / 120";
    els.resAccuracy.textContent = "已答 " + sc.total.answered + " 题 · 正确率 " + Math.round(sc.accuracy * 100) + "%";
    els.resTime.textContent = fmtTime(state.elapsed);
    els.resTimeNote.textContent = timeNote(state.elapsed);
    els.resRecommend.textContent = result.recommend;
    var nextCode = result.highest < levels.length ? levels[result.highest].code : "";
    els.resStop.textContent = state.earlyStop
      ? "提前结束（" + levels[Math.min(levels.length - 1, Math.max(0, state.stopLevel - 1))].code + "）"
      : (result.code === "below" ? "未达 A1" : result.code === "perfect" ? "六级全过" : "止于 " + nextCode);

    var parts = [
      "正确 " + sc.total.correct,
      "错误 " + sc.total.wrong,
      "超时未答 " + sc.total.timeout,
      "未测 " + sc.total.blank,
      "“无正确含义”题答对 " + sc.trap.correct + " / " + sc.trap.total
    ];
    els.resMeta.textContent = parts.join(" · ");

    var adviceLv = levels[Math.min(levels.length - 1, Math.max(0, result.levelIndex))];
    els.resCefrCode.textContent = result.short;
    els.resCanDo.textContent = result.canDo;
    els.resAdvice.textContent = result.code === "below"
      ? "从 A1 入门级开始：先过数字、颜色、家庭、饮食、时间等最基础高频词，每天 15 词（词 → 义 → 拼写）。"
      : adviceLv.advice;
    els.resGoal.textContent = examText(result);

    renderDist(sc);
    if (els.ruler) els.ruler.innerHTML = rulerSvg(result);
    if (els.rulerNote) {
      els.rulerNote.textContent = "你的估算位置落在 " + result.label + " 区间（" + result.rangeText + "）；下一目标：" + result.recommend + "。";
    }
    renderWrongList(sc);
    renderReview(sc);
    renderLevelTable(result);
    renderRangeHighlight(result);
    fillPrintHeader();
  }

  function renderDist(sc) {
    if (!els.distGrid) return;
    var html = levels.map(function (lv, li) {
      var cells = "";
      for (var i = 0; i < 20; i++) {
        var g = li * 20 + i;
        var st = statusOf(g);
        var cls = "dist-cell is-" + st + (i > 0 && i % 5 === 0 ? " is-sep" : "");
        var txt = st === "correct" ? "答对" : st === "wrong" ? "答错" : st === "timeout" ? "超时" : "未测";
        cells += '<span class="' + cls + '" title="L' + lv.id + " 第 " + (i + 1) + " 题：" + txt + '"></span>';
      }
      return '<div class="dist-row" style="--lv:' + lv.color + '">' +
        '<span class="dr-label">' + lv.code + "</span>" +
        '<span class="dist-cells">' + cells + "</span>" +
        "</div>";
    }).join("");
    els.distGrid.innerHTML = html;

    if (els.distLegend) {
      els.distLegend.innerHTML = sc.perLevel.map(function (p) {
        return '<li style="--lv:' + p.color + '"><span class="chip"></span>' + p.code + " " + p.name +
          "：对 " + p.correct + " · 错 " + p.wrong + " · 超时 " + p.timeout + " · 未测 " + p.blank + "</li>";
      }).join("");
    }
  }

  function rulerSvg(result) {
    var W = 640, H = 210;
    var padL = 22, padR = 18;
    var axisY = 128;
    var MAX = 16000;
    var x = function (v) { return padL + (v / MAX) * (W - padL - padR); };
    var p = [];

    levels.forEach(function (lv, i) {
      var lo = lv.lo || 0;
      var x0 = x(lo), x1 = x(lv.cum);
      p.push('<rect x="' + x0 + '" y="' + (axisY + 4) + '" width="' + Math.max(1, x1 - x0) +
        '" height="26" fill="' + lv.color + '" fill-opacity="0.15" stroke="' + lv.color +
        '" stroke-opacity="0.55" stroke-width="1"/>');
      var mid = (x0 + x1) / 2;
      p.push('<text x="' + mid + '" y="' + (axisY + 21) +
        '" text-anchor="middle" font-size="10" font-weight="700" fill="' + lv.color + '">' + lv.code + "</text>");
      if (i > 0) {
        p.push('<line x1="' + x0 + '" y1="' + (axisY - 4) + '" x2="' + x0 + '" y2="' + (axisY + 4) +
          '" stroke="#134B70" stroke-width="1"/>');
      }
    });

    p.push('<line x1="' + padL + '" y1="' + axisY + '" x2="' + (W - padR) + '" y2="' + axisY + '" stroke="#134B70" stroke-width="1.6"/>');

    for (var v = 0; v <= MAX; v += 1000) {
      var xv = x(v);
      var major = v % 2000 === 0;
      p.push('<line x1="' + xv + '" y1="' + axisY + '" x2="' + xv + '" y2="' + (axisY - (major ? 14 : 7)) +
        '" stroke="#6c8296" stroke-width="' + (major ? 1.3 : 0.9) + '"/>');
      if (major) {
        p.push('<text x="' + xv + '" y="' + (axisY - 20) + '" text-anchor="middle" font-size="9.5" fill="#5B7184">' +
          (v === 0 ? "0" : (v / 1000) + "k") + "</text>");
      }
    }

    var xe = x(Math.min(MAX, Math.max(0, result.estimate)));
    var labelX = Math.min(W - padR - 44, Math.max(padL + 44, xe));
    p.push('<line x1="' + xe + '" y1="' + axisY + '" x2="' + xe + '" y2="' + (axisY - 38) + '" stroke="#C0553F" stroke-width="1.8"/>');
    p.push('<polygon points="' + xe + "," + (axisY - 38) + " " + (xe - 5) + "," + (axisY - 47) + " " + (xe + 5) + "," + (axisY - 47) + '" fill="#C0553F"/>');
    p.push('<text x="' + labelX + '" y="' + (axisY - 54) + '" text-anchor="middle" font-size="11" font-weight="700" fill="#C0553F">▲ ' + estimateLabel(result) + "</text>");
    p.push('<text x="' + (W - padR) + '" y="' + (H - 4) + '" text-anchor="end" font-size="9.5" fill="#8BA0B1">累计词汇量（词）</text>');

    return '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="CEFR 词汇量刻度尺：估算 ' + result.estimate + ' 词">' + p.join("") + "</svg>";
  }

  function renderWrongList(sc) {
    if (!els.wrongList) return;
    var bad = sc.details.filter(function (d) { return d.state === "wrong" || d.state === "timeout"; });
    if (!bad.length) {
      els.wrongList.innerHTML = '<div class="wrong-empty">已测题目全部答对，没有需要回补的词。<br>下一阶段可保持每周 2 次阅读 + 1 次写作，向高中衔接词拓展。</div>';
      return;
    }
    var html = "";
    levels.forEach(function (lv, li) {
      var list = bad.filter(function (d) { return d.levelIndex === li; });
      if (!list.length) return;
      html += '<div class="wrong-group" style="--lv:' + lv.color + '">' +
        '<div class="wg-head"><span class="wg-name">' + lv.code + " " + lv.name + "</span>" +
        '<span class="wg-count">' + list.length + " 题需回补</span></div>" +
        '<div class="wg-items">';
      list.forEach(function (d) {
        html += '<div class="wrong-item">' +
          '<span class="wi-word">' + d.w + ' <i>' + d.pos + "</i></span>" +
          '<span class="wi-meaning">' + d.meaning + "</span>" +
          '<span class="wi-state ' + (d.state === "timeout" ? "is-blank" : "is-wrong") + '">' +
          (d.state === "timeout" ? "超时未答" : "你选了 " + choiceText(d, d.choice)) + "</span>" +
          '<span class="wi-answer">正确：' + itemAnswerText(d) + "</span>" +
          "</div>";
      });
      html += "</div></div>";
    });
    els.wrongList.innerHTML = html;
  }

  function renderReview(sc) {
    if (!els.reviewTables) return;
    var html = "";
    levels.forEach(function (lv, li) {
      html += '<div class="review-block" style="--lv:' + lv.color + '">' +
        '<h4>' + lv.code + " " + lv.name + "（" + (li * 20 + 1) + "–" + (li * 20 + 20) + " 题）</h4>" +
        '<div class="table-wrap"><table class="table review-table"><thead><tr>' +
        "<th>#</th><th>单词</th><th>你的选择</th><th>正确答案</th><th>结果</th></tr></thead><tbody>";
      for (var i = 0; i < 20; i++) {
        var g = li * 20 + i;
        var d = sc.details[g];
        var st = statusOf(g);
        var mark = st === "correct" ? '<span class="mk ok">✓ 对</span>'
          : st === "wrong" ? '<span class="mk no">✗ 错</span>'
            : st === "timeout" ? '<span class="mk timeout">⏱ 超时</span>'
              : '<span class="mk blank">— 未测</span>';
        html += "<tr>" +
          "<td>" + d.n + "</td>" +
          "<td><b>" + d.w + "</b> <small>" + d.pos + "</small></td>" +
          "<td>" + choiceText(d, d.choice) + "</td>" +
          "<td>" + itemAnswerText(d) + "</td>" +
          "<td>" + mark + "</td>" +
          "</tr>";
      }
      html += "</tbody></table></div></div>";
    });
    els.reviewTables.innerHTML = html;
  }

  function renderLevelTable(result) {
    var tbody = els.levelTable ? els.levelTable.querySelector("tbody") : null;
    if (!tbody) return;
    var current = result ? result.highest : -1;
    tbody.innerHTML = levels.map(function (lv) {
      var highlight = current === lv.id ? ' class="is-current"' : "";
      return "<tr" + highlight + ">" +
        "<td><b>" + lv.code + "</b><br>" + lv.name + "</td>" +
        "<td>约 " + fmtNum(lv.cum) + " 词</td>" +
        "<td>" + lv.exam + "</td>" +
        "<td>" + lv.desc + "</td>" +
        "<td>" + lv.advice + "</td>" +
        "</tr>";
    }).join("");
  }

  function renderRangeTable() {
    var tbody = els.rangeTable ? els.rangeTable.querySelector("tbody") : null;
    if (!tbody) return;
    tbody.innerHTML = logic.rangeTable(data).map(function (r) {
      return '<tr data-range-label="' + escapeHtml(r.label) + '">' +
        "<td>" + r.label + "</td><td>" + r.case + "</td><td>" + r.range[0] + "–" + r.range[1] + " 词</td></tr>";
    }).join("");
  }

  function renderRangeHighlight(result) {
    var tbody = els.rangeTable ? els.rangeTable.querySelector("tbody") : null;
    if (!tbody) return;
    $$("tr", tbody).forEach(function (tr) {
      tr.classList.toggle("is-current", tr.getAttribute("data-range-label") === result.label);
    });
  }

  function renderAnswerTables() {
    if (!els.answerTables) return;
    els.answerTables.innerHTML = levels.map(function (lv) {
      var rows = lv.words.map(function (w) {
        var ansTxt = w.ans === -1 ? "D. " + NONE_OPTION : LETTERS[w.ans] + ". " + w.opts[w.ans];
        return "<tr>" +
          "<td>" + w.n + "</td>" +
          "<td><b>" + w.w + "</b> <small>" + w.pos + "</small></td>" +
          "<td>" + w.meaning + "</td>" +
          "<td>" + ansTxt + "</td>" +
          "<td>" + (w.ans === -1 ? '<span class="tag trap">无正确含义</span>' : '<span class="tag">正常题</span>') + "</td>" +
          "</tr>";
      }).join("");
      return '<div class="answer-block" style="--lv:' + lv.color + '">' +
        "<h4><i></i>" + lv.code + " " + lv.name + "（20 题）</h4>" +
        '<div class="table-wrap"><table class="table answer-table"><thead><tr>' +
        "<th>#</th><th>单词</th><th>标准释义</th><th>正确答案</th><th>题型</th>" +
        "</tr></thead><tbody>" + rows + "</tbody></table></div></div>";
    }).join("");
  }

  /* ------------------------------ 复测记录 ------------------------------ */
  function renderHistory() {
    if (!els.historyTable) return;
    var tbody = els.historyTable.querySelector("tbody");
    var list = state.history.slice().sort(function (a, b) { return a.ts - b.ts; });
    if (!list.length) {
      tbody.innerHTML = '<tr class="empty"><td colspan="8">还没有保存记录。测试结束后点“保存本次记录”，即可在这里追踪变化。</td></tr>';
      if (els.historyEmpty) els.historyEmpty.hidden = true;
      return;
    }
    if (els.historyEmpty) els.historyEmpty.hidden = true;
    var prev = null;
    tbody.innerHTML = list.map(function (h, i) {
      var delta = prev == null ? "—" : (h.estimate - prev >= 0 ? "+" : "") + (h.estimate - prev) + " 词";
      prev = h.estimate;
      var when = new Date(h.ts);
      var date = when.getFullYear() + "-" + ("0" + (when.getMonth() + 1)).slice(-2) + "-" + ("0" + when.getDate()).slice(-2);
      var who = [h.name, h.cls].filter(Boolean).join(" / ") || "未填写";
      return "<tr>" +
        "<td>" + (i + 1) + "</td>" +
        "<td>" + date + "</td>" +
        "<td>" + escapeHtml(who) + "</td>" +
        "<td>" + fmtTime(h.elapsed || 0) + "</td>" +
        "<td>" + h.correct + " / 120</td>" +
        "<td>" + escapeHtml(h.label) + (h.early ? "（提前结束）" : "") + "</td>" +
        "<td>约 " + h.estimate + " 词</td>" +
        "<td>" + delta + "</td>" +
        "</tr>";
    }).join("");
  }

  function saveResult() {
    if (!scoreCache) { toast("结束测试后才能保存结果"); return; }
    state.history.push({
      ts: Date.now(),
      name: state.profile.name,
      cls: state.profile.cls,
      elapsed: state.elapsed,
      correct: scoreCache.total.correct,
      label: scoreCache.result.label,
      estimate: scoreCache.result.estimate,
      early: state.earlyStop
    });
    if (state.history.length > 24) state.history = state.history.slice(-24);
    saveState();
    renderHistory();
    toast("已保存本次记录（共 " + state.history.length + " 次）");
  }

  /* ------------------------------ 复制 / 打印 ------------------------------ */
  function buildResultText() {
    if (!scoreCache) return "";
    var sc = scoreCache;
    var who = [state.profile.name, state.profile.cls].filter(Boolean).join(" / ") || "未填写";
    var lines = [
      "【英语词汇量 CEFR 定级测试 · 选择题版（5 秒/题）】",
      "姓名/班级：" + who,
      "答对题数：" + sc.total.correct + " / 120（已答 " + sc.total.answered + " 题，正确率 " + Math.round(sc.accuracy * 100) + "%）",
      "CEFR 定级：" + sc.result.label + "（区间 " + sc.result.cefrBand + "）",
      "估算词汇量：" + estimateLabel(sc.result) + "（区间 " + sc.result.rangeText + "）",
      "用时：" + fmtTime(state.elapsed),
      "正确 " + sc.total.correct + " · 错误 " + sc.total.wrong + " · 超时未答 " + sc.total.timeout + " · 未测 " + sc.total.blank,
      "“无正确含义”题答对：" + sc.trap.correct + " / " + sc.trap.total,
      "建议回补：" + sc.result.recommend,
      "参考考试：" + levels[Math.min(levels.length - 1, Math.max(0, sc.result.levelIndex))].exam
    ];
    if (state.earlyStop) lines.push("说明：连续 " + STREAK_LIMIT + " 题答错，测试提前结束（未测题按 0 分计）。");
    lines.push("生成时间：" + new Date().toLocaleString("zh-CN"));
    return lines.join("\n");
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, function () { return fallback(); });
    }
    return Promise.resolve(fallback());
    function fallback() {
      try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand("copy");
        document.body.removeChild(ta);
        return ok;
      } catch (e) { return false; }
    }
  }

  function fillPrintHeader() {
    if (els.pfName) els.pfName.textContent = state.profile.name || "____________";
    if (els.pfClass) els.pfClass.textContent = state.profile.cls || "____________";
    if (els.pfDate) els.pfDate.textContent = todayText();
    if (els.pfTime) els.pfTime.textContent = fmtTime(state.elapsed);
  }

  /* ------------------------------ 事件绑定 ------------------------------ */
  function bindEvents() {
    if (els.qOptions) els.qOptions.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest(".opt") : null;
      if (!b || b.disabled) return;
      selectChoice(Number(b.getAttribute("data-choice")));
    });
    if (els.btnStart) els.btnStart.addEventListener("click", startFresh);
    if (els.btnResume) els.btnResume.addEventListener("click", resumeQuiz);
    if (els.btnRestart2) els.btnRestart2.addEventListener("click", restartQuiz);
    if (els.btnReset) els.btnReset.addEventListener("click", restartQuiz);
    if (els.btnRetake) els.btnRetake.addEventListener("click", restartQuiz);
    if (els.btnEndTest) els.btnEndTest.addEventListener("click", submitNow);
    if (els.btnFullscreen) {
      els.btnFullscreen.addEventListener("click", function () {
        if (isFullscreen()) exitFullscreen();
        else requestFullscreen();
      });
    }
    if (els.btnSaveResult) els.btnSaveResult.addEventListener("click", saveResult);
    if (els.btnCopyResult) {
      els.btnCopyResult.addEventListener("click", function () {
        var text = buildResultText();
        if (!text) { toast("结束测试后才能复制结果"); return; }
        copyText(text).then(function (ok) {
          toast(ok ? "结果已复制到剪贴板" : "复制失败，请手动选择文本");
        });
      });
    }
    if (els.btnPrint) els.btnPrint.addEventListener("click", function () { window.print(); });
    if (els.btnPrintResult) els.btnPrintResult.addEventListener("click", function () { window.print(); });

    if (els.inpName) {
      els.inpName.addEventListener("input", function () {
        state.profile.name = els.inpName.value.slice(0, 24);
        saveState();
        fillPrintHeader();
      });
    }
    if (els.inpClass) {
      els.inpClass.addEventListener("input", function () {
        state.profile.cls = els.inpClass.value.slice(0, 24);
        saveState();
        fillPrintHeader();
      });
    }

    if (els.btnGoResult) {
      els.btnGoResult.addEventListener("click", function (e) {
        if (!state.finished) {
          e.preventDefault();
          toast("结束测试后才能查看结果");
          var t = document.getElementById("test");
          if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }

    document.addEventListener("keydown", function (e) {
      if (state.finished || state.phase !== "testing" || !els.testStage || els.testStage.hidden) return;
      var tag = (e.target && e.target.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      var k = e.key;
      if (k >= "1" && k <= "4") { selectChoice(Number(k) - 1); e.preventDefault(); }
      else if (k === "a" || k === "A") { selectChoice(0); e.preventDefault(); }
      else if (k === "b" || k === "B") { selectChoice(1); e.preventDefault(); }
      else if (k === "c" || k === "C") { selectChoice(2); e.preventDefault(); }
      else if (k === "d" || k === "D") { selectChoice(3); e.preventDefault(); }
    });

    document.addEventListener("fullscreenchange", syncFullscreenBtn);
    document.addEventListener("webkitfullscreenchange", syncFullscreenBtn);

    window.addEventListener("pagehide", saveState);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) saveState();
    });
  }

  /* ------------------------------ 初始化 ------------------------------ */
  function init() {
    els = {
      heroLadder: $("#heroLadder"),
      timer: $("#timer"),
      timerText: $("#timerText"),
      outTimer2: $("#outTimer2"),
      outDate: $("#outDate"),
      startPanel: $("#startPanel"),
      startTitle: $("#startTitle"),
      startSub: $("#startSub"),
      startNote: $("#startNote"),
      btnStart: $("#btnStart"),
      btnResume: $("#btnResume"),
      btnRestart2: $("#btnRestart2"),
      testStage: $("#testStage"),
      stageTimer: $("#stageTimer"),
      countdown: $("#countdown"),
      cdNum: $("#cdNum"),
      cdFg: $("#cdFg"),
      qLevel: $("#qLevel"),
      qCount: $("#qCount"),
      qLevelCount: $("#qLevelCount"),
      qWord: $("#qWord"),
      qPos: $("#qPos"),
      qOptions: $("#qOptions"),
      feedback: $("#feedback"),
      streak: $("#streak"),
      streakNum: $("#streakNum"),
      sheetMap: $("#sheetMap"),
      btnFullscreen: $("#btnFullscreen"),
      btnEndTest: $("#btnEndTest"),
      resultEmpty: $("#resultEmpty"),
      resultBody: $("#resultBody"),
      earlyBanner: $("#earlyBanner"),
      earlyReason: $("#earlyReason"),
      earlyNote: $("#earlyNote"),
      resLevel: $("#resLevel"),
      resSub: $("#resSub"),
      resBadge: $("#resBadge"),
      resEstimate: $("#resEstimate"),
      resRange: $("#resRange"),
      resCorrect: $("#resCorrect"),
      resAccuracy: $("#resAccuracy"),
      resTime: $("#resTime"),
      resTimeNote: $("#resTimeNote"),
      resRecommend: $("#resRecommend"),
      resStop: $("#resStop"),
      resMeta: $("#resMeta"),
      resAdvice: $("#resAdvice"),
      resGoal: $("#resGoal"),
      resCefrCode: $("#resCefrCode"),
      resCanDo: $("#resCanDo"),
      distGrid: $("#distGrid"),
      distLegend: $("#distLegend"),
      ruler: $("#ruler"),
      rulerNote: $("#rulerNote"),
      wrongList: $("#wrongList"),
      reviewTables: $("#reviewTables"),
      levelTable: $("#levelTable"),
      rangeTable: $("#rangeTable"),
      answerTables: $("#answerTables"),
      historyTable: $("#historyTable"),
      historyEmpty: $("#historyEmpty"),
      btnSaveResult: $("#btnSaveResult"),
      btnCopyResult: $("#btnCopyResult"),
      btnPrintResult: $("#btnPrintResult"),
      btnPrint: $("#btnPrint"),
      btnReset: $("#btnReset"),
      btnRetake: $("#btnRetake"),
      btnGoResult: $("#btnGoResult"),
      inpName: $("#inpName"),
      inpClass: $("#inpClass"),
      toast: $("#toast"),
      pfName: $("#pfName"),
      pfClass: $("#pfClass"),
      pfDate: $("#pfDate"),
      pfTime: $("#pfTime")
    };

    loadState();

    renderHeroLadder();
    renderProgressMap();
    renderAnswerTables();
    renderRangeTable();
    renderLevelTable(null);
    bindEvents();

    if (els.inpName) els.inpName.value = state.profile.name || "";
    if (els.inpClass) els.inpClass.value = state.profile.cls || "";
    if (els.outDate) els.outDate.textContent = todayText();

    if (state.finished) {
      scoreCache = logic.score(state.answers, data, state.autoPassed);
      renderResult();
      renderStartPanel();
    } else {
      if (state.startedAt) {
        state.timerId = setInterval(function () {
          state.elapsed = Date.now() - state.startedAt;
          updateTimer();
        }, 500);
      }
      renderStartPanel();
      updateTimer();
    }

    renderHistory();
    updateProgressMap();
    fillPrintHeader();
    syncFullscreenBtn();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
