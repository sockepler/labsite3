import { notFound } from "next/navigation";
import PageBanner from "../components/PageBanner";
import { getDictionary, isLang } from "../dictionaries";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const { contact } = await getDictionary(lang);

  const labelClass =
    "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2";

  return (
    <>
      <PageBanner title={contact.title} tint="slate" />
      <section className="max-w-3xl mx-auto py-16 px-6 text-gray-800">
        <p className="text-lg leading-relaxed text-gray-700 mb-10">
          {contact.intro}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <article className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 transition hover:shadow-md">
            <div className={labelClass}>{contact.emailLabel}</div>
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-600 hover:underline text-lg break-all"
            >
              {contact.email}
            </a>
          </article>

          <article className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 transition hover:shadow-md">
            <div className={labelClass}>{contact.phoneLabel}</div>
            <p className="text-lg">{contact.phone}</p>
          </article>

          <article className="sm:col-span-2 bg-white border border-gray-100 rounded-xl shadow-sm p-6 transition hover:shadow-md">
            <div className={labelClass}>{contact.addressLabel}</div>
            <p className="text-lg leading-relaxed">{contact.address}</p>
          </article>
        </div>
      </section>
    </>
  );
}
