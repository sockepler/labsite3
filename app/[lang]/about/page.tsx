import { notFound } from "next/navigation";
import PageBanner from "../components/PageBanner";
import { getDictionary, isLang } from "../dictionaries";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { about } = await getDictionary(lang);

  return (
    <>
      <PageBanner title={about.title} tint="indigo" />
      <article className="max-w-3xl mx-auto py-16 px-6 text-gray-800">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-lg leading-loose mb-6">
            {p}
          </p>
        ))}
      </article>
    </>
  );
}
