
import { HeroSection } from '@/components/sections/HeroSection';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { Cloud, Code, DollarSign, Lock, Server, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'High-performance, scalable, and cost-efficient cloud solutions tailored for businesses of all sizes.',
      icon: <Cloud size={24} />,
    },
    {
      title: 'DevOps Automation',
      description: 'Accelerate development cycles, optimize collaboration, and automate workflows with our DevOps solutions.',
      icon: <Code size={24} />,
    },
    {
      title: 'FinOps Optimization',
      description: 'Gain full control over cloud spending and maximize cost efficiency with our tailored FinOps strategies.',
      icon: <DollarSign size={24} />,
    },
    {
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions that safeguard critical business data against evolving cyber threats.',
      icon: <Lock size={24} />,
    },
  ];

  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <main>
        <HeroSection />

        {/* Services Overview */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm text-cloud-400 uppercase tracking-wider">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient">Our Expertise at a Glance</h2>
              <p className="text-night-300 mt-4">
                Comprehensive cloud solutions designed to propel your business forward in the digital landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  className={`animate-fade-in [animation-delay:${200 + index * 100}ms]`}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/services">
                <Button variant="outline" icon={<ArrowRight size={18} />} iconPosition="right">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 relative bg-night-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="p-6 glass-panel rounded-xl animate-slide-in-right [animation-delay:200ms]">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cloud-500/20 p-3 rounded-lg text-cloud-400">
                        <Users size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Industry-Leading Experts</h3>
                        <p className="text-night-300 text-sm">
                          Our team comprises highly skilled cloud architects, DevOps engineers, and security specialists with years of experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 glass-panel rounded-xl animate-slide-in-right [animation-delay:300ms]">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cloud-500/20 p-3 rounded-lg text-cloud-400">
                        <Server size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">24/7 Support & Reliability</h3>
                        <p className="text-night-300 text-sm">
                          We provide round-the-clock assistance to ensure your business operates without disruption.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 glass-panel rounded-xl animate-slide-in-right [animation-delay:400ms]">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cloud-500/20 p-3 rounded-lg text-cloud-400">
                        <CheckCircle size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Tailored Solutions</h3>
                        <p className="text-night-300 text-sm">
                          Every business is unique, and we offer customized solutions tailored to your specific needs and goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-sm text-cloud-400 uppercase tracking-wider">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gradient-blue">
                  Trusted by Businesses of All Sizes
                </h2>
                <p className="text-night-300 mb-8">
                  At ZoeenCloud, we pride ourselves on delivering exceptional cloud solutions that drive business growth and innovation. Our experienced team is committed to providing reliable service, cutting-edge technology, and personalized approaches to each client.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Custom cloud strategies', 'Agile implementation', 'End-to-end security', 'Continuous optimization'].map((item, index) => (
                    <li key={index} className="flex items-center text-night-200">
                      <span className="text-cloud-500 mr-2">
                        <CheckCircle size={16} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/about">
                  <Button variant="primary">Learn More About Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cloud-900/20 to-night-950/80 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Cloud Infrastructure?
              </h2>
              <p className="text-night-300 mb-8 text-lg">
                Let's discuss how ZoeenCloud can help your business leverage the full potential of cloud technology.
              </p>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get in Touch Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
