export default function WhyUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* 🔷 LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Why Modern Brands Choose Us
            </h2>

            <p className="text-gray-500 mb-12 max-w-md leading-relaxed">
              We don't just write code. We architect solutions that bridge the
              gap between complex technology and your business goals.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border">
                <h4 className="text-3xl font-bold text-blue-600 mb-2">98%</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  Client Retention
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border">
                <h4 className="text-3xl font-bold text-blue-600 mb-2">250+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  Apps Delivered
                </p>
              </div>
            </div>
          </div>

          {/* 🔷 RIGHT SIDE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* ITEM 1 */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
              <h4 className="font-bold mb-2 text-gray-900">
                Clean Architecture
              </h4>
              <p className="text-sm text-gray-500">
                Maintenance-first approach ensuring your system is easy to
                upgrade.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-purple-500 shadow-sm">
              <h4 className="font-bold mb-2 text-gray-900">Scalable Systems</h4>
              <p className="text-sm text-gray-500">
                Infrastructure that grows with your user base without breaking.
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
              <h4 className="font-bold mb-2 text-gray-900">Fast Delivery</h4>
              <p className="text-sm text-gray-500">
                Agile methodology to get your MVP to market in record time.
              </p>
            </div>

            {/* ITEM 4 */}
            <div className="bg-white p-6 rounded-xl border-l-4 border-purple-500 shadow-sm">
              <h4 className="font-bold mb-2 text-gray-900">
                Business-Oriented
              </h4>
              <p className="text-sm text-gray-500">
                Focused on ROI and metrics that matter to your stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
