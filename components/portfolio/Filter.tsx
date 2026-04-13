"use client";

type Props = {
  active: string;
  onChange: (value: string) => void;
};

export default function PortfolioFilter({ active, onChange }: Props) {
  const filters = [
    "All",
    "Profile Company",
    "Mobile",
    "Dashboards",
    "E-commerce",
    "SaaS",
  ];

  return (
    <div className="container-custom mb-12 flex flex-wrap gap-3">
      {filters.map((item) => {
        const isActive = active === item;

        return (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition
              ${
                isActive
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
