export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              من نحن
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              شركة{" "}
              <span className="text-gradient">لمسة</span>
              {" "}للإعلانات والتسويق
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              منذ تأسيس شركة لمسة للإعلانات والتسويق ونحن نسعى لتقديم حلول
              تسويقية متكاملة تساعد العملاء على النمو والوصول إلى جمهورهم
              المستهدف بفعالية.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              نتميز بفريق عمل محترف وخبرة واسعة في إدارة الحملات الإعلانية
              وتصميم المواقع الإلكترونية وصناعة المحتوى البصري الذي يعكس هوية
              العلامة التجارية بشكل احترافي.
            </p>

            <div className="space-y-4">
              {[
                { icon: "🎯", title: "رؤية واضحة", desc: "نفهم أهدافك قبل أن نبدأ العمل" },
                { icon: "💡", title: "إبداع متواصل", desc: "نبتكر حلولاً تسويقية خارج الصندوق" },
                { icon: "🤝", title: "شراكة حقيقية", desc: "نجاح عملائنا هو نجاحنا" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-500 to-purple-600 p-8 lg:p-12 shadow-2xl shadow-primary-500/20">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative space-y-6">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">لماذا تختارنا؟</h3>
                </div>

                {[
                  "خبرة منذ عام 2021",
                  "جودة عالية في التنفيذ",
                  "أسعار منافسة",
                  "دعم ومتابعة مستمرة",
                  "حلول تسويقية متكاملة",
                  "خدمات ما بعد البيع",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl px-5 py-3.5"
                  >
                    <svg className="w-5 h-5 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-accent-100 flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-gray-900">+200</div>
                <div className="text-gray-500 text-sm">عميل سعيد</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
