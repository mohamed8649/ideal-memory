export default function VisionMission() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 p-8 lg:p-12 shadow-2xl shadow-primary-500/20 card-hover">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/10 rounded-full translate-y-1/3 -translate-x-1/3" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                رؤيتنا
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                أن نكون من الشركات الرائدة في مجال التسويق الرقمي والإبداع
                الإعلاني داخل ليبيا وخارجها.
              </p>

              {/* Decorative line */}
              <div className="mt-8 w-20 h-1 bg-accent-400 rounded-full" />
            </div>
          </div>

          {/* Mission */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-500 via-accent-600 to-amber-700 p-8 lg:p-12 shadow-2xl shadow-accent-500/20 card-hover">
            <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 -translate-x-1/3" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/3 translate-x-1/3" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                رسالتنا
              </h3>
              <p className="text-amber-50 text-lg leading-relaxed">
                تقديم خدمات تسويقية مبتكرة تساعد عملاءنا على النمو وتحقيق
                أهدافهم التجارية بأفضل النتائج الممكنة.
              </p>

              {/* Decorative line */}
              <div className="mt-8 w-20 h-1 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
