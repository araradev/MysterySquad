import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { photosGallery } from "@/data/constants";

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPhotos = photosGallery.length;

  // Function to show next photo
  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPhotos);
  };

  // Function to show previous photo
  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPhotos) % totalPhotos);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevPhoto();
      } else if (e.key === "ArrowRight") {
        nextPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="galeria" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-primary text-center font-bold mb-16">
          Nossos Momentos
        </h2>
        
        {/* Gallery controls */}
        <div className="flex justify-center items-center mb-8">
          <button 
            className="bg-white p-3 rounded-full shadow-md hover:bg-gray-50 focus:outline-none mr-4"
            aria-label="Foto anterior"
            onClick={prevPhoto}
          >
            <ChevronLeft className="text-primary" size={20} />
          </button>
          
          <div className="text-center">
            <span className="font-medium">{currentIndex + 1}</span>
            <span className="mx-1">/</span>
            <span>{totalPhotos}</span>
          </div>
          
          <button 
            className="bg-white p-3 rounded-full shadow-md hover:bg-gray-50 focus:outline-none ml-4"
            aria-label="Próxima foto"
            onClick={nextPhoto}
          >
            <ChevronRight className="text-primary" size={20} />
          </button>
        </div>
        
        {/* Photo carousel container */}
        <div className="relative w-full max-w-4xl mx-auto h-96 md:h-[500px] rounded-lg shadow-xl overflow-hidden">
          {photosGallery.map((photo, index) => (
            <div 
              key={index}
              className="photo-slide absolute inset-0 transition-opacity duration-500" 
              style={{ opacity: index === currentIndex ? 1 : 0 }}
            >
              <img 
                src={photo.imageUrl}
                alt={photo.caption} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-dark bg-opacity-60 text-white p-4">
                <p className="text-lg font-medium">{photo.caption}</p>
                <p className="text-sm opacity-80">{photo.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Thumbnail navigation for larger screens */}
        <div className="hidden md:flex justify-center mt-8 space-x-2 overflow-x-auto">
          {photosGallery.map((photo, index) => (
            <button 
              key={`thumb-${index}`}
              className="thumbnail-btn w-20 h-20 rounded overflow-hidden border-2 focus:outline-none" 
              style={{ borderColor: index === currentIndex ? '#d23669' : 'transparent' }}
              aria-label={`Ver foto ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img 
                src={photo.imageUrl}
                alt={`Miniatura - ${photo.caption}`} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
