// import React, { useState } from "react";
// import { MapPin, Phone, Mail } from "lucide-react";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       alert("Message sent successfully!");
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//       setIsSubmitting(false);
//     }, 2000);
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gray-50">
//         {/* SEO Meta Tags would go in head */}
//         <div className="hidden">
//           <h1>Contact Us - Get in Touch</h1>
//           <meta
//             name="description"
//             content="Contact us for any kind of information. Located in Andheri West, Mumbai. Call us at 1800 667 3322 or email at contact@example.com"
//           />
//           <meta
//             name="keywords"
//             content="contact, mumbai, andheri west, business contact, consultation"
//           />
//         </div>

//         <div className="container mx-auto px-4 py-8 lg:py-16 animate-fadeIn">
//           {/* Header Section */}
//           <div className="text-center mb-12 transform transition-all duration-700 hover:scale-105">
//             <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">
//               CONTACT US
//             </p>
//             <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
//               Contact for any
//             </h1>
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//               Kind of Information
//             </h2>
//             <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
//           </div>

//           {/* Contact Info and Form Section */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
//             {/* Contact Information */}
//             <div className="lg:col-span-1 transform transition-all duration-500 hover:translate-y-[-5px]">
//               <div className="space-y-8">
//                 {/* Address */}
//                 <div className="group">
//                   <div className="flex items-start space-x-3 mb-4 transition-all duration-300 group-hover:text-yellow-600">
//                     <MapPin className="w-5 h-5 text-gray-600 mt-1 group-hover:text-yellow-600 transition-colors" />
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">
//                         Address:
//                       </h3>
//                       <p className="text-gray-700 text-lg font-semibold">
//                         A/701, Shaheen Chambers
//                       </p>
//                       <p className="text-gray-700 text-lg font-semibold">
//                         Commercial Premises CHSL, 92,
//                       </p>
//                       <p className="text-gray-700 text-lg font-semibold">
//                         Daud Baug Road, Opp Pearl Heritage,
//                       </p>
//                       <p className="text-gray-700 text-lg font-semibold">
//                         Andheri (West), Mumbai-400 058
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="group">
//                   <div className="flex items-start space-x-3 mb-4 transition-all duration-300 group-hover:text-blue-600">
//                     <Mail className="w-5 h-5 text-gray-600 mt-1 group-hover:text-blue-600 transition-colors" />
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
//                         Email:
//                       </h3>
//                       <p className="text-gray-700 text-lg font-semibold mb-2 hover:text-blue-600 transition-colors cursor-pointer">
//                         contact@example.com
//                       </p>
//                       <p className="text-gray-700 text-lg font-semibold hover:text-blue-600 transition-colors cursor-pointer">
//                         support@example.com
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Phone */}
//                 <div className="group">
//                   <div className="flex items-start space-x-3 transition-all duration-300 group-hover:text-green-600">
//                     <Phone className="w-5 h-5 text-gray-600 mt-1 group-hover:text-green-600 transition-colors" />
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
//                         Phone:
//                       </h3>
//                       <p className="text-gray-700 text-lg font-semibold mb-2 hover:text-green-600 transition-colors cursor-pointer">
//                         Mobile: 1800 667 3322
//                       </p>
//                       <div className="flex items-center space-x-2">
//                         <span className="text-gray-600 group-hover:text-green-600 transition-colors">
//                           📠
//                         </span>
//                         <p className="text-gray-700 text-lg font-semibold hover:text-green-600 transition-colors cursor-pointer">
//                           Fax: 1666 444 8833
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="lg:col-span-2 transform transition-all duration-500 hover:translate-y-[-2px]">
//               <div className="space-y-6">
//                 {/* Name Fields */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="group">
//                     <label
//                       htmlFor="firstName"
//                       className="block text-gray-700 font-medium mb-2 group-hover:text-yellow-600 transition-colors"
//                     >
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       id="firstName"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-yellow-400 focus:outline-none bg-transparent transition-all duration-300 hover:border-gray-400"
//                       required
//                     />
//                   </div>
//                   <div className="group">
//                     <label
//                       htmlFor="lastName"
//                       className="block text-gray-700 font-medium mb-2 group-hover:text-yellow-600 transition-colors"
//                     >
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       id="lastName"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-yellow-400 focus:outline-none bg-transparent transition-all duration-300 hover:border-gray-400"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Email and Subject */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="group">
//                     <label
//                       htmlFor="email"
//                       className="block text-gray-700 font-medium mb-2 group-hover:text-yellow-600 transition-colors"
//                     >
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-yellow-400 focus:outline-none bg-transparent transition-all duration-300 hover:border-gray-400"
//                       required
//                     />
//                   </div>
//                   <div className="group">
//                     <label
//                       htmlFor="subject"
//                       className="block text-gray-700 font-medium mb-2 group-hover:text-yellow-600 transition-colors"
//                     >
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleInputChange}
//                       className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-yellow-400 focus:outline-none bg-transparent transition-all duration-300 hover:border-gray-400"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div className="group">
//                   <label
//                     htmlFor="message"
//                     className="block text-gray-700 font-medium mb-2 group-hover:text-yellow-600 transition-colors"
//                   >
//                     Your Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     rows={6}
//                     placeholder="Your Message"
//                     className="w-full px-4 py-4 border-2 border-gray-300 focus:border-yellow-400 focus:outline-none bg-transparent transition-all duration-300 resize-none hover:border-gray-400"
//                     required
//                   ></textarea>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
//                   <button
//                     onClick={handleSubmit}
//                     disabled={isSubmitting}
//                     className="px-8 py-3 bg-gray-900 text-white font-semibold border-2 border-gray-900 hover:bg-transparent hover:text-gray-900 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2 transform hover:scale-105"
//                   >
//                     <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
//                     <span className="transform transition-transform group-hover:translate-x-1">
//                       →
//                     </span>
//                   </button>

//                   <button
//                     type="button"
//                     className="px-8 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
//                   >
//                     Presale Chat
//                   </button>
//                 </div>

//                 {/* Purchase Theme Button */}
//                 <div className="pt-4">
//                   <button
//                     type="button"
//                     className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
//                   >
//                     <span className="text-green-400">⚡</span>
//                     <span>Purchase Theme on: envato market</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Google Map Section */}
//           <div className="w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8534442886324!2d72.8266!3d19.1359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d3b1e7c1f%3A0x4e6f7b0f8a2b1c8d!2sDaud%20Baug%20Rd%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400058!5e0!3m2!1sen!2sin!4v1632746543210!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Office Location - Andheri West, Mumbai"
//             ></iframe>
//           </div>

//           {/* Additional SEO Content */}
//           <div className="mt-12 text-center transform transition-all duration-700 hover:scale-105">
//             <div className="max-w-4xl mx-auto">
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                 Get in Touch with Us
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Located in the heart of Andheri West, Mumbai, we're here to help
//                 you with any inquiries or support you may need. Our office is
//                 conveniently located near Pearl Heritage, making it easily
//                 accessible for our clients and partners. Whether you need
//                 consultation, support, or have any questions about our services,
//                 don't hesitate to reach out to us through any of the contact
//                 methods provided above.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactPage;

import React, { useState } from "react";
import HeroImage from "../assets/HeroImage.png";
import { motion } from "framer-motion";
import { Play, Home, ChevronRight } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitStatus("success");
    setIsSubmitting(false);

    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitStatus(null);
    }, 3000);
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Information */}
      <div className="hidden">
        <h1>Contact Us - Get in Touch for Any Information</h1>
        <span>
          Contact us for any kind of information. Located in Mumbai, Andheri
          West. Phone: 1800 667 3322, Email: contact@example.com
        </span>
        <span>
          Keywords: contact, information, Mumbai, Andheri West, consulting
        </span>
      </div>

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
              Contact Us
            </motion.h1>

            <motion.nav
              variants={fadeInUp}
              className="flex items-center space-x-2 text-white text-lg"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-yellow-400">Contact us</span>
            </motion.nav>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="max-w-7xl mx-auto animate-fade-in">
          {/* Header Section */}
          <div className="text-center lg:text-left mb-12 animate-slide-up">
            <p className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-4">
              CONTACT US
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact for any
              <br />
              Kind of Information
            </h1>
            <div className="w-16 h-1 bg-yellow-400 mx-auto lg:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="transform hover:scale-105 transition-transform duration-200">
              <h3 className="text-gray-500 text-sm font-medium mb-3">
                Address:
              </h3>
              <address className="text-gray-900 font-semibold text-lg not-italic leading-relaxed">
                A/701, Shaheen Chambers Commercial Premises CHSL,
                <br />
                92, Daud Baug Road, Opp Pearl Heritage,
                <br />
                Andheri (West), Mumbai-400 058
              </address>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <h3 className="text-gray-500 text-sm font-medium mb-3">Email:</h3>
              <div className="space-y-2">
                <a
                  href="mailto:nkpebdesign@yahoo.com"
                  className="block text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors"
                >
                  nkpebdesign@yahoo.com
                </a>
                {/* <a
                  href="mailto:support@example.com"
                  className="block text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors"
                >
                  nkpebdesign@yahoo.com
                </a> */}
              </div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-200">
              <h3 className="text-gray-500 text-sm font-medium mb-3">Phone:</h3>
              <div className="space-y-2">
                <a
                  href="tel:+919920835501"
                  className="block text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors"
                >
                  Mobile: 99208 35501
                </a>
                <a
                  href="tel:=919920215501"
                  className="block text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors"
                >
                  Alt No: 9920215501
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Contact Info & Form */}
            <div className="space-y-8 animate-slide-left">
              {/* Contact Information */}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      required
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 bg-transparent placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 group-hover:border-gray-300"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      required
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 bg-transparent placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 group-hover:border-gray-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 bg-transparent placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 group-hover:border-gray-300"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      required
                      className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 bg-transparent placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300 text-gray-900 group-hover:border-gray-300"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    required
                    rows="6"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-none bg-transparent placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-vertical text-gray-900 group-hover:border-gray-300"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-4 bg-gray-900 text-white font-medium uppercase tracking-wide border-2 border-gray-900 hover:bg-transparent hover:text-gray-900 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 ${
                      isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE →"}
                  </button>
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-700 animate-fade-in">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Right Column - Google Map */}
            <div className="relative h-96 lg:h-full min-h-[500px] rounded-lg overflow-hidden shadow-lg animate-slide-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.003823926891!2d72.8347107!3d19.1350825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef1fd9%3A0xc2654d5ed5e4d1!2sDaud%20Baug%20Rd%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400058!5e0!3m2!1sen!2sin!4v1638360000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location - Andheri West, Mumbai"
                className="absolute inset-0"
              ></iframe>

              {/* Map Overlay with Contact Info */}
              <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs transform hover:scale-105 transition-transform duration-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Federal Consulting Group
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  A/701, Shaheen Chambers Commercial Premises CHSL
                </p>
                <a
                  href="https://maps.google.com/?q=A/701,+Shaheen+Chambers+Commercial+Premises+CHSL,+92,+Daud+Baug+Road,+Opp+Pearl+Heritage,+Andheri+(West),+Mumbai-400+058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline transition-colors duration-200"
                >
                  View larger map
                </a>
              </div>

              {/* Map Controls */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white shadow-lg rounded flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-gray-600 text-lg font-bold">+</span>
                </button>
                <button className="w-10 h-10 bg-white shadow-lg rounded flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
                  <span className="text-gray-600 text-lg font-bold">−</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-left {
          from {
            transform: translateX(-30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-right {
          from {
            transform: translateX(30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out 0.2s both;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
