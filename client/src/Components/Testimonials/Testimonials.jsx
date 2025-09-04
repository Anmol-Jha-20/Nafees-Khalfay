import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "We've worked with Nafees Khalfay Structural & P.E.B. Consultant for five years, and the experience has been excellent. Their service is intuitive, high-quality, and has greatly streamlined my daily workflow. I couldn’t ask for more.",
      name: "Will Smith",
      position: "CEO Envato",
    },
    {
      id: 2,
      text: "We've been using Nafees Khalfay Structural & P.E.B. Consultant for five years, and it’s been a great experience. Everything is intuitive—I didn’t even need training. The service keeps improving and makes my work so much easier. Great job on building such a reliable solution!",
      name: "Laura Lopez",
      position: "CEO Cryptic",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMkQyRDJEIi8+CjxwYXRoIGQ9Ik0xMDAgMTAwTDE4MjAgMTAwTDE4MjAgOTgwTDEwMCA5ODBaIiBzdHJva2U9IiM0QTRBNEEiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSI5NjAiIGN5PSI1NDAiIHI9IjUwIiBmaWxsPSIjRkZBNTAwIi8+CjxwYXRoIGQ9Ik0yMDAgMjAwTDMwMCAzMDBNMzAwIDIwMEwyMDAgMzAwTTE2MDAgMjAwTDE3MDAgMzAwTTE3MDAgMjAwTDE2MDAgMzAwTTIwMCA3MDBMMTM1MCA3NjBNMTM1MCA3MDBMMJG5IDc2MCIgc3Ryb2tlPSIjNkE2QTZBIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+')`,
        }}
      ></div>

      {/* Construction Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-16 h-16 border-4 border-yellow-500 rotate-45 opacity-20"></div>
        <div className="absolute top-40 right-32 w-12 h-12 border-4 border-yellow-500 opacity-15"></div>
        <div className="absolute bottom-32 left-16 w-20 h-20 border-4 border-yellow-500 rotate-12 opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 border-4 border-yellow-500 rotate-45 opacity-20"></div>

        {/* Construction crane silhouette */}
        <div className="absolute right-10 top-10 w-64 h-96 opacity-30">
          <div className="absolute right-0 top-20 w-2 h-72 bg-yellow-600 transform rotate-12"></div>
          <div className="absolute right-8 top-16 w-32 h-2 bg-yellow-600"></div>
          <div className="absolute right-20 top-32 w-2 h-16 bg-yellow-600"></div>
        </div>

        {/* Worker silhouette */}
        <div className="absolute right-32 bottom-40 w-16 h-24 opacity-40">
          <div className="w-6 h-6 bg-yellow-500 rounded-full mx-auto mb-1"></div>
          <div className="w-8 h-12 bg-yellow-600 mx-auto mb-1"></div>
          <div className="w-10 h-6 bg-yellow-600 mx-auto"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <p className="text-yellow-400 text-sm sm:text-base font-semibold uppercase tracking-wider mb-4">
              OUR TESTIMONIAL
            </p>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              We care about your opinion
            </h2>
            <div className="w-16 h-1 bg-white mx-auto mt-6"></div>
          </div>

          {/* Testimonials Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="max-w-4xl mx-auto">
                      <p className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-light">
                        {testimonial.text}
                      </p>
                      <div className="text-center">
                        <h4 className="text-white text-xl sm:text-2xl font-semibold mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-300 text-base sm:text-lg">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="absolute left-0 sm:left-4 lg:left-16 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={40} className="sm:w-12 sm:h-12" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="absolute right-0 sm:right-4 lg:right-16 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight size={40} className="sm:w-12 sm:h-12" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index
                    ? "bg-yellow-400"
                    : "bg-white bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* SEO-friendly structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Service",
              name: "Trankad Construction Services",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
            },
            name: "Customer Testimonials",
            author: testimonials.map((testimonial) => ({
              "@type": "Person",
              name: testimonial.name,
              jobTitle: testimonial.position,
            })),
            reviewBody: testimonials.map((testimonial) => testimonial.text),
          }),
        }}
      />
    </div>
  );
};

export default TestimonialsSection;
