import { Phone, Mail, Instagram, MapPin } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const phoneNumbers = [
  { number: "+971 52 462 1082", primary: true },
];

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            {t("contactTitle")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("contactSubtitle")}
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* WhatsApp Numbers */}
          <div className="lg:col-span-2 bg-card rounded-2xl shadow-soft p-8 border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">WhatsApp / Call</h3>
                <p className="text-muted-foreground text-sm">{t("workingHoursValue")}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {phoneNumbers.map((phone, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${phone.number.replace(/\s/g, "").replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                    phone.primary
                      ? "bg-[#25D366] text-white hover:bg-[#20BD5C]"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="font-semibold">{phone.number}</span>
                  {phone.primary && (
                    <span className="ml-auto text-xs bg-white/20 px-2 py-0.5 rounded-full">Main</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Email & Social */}
          <div className="space-y-6">
            {/* Email */}
            <a
              href="mailto:info@sgmovers.ae"
              className="group flex items-center gap-4 bg-card rounded-2xl shadow-soft p-6 border border-border/50 hover:shadow-medium transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{t("emailLabel")}</h3>
                <p className="text-muted-foreground text-sm">info@sgmovers.ae</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/sgmoversuae"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-2xl shadow-soft p-6 hover:shadow-medium transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">{t("followUs")}</h3>
                <p className="text-white/80 text-sm">@sgmoversuae</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 bg-card rounded-2xl shadow-soft p-6 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{t("address")}</h3>
                <p className="text-muted-foreground text-sm">{t("addressValue")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;