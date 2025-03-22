
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { CustomButton as Button } from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';
import { Award, Book, Briefcase, Database, Globe, Server, Users } from 'lucide-react';

const About = () => {
  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <main className="pt-24">
        {/* Header Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm text-cloud-400 uppercase tracking-wider">About Us</span>
              <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-gradient">
                Who We Are
              </h1>
              <p className="text-night-300 text-lg leading-relaxed">
                ZoeenCloud is a premier cloud solutions provider, dedicated to helping businesses navigate the complexities of cloud computing.
                Our expertise spans across cloud infrastructure, DevOps automation, financial operations (FinOps), and cybersecurity, ensuring your business operates with efficiency and security.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-night-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient-blue">
                  Our Approach
                </h2>
                <p className="text-night-300 mb-6 leading-relaxed">
                  We leverage cutting-edge technology to optimize workflows, enhance security, and streamline IT operations, empowering businesses to scale seamlessly in a dynamic digital world.
                </p>
                <p className="text-night-300 mb-6 leading-relaxed">
                  Our client-focused approach ensures that your unique business needs are always at the forefront of our solutions. We work alongside your team, providing the expertise, tools, and support necessary to achieve your technological and business objectives.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3">
                    <div className="bg-cloud-500/20 p-2 rounded text-cloud-400">
                      <Database size={18} />
                    </div>
                    <span className="text-night-200">Cloud Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-cloud-500/20 p-2 rounded text-cloud-400">
                      <Server size={18} />
                    </div>
                    <span className="text-night-200">Infrastructure as Code</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-cloud-500/20 p-2 rounded text-cloud-400">
                      <Briefcase size={18} />
                    </div>
                    <span className="text-night-200">Business Intelligence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-cloud-500/20 p-2 rounded text-cloud-400">
                      <Globe size={18} />
                    </div>
                    <span className="text-night-200">Global Reach</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-tr from-cloud-600/10 to-transparent"></div>
                <div className="glass-panel rounded-2xl p-8 border-cloud-600/20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="text-center p-6">
                      <div className="text-4xl font-bold text-cloud-400 mb-2">250+</div>
                      <div className="text-night-300 text-sm">Successful Projects</div>
                    </div>
                    <div className="text-center p-6">
                      <div className="text-4xl font-bold text-cloud-400 mb-2">98%</div>
                      <div className="text-night-300 text-sm">Client Satisfaction</div>
                    </div>
                    <div className="text-center p-6">
                      <div className="text-4xl font-bold text-cloud-400 mb-2">24/7</div>
                      <div className="text-night-300 text-sm">Technical Support</div>
                    </div>
                    <div className="text-center p-6">
                      <div className="text-4xl font-bold text-cloud-400 mb-2">15+</div>
                      <div className="text-night-300 text-sm">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm text-cloud-400 uppercase tracking-wider">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gradient">
                Meet Our Experts
              </h2>
              <p className="text-night-300">
                Our team of skilled professionals brings together decades of experience in cloud technologies, DevOps practices, and business optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="glass-card rounded-xl overflow-hidden">
                  <div className="aspect-[3/4] bg-gradient-to-b from-night-800 to-night-900 flex items-center justify-center">
                    <Users size={60} className="text-night-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">Team Member {index + 1}</h3>
                    <p className="text-cloud-400 text-sm mb-3">
                      {index === 0 ? 'Cloud Architect' : index === 1 ? 'DevOps Lead' : 'FinOps Specialist'}
                    </p>
                    <p className="text-night-300 text-sm">
                      With over 10 years of experience in cloud solutions and infrastructure optimization.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/contact">
                <Button variant="outline">Join Our Team</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-night-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm text-cloud-400 uppercase tracking-wider">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gradient">
                What Drives Us
              </h2>
              <p className="text-night-300">
                At ZoeenCloud, our core values shape everything we do, from how we develop solutions to how we interact with our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-panel p-8 rounded-xl">
                <div className="bg-cloud-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-cloud-400">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
                <p className="text-night-300">
                  We strive for excellence in every project, constantly pushing boundaries to deliver exceptional results.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <div className="bg-cloud-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-cloud-400">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Collaboration</h3>
                <p className="text-night-300">
                  We believe in the power of teamwork, working closely with our clients to achieve shared goals.
                </p>
              </div>

              <div className="glass-panel p-8 rounded-xl">
                <div className="bg-cloud-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-cloud-400">
                  <Book size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-night-300">
                  We embrace change and continuously adapt to emerging technologies and industry trends.
                </p>
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
                Ready to Work with Us?
              </h2>
              <p className="text-night-300 mb-8 text-lg">
                Let's collaborate to elevate your business to new heights with innovative cloud solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
