import logo from "@/assets/sg-movers-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img src={logo} alt="SG Movers" className="h-16 w-auto mb-6 brightness-0 invert" />

          {/* Tagline */}
          <p className="text-primary-foreground/70 text-lg mb-6">
            Hassle-Free Moving Services
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#quote" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Get Quote
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
          <p className="text-primary-foreground/40 text-sm">
            © {currentYear} SG Movers UAE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;