import React from "react";
import ArchitecturalImage from "../../assets/architecturalimage.webp";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Structural Design Consultant Services",
      description:
        "Pioneers in the industry, we offer Industrial Shed Design, Sky Walk Design Consultants, Formwork Design Consultant, Prefabricated Structures , Structural Steel Designing Services and Industrial Sheds from India.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436930908/UL/AB/KD/2478166/sky-walk-design-consultants-500x500.png",
    },
    {
      id: 2,
      title: "Civil Engineering Services",
      description:
        "Consultants of a wide range of products which include Civil Engineering Services, Structural Engineering Consultancy Service and Rcc Consultants Service.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436638374/OC/BD/KJ/2478166/rcc-consultants-500x500.jpg",
    },
    {
      id: 3,
      title: "Consultancy Services",
      description:
        "Pioneers in the industry, we offer Engineering Consultant Service, Shed Designing Service and Roofing Design Service from India.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/6/424444428/SJ/WQ/GI/2478166/prefabricated-structures-500x500.jpg",
    },
    {
      id: 4,
      title: "Structural Drawing Service",
      description:
        "Providing you the best range of Structural Drawing . and Shop Drawing Services with effective & timely delivery.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2025/1/478069475/JX/GM/EY/2478166/shop-drawing-services-500x500.jpeg",
    },
    {
      id: 5,
      title: "Roof Design Services",
      description:
        "Prominent & Leading Consultants from Mumbai, we offer Space Frame Design, Roof Design Services and Steel Detailing ..",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436930102/YQ/RZ/FA/2478166/space-frame-design-500x500.png",
    },
    {
      id: 6,
      title: "Architectural Services",
      description:
        "Providing you the best range of Industrial Architectural Service, Fabrication Drawing Services and 2d Cad Design Service with effective & timely delivery.",
      image: ArchitecturalImage,
    },
    {
      id: 7,
      title: "Pre Fabricated Structure",
      description:
        "Leading Consultants of Pre Engineered Building Consultant and Pre Engineered Building Design And Drawing Service from Mumbai.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436930324/GV/WQ/UI/2478166/pre-engineered-building-consultant-500x500.png",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-left mb-16">
        <p className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-4">
          OUR SERVICES
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
          There are Many Types of Services In Nafees Khalfay
        </h2>
        <div className="w-16 h-1 bg-yellow-400 mt-6"></div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            role="article"
            aria-labelledby={`service-${service.id}-title`}
          >
            {/* Service Image */}
            <div className="w-full h-48 sm:h-56 overflow-hidden">
              <img
                src={service.image.replace("w=100&h=100", "w=400&h=300")}
                alt={`${service.title} service illustration`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/400x300/f59e0b/ffffff?text=${service.title.charAt(
                    0
                  )}`;
                }}
              />
            </div>

            {/* Service Content */}
            <div className="p-6 space-y-4">
              <h3
                id={`service-${service.id}-title`}
                className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300"
              >
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
