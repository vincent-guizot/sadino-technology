import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  features: string[];
  tech: string[];
  image: string;
  reverse?: boolean;
  badge?: string;
  badgeLabel?: string;
};

export default function ServiceBlock({
  title,
  desc,
  features,
  tech,
  image,
  reverse,
  badge,
  badgeLabel,
}: Props) {
  return (
    <section className="py-24 bg-gray-50">
      <div
        className={`container-custom grid md:grid-cols-2 gap-16 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>

          <p className="text-gray-500 mb-6">{desc}</p>

          <ul className="space-y-3 mb-6">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                ✅ {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-200 rounded-full text-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold">
            Start Project
          </button>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="rounded-2xl shadow-xl"
          />

          {/* BADGE */}
          {badge && (
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <p className="text-xs text-gray-400">{badgeLabel}</p>
              <p className="text-xl font-bold">{badge}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
