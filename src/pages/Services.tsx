
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { Cloud, Code, DollarSign, Lock, Shield, Server, Database, BarChart, Zap, Globe, Settings, Cpu } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'High-performance, scalable, and cost-efficient cloud solutions tailored for businesses of all sizes.',
      icon: <Cloud size={24} />,
      features: ['Multi-cloud strategy', 'Infrastructure as Code', 'Migration services', 'Performance optimization'],
    },
    {
      title: 'DevOps Automation',
      description: 'Accelerate development cycles, optimize collaboration, and automate workflows with our DevOps solutions.',
      icon: <Code size={24} />,
      features: ['CI/CD pipeline implementation', 'Containerization', 'Microservices architecture', 'Automated testing'],
    },
    {
      title: 'FinOps Optimization',
      description: 'Gain full control over cloud spending and maximize cost efficiency with our tailored FinOps strategies.',
      icon: <DollarSign size={24} />,
      features: ['Cost analysis & forecasting', 'Resource optimization', 'Budget management', 'Spending accountability'],
    },
    {
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions that safeguard critical business data against evolving cyber threats.',
      icon: <Lock size={24} />,
      features: ['Threat detection & response', 'Identity management', 'Compliance solutions', 'Security assessments'],
    },
  ];

  const additionalServices = [
    {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with our comprehensive analytics solutions.',
      icon: <BarChart size={24} />,
    },
    {
      title: 'Disaster Recovery',
      description: 'Ensure business continuity with robust recovery solutions designed for minimal downtime.',
      icon: <Shield size={24} />,
    },
    {
      title: 'Serverless Computing',
      description: 'Build scalable applications without managing infrastructure using serverless architecture.',
      icon: <Cpu size={24} />,
    },
    {
      title: 'Container Orchestration',
      description: 'Optimize application deployment and management with Kubernetes and Docker solutions.',
      icon: <Settings size={24} />,
    },
    {
      title: 'Database Management',
      description: 'Expert management of SQL, NoSQL, and distributed database systems for optimal performance.',
      icon: <Database size={24} />,
    },
    {
      title: 'Global CDN',
      description: 'Deliver content with lightning speed to users worldwide through our content delivery network.',
      icon: <Globe size={24} />,
    },
  ];

  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <main className="pt-24">
        {/* Header Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm text-cloud-400 uppercase tracking-wider">Our Services</span>
              <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-gradient">
                Our Expertise at a Glance
              </h1>
              <p className="text-night-300 text-lg leading-relaxed">
                We offer a comprehensive suite of cloud solutions designed to optimize your IT infrastructure, enhance security, and drive business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-12">
              {mainServices.map((service, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                    <div className="bg-gradient-to-br from-cloud-600/10 to-transparent rounded-2xl p-1">
                      <div className="glass-card rounded-2xl p-8 h-full">
                        <div className="bg-gradient-to-br from-cloud-500/20 to-cloud-700/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-cloud-400">
                          {service.icon}
                        </div>
                        <h2 className="text-2xl font-semibold text-white mb-4">{service.title}</h2>
                        <p className="text-night-300 mb-6 leading-relaxed">{service.description}</p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-cloud-500 mt-1">
                                <Zap size={16} />
                              </span>
                              <span className="text-night-200">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                    <div className="relative aspect-video glass-panel rounded-2xl overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Server size={120} className="text-night-800 opacity-20" />
                      </div>
                      <div className="relative z-10 text-center p-8">
                        <h3 className="text-xl font-semibold text-gradient-blue mb-4">
                          {index === 0 ? 'Scale With Confidence' : 
                           index === 1 ? 'Accelerate Development' : 
                           index === 2 ? 'Optimize Your Spending' : 'Secure Your Business'}
                        </h3>
                        <p className="text-night-300 mb-6">
                          {index === 0 ? 'Our cloud infrastructure solutions provide the reliability and flexibility your business needs to grow.' : 
                           index === 1 ? 'Streamline your development pipeline and deliver better software, faster.' : 
                           index === 2 ? 'Take control of your cloud costs with our expert FinOps services.' : 'Protect your valuable data with enterprise-grade security solutions.'}
                        </p>
                        <Button variant="outline" size="sm">Learn More</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-night-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm text-cloud-400 uppercase tracking-wider">Additional Offerings</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gradient-blue">
                Specialized Solutions
              </h2>
              <p className="text-night-300">
                Beyond our core services, we offer specialized solutions to address specific business needs and technical challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {additionalServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  className="animate-fade-in [animation-delay:200ms]"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm text-cloud-400 uppercase tracking-wider">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gradient">
                How We Work
              </h2>
              <p className="text-night-300">
                Our proven methodology ensures successful implementation and ongoing optimization of your cloud solutions.
              </p>
            </div>

            <div className="relative">
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-night-800 transform -translate-x-1/2 hidden md:block"></div>
              
              <div className="space-y-12 relative">
                {['Discovery & Assessment', 'Strategic Planning', 'Implementation', 'Monitoring & Optimization'].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="md:grid md:grid-cols-2 gap-8 items-center">
                      <div className={`mb-8 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : ''} relative`}>
                        <div className={`glass-panel p-6 rounded-xl ${index % 2 === 0 ? 'ml-0 mr-0 md:mr-8' : 'ml-0 md:ml-8 mr-0'}`}>
                          <div className="absolute top-1/2 -translate-y-1/2 hidden md:block w-4 h-4 rounded-full bg-cloud-500 z-10 border-4 border-night-950
                            ${index % 2 === 0 ? 'right-0 translate-x-10' : 'left-0 -translate-x-10'}">
                          </div>
                          <span className="text-cloud-400 text-sm font-medium mb-2 inline-block">Step {index + 1}</span>
                          <h3 className="text-xl font-semibold text-white mb-3">{step}</h3>
                          <p className="text-night-300">
                            {index === 0 ? 'We begin by thoroughly understanding your current infrastructure, challenges, and business objectives.' : 
                             index === 1 ? 'Based on our assessment, we develop a comprehensive strategy tailored to your specific needs.' : 
                             index === 2 ? 'Our expert team implements the solutions efficiently, with minimal disruption to your operations.' : 
                             'We continuously monitor and optimize your systems to ensure peak performance and cost-efficiency.'}
                          </p>
                        </div>
                      </div>
                      
                      <div className={index % 2 === 0 ? 'hidden md:block' : 'hidden md:block'}></div>
                    </div>
                  </div>
                ))}
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
                Let's Build Your Cloud Strategy
              </h2>
              <p className="text-night-300 mb-8 text-lg">
                Ready to transform your IT infrastructure? Contact us today to discuss how our services can benefit your business.
              </p>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Schedule a Consultation
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

export default Services;
