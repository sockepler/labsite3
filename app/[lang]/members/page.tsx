import { notFound } from "next/navigation";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import { getDictionary, isLang } from "../dictionaries";

export default async function MembersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { members } = await getDictionary(lang);

  return (
    <>
      <PageBanner title={members.title} tint="emerald" />
      <section className="max-w-5xl mx-auto py-16 px-6 space-y-14 text-gray-800">
        <div id="faculty" className="scroll-mt-24">
          <SectionHeading>{members.facultyHeading}</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {members.faculty.map((p) => (
              <article
                key={p.name}
                className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 transition hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">{p.role}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="grad" className="scroll-mt-24">
          <SectionHeading>{members.gradHeading}</SectionHeading>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {members.grad.map((g) => (
              <div
                key={g}
                className="bg-white border border-gray-100 rounded-lg p-4 text-gray-700 transition hover:shadow-md"
              >
                {g}
              </div>
            ))}
          </div>
        </div>

        <div id="undergrad" className="scroll-mt-24">
          <SectionHeading>{members.undergradHeading}</SectionHeading>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {members.undergrad.map((u) => (
              <div
                key={u}
                className="bg-white border border-gray-100 rounded-lg p-4 text-gray-700 transition hover:shadow-md"
              >
                {u}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
