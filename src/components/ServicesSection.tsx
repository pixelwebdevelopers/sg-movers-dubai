import { Package, Truck, Shield, Clock, Home, Building2 } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Truck,
      titleKey: "roomShifting" as const,
      descKey: "roomShiftingDesc" as const,
    },
    {
      icon: Package,
      titleKey: "packingServices" as const,
      descKey: "packingServicesDesc" as const,
    },
    {
      icon: Home,
      titleKey: "villaMoving" as const,
      descKey: "villaMovingDesc" as const,
    },
    {
      icon: Building2,
      titleKey: "officeMoving" as const,
      descKey: "officeMovingDesc" as const,
    },
    {
      icon: Shield,
      titleKey: "safe" as const,
      descKey: "safeDesc" as const,
    },
    {
      icon: Clock,
      titleKey: "punctual" as const,
      descKey: "punctualDesc" as const,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            {t("servicesTitle")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("servicesSubtitle")}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-gradient-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-secondary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(service.descKey)}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secondary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;