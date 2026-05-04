import type { Dictionary } from "./index";

const dict: Dictionary = {
  meta: {
    title: "Advanced Integrated Circuit Systems Lab",
    description:
      "Shibaura Institute of Technology — research on analog and mixed-signal integrated circuits.",
  },
  nav: {
    home: "Home",
    about: "About",
    research: "Research",
    members: "Members",
    publications: "Publications",
    access: "Access",
    contact: "Contact",
  },
  hero: {
    title: "Advanced Integrated Circuit Systems Lab",
    subtitle:
      "Analog / Mixed-Signal IC Research\nSAR ADCs · Comparators · VLSI Design",
  },
  home: {
    aboutHeading: "About the Lab",
    aboutBody:
      "We focus on the design of high-performance analog and mixed-signal integrated circuits. Core topics include SAR ADC architectures, stochastic comparators, multi-level comparison, low-power CDAC optimization, and system-level AMS design and verification.",
    researchHeading: "Research Topics",
    researchCards: [
      {
        title: "SAR ADC Design",
        desc: "CDAC structures, switching optimization, and timing design for low power and high accuracy.",
      },
      {
        title: "Majority-Voting Comparators",
        desc: "Majority-voting schemes resilient to metastability; parallel comparison for higher SNR and reliability.",
      },
      {
        title: "Mixed-Signal IC",
        desc: "AFE, sensor interfaces, integrated digital control, and AMS-based simulation design.",
      },
    ],
    membersHeading: "Members",
    memberCards: [
      { title: "Faculty", desc: "TBD, Associate Professor" },
      { title: "Graduate Students", desc: "TBD" },
      { title: "Undergraduates", desc: "TBD" },
    ],
    publicationsHeading: "Publications",
    publicationsList: ["2025 — TBD", "2024 — TBD"],
    accessHeading: "Access",
    accessBody:
      "Shibaura Institute of Technology — Advanced Integrated Circuit Systems Lab",
    accessCity: "Tokyo, Japan",
    seeMore: {
      about: "See more →",
      research: "See research →",
      members: "See members →",
      publications: "See publications →",
      access: "See access →",
    },
    footer: "© 2025 Advanced Integrated Circuit Systems Lab",
  },
  about: {
    title: "About the Lab",
    paragraphs: [
      "Our lab investigates analog and mixed-signal integrated circuits, leveraging accurate device-level models grounded in physical phenomena to pursue consistent optimization from the circuit level up to the system level.",
      "Modern VLSI systems demand high-dimensional optimization across analog and digital boundaries. We balance performance and low power across diverse applications including sensor interfaces, ADCs, power circuits, and analog computing.",
      "Combining simulation, circuit design, layout, and AMS modeling, we aim to realize the next generation of high-performance analog ICs.",
    ],
  },
  research: {
    title: "Research Topics",
    items: [
      {
        heading: "1. Stochastic & Majority-Voting Comparators",
        body: "Leveraging randomness inherent in analog circuits to build comparators with stochastic behavior. Majority-voting greatly improves metastability tolerance and decision accuracy, with applications in high-speed SAR ADCs and approximate computing.",
      },
      {
        heading: "2. SAR ADC Architectures",
        body: "Improvements to switched-capacitor DAC (CDAC) topologies, low-power switching schemes, comparator noise and offset reduction, and AMS-based optimization toward high-performance SAR ADCs.",
      },
      {
        heading: "3. Analog Computing Devices",
        body: "We explore approximate computing, stochastic bitstream processing, and analog matrix operations — novel computation methods at the analog/digital boundary, targeting low-power IoT and AI applications.",
      },
      {
        heading: "4. Sensor Interfaces & Low-Power Analog Circuits",
        body: "Analog front-ends (AFE), low-noise amplifiers, programmable filters, and power circuits for sensor readout, all tailored for IoT-class low-power systems.",
      },
      {
        heading: "5. Analog/Digital Co-Design (AMS Co-simulation)",
        body: "Using Verilog-A, AMS, and system-level models we co-design circuits and digital control logic. Monte Carlo and variability analysis underpin reliable circuit design.",
      },
    ],
  },
  members: {
    title: "Members",
    facultyHeading: "Faculty",
    faculty: [
      {
        name: "TBD, Associate Professor",
        role: "Advanced integrated circuits; analog & mixed-signal circuits; data converters",
      },
    ],
    gradHeading: "Graduate Students",
    grad: ["TBD (Master's program)", "TBD"],
    undergradHeading: "Undergraduates",
    undergrad: ["Several B3 / B4 students (varies by year)"],
  },
  publications: {
    title: "Publications",
    journalsHeading: "Journals & International Conferences",
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
    otherHeading: "Other",
    otherBody:
      "Conference talks, technical reports, and project outputs are organized by year. Please contact the lab for details.",
  },
  access: {
    title: "Access",
    address1:
      "Shibaura Institute of Technology — Advanced Integrated Circuit Systems Lab (Toyosu Campus)",
    address2: "3-7-5 Toyosu, Koto-ku, Tokyo 135-8548, Japan",
    nearestHeading: "Nearest Stations",
    nearest: [
      "Tokyo Metro Yurakucho Line, Toyosu Station — 7 min walk",
      "Yurikamome Line, Toyosu Station — 6 min walk",
    ],
  },
  contact: {
    title: "Contact",
    intro:
      "For questions or collaboration inquiries, please reach out via the channels below.",
    emailLabel: "Email",
    email: "TBD@example.ac.jp",
    phoneLabel: "Phone",
    phone: "TBD",
    addressLabel: "Address",
    address:
      "Shibaura Institute of Technology, Toyosu Campus — 3-7-5 Toyosu, Koto-ku, Tokyo 135-8548, Japan",
  },
};

export default dict;
