
import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from 'lucide-react';

const Contact = () => {
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
      <main className="pt-24">
        {/* Header Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm text-cloud-400 uppercase tracking-wider">Contact Us</span>
              <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-gradient">
                Get in Touch with Us
              </h1>
              <p className="text-night-300 text-lg leading-relaxed">
                Let's discuss how ZoeenCloud can transform your business. Reach out today!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
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

                <div className="glass-panel p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cloud-500/20 p-3 rounded-lg text-cloud-400 flex-shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Schedule a Consultation</h3>
                      <p className="text-night-300 text-sm mb-4">
                        Book a free 30-minute consultation with our cloud specialists to discuss your specific needs.
                      </p>
                      <Button variant="outline" size="sm">Book a Meeting</Button>
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cloud-500/20 p-3 rounded-lg text-cloud-400 flex-shrink-0">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Live Chat Support</h3>
                      <p className="text-night-300 text-sm mb-4">
                        Need immediate assistance? Our technical team is available via live chat during business hours.
                      </p>
                      <Button variant="outline" size="sm">Start Chat</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-night-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl">
              <div className="aspect-[16/9] bg-night-800 relative flex items-center justify-center">
                <div className="text-night-700 absolute">
                  <MapPin size={60} />
                </div>
                <div className="absolute inset-0 bg-night-900/70 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-xl font-semibold text-white mb-3">Our Location</h3>
                    <p className="text-night-300 max-w-md">
                      1234 Cloud Avenue, Tech District, Bangalore 560001, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
