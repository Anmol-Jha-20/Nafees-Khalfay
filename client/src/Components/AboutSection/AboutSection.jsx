import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Trophy, Users, Lightbulb, ArrowUp } from "lucide-react";

const AboutSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const stats = [
    {
      icon: Trophy,
      number: "150+",
      label: "Awards Winner",
      color: "text-yellow-500",
    },
    {
      icon: Users,
      number: "5021+",
      label: "Satisfied Clients",
      color: "text-orange-500",
    },
    {
      icon: Lightbulb,
      number: "201+",
      label: "Active projects",
      color: "text-yellow-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Image Section */}
          <motion.div
            className="relative order-2 lg:order-1"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://3.imimg.com/data3/QI/UE/MY-2478166/suc50370-1000x1000.jpg"
                  alt="Construction surveyor with equipment at construction site with mountains in background"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />

                {/* Play Button Overlay */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <motion.button
                    className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label="Play company introduction video"
                  >
                    <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </motion.button>
                </div> */}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg opacity-20"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            variants={itemVariants}
          >
            {/* About Tag */}
            <motion.div
              className="inline-flex items-center gap-2 text-gray-800 px-4 py-2 font-medium text-sm"
              variants={itemVariants}
            >
              {/* <ArrowUp className="w-4 h-4 rotate-45" /> */}
              About Us
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
                Leading Experts in
                <br />
                <span className="text-gray-700">
                  Structural & P.E.B. Consultancy
                </span>
              </h2>
            </motion.div>

            {/* Experience Badge */}
            <motion.div className="inline-block" variants={itemVariants}>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                18 Years Experience Working
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-600 leading-relaxed text-base lg:text-lg max-w-2xl"
              variants={itemVariants}
            >
              Our organization, “Nafees Khalfay Structural & P.E.B. Consultant”
              was established in the year 2007. Incepted as a Sole
              Proprietorship Firm, we are offering a host of Services for
              Structural Designing for Buildings and Pre Engineered Building
              Consultant . Further, we also offer Installation and Maintenance
              Services for existing building structures.......
            </motion.p>

            {/* More About Button & Signature */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
              variants={itemVariants}
            >
              <motion.button
                className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-white px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                More About
              </motion.button>

              {/* <div className="text-2xl lg:text-3xl font-bold text-gradient bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent italic">
                Nafees Ahmed Hussain Khalfay
              </div> */}
            </motion.div>

            {/* Statistics */}
            {/* <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 group cursor-pointer"
                  variants={statsVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                      index === 0
                        ? "from-yellow-400 to-orange-400"
                        : index === 1
                        ? "from-orange-400 to-red-400"
                        : "from-yellow-400 to-orange-500"
                    } flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
