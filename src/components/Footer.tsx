
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 mb-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Knowledge Excellence</h3>
            <p className="text-sm mb-4">
              Empowering global education and careers through excellence, based in Nepal with a worldwide reach.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://facebook.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/school-consulting" className="text-sm hover:text-secondary transition-colors">
                  School Consulting
                </Link>
              </li>
              <li>
                <Link to="/scholarships" className="text-sm hover:text-secondary transition-colors">
                  Global Scholarships
                </Link>
              </li>
              <li>
                <Link to="/trainings" className="text-sm hover:text-secondary transition-colors">
                  Trainings
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/school-consulting" className="text-sm hover:text-secondary transition-colors">
                  Teacher Training
                </Link>
              </li>
              <li>
                <Link to="/school-consulting" className="text-sm hover:text-secondary transition-colors">
                  School Operations
                </Link>
              </li>
              <li>
                <Link to="/scholarships" className="text-sm hover:text-secondary transition-colors">
                  Scholarship Programs
                </Link>
              </li>
              <li>
                <Link to="/trainings" className="text-sm hover:text-secondary transition-colors">
                  PR Training
                </Link>
              </li>
              <li>
                <Link to="/trainings" className="text-sm hover:text-secondary transition-colors">
                  Hospitality Training
                </Link>
              </li>
              <li>
                <Link to="/trainings" className="text-sm hover:text-secondary transition-colors">
                  Healthcare Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-2 flex-shrink-0" />
                <span className="text-sm">
                  Kathmandu, Nepal
                </span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-sm">
                  +977-1-XXXXXXX
                </span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-sm">
                  info@knowledgeexcellence.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Knowledge Excellence. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link to="/privacy-policy" className="text-sm text-gray-300 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-300 hover:text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
