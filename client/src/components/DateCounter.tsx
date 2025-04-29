import { useState, useEffect } from "react";
import { calculateTimeTogether } from "@/lib/dates";
import { relationshipStartDate } from "@/data/constants";

const DateCounter = () => {
  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0
  });

  useEffect(() => {
    // Initial calculation
    updateCounter();
    
    // Set up a timer to update daily
    const timer = setInterval(() => {
      updateCounter();
    }, 86400000); // 24 hours
    
    return () => clearInterval(timer);
  }, []);

  const updateCounter = () => {
    const time = calculateTimeTogether(relationshipStartDate);
    setTimeTogether(time);
  };
  
  return (
    <div 
      className="counter-container bg-dark bg-opacity-40 backdrop-blur-sm rounded-xl p-6 inline-block animate-fadeInUp"
      style={{ animationDelay: "0.6s" }}
    >
      <h2 className="text-white text-lg mb-3">Estamos juntos há:</h2>
      <div className="flex justify-center space-x-4 text-white">
        <div className="text-center">
          <span className="block text-3xl md:text-4xl font-bold text-primary">{timeTogether.years}</span>
          <span className="text-sm">{timeTogether.years === 1 ? "Ano" : "Anos"}</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl md:text-4xl font-bold text-primary">{timeTogether.months}</span>
          <span className="text-sm">{timeTogether.months === 1 ? "Mês" : "Meses"}</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl md:text-4xl font-bold text-primary">{timeTogether.days}</span>
          <span className="text-sm">{timeTogether.days === 1 ? "Dia" : "Dias"}</span>
        </div>
      </div>
    </div>
  );
};

export default DateCounter;
