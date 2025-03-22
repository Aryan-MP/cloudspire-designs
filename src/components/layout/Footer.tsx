
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-night-950 border-t border-night-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">ZoeenCloud</h3>
            <p className="text-night-300 text-sm leading-relaxed">
              Empowering businesses with next-generation cloud solutions, DevOps automation, and FinOps expertise.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-night-800 flex items-center justify-center text-night-400 hover:bg-cloud-800 hover:text-white transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-night-800 flex items-center justify-center text-night-400 hover:bg-cloud-800 hover:text-white transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-night-800 flex items-center justify-center text-night-400 hover:bg-cloud-800 hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-night-800 flex items-center justify-center text-night-400 hover:bg-cloud-800 hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-night-300 hover:text-cloud-400 transition-colors text-sm">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-night-300 hover:text-cloud-400 transition-colors text-sm">
                  DevOps Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-night-300 hover:text-cloud-400 transition-colors text-sm">
                  FinOps Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-night-300 hover:text-cloud-400 transition-colors text-sm">
                  Enterprise Security
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-night-300 hover:text-cloud-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-night-300 hover:text-cloud-400 transition-colors text-sm">
                  Internship Programs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-night-300 hover:text-cloud-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-night-300 hover:text-cloud-400 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-cloud-500 mt-0.5 flex-shrink-0" />
                <span className="text-night-300 text-sm">
                  1234 Cloud Avenue, Tech District, Bangalore 560001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-cloud-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-night-300 hover:text-cloud-400 transition-colors text-sm">
                  +91 9876 543 210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-cloud-500 flex-shrink-0" />
                <a href="mailto:info@zoeencloud.com" className="text-night-300 hover:text-cloud-400 transition-colors text-sm">
                  info@zoeencloud.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-night-900 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-night-400 text-sm">
              &copy; {currentYear} ZoeenCloud. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-night-400 hover:text-cloud-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-night-400 hover:text-cloud-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-night-400 hover:text-cloud-400 transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
