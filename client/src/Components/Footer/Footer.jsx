import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Users,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column - Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                <div className="w-6 h-6 border-2 border-white rounded-full relative">
                  <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Nafees Khalfay
              </h2>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                <span>Phone: 99208 35501</span>
              </div>

              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                <span>Email: nkpebdesign@yahoo.com</span>
              </div>

              <div className="flex items-start text-gray-600">
                <MapPin className="w-16 h-16 text-yellow-400 mr-3 mt-0.5" />
                <span>
                  Head office: A/701, Shaheen Chambers Commercial Premises CHSL,
                  92, Daud Baug Road, Opp Pearl Heritage, Andheri (West),
                  Mumbai-400 058.
                </span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-8">
              <a
                href="#"
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                aria-label="StumbleUpon"
              >
                <Users className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                aria-label="Tumblr"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 relative">
              Quick Links
              <div className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-yellow-400"></div>
            </h3>

            <nav className="space-y-3">
              <a
                href="#"
                className=" text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
              >
                <span className="text-yellow-400 mr-2">▶</span>
                Home
              </a>
              <a
                href="#"
                className=" text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
              >
                <span className="text-yellow-400 mr-2">▶</span>
                About Us
              </a>
              <a
                href="#"
                className=" text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
              >
                <span className="text-yellow-400 mr-2">▶</span>
                Our Services
              </a>
              <a
                href="#"
                className=" text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
              >
                <span className="text-yellow-400 mr-2">▶</span>
                Gallery
              </a>
              <a
                href="#"
                className=" text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
              >
                <span className="text-yellow-400 mr-2">▶</span>
                Blog
              </a>
              <a
                href="#"
                className=" text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
              >
                <span className="text-yellow-400 mr-2">▶</span>
                Contact
              </a>
            </nav>
          </div>

          {/* Right Column - Our Services */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 relative">
              Our Services
              <div className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-yellow-400"></div>
            </h3>

            <nav className="space-y-3">
              <a
                href="#"
                className=" text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
              >
                <span className="text-yellow-400 mr-2">▶</span>
                Structural Design Consultant Services
              </a>
              <a
                href="#"
                className=" text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
              >
                <span className="text-yellow-400 mr-2">▶</span>
                Civil Engineering Services
              </a>
              <a
                href="#"
                className=" text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
              >
                <span className="text-yellow-400 mr-2">▶</span>
                Consultancy Services
              </a>
              <a
                href="#"
                className=" text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
              >
                <span className="text-yellow-400 mr-2">▶</span>
                Structural Drawing Service
              </a>
              <a
                href="#"
                className=" text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
              >
                <span className="text-yellow-400 mr-2">▶</span>
                Roof Design Services
              </a>
              <a
                href="#"
                className=" text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
              >
                <span className="text-yellow-400 mr-2">▶</span>
                Architectural Services
              </a>
              <a
                href="#"
                className=" text-gray-600 hover:text-yellow-500 transition-colors flex items-center"
              >
                <span className="text-yellow-400 mr-2">▶</span>
                Pre Fabricated Structure
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Purchase Theme Button */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"></div>

          {/* Elite Author Text */}
          <div className="text-gray-500 text-sm">
            © Copyright 2025 Nafees Ahmed Hussain Khalfay - All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
