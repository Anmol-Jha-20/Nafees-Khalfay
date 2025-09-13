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
import Service1Image from "../../assets/Service1.png";

function StructuralDesign() {
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
      name: "Industrial Shed Design",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436930756/ZC/DO/JU/2478166/industrial-shed-design-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436930756/ZC/DO/JU/2478166/industrial-shed-design-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436930756/ZC/DO/JU/2478166/industrial-shed-design-500x500.png",
      ],
      description:
        "Counting on our extensive industry expertise, we offer our clients with premium quality range of Industrial Shed Design or Factory Shed Design Consultants. Our designs are highly acclaimed for being versatile, durable and cost effective. Further, these structures are specific to commercial building designs.",
      features: [
        "Versatile Layouts",
        "Structural Durability",
        "Cost Efficiency",
        "Expert Consultation",
      ],
      price: "Get Latest Price",
      originalPrice: "₹55,00,000",
    },
    {
      id: 2,
      name: "Sky Walk Design Consultants",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436930908/UL/AB/KD/2478166/sky-walk-design-consultants-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436930908/UL/AB/KD/2478166/sky-walk-design-consultants-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436930908/UL/AB/KD/2478166/sky-walk-design-consultants-500x500.png",
      ],
      description:
        "Our organization is recognized as a leading provider of Skywalk Design Consultancy. Our solutions are highly demanded for their superior quality, innovative design, and compliance with industry standards. Developed using top-grade components and the latest technology, each project is rigorously tested to ensure flawless execution.",
      features: [
        "Innovative Design",
        "Superior Quality",
        "Standards Compliance",
        "Trusted Expertise",
      ],
      price: "Get Latest Price",
      originalPrice: "₹45,00,000",
    },
    {
      id: 3,
      name: "Formwork Design Consultant",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436931103/OM/TN/DY/2478166/formwork-design-consultant-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436931103/OM/TN/DY/2478166/formwork-design-consultant-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436931103/OM/TN/DY/2478166/formwork-design-consultant-500x500.png",
      ],
      description:
        "With years of experience, we offer expert Formwork Design Consultancy and Shuttering Support Systems tailored to client needs. Our ready-to-install structures are known for their strength, durability, and resistance to corrosion and harsh weather.",
      features: [
        "Customized Solutions",
        "High Durability",
        "Corrosion Resistance",
        "Weather-Proof Design",
      ],
      price: "Get Latest Price",
      originalPrice: "₹1,45,00,000",
    },
    {
      id: 4,
      name: "Industrial Architecture Designing",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/3/397457256/IW/EF/IW/2478166/industrial-architecture-designing-500x500.png",
      ],
      description:
        "Industrial architecture is a type of architectural design used in the construction of buildings in the industrial sector. Industrial buildings are constructed for the purpose of efficiently and safely processing raw materials into new products",
      features: [
        "Compact Design",
        "Variable Print",
        "Easy Operation",
        "Quick Setup",
      ],
      price: "Get Latest Price",
      originalPrice: "₹22,00,000",
    },
    {
      id: 5,
      name: "Prefabricated Structures",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436635978/LH/PX/ZK/2478166/prefabricated-structures-500x500.jpeg",
      ],
      description:
        "Backed by rich industry experience, we are the leading service providers engaged in offering Pre Fabricated Structure. The offered services are effectively rendered in adherence to the set universal standards.",
      features: [
        "Multi-Color Printing",
        "Premium Quality",
        "Fast Production",
        "Color Management",
      ],
      price: "Get Latest Price",
      originalPrice: "₹85,00,000",
    },
    {
      id: 6,
      name: "Industrial Sheds",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436636741/LJ/YS/VQ/2478166/industrial-sheds-500x500.jpg",
      ],
      description:
        "Industrial Shed offered by us come in easy to install finish designs as well as in safe and secure construction finish which makes these provide for lasting usage. Further, the superior designs of the sheds also make these provide for maximized inner space.",
      features: [
        "Easy Installation",
        "Durable Construction",
        "Maximized Space",
        "Safe Structure",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 7,
      name: "Prefabricated Buildings",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436928839/GZ/MQ/OR/2478166/prefabricated-buildings-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436928839/GZ/MQ/OR/2478166/prefabricated-buildings-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436928839/GZ/MQ/OR/2478166/prefabricated-buildings-500x500.png",
      ],
      description:
        "Our Prefabricated Buildings are highly sought after for their modern design, quick installation, and structural durability. Engineered for efficiency and built with high-quality materials, they offer a cost-effective and reliable solution for residential, commercial, and industrial applications.",
      features: [
        "Modern Design",
        "Quick Installation",
        "Structural Durability",
        "Cost-Effective Solution",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 8,
      name: "Structural Steel Building Design Service",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436637918/TT/QG/OU/2478166/structural-steel-building-design-service-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436637918/TT/QG/OU/2478166/structural-steel-building-design-service-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436637918/TT/QG/OU/2478166/structural-steel-building-design-service-500x500.png",
      ],
      description:
        "Owing to our expertise this domain, we are highly engaged to providing the best quality range of Steel Structure Designing Services to prestigious clients. Our dexterous professionals construct this structure by using high class raw material. ",
      features: [
        "Expert Design",
        "High-Quality Materials",
        "Skilled Professionals",
        "Reliable Construction",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 9,
      name: "Industrial Planning And Design Service",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436637738/MI/DJ/AX/2478166/industrial-planning-and-design-service-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436637738/MI/DJ/AX/2478166/industrial-planning-and-design-service-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436637738/MI/DJ/AX/2478166/industrial-planning-and-design-service-500x500.jpg",
      ],
      description:
        "We proving Industrial Design Services. We study & analyze target client categories, usage scenarios, the characteristics the product is intended to project, usage environment & ergonomics & devise products for Industrial Design to achieve desired form, fit & function.",
      features: [
        "Client-Centric Analysis",
        "Ergonomic Design",
        "Functional Efficiency",
        "Strategic Planning",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 10,
      name: "Structural Engineering Services",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436929289/SW/IM/HQ/2478166/structural-engineering-services-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436929289/SW/IM/HQ/2478166/structural-engineering-services-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436929289/SW/IM/HQ/2478166/structural-engineering-services-500x500.png",
      ],
      description:
        "Banking on the skills of our qualified team of professionals, we are instrumental in providing 3D Drawing Service. This 3D Drawing Service is provided by our team of skilled professionals who aims for customer’s satisfaction. Our service range is widely demanded by the clients of different industries.",
      features: [
        "3D Drawing Expertise",
        "Skilled Professionals",
        "Industry-Focused Solutions",
        "Customer Satisfaction",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 11,
      name: "Structural Steel Designing Services",
      images: [ServiceImage],
      description:
        "We are pioneers in offering Structural Steel Design Services to the clients. Our professionals render these services only after considering the exact requirements of our prestigious clients. These services include site visits, concept design, concept development, construction documentation and liaison with architects, builders,Etc.",
      features: [
        "Client-Focused Design",
        "Comprehensive Planning",
        "On-Site Consultation",
        "Collaborative Approach",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 12,
      name: "Industrial Structural Design Services",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/1/478071793/UY/BP/DI/2478166/building-structural-design-service-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/1/478071793/UY/BP/DI/2478166/building-structural-design-service-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/1/478071792/YZ/GI/HD/2478166/building-structural-design-service-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/1/478071788/XC/JF/AQ/2478166/building-structural-design-service-500x500.jpeg",
      ],
      description:
        "Industrial Structural Design Services involve the planning, analysis, and design of structural systems for industrial facilities such as factories, warehouses, plants, and refineries. These services ensure that structures are safe, durable, and capable of supporting heavy machinery, dynamic loads, and operational demands.",
      features: [
        "Load-Bearing Design",
        "Durability Focused",
        "Safety Assured",
        "Industrial-Grade Solutions",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 13,
      name: "Factory Design Consultant",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436931309/SC/SX/DO/2478166/factory-design-consultant-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436931309/SC/SX/DO/2478166/factory-design-consultant-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436931309/SC/SX/DO/2478166/factory-design-consultant-500x500.png",
      ],
      description:
        "A Factory Design Consultant specializes in planning and optimizing the layout, workflow, and infrastructure of manufacturing facilities. Their role includes designing efficient factory layouts, selecting appropriate equipment placement, ensuring compliance with safety and regulatory standards, and improving overall production efficiency.",
      features: [
        "Efficient Layouts",
        "Workflow Optimization",
        "Regulatory Compliance",
        "Production Efficiency",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 14,
      name: "RCC Consultants",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436638374/OC/BD/KJ/2478166/rcc-consultants-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436638374/OC/BD/KJ/2478166/rcc-consultants-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436638374/OC/BD/KJ/2478166/rcc-consultants-500x500.jpg",
      ],
      description:
        "We offer RCC Consulting Services to offer customers reliable RCC Design work support as per specific design requirements. We judiciously utilize the available resources to provide the best designs to our valued clients. We design RCC buildings as per latest IS codes.",
      features: [
        "Reliable RCC Design",
        "Resource Optimization",
        "IS Code Compliance",
        "Custom Design Support",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 15,
      name: "Car Park Structure Design",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436638557/OJ/YR/OB/2478166/car-park-structure-design-500x500.jpg",
      ],
      description:
        "We are one of the best and fastest solutions for . Car Park Structure Design Our solutions are widely known for economical and fast construction. Our structural design is based on latest IS codes. We make use of high-grade concrete and steel bars procured from the most authorized vendors in the industry.",
      features: [
        "Fast Construction",
        "Economical Solutions",
        "IS Code Compliance",
        "High-Quality Materials",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 16,
      name: "Engineering Design Consultancy",
      images: [
        "https://4.imimg.com/data4/XS/CL/MY-2478166/engineering-design-consultancy-500x500.jpg",
        "https://4.imimg.com/data4/XO/QR/MY-2478166/engineering-design-consultancy-500x500.jpg",
        "https://4.imimg.com/data4/XO/QR/MY-2478166/engineering-design-consultancy-500x500.jpg",
      ],
      description:
        "Engineering Design Consultancy involves providing expert design solutions for a wide range of structural projects. I specialize in the design of RCC (Reinforced Cement Concrete), steel, and PEB (Pre-Engineered Building) structures, offering tailored engineering services to meet the unique needs of industrial and commercial projects.",
      features: [
        "Expert Design Solutions",
        "RCC, Steel, PEB",
        "Tailored Engineering",
        "Industrial & Commercial",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 17,
      name: "Industrial Building Design",
      images: [
        "https://4.imimg.com/data4/DA/DE/MY-2478166/industrial-building-design-500x500.jpg",
        "https://4.imimg.com/data4/DA/DE/MY-2478166/industrial-building-design-500x500.jpg",
        "https://4.imimg.com/data4/DA/DE/MY-2478166/industrial-building-design-500x500.jpg",
      ],
      description:
        "Industrial Building Design involves the specialized planning and structural engineering of facilities such as factories, warehouses, workshops, and plants. My expertise lies in designing RCC (Reinforced Cement Concrete), steel, and PEB (Pre-Engineered Building) structures tailored to industrial requirements.",
      features: [
        "Specialized Planning",
        "Structural Expertise",
        "RCC, Steel, PEB",
        "Industry-Specific Design",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 18,
      name: "Structural Restoration Services",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436637261/CD/KH/WW/2478166/structural-restoration-services-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436637261/CD/KH/WW/2478166/structural-restoration-services-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436637261/CD/KH/WW/2478166/structural-restoration-services-500x500.jpg",
      ],
      description:
        "Structural Restoration Services focus on repairing, strengthening, and restoring damaged or deteriorated structures to their original or improved condition. While carefully considering the exact requirements of our customers, we offer tailored solutions that address structural issues caused by age, environmental factors, wear and tear, or design flaws.",
      features: [
        "Damage Repair",
        "Structural Strengthening",
        "Tailored Solutions",
        "Longevity Enhancement",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 19,
      name: "Fabrication Drawing",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436928716/JJ/BF/DO/2478166/fabrication-drawing-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436928716/JJ/BF/DO/2478166/fabrication-drawing-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436928716/JJ/BF/DO/2478166/fabrication-drawing-500x500.png",
      ],
      description:
        "Our team of efficient service personnel is adapt on offering effective Fabrication Drawing Services. They have gained valuable expertise in meeting the clients requirements and keep up to date with the latest technologies.",
      features: [
        "Accurate Drafting",
        "Skilled Personnel",
        "Client-Centric Approach",
        "Latest Technology",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 20,
      name: "Detail Engineering Consultancy",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/3/397463726/CS/VQ/TL/2478166/detail-engineering-consultancy-500x500.jpg",
      ],
      description:
        "We are giving engineering services and detail engineering for medium and small size of process industries as per national/international standard for the requirement of automation/instrumentation",
      features: [
        "Process Industry Focus",
        "Automation Support",
        "Standards Compliance",
        "Instrumentation Design",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 21,
      name: "Engineering Design Services",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436929416/OH/NX/TZ/2478166/engineering-design-services-500x500.png",
      ],
      description:
        "With immense industry experience, we are offering a beautiful range of Engineering Design Services. These services can be avail in customized options as per the needs of clients.",
      features: [
        "Industry Experience",
        "Custom Design Solutions",
        "Client-Centric Approach",
        "Versatile Applications",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 22,
      name: "Building Structural Designing Services",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/3/397465049/CO/EY/MJ/2478166/building-structural-designing-services-500x500.jpg",
        "https://5.imimg.com/data5/EF/SO/MY-2478166/building-structural-designing-services-500x500.jpg",
      ],
      description:
        "our enormous business expertise, we are instrumental in providing Building Structure Designing Services to our customers that too within the given time.",
      features: [
        "Timely delivery",
        "Affordable price",
        "Ensures reliability",
        "Quality resources used",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 23,
      name: "Commercial Building Design",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436638152/PQ/WT/ED/2478166/commercial-building-design-500x500.jpg",
      ],
      description:
        "Commercial Building Design involves the planning and structural engineering of spaces intended for business and public use. We specialize in designing all types of commercial buildings, including shopping complexes, showrooms, malls, mixed-use developments, and office buildings.",
      features: [
        "Efficient Space Planning",
        "Structural Integrity",
        "Modern Aesthetics",
        "Code Compliance",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 24,
      name: "Prefabricated Steel Buildings",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436929951/LO/HL/FE/2478166/prefabricated-steel-buildings-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436929951/LO/HL/FE/2478166/prefabricated-steel-buildings-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436929951/LO/HL/FE/2478166/prefabricated-steel-buildings-500x500.png",
      ],
      description:
        "Prefabricated Steel Buildings are modern, efficient structures built using factory-manufactured steel components that are assembled on-site. These buildings are known for their strength, durability, quick installation, and cost-effectiveness.",
      features: [
        "Quick Installation",
        "High Durability",
        "Cost Efficiency",
        "Modular Construction",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 25,
      name: "CAD Design Services",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436637561/OW/WP/BI/2478166/cad-design-services-500x500.jpg",
      ],
      description:
        "CAD Design Services involve the use of advanced computer-aided design software to create precise and detailed drawings for architectural, structural, and engineering projects. With rich industry experience and deep technical knowledge, we offer a comprehensive range of CAD solutions tailored to meet the diverse needs of our clients across various sectors.",
      features: [
        "Precision Drafting",
        "Detailed Visualization",
        "Custom Solutions",
        "Technical Accuracy",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 26,
      name: "Building Structural Design Service",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2025/1/478071793/UY/BP/DI/2478166/building-structural-design-service-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/1/478071792/YZ/GI/HD/2478166/building-structural-design-service-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/1/478071793/UY/BP/DI/2478166/building-structural-design-service-500x500.png",
      ],
      description:
        "Our Building Structural Design Service offers end-to-end structural engineering solutions for residential, commercial, and industrial buildings. We specialize in creating safe, efficient, and cost-effective structural systems tailored to each project's unique requirements.",
      features: [
        "Safety Focused",
        "Cost Effective",
        "Custom Engineering",
        "Structural Efficiency",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 27,
      name: "Prefabricated Factory Shed",
      images: [
        "https://5.imimg.com/data5/NX/JI/MY-2478166/prefabricated-factory-shed-500x500.jpg",
        "https://5.imimg.com/data5/NX/JI/MY-2478166/prefabricated-factory-shed-500x500.jpg",
        "https://5.imimg.com/data5/NX/JI/MY-2478166/prefabricated-factory-shed-500x500.jpg",
      ],
      description:
        "Our Prefabricated Factory Shed solutions are designed to meet the demands of modern industrial operations, offering quick installation, cost efficiency, and long-term durability. These sheds are manufactured using high-quality steel components and are assembled on-site, significantly reducing construction time compared to traditional methods.",
      features: [
        "Rapid Installation",
        "Industrial-Grade Durability",
        "Cost Effective",
        "Low Maintenance",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 28,
      name: "PEB Structural Shed",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/3/397457978/JK/XZ/SZ/2478166/peb-structural-shed-500x500.jpg",
      ],
      description:
        "We specialize in the manufacturing of high-quality structural sheds, crafted using premium-grade materials and advanced fabrication techniques. Our sheds are designed and built in compliance with the latest industry standards, ensuring durability, safety, and long-term performance.",
      features: [
        "Premium Materials",
        "Engineered Precision",
        "Long-Term Durability",
        "Safety Compliant",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 29,
      name: "Detail Engineering Services",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436929164/NZ/TE/TF/2478166/detail-engineering-services-500x500.png",
      ],
      description:
        "Banking on our rich industrial experiences, we have been providing  Detail Engineering Service. Offered service include a seamless integration of basic engineering through a common design database, which provides consistent and correct data in all the design deliverables and design cycle.",
      features: [
        "Integrated Design",
        "Data Consistency",
        "Accurate Deliverables",
        "Process Optimization",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 30,
      name: "Tensile Fabric Structure Design",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/436930572/UJ/UZ/SO/2478166/tensile-fabric-structure-design-500x500.png",
      ],
      description:
        "Our offered Tensile Fabric  Structure Designing Service consists of engineers that work best and combines ideas with workshop concepts. Furthermore, we are focused on offering high-grade solutions with architectural eye-catchers and combine elegance with innovative technology.",
      features: [
        "Architectural Elegance",
        "Innovative Design",
        "Lightweight Structures",
        "Durable Materials",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 31,
      name: "Industrial Engineering Service",
      images: [
        "https://images.unsplash.com/photo-1629540946404-ebe133e99f49?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      description:
        "Industrial Engineering Service offered involves our expertise in offering strategic consulting and engineering services for industrial sector. Widely demanded in various engineering sectors, this service is rendered to manage coordination of human",
      features: [
        "Process Optimization",
        "Strategic Planning",
        "Resource Efficiency",
        "System Integration",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
    },
    {
      id: 32,
      name: "Shop Structure Design Services",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2023/3/295041866/UK/KV/PL/86637912/shop-exterior-designing-service.jpeg",
      ],
      description:
        "Our Shop Structure Design Services offer innovative, functional, and cost-effective structural solutions for all types of commercial shops and retail spaces. Whether you're planning a small retail outlet, showroom, or complex multi-unit commercial space, we provide expert design services tailored to your specific needs.",
      features: [
        "Functional Layouts",
        "Cost-Effective Solutions",
        "Custom Design",
        "Retail Optimization",
      ],
      price: "Get Latest Price",
      originalPrice: "₹15,00,000",
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
              backgroundImage: `url(${ServiceImage})`,
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
                Structural Design Consultant Services
              </motion.h1>

              <motion.nav
                variants={fadeInUp}
                className="flex items-center space-x-2 text-white text-lg"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-yellow-400">
                  Structural Design Consultant Services
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
                  Structural Design Consultant Services
                </h1>

                <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                  <span className="block font-semibold text-yellow-400">
                    Expert Structural Design Tailored to Your Project Needs.
                  </span>
                </p>

                <p className="text-lg mb-8 leading-relaxed text-gray-600">
                  Pioneers in the industry, we offer Industrial Shed Design, Sky
                  Walk Design Consultants, Formwork Design Consultant,
                  Industrial Architecture Designing, Prefabricated Structures ,
                  and Structural Steel Designing Services from India.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button
                    onClick={() => (window.location.href = "tel:919920835501")}
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
                    src="https://5.imimg.com/data5/SELLER/Default/2024/7/436930756/ZC/DO/JU/2478166/industrial-shed-design-500x500.png"
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
                <span>Structural Design Consultant Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive structural design consultancy
                services, delivering innovative, safe, and cost-effective
                solutions for residential, commercial, and industrial projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default StructuralDesign;
