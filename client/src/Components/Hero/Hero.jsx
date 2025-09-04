// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";

// const HeroCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlay, setIsAutoPlay] = useState(true);

//   const slides = [
//     {
//       id: 1,
//       title: "The Best Company For Residential And Commercial Roofing",
//       subtitle:
//         "All our work is based on the founding principles of quality construction, economy, hard work, and integrity.",
//       image:
//         "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       buttons: [
//         { text: "Our Services", type: "primary" },
//         { text: "Join Us Now", type: "secondary" },
//       ],
//     },
//     {
//       id: 2,
//       title: "Your Thought We Build",
//       subtitle: "Construction Solution",
//       description:
//         "Manzil Construction Agency Is Proud To Provide Most Reliable Housing & Top Notch Construction Service.",
//       image:
//         "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
//       buttons: [
//         { text: "Our Services", type: "primary" },
//         { text: "Join Us Now", type: "secondary" },
//       ],
//     },
//     {
//       id: 3,
//       title: "We Build Construction For Our Clients",
//       subtitle: "Our Customer Satisfaction",
//       description:
//         "Manzil Construction Agency Is Proud To Provide Most Reliable Housing & Top Notch Construction Service.",
//       image:
//         "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       buttons: [
//         { text: "Our Services", type: "primary" },
//         { text: "Join Us Now", type: "secondary" },
//       ],
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     if (isAutoPlay) {
//       const interval = setInterval(nextSlide, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [isAutoPlay]);

//   const slideVariants = {
//     enter: {
//       x: 1000,
//       opacity: 0,
//     },
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: {
//       zIndex: 0,
//       x: -1000,
//       opacity: 0,
//     },
//   };

//   const textVariants = {
//     hidden: {
//       y: 50,
//       opacity: 0,
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       y: 30,
//       opacity: 0,
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const buttonVariants = {
//     hidden: {
//       y: 20,
//       opacity: 0,
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//     hover: {
//       scale: 1.05,
//       transition: {
//         duration: 0.2,
//       },
//     },
//     tap: {
//       scale: 0.95,
//     },
//   };

//   return (
//     <div className="relative h-screen overflow-hidden">
//       <AnimatePresence mode="popLayout">
//         <motion.div
//           key={currentSlide}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.5 },
//           }}
//           className="absolute inset-0"
//         >
//           {/* Background Image with Overlay */}
//           <div
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url(${slides[currentSlide].image})`,
//             }}
//           >
//             <div className="absolute inset-0 bg-black opacity-45"></div>
//           </div>

//           {/* Content */}
//           <div className="relative z-10 h-full flex items-center">
//             <div className="container mx-auto px-6 lg:px-12 xl:px-16">
//               <div className="max-w-4xl lg:max-w-5xl">
//                 <motion.div
//                   variants={textVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="text-white"
//                 >
//                   {/* Subtitle */}
//                   {slides[currentSlide].subtitle && (
//                     <motion.p
//                       variants={itemVariants}
//                       className="text-orange-400 text-base md:text-lg font-medium mb-3 uppercase tracking-wider"
//                     >
//                       {slides[currentSlide].subtitle}
//                     </motion.p>
//                   )}

//                   {/* Main Title */}
//                   <motion.h1
//                     variants={itemVariants}
//                     className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-4 leading-tight max-w-4xl"
//                   >
//                     {slides[currentSlide].title}
//                   </motion.h1>

//                   {/* Description */}
//                   {slides[currentSlide].description && (
//                     <motion.p
//                       variants={itemVariants}
//                       className="text-base md:text-lg lg:text-xl mb-8 text-gray-200 max-w-2xl leading-relaxed"
//                     >
//                       {slides[currentSlide].description}
//                     </motion.p>
//                   )}

//                   {/* Buttons */}
//                   <motion.div
//                     variants={itemVariants}
//                     className="flex flex-col sm:flex-row gap-4 mt-8"
//                   >
//                     {slides[currentSlide].buttons.map((button, index) => (
//                       <motion.button
//                         key={index}
//                         variants={buttonVariants}
//                         whileHover="hover"
//                         whileTap="tap"
//                         className={`
//                           px-6 py-3 text-base font-semibold rounded transition-all duration-300 transform
//                           ${
//                             button.type === "primary"
//                               ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl"
//                               : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900"
//                           }
//                           focus:outline-none focus:ring-4 focus:ring-orange-300
//                         `}
//                       >
//                         {button.text}
//                       </motion.button>
//                     ))}
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         onMouseEnter={() => setIsAutoPlay(false)}
//         onMouseLeave={() => setIsAutoPlay(true)}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={24} />
//       </button>

//       <button
//         onClick={nextSlide}
//         onMouseEnter={() => setIsAutoPlay(false)}
//         onMouseLeave={() => setIsAutoPlay(true)}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-300"
//         aria-label="Next slide"
//       >
//         <ChevronRight size={24} />
//       </button>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//         <div className="flex space-x-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`
//                 w-3 h-3 rounded-full transition-all duration-300 focus:outline-none
//                 ${
//                   currentSlide === index
//                     ? "bg-orange-500 scale-125"
//                     : "bg-white bg-opacity-50 hover:bg-opacity-75"
//                 }
//               `}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Auto-play control */}
//       <button
//         onClick={() => setIsAutoPlay(!isAutoPlay)}
//         className="absolute bottom-8 right-8 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
//         aria-label={isAutoPlay ? "Pause autoplay" : "Start autoplay"}
//       >
//         <Play size={16} className={isAutoPlay ? "opacity-100" : "opacity-50"} />
//       </button>

//       {/* Orange Triangle Accent */}
//       <div className="absolute bottom-0 right-0 z-10">
//         <div className="w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-orange-500 opacity-80"></div>
//       </div>
//     </div>
//   );
// };

// export default HeroCarousel;

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import HeroImage from "../../assets/HeroImage.png";
import HeroImage3 from "../../assets/HeroImage3.webp";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  // const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      title: "Your Construction Partner",
      subtitle: "Our Customer Satisfaction",
      description:
        "Nafees Khalfay – Pioneering Structural & P.E.B. Solutions with Vision, Precision, and Excellence since 2007.",
      image: HeroImage,
      alt: "Construction workers discussing project plans",
    },
    {
      id: 2,
      title: "Committed to Superior",
      subtitle: "quality and results!",
      description:
        "Nafees Khalfay – Pioneering Structural & P.E.B. Solutions with Vision, Precision, and Excellence since 2007.",
      image:
        "https://img.freepik.com/free-photo/view-modern-construction-site_23-2151317241.jpg?t=st=1756983225~exp=1756986825~hmac=fe20bd7de886b26bb6c1fa5d13244fb67c6ef134e403332541f3dbf731cbfa24&w=1060",
      alt: "Construction site with worker reviewing blueprints",
    },
    {
      id: 3,
      title: "Your Thought We Build",
      subtitle: "Construction Solution",
      description:
        "Nafees Khalfay – Pioneering Structural & P.E.B. Solutions with Vision, Precision, and Excellence since 2007.",
      image: HeroImage3,
      alt: "Industrial construction site with worker",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div> */}
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div
        className="relative z-10 flex items-center h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Small heading */}
            <div className="mb-6 overflow-hidden">
              <p
                className={`text-white/90 text-sm md:text-base font-medium tracking-wide transform transition-all duration-700 delay-200 ${
                  currentSlide >= 0
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Making Your Vision
              </p>
            </div>

            {/* Main heading */}
            <div className="mb-8 overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <div
                  className={`transform transition-all duration-700 delay-300 ${
                    currentSlide >= 0
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  {slides[currentSlide].title}
                </div>
                <div
                  className={`transform transition-all duration-700 delay-400 ${
                    currentSlide >= 0
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  <span className="text-yellow-400">
                    {slides[currentSlide].subtitle}
                  </span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <div className="mb-10 overflow-hidden">
              <p
                className={`text-white/90 pt-4 text-lg md:text-xl font-roboto max-w-2xl leading-relaxed transform transition-all duration-700 delay-500 ${
                  currentSlide >= 0
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {slides[currentSlide].description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="overflow-hidden">
              <button
                className={`bg-yellow-500 hover:bg-yellow-400 cursor-pointer text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 group ${
                  currentSlide >= 0
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
                onClick={() => navigate("/about-us")}
              >
                Explore More
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div
          className={`absolute left-4 top-1/2 md:top-1/2 xl:top-1/2 lg:top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-yellow-400 scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-yellow-400 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div> */}
    </div>
  );
};

export default HeroCarousel;
