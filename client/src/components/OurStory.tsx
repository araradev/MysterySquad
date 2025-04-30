import { Calendar } from "lucide-react";
import { storyTimeline } from "@/data/constants";

const OurStory = () => {
  return (
    <section id="nossa-historia" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-primary text-center font-bold mb-16">Nossa História</h2>
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 items-center">
          {storyTimeline.map((story, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
              {index % 2 === 0 ? (
                <>
                  <div className="w-full md:w-1/2">
                    <div className="photo-container">
                      <div className="photo-card shadow-lg rounded-lg overflow-hidden">
                        <img 
                          src={story.imageUrl}
                          alt={story.imageAlt} 
                          className="w-full h-90 object-cover transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="font-heading text-2xl text-dark font-semibold mb-4">{story.title}</h3>
                    <p className="text-dark/80 mb-6">{story.description}</p>
                    <p className="text-dark/80">
                      <Calendar className="inline mr-2 text-primary" size={16} /> {story.date}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full md:w-1/2 order-2 md:order-1">
                    <h3 className="font-heading text-2xl text-dark font-semibold mb-4">{story.title}</h3>
                    <p className="text-dark/80 mb-6">{story.description}</p>
                    <p className="text-dark/80">
                      <Calendar className="inline mr-2 text-primary" size={16} /> {story.date}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 order-1 md:order-2">
                    <div className="photo-container">
                      <div className="photo-card shadow-lg rounded-lg overflow-hidden">
                        <img 
                          src={story.imageUrl}
                          alt={story.imageAlt} 
                          className="w-full h-90 object-cover transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
