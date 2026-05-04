import type { Dictionary } from "./index";

const dict: Dictionary = {
  meta: {
    title: "先端集積回路システム研究室",
    description:
      "芝浦工業大学 先端集積回路システム研究室 — アナログ／ミックスドシグナル IC の研究",
  },
  nav: {
    home: "ホーム",
    about: "研究室について",
    research: "研究テーマ",
    members: "メンバー",
    publications: "研究業績",
    access: "アクセス",
    contact: "お問い合わせ",
  },
  hero: {
    title: "先端集積回路システム研究室",
    subtitle:
      "アナログ／ミックスドシグナル IC 研究\nSAR ADC・比較器・集積回路設計",
  },
  home: {
    aboutHeading: "研究室について",
    aboutBody:
      "本研究室では、高性能アナログおよびミックスドシグナル集積回路の設計を中心に研究を行っています。主な研究テーマは、SAR ADCアーキテクチャ、確率的比較器、多値比較手法、低消費電力CDAC最適化、およびシステムレベルのAMS設計・検証です。",
    researchHeading: "研究テーマ",
    researchCards: [
      {
        title: "SAR ADC設計",
        desc: "低消費電力かつ高精度を実現するCDAC構造・スイッチング最適化・タイミング設計。",
      },
      {
        title: "多数決比較器",
        desc: "メタスタビリティに強い多数決方式、並列比較構造によるSN比向上と信頼性改善。",
      },
      {
        title: "ミックスドシグナルIC",
        desc: "AFE・センサインターフェース・デジタル制御ロジック統合、AMSシミュレーション設計。",
      },
    ],
    membersHeading: "メンバー",
    memberCards: [
      { title: "教員", desc: "TBD 准教授" },
      { title: "大学院生", desc: "TBD" },
      { title: "学部生", desc: "TBD" },
    ],
    publicationsHeading: "研究業績",
    publicationsList: ["2025 — TBD", "2024 — TBD"],
    accessHeading: "アクセス",
    accessBody: "芝浦工業大学 — 先端集積回路システム研究室",
    accessCity: "東京都",
    seeMore: {
      about: "続きを読む →",
      research: "研究テーマを見る →",
      members: "メンバーを見る →",
      publications: "研究業績を見る →",
      access: "アクセス情報を見る →",
    },
    footer: "© 2025 先端集積回路システム研究室",
  },
  about: {
    title: "研究室について",
    paragraphs: [
      "本研究室では、アナログおよびミックスドシグナル集積回路を対象とした研究に取り組んでいます。回路を構成する素子の物理現象に基づいた高精度モデルを活用し、回路レベルからシステムレベルに至るまで一貫した最適設計を目指します。",
      "現代の VLSI システムでは、アナログとデジタルを横断した高次元最適化が求められており、センサーインターフェース、ADC、電源回路、アナログ計算回路など、多様なアプリケーションにおいて性能向上と低消費電力化の両立を図ります。",
      "シミュレーション、回路設計、レイアウト、AMS モデリングを組み合わせながら、次世代の高性能アナログ IC の実現を目指します。",
    ],
  },
  research: {
    title: "研究テーマ",
    items: [
      {
        heading: "1. 確率的比較器・多数決比較器",
        body: "アナログ回路中で発生するランダム性を利用し、従来の比較器とは異なる確率的動作を行う比較回路を研究しています。多数決方式を用いることで、メタスタビリティ耐性や決定精度を大幅に改善します。高速 SAR ADC、近似計算回路などへの応用が期待されています。",
      },
      {
        heading: "2. SAR ADC アーキテクチャ",
        body: "スイッチドキャパシタ DAC（CDAC）の構造改良、スイッチング手法の低消費電力化、比較器ノイズおよびオフセット低減、AMS シミュレーションを用いた最適化など、高性能 SAR ADC の実現に向けて多角的に研究しています。",
      },
      {
        heading: "3. アナログ計算デバイス",
        body: "近似計算、確率的ビットストリーム処理、アナログ行列演算など、デジタル・アナログの境界領域にある新しい計算手法を開拓しています。IoT・AI などの低電力アプリケーションへの応用を目指します。",
      },
      {
        heading: "4. センサインターフェースと低電力アナログ回路",
        body: "センサー読み取りのためのアナログフロントエンド（AFE）、ローノイズアンプ、プログラマブルフィルタ、電源回路など、IoT 応用に不可欠な低消費電力アナログ回路を研究しています。",
      },
      {
        heading: "5. アナログ/デジタル協調設計（AMS Co-simulation）",
        body: "Verilog-A、AMS、システムレベルモデルを活用し、回路レベルとデジタル制御ロジックを協調的に設計します。モンテカルロ解析やばらつき解析を通じて、高信頼回路設計を実現します。",
      },
    ],
  },
  members: {
    title: "メンバー",
    facultyHeading: "教員",
    faculty: [
      {
        name: "TBD 准教授",
        role: "先端集積回路、アナログ・ミックスドシグナル回路、データコンバータ",
      },
    ],
    gradHeading: "大学院生",
    grad: ["TBD（修士課程）", "TBD"],
    undergradHeading: "学部生",
    undergrad: ["B3 / B4 数名（年度により変動）"],
  },
  publications: {
    title: "研究業績",
    journalsHeading: "国際会議・論文誌",
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
    otherHeading: "その他",
    otherBody:
      "学会発表、研究報告、プロジェクト成果などについては、年度別に整理しています。詳細は研究室にお問い合わせください。",
  },
  access: {
    title: "アクセス",
    address1: "芝浦工業大学 先端集積回路システム研究室（豊洲キャンパス）",
    address2: "〒135-8548 東京都江東区豊洲 3-7-5",
    nearestHeading: "最寄駅",
    nearest: [
      "東京メトロ有楽町線「豊洲駅」徒歩 7 分",
      "ゆりかもめ「豊洲駅」徒歩 6 分",
    ],
  },
  contact: {
    title: "お問い合わせ",
    intro: "ご質問・共同研究のご相談などは、下記までお問い合わせください。",
    emailLabel: "メール",
    email: "TBD@example.ac.jp",
    phoneLabel: "電話",
    phone: "TBD",
    addressLabel: "住所",
    address:
      "〒135-8548 東京都江東区豊洲 3-7-5 芝浦工業大学 豊洲キャンパス",
  },
};

export default dict;
