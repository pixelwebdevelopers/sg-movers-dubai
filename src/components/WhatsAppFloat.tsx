import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/971524621082"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative flex items-center gap-2 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-lg hover:bg-[#20BD5C] hover:scale-105 transition-all duration-300">
          <MessageCircle className="w-6 h-6" />
          <span className="font-semibold hidden sm:inline">WhatsApp</span>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;