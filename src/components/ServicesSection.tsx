import { Package, Truck, Shield, Clock, Home, Building2 } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Room Shifting",
    description: "Quick and efficient room-to-room shifting with professional handling of all your belongings.",
  },
  {
    icon: Package,
    title: "Professional Packing",
    description: "Expert packing services using high-quality materials to ensure your items stay safe.",
  },
  {
    icon: Home,
    title: "Villa Moving",
    description: "Complete villa relocation services including furniture disassembly and reassembly.",
  },
  {
    icon: Building2,
    title: "Office Moving",
    description: "Seamless commercial moves with minimal downtime for your business operations.",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    description: "Your valuables are protected with our careful handling and secure transport.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect your time with punctual pickup and on-schedule delivery.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need for a
            <span className="text-secondary"> Smooth Move</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From packing to delivery, we handle every aspect of your relocation with care and professionalism.
          </p>
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
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
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