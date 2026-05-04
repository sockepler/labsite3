export const VALID_LANGS = ["ja", "en", "zh"] as const;
export type Lang = (typeof VALID_LANGS)[number];

export function isLang(x: string): x is Lang {
  return (VALID_LANGS as readonly string[]).includes(x);
}

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    about: string;
    research: string;
    members: string;
    publications: string;
    access: string;
    contact: string;
  };
  hero: { title: string; subtitle: string };
  home: {
    aboutHeading: string;
    aboutBody: string;
    researchHeading: string;
    researchCards: { title: string; desc: string }[];
    membersHeading: string;
    memberCards: { title: string; desc: string }[];
    publicationsHeading: string;
    publicationsList: string[];
    accessHeading: string;
    accessBody: string;
    accessCity: string;
    seeMore: {
      about: string;
      research: string;
      members: string;
      publications: string;
      access: string;
    };
    footer: string;
  };
  about: { title: string; paragraphs: string[] };
  research: { title: string; items: { heading: string; body: string }[] };
  members: {
    title: string;
    facultyHeading: string;
    faculty: { name: string; role: string }[];
    gradHeading: string;
    grad: string[];
    undergradHeading: string;
    undergrad: string[];
  };
  publications: {
    title: string;
    journalsHeading: string;
    journals: { year: string; title: string; authors: string }[];
    otherHeading: string;
    otherBody: string;
  };
  access: {
    title: string;
    address1: string;
    address2: string;
    nearestHeading: string;
    nearest: string[];
  };
  contact: {
    title: string;
    intro: string;
    emailLabel: string;
    email: string;
    phoneLabel: string;
    phone: string;
    addressLabel: string;
    address: string;
  };
};

const loaders: Record<Lang, () => Promise<{ default: Dictionary }>> = {
  ja: () => import("./ja"),
  en: () => import("./en"),
  zh: () => import("./zh"),
};

export async function getDictionary(lang: Lang): Promise<Dictionary> {
  return (await loaders[lang]()).default;
}
