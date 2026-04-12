export default function PortfolioCTA() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="bg-primary rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>

          <p className="mb-8 opacity-90">
            We partner with visionary founders to build impactful products.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl">
              Start Project
            </button>
            <button className="border px-6 py-3 rounded-xl">
              View Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
