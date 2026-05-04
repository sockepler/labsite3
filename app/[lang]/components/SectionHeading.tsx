export default function SectionHeading({
  children,
  size = "lg",
  id,
}: {
  children: React.ReactNode;
  size?: "lg" | "xl";
  id?: string;
}) {
  const text = size === "xl" ? "text-3xl" : "text-2xl";
  const barH = size === "xl" ? "before:h-7" : "before:h-6";

  return (
    <h2
      id={id}
      className={`${text} font-semibold text-gray-900 mb-6 inline-flex items-center before:content-[''] before:w-1 ${barH} before:rounded before:mr-3 before:bg-blue-500`}
    >
      {children}
    </h2>
  );
}
