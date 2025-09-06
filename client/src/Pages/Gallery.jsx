import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Building,
  Users,
  Award,
  Clock,
  Zap,
  Shield,
} from "lucide-react";
import HeroImage from "../assets/HeroImage.png";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // Gallery images with categories
  const galleryImages = [
    {
      id: 1,
      src: "https://5.imimg.com/data5/SELLER/Default/2024/7/436930908/UL/AB/KD/2478166/sky-walk-design-consultants-500x500.png",
      category: "structural",
      title: "Structural Design Consultant Services",
      description: "Experts in Structural and Prefab Design Services",
    },
    {
      id: 2,
      src: "https://5.imimg.com/data5/SELLER/Default/2024/7/436638374/OC/BD/KJ/2478166/rcc-consultants-500x500.jpg",
      category: "peb",
      title: "Civil Engineering Services",
      description: "Consultants for Civil and Structural Services",
    },
    {
      id: 3,
      src: "https://5.imimg.com/data5/SELLER/Default/2024/6/424444428/SJ/WQ/GI/2478166/prefabricated-structures-500x500.jpg",
      category: "installation",
      title: "Consultancy Services",
      description: "Experts in Engineering, Shed, Roofing Design",
    },
    {
      id: 4,
      src: "https://5.imimg.com/data5/SELLER/Default/2025/1/478069475/JX/GM/EY/2478166/shop-drawing-services-500x500.jpeg",
      category: "structural",
      title: "Structural Drawing Service",
      description: "Experts in Structural and Shop Drawings",
    },
    {
      id: 5,
      src: "https://5.imimg.com/data5/SELLER/Default/2024/7/436930102/YQ/RZ/FA/2478166/space-frame-design-500x500.png",
      category: "peb",
      title: "Roof Design Services",
      description: "Leading Mumbai Consultants for Steel & Roof Design",
    },
    {
      id: 6,
      src: "https://5.imimg.com/data5/SELLER/Default/2025/1/478071479/VO/LG/YK/2478166/industrial-architectural-service-500x500.jpeg",
      category: "installation",
      title: "Architectural Services",
      description: "Specialists in 2D CAD and Fabrication Drawings",
    },
    {
      id: 7,
      src: "https://5.imimg.com/data5/SELLER/Default/2024/7/436930324/GV/WQ/UI/2478166/pre-engineered-building-consultant-500x500.png",
      category: "structural",
      title: "Pre Fabricated Structure",
      description: "Leading Mumbai Consultants for PEB Design Services",
    },
    {
      id: 8,
      src: "https://3.imimg.com/data3/QD/PG/MY-2478166/photo-0005-1000x1000.jpg",
      category: "peb",
      title: "Detail Engineering Consultancy",
      description: "Engineering Services for Process Industry Automation",
    },
    {
      id: 9,
      src: "https://5.imimg.com/data5/SELLER/Default/2024/7/436636741/LJ/YS/VQ/2478166/industrial-sheds-500x500.jpg",
      category: "installation",
      title: "Structural Steel Designing Services",
      description: "Pioneers in Structural Steel Design Services",
    },
  ];

  const filterCategories = [
    { id: "all", label: "All Projects" },
    { id: "structural", label: "Structural Design" },
    { id: "peb", label: "Pre Engineered Buildings" },
    { id: "installation", label: "Installation & Maintenance" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const stats = [
    { icon: Building, number: "500+", label: "Projects Completed" },
    { icon: Users, number: "15+", label: "Years Experience" },
    { icon: Award, number: "100%", label: "Client Satisfaction" },
    { icon: Clock, number: "24/7", label: "Support Available" },
  ];

  const services = [
    {
      icon: Building,
      title: "Structural Designing",
      description:
        "Complete structural design solutions for buildings of all types and scales.",
    },
    {
      icon: Zap,
      title: "Pre Engineered Buildings",
      description:
        "Cost-effective and time-efficient PEB solutions for industrial and commercial use.",
    },
    {
      icon: Shield,
      title: "Installation & Maintenance",
      description:
        "Professional installation and ongoing maintenance services for existing structures.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags would go in head */}

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url("https://5.imimg.com/data5/SELLER/Default/2020/11/TT/LK/JE/2478166/prefabricated-warehouse-500x500.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          opacity: "90%",
        }}
        className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-white py-20 px-4 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Nafees Khalfay
            <span className="block text-3xl md:text-5xl mt-2">
              Structural & P.E.B. Consultant
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-100 text-gray-800">
            Excellence in Structural Design Since 2007
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-semibold">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              15+ Years Experience
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              500+ Projects
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Expert Team
            </span>
          </div> */}
        </div>
        <div className="absolute inset-0 bg-black opacity-35"></div>
      </section>

      {/* <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Our Organization
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://via.placeholder.com/600x400/4C4C4C/FFFFFF?text=Mr.+Nafees+Ahmed+Khalfay"
                alt="Mr. Nafees Ahmed Khalfay"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our organization,{" "}
                <strong className="text-yellow-600">
                  "Nafees Khalfay Structural & P.E.B. Consultant"
                </strong>{" "}
                was established in <strong>2007</strong>. Incepted as a Sole
                Proprietorship Firm, we offer comprehensive services for
                Structural Designing and Pre Engineered Building Consultation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We have achieved industry excellence through our captivating
                designs and strong visual appeal of architectural structures.
                Our expertise in completing projects on time and within budget
                has helped us surpass competitors in the industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Under the guidance of our mentor,{" "}
                <strong className="text-yellow-600">
                  "Mr. Nafees Ahmed Khalfay"
                </strong>
                , we have kept pace with times and continue to provide reliable
                services to our valued clients.
              </p>
            </div>
          </div>

          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <IconComponent className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      {/* <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-all hover:bg-yellow-50"
                >
                  <IconComponent className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Project Gallery
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects showcasing our
              expertise in structural design and engineering.
            </p>
          </div>

          {/* Filter Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === category.id
                    ? "bg-yellow-400 text-gray-900 shadow-lg"
                    : "bg-white text-gray-600 hover:bg-yellow-100 shadow-md"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div> */}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      {/* <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can bring your structural engineering vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Get Free Consultation
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View More Projects
            </button>
          </div>
        </div>
      </section> */}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-screen object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="opacity-90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
