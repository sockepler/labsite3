import Image from "next/image";

export default function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative h-[80vh] min-h-[480px] flex items-center justify-center text-center px-6 overflow-hidden">
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/75"
        aria-hidden
      />
      <div className="relative z-10 max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-100 drop-shadow max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
          {subtitle}
        </p>
        <div
          className="mt-12 inline-block w-px h-12 bg-white/40 animate-pulse"
          aria-hidden
        />
      </div>
    </section>
  );
}
