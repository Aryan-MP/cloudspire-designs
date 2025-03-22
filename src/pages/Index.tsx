
import { ServiceCard } from '@/components/sections/ServiceCard';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { CustomButton as Button } from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';
import { 
  Cloud, Code, DollarSign, Lock, Server, Users, ArrowRight, CheckCircle,
  Award, Book, Briefcase, Database, Globe, Shield, BarChart, Zap, Settings, Cpu,
  Mail, Phone, MapPin, Send, MessageSquare, Calendar, GraduationCap, Layers, UserPlus
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useState } from 'react';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'We will get back to you as soon as possible.',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

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

  const internshipPositions = [
    {
      title: 'Cloud Engineer Intern',
      description: 'Learn to design, implement, and manage cloud infrastructure across major platforms.',
      icon: <Server size={24} />,
      skills: ['AWS/Azure/GCP', 'Infrastructure as Code', 'Networking', 'Linux'],
    },
    {
      title: 'DevOps Intern',
      description: 'Gain hands-on experience with CI/CD pipelines, containerization, and automation tools.',
      icon: <Code size={24} />,
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git'],
    },
    {
      title: 'Full Stack Developer Intern',
      description: 'Develop cloud-native applications and microservices using modern frameworks.',
      icon: <Layers size={24} />,
      skills: ['JavaScript/TypeScript', 'React', 'Node.js', 'Microservices'],
    },
    {
      title: 'Data Engineering Intern',
      description: 'Work with big data technologies and help build scalable data pipelines.',
      icon: <Database size={24} />,
      skills: ['Python', 'SQL', 'Spark', 'ETL Processes'],
    },
  ];

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      description: 'Our friendly team is here to help.',
      contact: 'info@zoeencloud.com',
      link: 'mailto:info@zoeencloud.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      description: 'Mon-Fri from 9AM to 6PM.',
      contact: '+91 9876 543 210',
      link: 'tel:+919876543210',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      description: 'Come say hello at our office.',
      contact: 'Bangalore, India',
      link: '#',
    },
  ];

  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <main>
        {/* Hero Section */}
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
                <a href="#contact">
                  <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                    Get Started
                  </Button>
                </a>
                <a href="#services">
                  <Button variant="outline" size="lg">
                    Explore Services
                  </Button>
                </a>
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

        {/* About Us Section */}
        <section id="about" className="py-20 bg-night-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm text-cloud-400 uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient">About ZoeenCloud</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <p className="text-xl text-night-200 mb-6">
                  ZoeenCloud is a premier cloud solutions provider, dedicated to helping businesses navigate the complexities of cloud computing.
                </p>
                <p className="text-night-300 mb-8">
                  Founded in 2018, we've grown from a small team of cloud enthusiasts to a full-service cloud solutions company serving clients across multiple industries. Our mission is to demystify cloud technology and empower organizations to leverage its full potential for growth, efficiency, and innovation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: <Users size={20} />, text: '50+ Cloud Experts' },
                    { icon: <Award size={20} />, text: 'AWS, Azure & GCP Partner' },
                    { icon: <Globe size={20} />, text: 'Global Operations' },
                    { icon: <Briefcase size={20} />, text: '200+ Successful Projects' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-cloud-400">{item.icon}</span>
                      <span className="text-night-200">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 glass-panel rounded-xl">
                  <h3 className="font-semibold text-white mb-4">Our Mission</h3>
                  <p className="text-night-300">
                    To empower businesses with innovative cloud solutions that drive growth, efficiency, and competitive advantage in the digital landscape.
                  </p>
                </div>
                
                <div className="p-6 glass-panel rounded-xl">
                  <h3 className="font-semibold text-white mb-4">Our Vision</h3>
                  <p className="text-night-300">
                    To be the leading architect of cloud transformations, recognized globally for our expertise, innovation, and client-centric approach.
                  </p>
                </div>
                
                <div className="p-6 glass-panel rounded-xl">
                  <h3 className="font-semibold text-white mb-4">Our Values</h3>
                  <ul className="text-night-300 space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-cloud-500 mt-1"><CheckCircle size={16} /></span>
                      <span>Innovation: Constantly pursuing better ways to solve complex problems</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cloud-500 mt-1"><CheckCircle size={16} /></span>
                      <span>Excellence: Delivering exceptional quality in everything we do</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cloud-500 mt-1"><CheckCircle size={16} /></span>
                      <span>Integrity: Building trust through honesty and transparency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 relative">
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

            {/* Why Choose Us */}
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              </div>
            </div>
          </div>
        </section>

        {/* Internships Section */}
        <section id="internships" className="py-20 bg-night-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm text-cloud-400 uppercase tracking-wider">Join Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gradient">Internship Opportunities</h2>
              <p className="text-night-300 mt-4 max-w-2xl mx-auto">
                Launch your career in cloud technology with our comprehensive internship program. Gain hands-on experience working with cutting-edge cloud solutions alongside industry experts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {internshipPositions.map((position, index) => (
                <div key={index} className="glass-card rounded-xl p-8">
                  <div className="bg-gradient-to-br from-cloud-500/20 to-cloud-700/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-cloud-400">
                    {position.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{position.title}</h3>
                  <p className="text-night-300 mb-6">{position.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cloud-400 mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, idx) => (
                        <span key={idx} className="bg-night-800 text-night-300 px-3 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Apply Now</Button>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto glass-card rounded-xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-cloud-500/20 p-6 rounded-full text-cloud-400">
                  <GraduationCap size={48} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-white mb-4">Our Internship Program</h3>
                  <p className="text-night-300 mb-6">
                    Our 6-month structured program offers meaningful projects, mentorship from industry experts, and a clear path to full-time opportunities for exceptional performers.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2">
                      <UserPlus size={18} className="text-cloud-400" />
                      <span className="text-night-200">Hands-on experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-cloud-400" />
                      <span className="text-night-200">1:1 mentorship</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={18} className="text-cloud-400" />
                      <span className="text-night-200">Career guidance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm text-cloud-400 uppercase tracking-wider">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gradient">
                Get in Touch with Us
              </h2>
              <p className="text-night-300 text-lg">
                Let's discuss how ZoeenCloud can transform your business. Reach out today!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <div key={index} className="glass-panel p-8 rounded-xl text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cloud-500/20 to-cloud-700/20 rounded-full flex items-center justify-center text-cloud-400 mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-night-300 mb-4">{method.description}</p>
                  <a href={method.link} className="text-cloud-400 hover:text-cloud-300 transition-colors font-medium">
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-tr from-cloud-600/10 to-transparent"></div>
                <div className="glass-card rounded-2xl p-8 border-cloud-600/20">
                  <h2 className="text-2xl font-bold mb-2 text-gradient-blue">
                    Let's discuss your project
                  </h2>
                  <p className="text-night-300 mb-6">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-night-200 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-night-800 border border-night-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cloud-500/50 text-white"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-night-200 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-night-800 border border-night-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cloud-500/50 text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-night-200 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-night-800 border border-night-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cloud-500/50 text-white"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-night-200 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-night-800 border border-night-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cloud-500/50 text-white resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="w-full"
                      icon={<Send size={18} />}
                      iconPosition="right"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {[
                      {
                        question: 'What cloud platforms do you work with?',
                        answer: 'We support all major cloud platforms including AWS, Azure, Google Cloud, and more, providing multi-cloud strategies tailored to your business needs.',
                      },
                      {
                        question: 'How quickly can you implement cloud solutions?',
                        answer: 'Implementation timelines vary based on project complexity, but we typically deliver initial solutions within 2-4 weeks, with a phased approach for larger transitions.',
                      },
                      {
                        question: 'Do you offer managed services?',
                        answer: 'Yes, we provide comprehensive managed services for cloud infrastructure, including 24/7 monitoring, optimization, and support to ensure peak performance.',
                      },
                    ].map((faq, index) => (
                      <div key={index} className="glass-panel p-6 rounded-xl">
                        <h4 className="text-lg font-semibold text-cloud-300 mb-2">{faq.question}</h4>
                        <p className="text-night-300">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-night-900/30">
          <div className="absolute inset-0 bg-gradient-to-r from-cloud-900/20 to-night-950/80 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Cloud Infrastructure?
              </h2>
              <p className="text-night-300 mb-8 text-lg">
                Let's discuss how ZoeenCloud can help your business leverage the full potential of cloud technology.
              </p>
              <a href="#contact">
                <Button variant="primary" size="lg">
                  Get in Touch Today
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
