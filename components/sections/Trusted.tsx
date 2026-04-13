export default function Trusted() {
  const brands = ["TECHFLOW", "LUMINAR", "QUANTUM", "NEXUS", "VELOCITY"];

  return (
    <section className="py-12 bg-gray-50 border-y">
      <div className="container-custom">
        {/* WRAPPER */}
        <div className="flex flex-wrap items-center justify-between gap-8 grayscale opacity-60 text-center">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="text-lg md:text-xl font-extrabold tracking-tight text-gray-500 hover:opacity-100 hover:grayscale-0 transition duration-300"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
