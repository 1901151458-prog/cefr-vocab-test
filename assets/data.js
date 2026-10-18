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
            "朋友",
            "水",
            "大的"
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
            "吃",
            "冷的",
            "书"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 3,
          "w": "chair",
          "pos": "n.",
          "meaning": "椅子",
          "opts": [
            "椅子",
            "孩子",
            "学校"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 4,
          "w": "family",
          "pos": "n.",
          "meaning": "家庭",
          "opts": [
            "教师",
            "喝",
            "苹果"
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
            "学校",
            "水",
            "早晨"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 7,
          "w": "teacher",
          "pos": "n.",
          "meaning": "教师",
          "opts": [
            "高兴的",
            "教师",
            "走路"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 8,
          "w": "morning",
          "pos": "n.",
          "meaning": "早晨",
          "opts": [
            "听",
            "书",
            "早晨"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 9,
          "w": "happy",
          "pos": "adj.",
          "meaning": "高兴的",
          "opts": [
            "椅子",
            "小的",
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
            "大的",
            "小的",
            "打开"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 11,
          "w": "big",
          "pos": "adj.",
          "meaning": "大的",
          "opts": [
            "冷的",
            "家庭",
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
            "吃",
            "朋友",
            "大的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 13,
          "w": "drink",
          "pos": "v.",
          "meaning": "喝",
          "opts": [
            "吃",
            "喝",
            "孩子"
          ],
          "ans": 1,
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
            "走路",
            "教师",
            "喝"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 16,
          "w": "listen",
          "pos": "v.",
          "meaning": "听",
          "opts": [
            "睡觉",
            "听",
            "水"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 17,
          "w": "open",
          "pos": "v.",
          "meaning": "打开",
          "opts": [
            "书",
            "早晨",
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
            "冷的",
            "高兴的",
            "走路"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 19,
          "w": "child",
          "pos": "n.",
          "meaning": "孩子",
          "opts": [
            "听",
            "椅子",
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
            "家庭",
            "小的",
            "苹果"
          ],
          "ans": 2,
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
            "描述",
            "计划",
            "旅行"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 2,
          "w": "weather",
          "pos": "n.",
          "meaning": "天气",
          "opts": [
            "天气",
            "健康",
            "旅行"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 3,
          "w": "holiday",
          "pos": "n.",
          "meaning": "假日",
          "opts": [
            "天气",
            "假日",
            "邀请"
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
            "决定",
            "锻炼",
            "假日"
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
            "消息",
            "假日"
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
            "危险的",
            "到达"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 7,
          "w": "borrow",
          "pos": "v.",
          "meaning": "借入",
          "opts": [
            "昂贵的",
            "语言",
            "借入"
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
            "描述",
            "修理",
            "小心的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 9,
          "w": "invite",
          "pos": "v.",
          "meaning": "邀请",
          "opts": [
            "危险的",
            "安静的",
            "代替"
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
            "计划",
            "代替",
            "决定"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 11,
          "w": "arrive",
          "pos": "v.",
          "meaning": "到达",
          "opts": [
            "到达",
            "旅行",
            "借入"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 12,
          "w": "expensive",
          "pos": "adj.",
          "meaning": "昂贵的",
          "opts": [
            "描述",
            "昂贵的",
            "健康"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 13,
          "w": "quiet",
          "pos": "adj.",
          "meaning": "安静的",
          "opts": [
            "锻炼",
            "天气",
            "安静的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 14,
          "w": "plan",
          "pos": "n.",
          "meaning": "计划",
          "opts": [
            "假日",
            "邀请",
            "消息"
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
            "健康",
            "消息"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 16,
          "w": "exercise",
          "pos": "n.",
          "meaning": "锻炼",
          "opts": [
            "语言",
            "药",
            "锻炼"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 17,
          "w": "message",
          "pos": "n.",
          "meaning": "消息",
          "opts": [
            "消息",
            "小心的",
            "到达"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 18,
          "w": "language",
          "pos": "n.",
          "meaning": "语言",
          "opts": [
            "昂贵的",
            "语言",
            "修理"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 19,
          "w": "repair",
          "pos": "v.",
          "meaning": "修理",
          "opts": [
            "代替",
            "危险的",
            "安静的"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 20,
          "w": "instead",
          "pos": "adv.",
          "meaning": "代替",
          "opts": [
            "代替",
            "借入",
            "安静的"
          ],
          "ans": 0,
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
          "meaning": "实现",
          "opts": [
            "实现",
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
            "交流",
            "优势",
            "经验"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 3,
          "w": "opportunity",
          "pos": "n.",
          "meaning": "机会",
          "opts": [
            "解释",
            "准备",
            "机会"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 4,
          "w": "environment",
          "pos": "n.",
          "meaning": "环境",
          "opts": [
            "保护",
            "文化",
            "改善"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 5,
          "w": "experience",
          "pos": "n.",
          "meaning": "经验",
          "opts": [
            "收到",
            "经验",
            "改善"
          ],
          "ans": 1,
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
          "meaning": "改善",
          "opts": [
            "改善",
            "支持",
            "实现"
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
            "意见",
            "提供"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 9,
          "w": "provide",
          "pos": "v.",
          "meaning": "提供",
          "opts": [
            "减少",
            "可能的",
            "机会"
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
            "减少",
            "比较",
            "机会"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 11,
          "w": "suggest",
          "pos": "v.",
          "meaning": "建议",
          "opts": [
            "环境",
            "建议",
            "减少"
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
            "建议",
            "交流",
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
            "文化",
            "经验"
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
            "解释",
            "准备",
            "收到"
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
            "实现",
            "改善"
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
            "意见",
            "比较",
            "解决办法"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 18,
          "w": "communicate",
          "pos": "v.",
          "meaning": "交流",
          "opts": [
            "支持",
            "优势",
            "交流"
          ],
          "ans": 2,
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
            "减少",
            "收到",
            "可能的"
          ],
          "ans": 1,
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
            "相关的",
            "准确的",
            "容量"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 2,
          "w": "budget",
          "pos": "n.",
          "meaning": "预算",
          "opts": [
            "准确的",
            "灵活的",
            "预算"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 3,
          "w": "campaign",
          "pos": "n.",
          "meaning": "运动；活动",
          "opts": [
            "运动；活动",
            "产生",
            "重要的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 4,
          "w": "consequence",
          "pos": "n.",
          "meaning": "后果",
          "opts": [
            "策略",
            "预算",
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
            "运动；活动",
            "识别",
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
            "解释（含义）",
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
            "威胁",
            "证据",
            "后果"
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
            "谈判",
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
            "容量",
            "识别",
            "估计"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 11,
          "w": "interpret",
          "pos": "v.",
          "meaning": "解释（含义）",
          "opts": [
            "证据",
            "相关的",
            "解释（含义）"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 12,
          "w": "negotiate",
          "pos": "v.",
          "meaning": "谈判",
          "opts": [
            "谈判",
            "重要的",
            "准确的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 13,
          "w": "potential",
          "pos": "adj.",
          "meaning": "潜在的",
          "opts": [
            "预算",
            "潜在的",
            "灵活的"
          ],
          "ans": 1,
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
            "运动；活动"
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
            "运动；活动"
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
            "后果",
            "策略",
            "识别"
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
            "解释（含义）",
            "威胁",
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
            "威胁",
            "转变",
            "高效的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 19,
          "w": "transform",
          "pos": "v.",
          "meaning": "转变",
          "opts": [
            "估计",
            "谈判",
            "容量"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 20,
          "w": "capacity",
          "pos": "n.",
          "meaning": "容量",
          "opts": [
            "潜在的",
            "转变",
            "容量"
          ],
          "ans": 2,
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
            "连贯的",
            "恶化",
            "操纵"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 3,
          "w": "comprehensive",
          "pos": "adj.",
          "meaning": "全面的",
          "opts": [
            "似乎合理的",
            "全面的",
            "普遍的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 4,
          "w": "controversial",
          "pos": "adj.",
          "meaning": "有争议的",
          "opts": [
            "仔细审查",
            "夸大",
            "初步的"
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
            "恶化",
            "可行的",
            "初步的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 6,
          "w": "exaggerate",
          "pos": "v.",
          "meaning": "夸大",
          "opts": [
            "强健的；稳健的",
            "夸大",
            "巩固"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 7,
          "w": "feasible",
          "pos": "adj.",
          "meaning": "可行的",
          "opts": [
            "模棱两可的",
            "实施",
            "可行的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 8,
          "w": "implement",
          "pos": "v.",
          "meaning": "实施",
          "opts": [
            "实施",
            "不可避免的",
            "复杂精密的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 9,
          "w": "inevitable",
          "pos": "adj.",
          "meaning": "不可避免的",
          "opts": [
            "削弱",
            "连贯的",
            "整合"
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
            "全面的",
            "不可避免的",
            "整合"
          ],
          "ans": 2,
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
            "普遍的",
            "似乎合理的",
            "有争议的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 13,
          "w": "preliminary",
          "pos": "adj.",
          "meaning": "初步的",
          "opts": [
            "恶化",
            "操纵",
            "初步的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 14,
          "w": "robust",
          "pos": "adj.",
          "meaning": "强健的；稳健的",
          "opts": [
            "似乎合理的",
            "仔细审查",
            "夸大"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 15,
          "w": "sophisticated",
          "pos": "adj.",
          "meaning": "复杂精密的",
          "opts": [
            "巩固",
            "复杂精密的",
            "夸大"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 16,
          "w": "undermine",
          "pos": "v.",
          "meaning": "削弱",
          "opts": [
            "可行的",
            "初步的",
            "削弱"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 17,
          "w": "compelling",
          "pos": "adj.",
          "meaning": "令人信服的",
          "opts": [
            "令人信服的",
            "强健的；稳健的",
            "模棱两可的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 18,
          "w": "prevalent",
          "pos": "adj.",
          "meaning": "普遍的",
          "opts": [
            "连贯的",
            "普遍的",
            "实施"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 19,
          "w": "scrutiny",
          "pos": "n.",
          "meaning": "仔细审查",
          "opts": [
            "不可避免的",
            "复杂精密的",
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
            "巩固",
            "削弱",
            "全面的"
          ],
          "ans": 0,
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
            "深奥难懂的",
            "热心的",
            "过分讲究的"
          ],
          "ans": 0,
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
            "顽抗的",
            "深奥难懂的",
            "有说服力的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 4,
          "w": "eclectic",
          "pos": "adj.",
          "meaning": "兼收并蓄的",
          "opts": [
            "反复无常的",
            "并置",
            "伪善的"
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
            "宽宏大量的",
            "短暂的",
            "伪善的"
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
            "过分讲究的",
            "兼收并蓄的",
            "使模糊"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 8,
          "w": "idiosyncratic",
          "pos": "adj.",
          "meaning": "独特的",
          "opts": [
            "吝啬的",
            "独特的",
            "变迁"
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
            "无处不在的",
            "短暂的",
            "敷衍的"
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
            "宽宏大量的",
            "只有内行才懂的",
            "敷衍的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 11,
          "w": "obfuscate",
          "pos": "v.",
          "meaning": "使模糊",
          "opts": [
            "典型的",
            "使模糊",
            "热心的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 12,
          "w": "parsimonious",
          "pos": "adj.",
          "meaning": "吝啬的",
          "opts": [
            "深奥难懂的",
            "过分讲究的",
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
            "敷衍的",
            "独特的",
            "顽抗的"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 14,
          "w": "quintessential",
          "pos": "adj.",
          "meaning": "典型的",
          "opts": [
            "伪善的",
            "反复无常的",
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
            "并置",
            "顽抗的"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 16,
          "w": "sanctimonious",
          "pos": "adj.",
          "meaning": "伪善的",
          "opts": [
            "伪善的",
            "宽宏大量的",
            "意外的好运"
          ],
          "ans": 0,
          "trap": false
        },
        {
          "n": 17,
          "w": "serendipity",
          "pos": "n.",
          "meaning": "意外的好运",
          "opts": [
            "变迁",
            "意外的好运",
            "兼收并蓄的"
          ],
          "ans": 1,
          "trap": false
        },
        {
          "n": 18,
          "w": "vicissitude",
          "pos": "n.",
          "meaning": "变迁",
          "opts": [
            "短暂的",
            "使模糊",
            "变迁"
          ],
          "ans": 2,
          "trap": false
        },
        {
          "n": 19,
          "w": "ubiquitous",
          "pos": "adj.",
          "meaning": "无处不在的",
          "opts": [
            "吝啬的",
            "变迁",
            "只有内行才懂的"
          ],
          "ans": -1,
          "trap": true
        },
        {
          "n": 20,
          "w": "zealous",
          "pos": "adj.",
          "meaning": "热心的",
          "opts": [
            "无处不在的",
            "热心的",
            "只有内行才懂的"
          ],
          "ans": 1,
          "trap": false
        }
      ]
    }
  ]
};
if (typeof window !== "undefined") window.VT_DATA = VT_DATA;
if (typeof module !== "undefined" && module.exports) module.exports = VT_DATA;
