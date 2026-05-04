import { notFound } from "next/navigation";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import { getDictionary, isLang } from "../dictionaries";

export default async function AccessPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { access } = await getDictionary(lang);

  return (
    <>
      <PageBanner title={access.title} tint="rose" />
      <section className="max-w-4xl mx-auto py-16 px-6 space-y-12 text-gray-800">
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8">
          <p className="text-lg leading-relaxed mb-4">{access.address1}</p>
          <p className="text-lg leading-relaxed text-gray-700">
            {access.address2}
          </p>
        </div>

        <div>
          <SectionHeading>{access.nearestHeading}</SectionHeading>
          <ul className="grid md:grid-cols-2 gap-4">
            {access.nearest.map((n) => (
              <li
                key={n}
                className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 text-gray-700 transition hover:shadow-md"
              >
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
