import React, { useState, useEffect } from "react";
import { Play, Home, ChevronRight } from "lucide-react";
import ServiceImage from "../../assets/Service1.png";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Zap,
  Award,
  Shield,
  Truck,
  ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CivilEngineeringImage from "../../assets/Civilengineering.webp";

function CivilEngineering() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      name: "Civil Engineering Services",
      images: [CivilEngineeringImage],
      description:
        "We are a prominent Service Provider engaged in offering a comprehensive range of Services for Structural Designs for Buildings. We provide detailing Services of R.C.C. Consulting, CAD CAM and Steel Buildings Designing.",
      features: [
        "2-Color Printing",
        "High Speed Operation",
        "Precision Registration",
        "Auto Plate Loading",
      ],
      price: "Get Latest Price",
      originalPrice: "₹55,00,000",
    },
    {
      id: 2,
      name: "Structural Engineering Consultancy Service",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/1/478071007/LN/ER/PZ/2478166/structural-engineering-consultancy-service-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/1/478071002/FE/JZ/FK/2478166/structural-engineering-consultancy-service-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/1/478071003/GJ/YK/FM/2478166/structural-engineering-consultancy-service-500x500.png",
      ],
      description:
        "Our organization is recognized as a leading provider of Skywalk Design Consultancy. Our solutions are highly demanded for their superior quality, innovative design, and compliance with industry standards. Developed using top-grade components and the latest technology, each project is rigorously tested to ensure flawless execution.",
      features: [
        "2-Color Configuration",
        "Advanced Automation",
        "Quick Job Changes",
        "Superior Print Quality",
      ],
      price: "Get Latest Price",
      originalPrice: "₹45,00,000",
    },
    {
      id: 3,
      name: "Rcc Consultants Service",
      images: [
        "https://content.jdmagicbox.com/comp/service_catalogue/rcc-consultant-022pxx22.xx22.211210125836.p3d3-cggais8.jpg",
      ],
      description:
        "We are a prominent Service Provider engaged in offering a comprehensive range of Services for Structural Designs for Buildings. We provide detailing Services of R.C.C. Consulting, CAD CAM and Steel Buildings Designing.",
      features: [
        "6-Color Printing",
        "Large Format",
        "Advanced Controls",
        "High Volume Output",
      ],
      price: "Get Latest Price",
      originalPrice: "₹1,45,00,000",
    },
  ];

  const nextImage = (productId, imagesLength) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % imagesLength,
    }));
  };

  const prevImage = (productId, imagesLength) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + imagesLength) % imagesLength,
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const updatedIndexes = { ...prev };
        products.forEach((product) => {
          const currentIndex = prev[product.id] || 0;
          updatedIndexes[product.id] =
            (currentIndex + 1) % product.images.length;
        });
        return updatedIndexes;
      });
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [products]);

  return (
    <>
      <div className="min-h-screen bg-white">
        <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
          {/* Background Image Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage: `url(${CivilEngineeringImage})`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Civil Engineering Services
              </motion.h1>

              <motion.nav
                variants={fadeInUp}
                className="flex items-center space-x-2 text-white text-lg"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-yellow-400">
                  Civil Engineering Services
                </span>
              </motion.nav>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          {/* <div className="absolute inset-0 bg-black/20"></div> */}
          <div className="relative container mx-auto px-4 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-black"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Exceptional Quality Services
                </motion.div>

                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Civil Engineering Services
                </h1>

                <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                  <span className="block font-semibold text-yellow-400">
                    Comprehensive Civil Engineering Solutions Tailored to Your
                    Project Needs
                  </span>
                </p>

                <p className="text-lg mb-8 leading-relaxed text-gray-600">
                  We offer professional Civil Engineering Services, specializing
                  in Structural Engineering Consultancy and Rcc Consultants
                  Service. Our services cover the complete planning, analysis,
                  and design of buildings and infrastructure projects, ensuring
                  structural safety, code compliance, and cost efficiency.
                  Backed by a skilled team and modern tools, we deliver reliable
                  and customized solutions for residential, commercial, and
                  industrial developments.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button
                    onClick={() => (window.location.href = "tel:+919920835501")}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 cursor-pointer px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Get Quote Now
                  </button>
                  {/* <button className="border-2 border-white text-black hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                   View Specifications
                 </button> */}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={CivilEngineeringImage}
                    alt="RCC Wall Construction"
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Our&nbsp;
                <span>Civil Engineering Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Consultants of a wide range of products which include Civil
                Engineering Services, Structural Engineering Consultancy Service
                and Rcc Consultants Service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                  onMouseEnter={() => setActiveProduct(product.id)}
                  onMouseLeave={() => setActiveProduct(null)}
                >
                  <div className="relative overflow-hidden group">
                    <AnimatePresence mode="sync">
                      <motion.img
                        src={product.images[currentImageIndex[product.id] || 0]}
                        alt={`${product.name} - Image ${
                          (currentImageIndex[product.id] || 0) + 1
                        }`}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </AnimatePresence>

                    {/* Image Navigation */}
                    <div className="absolute inset-0 flex items-center justify-between px-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(product.id, product.images.length);
                        }}
                        className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(product.id, product.images.length);
                        }}
                        className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Image Indicators */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {product.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => ({
                              ...prev,
                              [product.id]: idx,
                            }));
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            (currentImageIndex[product.id] || 0) === idx
                              ? "bg-white scale-125"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t z-10 pointer-events-none from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {/* <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Premium
                    </div>
                    {product.originalPrice && (
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Save ₹
                        {(
                          parseInt(product.originalPrice.replace(/[₹,]/g, "")) -
                          parseInt(product.price.replace(/[₹,]/g, ""))
                        ).toLocaleString()}
                      </div>
                    )} */}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-sans font-bold mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 mb-4 text-xl leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-1">
                        {product.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <Zap className="w-3 h-3 text-yellow-500 mr-1 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4 flex justify-between items-center">
                      <div className="flex flex-col">
                        <div className="text-xl font-bold text-black">
                          {product.price}
                        </div>
                        {/* {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </div>
                      )} */}
                      </div>
                      <button
                        onClick={() =>
                          (window.location.href = "tel:+919920835501")
                        }
                        className="bg-yellow-500 hover:bg-yellow-400 cursor-pointer text-white px-3 md:px-6 xl:px-6 lg:px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 group"
                      >
                        Contact Us
                        <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CivilEngineering;
