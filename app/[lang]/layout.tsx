import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";
import { getDictionary, isLang } from "./dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href={`/${lang}`}
            className="font-bold text-base md:text-lg shrink-0 truncate focus-visible:outline-none focus-visible:text-blue-600"
          >
            {dict.hero.title}
          </Link>
          <Navbar lang={lang} nav={dict.nav} />
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-sm">
          <div>
            <div className="font-bold text-white text-base mb-2">
              {dict.hero.title}
            </div>
            <div className="text-gray-400 leading-relaxed">
              {dict.contact.address}
            </div>
          </div>
          <div>
            <div className="font-semibold text-white mb-2">
              {dict.contact.emailLabel}
            </div>
            <a
              href={`mailto:${dict.contact.email}`}
              className="hover:text-white transition-colors break-all focus-visible:outline-none focus-visible:text-white"
            >
              {dict.contact.email}
            </a>
            <div className="mt-4">
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-1 text-white hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:text-blue-300"
              >
                {dict.nav.contact} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <div className="md:text-right md:self-end text-gray-400">
            {dict.home.footer}
          </div>
        </div>
      </footer>
    </div>
  );
}
