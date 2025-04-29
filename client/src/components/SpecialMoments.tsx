import { Calendar } from "lucide-react";
import { specialMoments } from "@/data/constants";

const SpecialMoments = () => {
  return (
    <section id="momentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-primary text-center font-bold mb-16">
          Momentos Especiais
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialMoments.map((moment, index) => (
            <div 
              key={index}
              className="bg-light rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <img 
                src={moment.imageUrl}
                alt={moment.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">{moment.title}</h3>
                <p className="text-dark/80 mb-4">{moment.description}</p>
                <p className="text-sm text-dark/60">
                  <Calendar className="inline mr-2 text-primary" size={16} /> {moment.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialMoments;
