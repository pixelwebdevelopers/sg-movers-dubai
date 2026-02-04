import { useState, useCallback } from "react";
import { Send, Home, Sofa, Refrigerator, Bed, WashingMachine, DoorClosed, MapPin, MessageSquare, User, Phone } from "lucide-react";
import { z } from "zod";

const homeTypes = [
  { value: "300", label: "Studio", icon: "🏠" },
  { value: "500", label: "1 BHK", icon: "🏡" },
  { value: "800", label: "2 BHK", icon: "🏘️" },
  { value: "1100", label: "3 BHK", icon: "🏰" },
  { value: "1800", label: "Villa", icon: "🏛️" },
];

const items = [
  { id: "sofa", label: "Sofa", icon: Sofa, price: 50 },
  { id: "bed", label: "Bed", icon: Bed, price: 50 },
  { id: "fridge", label: "Fridge", icon: Refrigerator, price: 50 },
  { id: "washing", label: "Washing Machine", icon: WashingMachine, price: 50 },
  { id: "wardrobe", label: "Wardrobe", icon: DoorClosed, price: 0 },
];

const wardrobeOptions = [
  { doors: 1, label: "1 Door", price: 50 },
  { doors: 2, label: "2 Door", price: 70 },
  { doors: 3, label: "3 Door", price: 90 },
  { doors: 4, label: "4 Door", price: 110 },
];

// Validation schema
const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone too long").regex(/^[+\d\s()-]+$/, "Invalid phone format"),
  from: z.string().trim().min(1, "Moving from location is required").max(200, "Location too long"),
  to: z.string().trim().min(1, "Moving to location is required").max(200, "Location too long"),
  notes: z.string().max(500, "Notes too long").optional(),
});

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bhk: "",
    from: "",
    to: "",
    notes: "",
  });
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [wardrobeDoors, setWardrobeDoors] = useState<number>(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const calculatePrice = useCallback(() => {
    const basePrice = parseInt(formData.bhk) || 0;
    // Exclude wardrobe from items count - wardrobe price comes from door selection only
    const regularItems = selectedItems.filter(id => id !== "wardrobe");
    const itemsPrice = regularItems.length * 50;
    const wardrobePrice = wardrobeDoors > 0 ? (wardrobeOptions.find(w => w.doors === wardrobeDoors)?.price || 0) : 0;
    const route = (formData.from + formData.to).toLowerCase();
    const abuDhabiSurcharge = route.includes("abu dhabi") ? 400 : 0;
    return basePrice + itemsPrice + wardrobePrice + abuDhabiSurcharge;
  }, [formData.bhk, formData.from, formData.to, selectedItems, wardrobeDoors]);

  const handleItemToggle = (itemId: string) => {
    setSelectedItems((prev) => {
      const isRemoving = prev.includes(itemId);
      // Reset wardrobe doors if wardrobe is being deselected
      if (itemId === "wardrobe" && isRemoving) {
        setWardrobeDoors(0);
      }
      return isRemoving ? prev.filter((id) => id !== itemId) : [...prev, itemId];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const validation = quoteSchema.safeParse(formData);
    if (!validation.success) {
      const newErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    if (!formData.bhk) {
      setErrors({ bhk: "Please select home size" });
      return;
    }

    const bhkLabel = homeTypes.find((h) => h.value === formData.bhk)?.label || "";
    let selectedItemLabels = items
      .filter((item) => selectedItems.includes(item.id))
      .map((item) => item.label)
      .join(", ");
    
    if (wardrobeDoors > 0) {
      const wardrobeLabel = `Wardrobe (${wardrobeDoors} Door)`;
      selectedItemLabels = selectedItemLabels ? `${selectedItemLabels}, ${wardrobeLabel}` : wardrobeLabel;
    }
    
    if (!selectedItemLabels) selectedItemLabels = "None";

    const message = `🏠 *SG Movers Quote Request*

👤 *Name:* ${formData.name.trim()}
📱 *Phone:* ${formData.phone.trim()}
🏡 *Home Size:* ${bhkLabel}
📦 *Items:* ${selectedItemLabels}
📍 *From:* ${formData.from.trim()}
📍 *To:* ${formData.to.trim()}
📝 *Notes:* ${formData.notes?.trim() || "N/A"}
💰 *Estimated Price:* AED ${calculatePrice()}`;

    window.open(
      `https://wa.me/971524621082?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const price = calculatePrice();

  return (
    <section id="quote" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-cta/10 text-cta text-sm font-semibold rounded-full mb-4">
              Get Your Quote
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Instant Moving
              <span className="text-cta"> Estimate</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill in the details below and get an instant price estimate sent to WhatsApp
            </p>
          </div>

          {/* Quote Card */}
          <div className="bg-card rounded-3xl shadow-medium p-6 md:p-10 border border-border/50">
            {/* Price Display */}
            <div className="bg-gradient-hero rounded-2xl p-6 mb-8 text-center">
              <p className="text-primary-foreground/70 text-sm mb-1">Estimated Price</p>
              <div className="flex items-baseline justify-center gap-2">
                {price > 0 ? (
                  <>
                    <span className="text-5xl md:text-6xl font-bold text-primary-foreground">
                      {price}
                    </span>
                    <span className="text-2xl text-secondary font-semibold">AED</span>
                  </>
                ) : (
                  <span className="text-2xl md:text-3xl font-bold text-primary-foreground/80">
                    Select home size to see estimate
                  </span>
                )}
              </div>
              <p className="text-primary-foreground/50 text-xs mt-2">
                *Final price may vary based on actual requirements
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <User className="w-4 h-4 text-secondary" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3.5 bg-muted/50 border ${errors.name ? 'border-destructive' : 'border-border'} rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all`}
                    placeholder="Enter your name"
                    maxLength={100}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3.5 bg-muted/50 border ${errors.phone ? 'border-destructive' : 'border-border'} rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all`}
                    placeholder="+971 XX XXX XXXX"
                    maxLength={20}
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Home Size */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                  <Home className="w-4 h-4 text-secondary" />
                  Home Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {homeTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, bhk: type.value })}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        formData.bhk === type.value
                          ? "border-secondary bg-secondary/10 shadow-glow"
                          : "border-border hover:border-secondary/50"
                      }`}
                    >
                      <span className="text-2xl block mb-1">{type.icon}</span>
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
                {errors.bhk && <p className="text-destructive text-xs mt-1">{errors.bhk}</p>}
              </div>

              {/* Items */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-3 block">
                  Additional Items (+50 AED each)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleItemToggle(item.id)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedItems.includes(item.id)
                          ? "border-secondary bg-secondary/10"
                          : "border-border hover:border-secondary/50"
                      }`}
                    >
                      <item.icon className={`w-5 h-5 ${selectedItems.includes(item.id) ? 'text-secondary' : 'text-muted-foreground'}`} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Wardrobe Door Selection - Only show when wardrobe is selected */}
              {selectedItems.includes("wardrobe") && (
                <div className="animate-in slide-in-from-top-2 duration-300">
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                    <DoorClosed className="w-4 h-4 text-secondary" />
                    Select Wardrobe Door Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {wardrobeOptions.map((option) => (
                      <button
                        key={option.doors}
                        type="button"
                        onClick={() => setWardrobeDoors(wardrobeDoors === option.doors ? 0 : option.doors)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-300 ${
                          wardrobeDoors === option.doors
                            ? "border-secondary bg-secondary/10"
                            : "border-border hover:border-secondary/50"
                        }`}
                      >
                        <DoorClosed className={`w-6 h-6 ${wardrobeDoors === option.doors ? 'text-secondary' : 'text-muted-foreground'}`} />
                        <span className="text-sm font-medium">{option.label}</span>
                        <span className={`text-xs ${wardrobeDoors === option.doors ? 'text-secondary' : 'text-muted-foreground'}`}>
                          +{option.price} AED
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Locations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    Moving From
                  </label>
                  <input
                    type="text"
                    value={formData.from}
                    onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                    className={`w-full px-4 py-3.5 bg-muted/50 border ${errors.from ? 'border-destructive' : 'border-border'} rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all`}
                    placeholder="e.g., Dubai Marina"
                    maxLength={200}
                  />
                  {errors.from && <p className="text-destructive text-xs mt-1">{errors.from}</p>}
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <MapPin className="w-4 h-4 text-cta" />
                    Moving To
                  </label>
                  <input
                    type="text"
                    value={formData.to}
                    onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                    className={`w-full px-4 py-3.5 bg-muted/50 border ${errors.to ? 'border-destructive' : 'border-border'} rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all`}
                    placeholder="e.g., Downtown Dubai"
                    maxLength={200}
                  />
                  {errors.to && <p className="text-destructive text-xs mt-1">{errors.to}</p>}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                  <MessageSquare className="w-4 h-4 text-secondary" />
                  Extra Notes (Optional)
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                  rows={3}
                  placeholder="Any special requirements or additional items..."
                  maxLength={500}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-cta text-cta-foreground font-bold text-lg rounded-xl shadow-cta hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Get Exact Quote on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;