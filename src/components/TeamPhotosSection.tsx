import { Truck, Users, Package } from "lucide-react";

const TeamPhotosSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            Meet Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Professional Moving Team
          </h2>
          <p className="text-muted-foreground text-lg">
            Experienced, trained, and dedicated to making your move smooth and stress-free.
          </p>
        </div>

        {/* Team Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Professional Crew */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-hero p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                Trained Professionals
              </h3>
              <p className="text-primary-foreground/70">
                Our team is professionally trained to handle all types of moves with care and precision.
              </p>
            </div>
          </div>

          {/* Modern Fleet */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-hero p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Truck className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                Modern Fleet
              </h3>
              <p className="text-primary-foreground/70">
                Well-maintained trucks equipped for safe and efficient transportation of your belongings.
              </p>
            </div>
          </div>

          {/* Quality Packing */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-hero p-8 text-center hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Package className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                Quality Packing
              </h3>
              <p className="text-primary-foreground/70">
                Premium packing materials and techniques to ensure your items arrive safely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPhotosSection;
