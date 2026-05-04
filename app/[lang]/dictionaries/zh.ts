import type { Dictionary } from "./index";

const dict: Dictionary = {
  meta: {
    title: "集成电路系统实验室",
    description:
      "芝浦工业大学 先端集成电路系统实验室 — 模拟 / 混合信号 IC 研究",
  },
  nav: {
    home: "首页",
    about: "实验室简介",
    research: "研究主题",
    members: "成员",
    publications: "研究成果",
    access: "访问",
    contact: "联系我们",
  },
  hero: {
    title: "集成电路系统实验室",
    subtitle:
      "模拟 / 混合信号 IC 研究\nSAR ADC、比较器、集成电路设计",
  },
  home: {
    aboutHeading: "实验室简介",
    aboutBody:
      "本实验室聚焦高性能模拟与混合信号集成电路设计，研究方向涵盖 SAR ADC 架构、随机比较器、多值比较方法、低功耗 CDAC 优化，以及系统级 AMS 设计与验证。",
    researchHeading: "研究主题",
    researchCards: [
      {
        title: "SAR ADC 设计",
        desc: "低功耗、高精度的 CDAC 结构、开关优化与时序设计。",
      },
      {
        title: "多数决比较器",
        desc: "对亚稳态鲁棒的多数决方式，并行比较结构提升信噪比与可靠性。",
      },
      {
        title: "混合信号 IC",
        desc: "AFE、传感器接口、数字控制逻辑集成与 AMS 仿真设计。",
      },
    ],
    membersHeading: "成员",
    memberCards: [
      { title: "教员", desc: "TBD 副教授" },
      { title: "研究生", desc: "TBD" },
      { title: "本科生", desc: "TBD" },
    ],
    publicationsHeading: "研究成果",
    publicationsList: ["2025 — TBD", "2024 — TBD"],
    accessHeading: "访问",
    accessBody: "芝浦工业大学 — 先端集成电路系统实验室",
    accessCity: "日本东京",
    seeMore: {
      about: "查看更多 →",
      research: "查看研究主题 →",
      members: "查看成员 →",
      publications: "查看研究成果 →",
      access: "查看访问信息 →",
    },
    footer: "© 2025 先端集成电路系统实验室",
  },
  about: {
    title: "实验室简介",
    paragraphs: [
      "本实验室围绕模拟与混合信号集成电路开展研究，借助基于器件物理的高精度模型，从电路级到系统级追求一致的最优设计。",
      "现代 VLSI 系统要求跨越模拟与数字的高维度优化。我们在传感器接口、ADC、电源电路、模拟计算等多种应用中兼顾性能与低功耗。",
      "通过仿真、电路设计、版图与 AMS 建模相结合，致力于实现新一代高性能模拟 IC。",
    ],
  },
  research: {
    title: "研究主题",
    items: [
      {
        heading: "1. 随机比较器 / 多数决比较器",
        body: "利用模拟电路固有的随机性，构建具有随机行为的比较器。多数决方式显著提升对亚稳态的容忍度与判决精度，可用于高速 SAR ADC 与近似计算电路。",
      },
      {
        heading: "2. SAR ADC 架构",
        body: "围绕开关电容 DAC（CDAC）结构改进、低功耗开关方案、比较器噪声与偏移抑制、AMS 仿真优化等，全面推进高性能 SAR ADC 的实现。",
      },
      {
        heading: "3. 模拟计算器件",
        body: "探索近似计算、随机比特流处理、模拟矩阵运算等位于模拟/数字边界的新型计算方法，面向 IoT 与 AI 等低功耗应用。",
      },
      {
        heading: "4. 传感器接口与低功耗模拟电路",
        body: "面向 IoT 应用的模拟前端（AFE）、低噪声放大器、可编程滤波器、电源电路等不可或缺的低功耗模拟电路。",
      },
      {
        heading: "5. 模数协同设计（AMS Co-simulation）",
        body: "利用 Verilog-A、AMS 与系统级模型，对电路与数字控制逻辑进行协同设计，并通过蒙特卡洛与偏差分析实现高可靠电路设计。",
      },
    ],
  },
  members: {
    title: "成员",
    facultyHeading: "教员",
    faculty: [
      {
        name: "TBD 副教授",
        role: "先端集成电路、模拟 / 混合信号电路、数据转换器",
      },
    ],
    gradHeading: "研究生",
    grad: ["TBD（硕士）", "TBD"],
    undergradHeading: "本科生",
    undergrad: ["数名 B3 / B4（每学年人数有所变化）"],
  },
  publications: {
    title: "研究成果",
    journalsHeading: "国际会议与期刊",
    journals: [
      {
        year: "2024",
        title: "TBD — Stochastic Comparator Architecture for Low-Power SAR ADCs",
        authors: "TBD",
      },
      {
        year: "2023",
        title: "TBD — Analog-Mixed Signal Modeling Method for SAR ADC Optimization",
        authors: "TBD",
      },
      {
        year: "2022",
        title: "TBD — Majority-Voting Based Comparator for Low-Voltage ADCs",
        authors: "TBD",
      },
    ],
    otherHeading: "其他",
    otherBody:
      "学会演讲、研究报告与项目成果按年度整理。详情请联系本实验室。",
  },
  access: {
    title: "访问",
    address1: "芝浦工业大学 先端集成电路系统实验室（丰洲校区）",
    address2: "邮编 135-8548  日本东京都江东区丰洲 3-7-5",
    nearestHeading: "最近车站",
    nearest: [
      "东京地铁有乐町线「丰洲站」步行 7 分钟",
      "百合海鸥号「丰洲站」步行 6 分钟",
    ],
  },
  contact: {
    title: "联系我们",
    intro: "如有疑问或合作意向，请通过以下方式联系。",
    emailLabel: "邮箱",
    email: "TBD@example.ac.jp",
    phoneLabel: "电话",
    phone: "TBD",
    addressLabel: "地址",
    address:
      "〒135-8548 日本东京都江东区丰洲 3-7-5 芝浦工业大学 丰洲校区",
  },
};

export default dict;
