import { CheckCircle2, Award, HeartHandshake, Banknote } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Fast & Efficient",
    description: "Quick turnaround times without compromising on quality of service.",
  },
  {
    icon: HeartHandshake,
    title: "Professional Team",
    description: "Trained movers who handle your belongings with care and respect.",
  },
  {
    icon: Banknote,
    title: "Affordable Rates",
    description: "Competitive pricing with no hidden costs. Get value for your money.",
  },
  {
    icon: Award,
    title: "100% Satisfaction",
    description: "We're not happy until you are. Your satisfaction is our priority.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary text-sm font-semibold rounded-full mb-6">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Moving Made
              <span className="block text-secondary">Simple & Stress-Free</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed">
              With years of experience serving customers across UAE, we understand what 
              it takes to make your move smooth and hassle-free. Trust the experts who care.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-secondary">5+</div>
                <div className="text-sm text-primary-foreground/60">Years Experience</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-primary-foreground/60">Happy Clients</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-secondary">7</div>
                <div className="text-sm text-primary-foreground/60">Emirates Covered</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;