import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Clock, Phone, MapPin, Search } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const navigationItems = [
    {
      label: "HOME",
      href: "/",
      isActive: true,
    },
    {
      label: "ABOUT US",
      href: "/about-us",
    },
    {
      label: "OUR SERVICES",
      href: "#",
      dropdown: [
        {
          label: "Structural Design Consultant Services",
          href: "/structural-design-consultant-services",
        },
        {
          label: "Civil Engineering Services",
          href: "/civil-engineering-service",
        },
        { label: "Consultancy Services", href: "/consultancy-services" },
        {
          label: "Structural Drawing Service",
          href: "/structural-drawing-service",
        },
        { label: "Roof Design Services", href: "/roof-design-services" },
        { label: "Architectural Services", href: "/architectural-services" },
        {
          label: "Pre Fabricated Structure",
          href: "/pre-fabricated-structure",
        },
      ],
    },
    {
      label: "GALLERY",
      href: "/gallery",
    },
    // {
    //   label: "PAGES",
    //   href: "#",
    //   dropdown: [
    //     { label: "About Us", href: "#" },
    //     { label: "Our Team", href: "#" },
    //     { label: "Services", href: "#" },
    //     { label: "Portfolio", href: "#" },
    //     { label: "Contact Us", href: "#" },
    //   ],
    // },
    {
      label: "BLOG",
      href: "#",
    },
  ];

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (index) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="w-full bg-white shadow-lg relative z-50">
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-900">
                  Monday – Friday 09:00 – 19:00
                </span>
                <span className="text-sm text-gray-500">
                  Saturday and Sunday - CLOSED
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-900">
                  +9199 2083 5501
                </span>
                <span className="text-sm text-gray-500">
                  nkpebdesign@yahoo.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-900">
                  Andheri (West)
                </span>
                <span className="text-sm text-gray-500"> Mumbai-400058</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Nafees Khalfay
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(index)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                <a
                  href={item.href}
                  className={`px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                    item.isActive
                      ? "text-gray-700 hover:text-gray-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl border border-gray-200 rounded-md z-50">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-400 hover:text-white transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        >
                          <span className="text-yellow-500 mr-2">•</span>
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <a
              href="/contact-us"
              className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              CONTACT
            </a>

            <a
              href="#"
              className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold text-sm hover:bg-yellow-500 transition-colors duration-200"
            >
              GET QUOTE
            </a>

            {/* <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            {/* Mobile Contact Info */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-900">
                  Mon-Fri 09:00-19:00
                </span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-900">
                  +9090 8080 4044
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-900">
                  Pensilvenia Avenue, NY
                </span>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center">
                    <a
                      href={item.href}
                      className={`block py-3 px-4 text-base font-semibold rounded-md transition-colors duration-200 flex-1 ${
                        item.isActive
                          ? "text-gray-700 hover:text-gray-900"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </a>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleMobileDropdown(index)}
                        className="p-3 text-gray-500 hover:text-gray-700"
                      >
                        <div
                          className={`transform transition-transform duration-200 ${
                            activeMobileDropdown === index ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {item.dropdown && activeMobileDropdown === index && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-yellow-50 rounded-md transition-colors duration-200"
                        >
                          <span className="text-yellow-500 mr-2">•</span>
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <a
                href="/contact-us"
                className="block py-3 px-4 text-base font-semibold text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                CONTACT
              </a>

              <a
                href="#"
                className="block py-3 px-4 bg-yellow-400 text-white font-semibold text-base hover:bg-yellow-500 transition-colors duration-200 rounded-md text-center"
              >
                GET QUOTE
              </a>

              {/* <button className="w-full py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button> */}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
