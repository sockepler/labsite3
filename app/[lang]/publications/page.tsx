import { notFound } from "next/navigation";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import { getDictionary, isLang } from "../dictionaries";

export default async function PublicationsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { publications } = await getDictionary(lang);

  return (
    <>
      <PageBanner title={publications.title} tint="amber" />
      <section className="max-w-4xl mx-auto py-16 px-6 text-gray-800">
        <SectionHeading>{publications.journalsHeading}</SectionHeading>
        <div className="space-y-4">
          {publications.journals.map((j) => (
            <article
              key={j.title}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 transition hover:shadow-md flex gap-5 items-start"
            >
              <div className="shrink-0 w-16 h-16 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base">
                {j.year}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 leading-snug mb-1">
                  {j.title}
                </h3>
                <p className="text-sm text-gray-600">{j.authors}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading>{publications.otherHeading}</SectionHeading>
          <p className="text-lg leading-relaxed text-gray-700">
            {publications.otherBody}
          </p>
        </div>
      </section>
    </>
  );
}
