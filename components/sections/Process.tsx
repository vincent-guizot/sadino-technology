export default function Process() {
  const steps = [
    {
      title: "Discovery",
      desc: "In-depth audit of your business goals and market landscape.",
    },
    {
      title: "Design",
      desc: "Creating high-fidelity prototypes and user experience maps.",
    },
    {
      title: "Development",
      desc: "Agile coding phases with continuous testing and integration.",
    },
    {
      title: "Deployment",
      desc: "Launch strategy, performance tuning, and 24/7 monitoring.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        {/* 🔷 TITLE */}
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          The Road to Launch
        </h2>

        <div className="relative">
          {/* 🔷 CONNECTOR LINE (DESKTOP ONLY) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2" />

          {/* 🔷 STEPS */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* NUMBER */}
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 relative z-10 shadow-lg">
                  {i + 1}
                </div>

                {/* TITLE */}
                <h4 className="text-xl font-bold mb-3 text-gray-900">
                  {step.title}
                </h4>

                {/* DESC */}
                <p className="text-sm text-gray-500 max-w-[220px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
