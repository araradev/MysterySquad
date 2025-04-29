import { loveMessageDetail } from "@/data/constants";

const LoveMessage = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">Nossa Mensagem de Amor</h2>
        
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-lg">
          <p className="text-xl md:text-2xl font-heading italic mb-6">
            {loveMessageDetail.content}
          </p>
          
          <p className="text-lg font-medium">{loveMessageDetail.signature}</p>
        </div>
      </div>
    </section>
  );
};

export default LoveMessage;
