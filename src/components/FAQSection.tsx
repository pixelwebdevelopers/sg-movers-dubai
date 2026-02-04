import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Which areas do you serve?",
    answer: "We primarily provide moving services in Dubai and Sharjah. In addition, we also offer inter-emirate moving services across all UAE, including Abu Dhabi, Ajman, and other Emirates.",
  },
  {
    question: "How much does moving cost in Dubai or Sharjah?",
    answer: "Moving costs depend on factors such as home size, distance, and packing requirements. We offer competitive and transparent pricing, and the exact moving quote is shared instantly on WhatsApp after receiving your details.",
  },
  {
    question: "Do you provide packing services and materials?",
    answer: "Yes. We provide professional packing services using high-quality packing materials to ensure the safety of your belongings during the move.",
  },
  {
    question: "How early should I book your moving service?",
    answer: "For Dubai and Sharjah moves, we recommend booking at least 1–2 days in advance. For large homes or inter-emirate moves, early booking is advised.",
  },
  {
    question: "Do you handle villa and office moving?",
    answer: "Yes. We specialize in villa moving, apartment shifting, and office relocation, ensuring safe handling and minimal disruption.",
  },
  {
    question: "Do you provide moving services across all UAE?",
    answer: "Yes. While our main operations are in Dubai and Sharjah, we also provide moving services across all Emirates of the UAE upon request.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            Questions?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our moving services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-semibold text-foreground text-lg">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="pl-14 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
