import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "./components/Hero";
import SectionHeading from "./components/SectionHeading";
import { getDictionary, isLang } from "./dictionaries";

const memberAnchors = ["faculty", "grad", "undergrad"];

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const dict = await getDictionary(lang);
  const { home, hero } = dict;

  const seeMore =
    "inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors mt-6 focus-visible:outline-none focus-visible:text-blue-600";

  const cardLink =
    "block bg-white border border-gray-100 rounded-xl shadow-sm p-6 transition hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

  return (
    <>
      <Hero title={hero.title} subtitle={hero.subtitle} />

      <section className="max-w-5xl mx-auto py-16 px-6">
        <SectionHeading size="xl">{home.aboutHeading}</SectionHeading>
        <p className="text-lg leading-relaxed text-gray-700">{home.aboutBody}</p>
        <div className="text-right">
          <Link href={`/${lang}/about`} className={seeMore}>
            {home.seeMore.about}
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading size="xl">{home.researchHeading}</SectionHeading>
          <div className="grid md:grid-cols-3 gap-6">
            {home.researchCards.map((card) => (
              <Link
                key={card.title}
                href={`/${lang}/research`}
                className={cardLink}
              >
                <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-right">
            <Link href={`/${lang}/research`} className={seeMore}>
              {home.seeMore.research}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <SectionHeading size="xl">{home.membersHeading}</SectionHeading>
        <div className="grid md:grid-cols-3 gap-6">
          {home.memberCards.map((card, i) => (
            <Link
              key={card.title}
              href={`/${lang}/members#${memberAnchors[i] ?? ""}`}
              className={cardLink}
            >
              <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-right">
          <Link href={`/${lang}/members`} className={seeMore}>
            {home.seeMore.members}
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading size="xl">{home.publicationsHeading}</SectionHeading>
          <ul className="space-y-3">
            {home.publicationsList.map((item) => (
              <li
                key={item}
                className="bg-gray-50 border border-gray-100 rounded-lg px-5 py-3 text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="text-right">
            <Link href={`/${lang}/publications`} className={seeMore}>
              {home.seeMore.publications}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6">
        <SectionHeading size="xl">{home.accessHeading}</SectionHeading>
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
          <p className="text-gray-700">{home.accessBody}</p>
          <p className="mt-2 text-gray-600">{home.accessCity}</p>
        </div>
        <div className="text-right">
          <Link href={`/${lang}/access`} className={seeMore}>
            {home.seeMore.access}
          </Link>
        </div>
      </section>
    </>
  );
}
