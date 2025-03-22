import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { CheckCircle, Code, Server, Layers, Database, ArrowRight, Briefcase, UserPlus, GraduationCap, Users } from 'lucide-react';

const Internships = () => {
  const internshipPrograms = [
    {
      title: 'DevOps Engineering Internship',
      duration: '3 months',
      stipend: '₹2,000',
      icon: <Server size={24} />,
      description: 'Gain hands-on experience with real-world DevOps tools and cloud infrastructure management.',
      skills: [
        'CI/CD Pipeline Implementation',
        'Cloud Infrastructure Management',
        'Container Orchestration',
        'Monitoring & Logging Systems'
      ]
    },
    {
      title: 'Full Stack Development Internship',
      duration: '3-6 months',
      stipend: '₹2,000 - ₹4,000',
      icon: <Code size={24} />,
      description: 'Master modern web technologies and build scalable full-stack applications.',
      skills: [
        'Frontend & Backend Development',
        'Database Management & API Development',
        'Mastering Modern Web Technologies',
        'Building Scalable Applications'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Real-World Projects',
      description: 'Work on actual client projects and contribute to production code.',
      icon: <Briefcase size={24} />
    },
    {
      title: 'Expert Mentorship',
      description: 'Learn directly from industry professionals with years of experience.',
      icon: <GraduationCap size={24} />
    },
    {
      title: 'Networking Opportunities',
      description: 'Connect with professionals and peers in the cloud computing industry.',
      icon: <UserPlus size={24} />
    }
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
              <span className="text-sm text-cloud-400 uppercase tracking-wider">Internship Programs</span>
              <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-gradient">
                Industry-Driven Professional Internship Programs
              </h1>
              <p className="text-night-300 text-lg leading-relaxed">
                Gain hands-on experience with real-world cloud projects, DevOps tools, and full-stack development under the mentorship of industry experts.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Our Internships */}
        <section className="py-16 bg-night-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gradient-blue text-center">
                Why Choose Our Internships?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="glass-panel p-6 rounded-xl">
                    <div className="bg-cloud-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-cloud-400">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-night-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Internship Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm text-cloud-400 uppercase tracking-wider">Programs Offered</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gradient">
                Start Your Career in Tech
              </h2>
              <p className="text-night-300">
                Our internship programs are designed to provide practical, hands-on experience in the most in-demand tech skills.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {internshipPrograms.map((program, index) => (
                <div key={index} className="glass-card rounded-xl overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-br from-cloud-500/20 to-cloud-700/20 w-12 h-12 rounded-lg flex items-center justify-center text-cloud-400 mr-4">
                        {program.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{program.title}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-night-300 text-sm">{program.duration}</span>
                          <span className="text-night-300 text-sm">|</span>
                          <span className="text-cloud-400 text-sm font-medium">{program.stipend}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-night-300 mb-6">{program.description}</p>
                    
                    <div className="space-y-4">
                      <h4 className="text-white font-medium">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {program.skills.map((skill, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="text-cloud-500 mt-1 flex-shrink-0">
                              <CheckCircle size={16} />
                            </span>
                            <span className="text-night-200">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8">
                      <Link to="/contact">
                        <Button variant="outline" icon={<ArrowRight size={18} />} iconPosition="right">
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility & Process */}
        <section className="py-16 bg-night-900/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gradient-blue">
                  Eligibility Criteria
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-cloud-500 mt-1">
                      <CheckCircle size={18} />
                    </span>
                    <div>
                      <h3 className="text-white font-medium mb-1">Education</h3>
                      <p className="text-night-300 text-sm">Currently pursuing or recently graduated with a degree in Computer Science, IT, or related field.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cloud-500 mt-1">
                      <CheckCircle size={18} />
                    </span>
                    <div>
                      <h3 className="text-white font-medium mb-1">Technical Skills</h3>
                      <p className="text-night-300 text-sm">Basic programming knowledge and familiarity with cloud concepts.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cloud-500 mt-1">
                      <CheckCircle size={18} />
                    </span>
                    <div>
                      <h3 className="text-white font-medium mb-1">Communication</h3>
                      <p className="text-night-300 text-sm">Good communication skills and ability to work in a team environment.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-cloud-500 mt-1">
                      <CheckCircle size={18} />
                    </span>
                    <div>
                      <h3 className="text-white font-medium mb-1">Commitment</h3>
                      <p className="text-night-300 text-sm">Ability to commit to the full duration of the internship program.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gradient-blue">
                  Application Process
                </h2>
                <div className="space-y-6">
                  <div className="glass-panel p-5 rounded-lg flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-cloud-600/30 flex items-center justify-center flex-shrink-0 text-cloud-400 font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Online Application</h3>
                      <p className="text-night-300 text-sm">Fill out the application form with your details and resume.</p>
                    </div>
                  </div>
                  
                  <div className="glass-panel p-5 rounded-lg flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-cloud-600/30 flex items-center justify-center flex-shrink-0 text-cloud-400 font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Technical Assessment</h3>
                      <p className="text-night-300 text-sm">Complete a short technical assessment to evaluate your skills.</p>
                    </div>
                  </div>
                  
                  <div className="glass-panel p-5 rounded-lg flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-cloud-600/30 flex items-center justify-center flex-shrink-0 text-cloud-400 font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Interview</h3>
                      <p className="text-night-300 text-sm">Virtual interview with our technical team and potential mentors.</p>
                    </div>
                  </div>
                  
                  <div className="glass-panel p-5 rounded-lg flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-cloud-600/30 flex items-center justify-center flex-shrink-0 text-cloud-400 font-semibold">
                      4
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Selection & Onboarding</h3>
                      <p className="text-night-300 text-sm">Selected candidates will receive an offer and begin the onboarding process.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm text-cloud-400 uppercase tracking-wider">Success Stories</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-gradient">
                What Our Interns Say
              </h2>
              <p className="text-night-300">
                Hear from past interns about their experience and growth at ZoeenCloud.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "The DevOps internship at ZoeenCloud completely transformed my understanding of cloud infrastructure. The hands-on experience was invaluable.",
                "Working on real projects with experienced mentors accelerated my learning. I gained technical skills and professional confidence during my internship.",
                "The full-stack development internship provided the perfect balance of guidance and autonomy, allowing me to grow as a developer."
              ].map((testimonial, index) => (
                <div key={index} className="glass-panel p-8 rounded-xl relative">
                  <div className="mb-6 text-cloud-400">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.3333 16.6667H15C15 14.8333 16.4167 13.3333 18.3333 13.3333V10C14.1667 10 10.8333 13.3333 10.8333 17.5V26.6667H20V17.5H18.3333V16.6667ZM29.1667 16.6667H25.8333C25.8333 14.8333 27.25 13.3333 29.1667 13.3333V10C25 10 21.6667 13.3333 21.6667 17.5V26.6667H30.8333V17.5H29.1667V16.6667Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-night-300 italic mb-8">{testimonial}</p>
                  <div className="flex items-center mt-auto">
                    <div className="w-10 h-10 rounded-full bg-night-800 flex items-center justify-center text-night-500 mr-3">
                      <Users size={16} className="text-night-700" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Former Intern</p>
                      <p className="text-night-400 text-sm">{index === 0 ? 'DevOps Engineer' : index === 1 ? 'Cloud Architect' : 'Full Stack Developer'}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cloud-900/20 to-night-950/80 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Launch Your Tech Career with ZoeenCloud
              </h2>
              <p className="text-night-300 mb-8 text-lg">
                Apply today for our internship programs and take the first step towards becoming a cloud professional.
              </p>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Apply Now
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

export default Internships;
