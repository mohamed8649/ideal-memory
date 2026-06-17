export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-gradient">لمسة</span>{" "}
                <span className="text-white">للإعلانات</span>
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              شركة متخصصة في التسويق الرقمي وتصميم الجرافيك والحلول الإبداعية،
              نساعدك على تحقيق أفضل النتائج التسويقية.
            </p>
            {/* Social */}
            <a
              href="https://www.facebook.com/share/197XeUjsXz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-sm"
            >
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              فيسبوك
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { href: "#hero", label: "الرئيسية" },
                { href: "#about", label: "من نحن" },
                { href: "#services", label: "خدماتنا" },
                { href: "#testimonials", label: "آراء العملاء" },
                { href: "#faq", label: "الأسئلة الشائعة" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">خدماتنا</h4>
            <ul className="space-y-3">
              {[
                "الإعلانات الممولة",
                "تصميم المواقع الإلكترونية",
                "تصميم الفيديوهات",
                "تصميم الجرافيك",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+218934900043"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <span>📞</span>
                  <span dir="ltr">0934900043</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/218934900043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <span>📱</span>
                  <span dir="ltr">0934900043</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <span>📍</span>
                <span>عين زارة - طريق المشتل</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm leading-relaxed">
            © 2026 جميع الحقوق محفوظة.{" "}
            <span className="text-gray-400">
              تم تصميم وتطوير هذا الموقع بواسطة{" "}
            </span>
            <a
              href="https://www.facebook.com/share/197XeUjsXz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 font-semibold underline underline-offset-4 transition-colors"
            >
              شركة لمسة للإعلانات والتسويق
            </a>
          </p>
          <div className="flex justify-center items-center gap-4 mt-3">
            <a
              href="https://www.facebook.com/share/197XeUjsXz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="فيسبوك"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="tel:+218934900043"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="اتصل"
            >
              <span dir="ltr">0934900043</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
