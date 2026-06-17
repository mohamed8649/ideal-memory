const testimonials = [
  {
    name: "محمد",
    location: "طرابلس",
    text: "خدمتهم ممتازة وتعاملهم راقي، والحملة الإعلانية جابتلنا نتائج فوق المتوقع.",
    rating: 5,
  },
  {
    name: "أحمد",
    location: "مصراتة",
    text: "صممولي موقع مرتب وسريع، وحتى بعد التسليم ما قصروا في الدعم.",
    rating: 5,
  },
  {
    name: "سالم",
    location: "الزاوية",
    text: "شغل احترافي وأسعار معقولة، وأنصح أي حد يتعامل معاهم.",
    rating: 5,
  },
  {
    name: "خالد",
    location: "بنغازي",
    text: "أكثر حاجة عجبتني المتابعة بعد الخدمة والاهتمام بالتفاصيل.",
    rating: 5,
  },
  {
    name: "عبدالسلام",
    location: "طرابلس",
    text: "الفريق متعاون جداً وفاهم في التسويق بشكل ممتاز.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            آراء العملاء
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            ماذا يقول{" "}
            <span className="text-gradient">عملاؤنا</span> عنا؟
          </h2>
          <p className="text-gray-500 text-lg">
            نفخر بثقة عملائنا ونسعى دائماً لتقديم الأفضل
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg shadow-gray-200/50 card-hover relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 left-6 text-primary-100">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
