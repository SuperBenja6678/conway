import React from 'react';
import { Phone, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/tmp9g0abuo2.svg" 
                alt="Conway Electrical Ltd" 
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Trusted electrical contractors serving Cavan & Dublin with professional, reliable service.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>+353 86 818 1436</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>conwayelectrical@live.ie</span>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <a
              href="https://www.facebook.com/p/Conway-Electrical-Ltd-100063509113285/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Conway Electrical Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;