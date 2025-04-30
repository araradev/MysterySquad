import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen to scroll events to add shadow and background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to close mobile menu and scroll to section
  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for header height
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-light bg-opacity-90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-primary font-heading text-xl md:text-2xl font-bold">Nossa História</h1>
        </div>
        
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#inicio" 
                className=" text-primary hover:text-gray-50 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("inicio");
                }}
              >
                Início
              </a>
            </li>
            <li>
              <a 
                href="#nossa-historia" 
                className=" text-primary hover:text-gray-50 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("nossa-historia");
                }}
              >
                Nossa História
              </a>
            </li>
            <li>
              <a 
                href="#galeria" 
                className=" text-primary hover:text-gray-50 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("galeria");
                }}
              >
                Galeria
              </a>
            </li>
            <li>
              <a 
                href="#momentos" 
                className=" text-primary hover:text-gray-50 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("momentos");
                }}
              >
                Momentos
              </a>
            </li>
          </ul>
        </div>
        
        <button 
          id="menu-toggle" 
          className="md:hidden text-primary hover:text-gray-50 focus:outline-none"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-light bg-opacity-95 w-full px-4 py-3 shadow-md ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-3">
          <li>
            <a 
              href="#inicio" 
              className="block text-primary hover:text-gray-50 transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("inicio");
              }}
            >
              Início
            </a>
          </li>
          <li>
            <a 
              href="#nossa-historia" 
              className="block text-primary hover:text-gray-50 transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("nossa-historia");
              }}
            >
              Nossa História
            </a>
          </li>
          <li>
            <a 
              href="#galeria" 
              className="block text-primary hover:text-gray-50 transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("galeria");
              }}
            >
              Galeria
            </a>
          </li>
          <li>
            <a 
              href="#momentos" 
              className="block text-primary hover:text-gray-50 transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("momentos");
              }}
            >
              Momentos
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
