import { notFound } from "next/navigation";
import PageBanner from "../components/PageBanner";
import { getDictionary, isLang } from "../dictionaries";

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { research } = await getDictionary(lang);

  return (
    <>
      <PageBanner title={research.title} tint="blue" />
      <section className="max-w-5xl mx-auto py-16 px-6 grid gap-6 text-gray-800">
        {research.items.map((item, i) => (
          <article
            key={item.heading}
            id={`topic-${i + 1}`}
            className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 transition hover:shadow-md scroll-mt-24"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              {item.heading}
            </h2>
            <p className="leading-relaxed text-lg text-gray-700">{item.body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
