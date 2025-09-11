import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
import HeroImage from "../../assets/HeroImage.png";
import HeroImage3 from "../../assets/HeroImage3.webp";
import ArchitecturalImage from "../../assets/architecturalimage.webp";

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
      image: ArchitecturalImage,
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
