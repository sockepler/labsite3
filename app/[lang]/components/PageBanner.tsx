import Image from "next/image";

export type BannerTint =
  | "blue"
  | "indigo"
  | "emerald"
  | "amber"
  | "rose"
  | "slate";

const TINTS: Record<BannerTint, string> = {
  blue: "bg-gradient-to-b from-blue-950/75 via-blue-900/55 to-black/85",
  indigo: "bg-gradient-to-b from-indigo-950/75 via-indigo-900/55 to-black/85",
  emerald: "bg-gradient-to-b from-emerald-950/75 via-emerald-900/55 to-black/85",
  amber: "bg-gradient-to-b from-amber-950/75 via-amber-900/55 to-black/85",
  rose: "bg-gradient-to-b from-rose-950/75 via-rose-900/55 to-black/85",
  slate: "bg-gradient-to-b from-slate-950/75 via-slate-900/55 to-black/85",
};

export default function PageBanner({
  title,
  subtitle,
  tint = "slate",
}: {
  title: string;
  subtitle?: string;
  tint?: BannerTint;
}) {
  return (
    <section className="relative h-[240px] md:h-[300px] flex items-center justify-center text-center px-6 overflow-hidden">
      <Image
        src="/hero.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className={`absolute inset-0 ${TINTS[tint]}`} aria-hidden />
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-200 drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
