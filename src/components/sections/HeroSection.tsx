
import { ArrowRight } from 'lucide-react';
import { CustomButton as Button } from '../ui/CustomButton';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cloud-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cloud-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-float">
            <span className="px-4 py-1.5 rounded-full bg-cloud-950 border border-cloud-900 text-xs font-medium text-cloud-400 inline-block mb-6">
              Next-Generation Cloud Solutions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slide-up text-gradient">
            Empower Your Business with Next-Gen Cloud Solutions
          </h1>
          
          <p className="text-night-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-slide-up [animation-delay:200ms]">
            Unlock seamless scalability, robust security, and peak performance with ZoeenCloud's industry-leading IT solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up [animation-delay:400ms]">
            <Link to="/contact">
              <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                Get Started
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in [animation-delay:600ms]">
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="font-semibold text-cloud-400 mb-2">Cloud Infrastructure</h3>
            <p className="text-night-300 text-sm">Scalable and secure cloud solutions tailored for your business needs.</p>
          </div>
          
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="font-semibold text-cloud-400 mb-2">DevOps Automation</h3>
            <p className="text-night-300 text-sm">Streamline development cycles and optimize collaboration workflows.</p>
          </div>
          
          <div className="glass-panel p-6 rounded-xl">
            <h3 className="font-semibold text-cloud-400 mb-2">FinOps Expertise</h3>
            <p className="text-night-300 text-sm">Maximize cost efficiency with our tailored financial operations strategies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
