
import React from 'react';
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/dP9zeYmDFqWBtWEi7?g_st=aw', '_blank');
  };

  return (
    <footer className="bg-slate text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-poppins">SR</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold font-poppins">Shekar Reddy</h3>
                <p className="text-sm text-gray-300 font-roboto">Iron & Cement</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 font-roboto leading-relaxed">
              Your trusted iron & cement dealer in Kamareddy. Serving the community with premium brands and reliable service since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-gray-300 hover:text-accent transition-colors font-roboto">Home</a></li>
              <li><a href="/about" className="text-sm text-gray-300 hover:text-accent transition-colors font-roboto">About Us</a></li>
              <li><a href="/products" className="text-sm text-gray-300 hover:text-accent transition-colors font-roboto">Products</a></li>
              <li><a href="/gallery" className="text-sm text-gray-300 hover:text-accent transition-colors font-roboto">Gallery</a></li>
              <li><a href="/contact" className="text-sm text-gray-300 hover:text-accent transition-colors font-roboto">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent font-poppins">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-accent" />
                <div>
                  <a href="tel:+919876543210" className="text-sm text-gray-300 hover:text-accent transition-colors font-roboto">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-accent" />
                <div>
                  <button
                    onClick={handleLocationClick}
                    className="text-sm text-gray-300 hover:text-accent transition-colors font-roboto text-left"
                  >
                    Banswada Road, Kamareddy<br />
                    Telangana, India
                  </button>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-accent" />
                <div>
                  <a href="mailto:info@shekarreddycement.com" className="text-sm text-gray-300 hover:text-accent transition-colors font-roboto">
                    info@shekarreddycement.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1 text-accent" />
                <div>
                  <p className="text-sm text-gray-300 font-roboto">
                    Mon - Sat: 8:00 AM - 7:00 PM<br />
                    Sunday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent font-poppins">Get in Touch</h4>
            <p className="text-sm text-gray-300 mb-4 font-roboto">
              Need quality materials for your construction project? Contact us today!
            </p>
            <div className="space-y-3">
              <Button
                className="w-full bg-coral hover:bg-coral/90 text-white"
                asChild
              >
                <a href="tel:+919876543210">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-slate"
                onClick={handleLocationClick}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Visit Store
              </Button>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-accent font-poppins">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400 font-roboto">
            © 2024 Shekar Reddy Iron & Cement. All rights reserved. | Serving Kamareddy with trust and quality.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
