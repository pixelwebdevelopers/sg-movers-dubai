import logo from "@/assets/sg-movers-logo.png";
import pixelLogo from "@/assets/pixel-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img src={logo} alt="SG Movers" className="h-16 w-auto mb-6 brightness-0 invert" />

          {/* Main Title */}
          <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-4">
            SG Movers – Professional Movers & Packers in UAE
          </h3>

          {/* Service Areas */}
          <p className="text-primary-foreground/70 text-lg mb-2">
            Serving Dubai, Sharjah & All Emirates
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-primary-foreground/80 text-sm">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              5+ Years Experience
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-primary-foreground/80 text-sm">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              Licensed & Insured Movers
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#quote" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Get Quote
            </a>
            <a href="#faq" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Contact
            </a>
            <a 
              href="https://wa.me/971524621082" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-secondary transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-primary-foreground/10 mb-6" />

          {/* Copyright */}
          <p className="text-primary-foreground/40 text-sm mb-4">
            © 2026 SG Movers. All rights reserved.
          </p>

          {/* Developer Credit */}
          <a
            href="https://www.pixelwebdevelopers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-primary-foreground/30 hover:text-primary-foreground/60 transition-all duration-300"
          >
            <span className="text-xs">Developed by</span>
            <img 
              src={pixelLogo} 
              alt="Pixel Web Developers" 
              className="h-5 w-5 rounded opacity-60 group-hover:opacity-100 transition-opacity"
            />
            <span className="text-xs font-medium group-hover:underline">Pixel Web Developers</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;