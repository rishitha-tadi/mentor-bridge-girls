
import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Mail, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="w-7 h-7 text-mentor" />
              <span className="text-xl font-bold">Pathway To Equality</span>
            </Link>
            <p className="text-muted-foreground">
              Empowering female students with personalized guidance 
              and resources for their educational journey.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-mentor transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-mentor transition-colors">
                  AI Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-mentor transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-mentor" />
                <a href="mailto:seepanajyothirmai60@gmail.com" className="social-link">
                  seepanajyothirmai60@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin className="w-5 h-5 text-mentor" />
                <a 
                  href="https://www.linkedin.com/in/jyothirmai-seepana-0b57192b8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Jyothirmai Seepana
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Pathway To Equality. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for female students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
