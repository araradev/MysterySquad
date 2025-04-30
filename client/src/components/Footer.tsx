import { useState, useEffect } from "react";
import { Heart, Expand, CheckSquare, ArrowUp } from "lucide-react";
import { coupleNames } from "@/data/constants";

const Footer = () => {
  const [fontSizeLevel, setFontSizeLevel] = useState(0);
  const [highContrast, setHighContrast] = useState(false);

  const fontSizes = [
    { body: '1rem', heading: '1em' },
    { body: '1.1rem', heading: '1.1em' },
    { body: '1.2rem', heading: '1.2em' }
  ];

  // Function to increase font size
  const increaseFontSize = () => {
    const newLevel = (fontSizeLevel + 1) % fontSizes.length;
    setFontSizeLevel(newLevel);
    
    document.body.style.fontSize = fontSizes[newLevel].body;
    document.querySelectorAll('.font-heading').forEach(el => {
      (el as HTMLElement).style.fontSize = fontSizes[newLevel].heading;
    });
  };

  // Function to toggle high contrast
  const toggleContrast = () => {
    const newContrast = !highContrast;
    setHighContrast(newContrast);
    
    if (newContrast) {
      // Add high contrast styles
      document.documentElement.style.setProperty('--color-primary', '#ff4081');
      document.documentElement.style.setProperty('--color-bg', '#000000');
      document.documentElement.style.setProperty('--color-text', '#ffffff');
    } else {
      // Remove high contrast styles
      document.documentElement.style.setProperty('--color-primary', '');
      document.documentElement.style.setProperty('--color-bg', '');
      document.documentElement.style.setProperty('--color-text', '');
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-heading text-2xl font-bold text-primary mb-2">Nossa História de Amor</h2>
            <p className="text-white/80">Celebrando nossa jornada juntos</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="mb-2 text-white/80">
              Feito com <Heart className="inline text-primary" size={16} /> por nós
            </p>
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} - Todos os direitos reservados</p>
            
            {/* Accessibility options */}
            <div className="mt-4 flex space-x-3">
              <button 
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Voltar ao topo"
                onClick={scrollToTop}
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
