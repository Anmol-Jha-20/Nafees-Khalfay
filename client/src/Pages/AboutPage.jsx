import React from "react";
import { motion } from "framer-motion";
import { Play, Home, ChevronRight } from "lucide-react";
import HeroImage from "../assets/HeroImage.png";
import TestimonialsSection from "../Components/Testimonials/Testimonials";

const AboutPage = () => {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: `url(${HeroImage})`,
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
              About Us
            </motion.h1>

            <motion.nav
              variants={fadeInUp}
              className="flex items-center space-x-2 text-white text-lg"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-yellow-400">About us</span>
            </motion.nav>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
              className="space-y-8"
            >
              <div>
                <p className="text-gray-500 text-sm font-semibold tracking-wider uppercase mb-4">
                  ABOUT US
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Constructing Is More Than Giving Advice
                </h2>
                <div className="w-16 h-1 bg-yellow-400 mb-8"></div>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Our organization, “Nafees Khalfay Structural & P.E.B.
                  Consultant” was established in the year 2007. Incepted as a
                  Sole Proprietorship Firm, we are offering a host of Services
                  for Structural Designing for Buildings and Pre Engineered
                  Building Consultant . Further, we also offer Installation and
                  Maintenance Services for existing building structures.
                </p>

                <div className="border-l-4 border-yellow-400 pl-6 py-4 bg-gray-50">
                  <p className="text-lg font-medium text-gray-800">
                    Our highly durable and quality oriented services are
                    acknowledged by the clients. It is due to the efficiency of
                    our team in closely studying the client’s requirement,
                    in-depth knowledge and expertise that we are able to handle
                    complicated projects.
                  </p>
                </div>

                <p className="text-lg">
                  Our strong background enables us to incorporate client
                  suggestions in terms of designs, shapes, sizes and colors to
                  meet their needs accordingly. Owing to our captivating designs
                  and the strong visual appeal of our architectural structures,
                  we have achieved industry excellence. By utilizing our
                  expertise in completing projects on time and within budget, we
                  have surpassed our competitors in the industry.We have been
                  able to scale the citadels of success under the guidance of
                  our mentor, “Mr. Nafees Ahmed Khalfay”. Under his guidance we
                  have kept pace with times and able to provide reliable
                  services to our clients.
                </p>
              </div>
            </motion.div>

            {/* Right Content - Image with Play Button */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://3.imimg.com/data3/QI/UE/MY-2478166/suc50370-1000x1000.jpg"
                  alt="Construction workers reviewing blueprints"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </div>
  );
};

export default AboutPage;
