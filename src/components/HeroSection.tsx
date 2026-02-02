import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/sg-movers-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";
import { useLanguage } from "./LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToQuote = () => {
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image - Desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Background Image - Mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${heroBgMobile})` }}
      />

      {/* Dark Navy Overlay - reduced opacity for better image visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215,60%,12%)]/75 via-[hsl(215,50%,18%)]/70 to-[hsl(200,45%,20%)]/75" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48L2c+PC9zdmc+')] opacity-30" />

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-slide-up">
          <img
            src={logo}
            alt="SG Movers"
            className="h-24 md:h-32 lg:h-40 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Special Offer Badge */}
        <div
          className="flex justify-center mb-6 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-cta/30 shadow-cta">
            <Sparkles className="w-4 h-4 text-cta" />
            <span className="text-sm font-semibold text-cta">
              {t("specialOffer")}
            </span>
            <Sparkles className="w-4 h-4 text-cta" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("heroTitle1")}
            <span className="block mt-2 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {t("heroTitle2")}
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            {t("heroDescription")}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={scrollToQuote}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-cta text-cta-foreground font-bold rounded-full shadow-cta hover:scale-105 transition-all duration-300"
            >
              {t("getQuote")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </button>
            <a
              href="https://wa.me/971524621082"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-primary-foreground font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("chatWhatsApp")}
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-12 flex flex-wrap justify-center gap-8 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { number: "500+", label: t("happyCustomers") },
              { number: "24/7", label: t("support") },
              { number: "100%", label: t("satisfaction") },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-secondary">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

