import { useState } from "react";

const faqs = [
  {
    question: "كم تستغرق مدة تنفيذ الموقع؟",
    answer:
      "تختلف حسب حجم المشروع، وعادة تتراوح بين 3 إلى 14 يوماً.",
  },
  {
    question: "هل توفرون دعماً بعد التسليم؟",
    answer:
      "نعم، نوفر خدمات دعم ومتابعة مستمرة بعد التسليم لضمان رضاكم التام.",
  },
  {
    question: "هل يمكن إدارة صفحات التواصل الاجتماعي؟",
    answer:
      "نعم، نوفر إدارة كاملة للصفحات ووضع الخطط التسويقية المناسبة لنشاطك التجاري.",
  },
  {
    question: "هل يمكن استهداف العملاء داخل ليبيا وخارجها؟",
    answer:
      "نعم، نقوم بإدارة الحملات الإعلانية محلياً ودولياً للوصول إلى جمهورك المستهدف أينما كان.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            الأسئلة الشائعة
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            الأسئلة{" "}
            <span className="text-gradient">الشائعة</span>
          </h2>
          <p className="text-gray-500 text-lg">
            إجابات على أكثر الأسئلة التي نتلقاها من عملائنا
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-primary-200 bg-primary-50/50 shadow-lg shadow-primary-100/30"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-right"
              >
                <span
                  className={`text-lg font-bold transition-colors ${
                    openIndex === index ? "text-primary-700" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-primary-500 text-white rotate-180"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48 pb-5 px-5 lg:px-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
