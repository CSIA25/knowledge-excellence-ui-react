
import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const HomePage = () => {
  const services = [
    {
      id: 1,
      title: "School Consulting Services",
      description: "Comprehensive consulting for teachers and schools, including international teaching opportunities, school founding, teacher outsourcing, and IB integration. Elevate your educational institution with our expertise.",
      icon: <Globe className="h-12 w-12 text-primary" />,
      link: "/school-consulting",
    },
    {
      id: 2,
      title: "Global Scholarship Program",
      description: "Expert guidance for students seeking global scholarships. From assessment and profile building to exam preparation and visa interview training, we help students achieve their international education dreams.",
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      link: "/scholarships",
    },
    {
      id: 3,
      title: "Professional Trainings",
      description: "Specialized training programs for various professions including hospitality, healthcare, and PR services. Prepare for international career opportunities with our industry-focused training modules.",
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      link: "/trainings",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-blue-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="absolute inset-0 nepali-pattern opacity-10 z-0"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-6 animate-fade-in">
              Empowering Global Education & Careers with Knowledge Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in font-opensans">
              Unlock international opportunities for teachers, schools, students, and professionals.
            </p>
            <Link to="/school-consulting">
              <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 text-lg rounded-md font-poppins">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for educational and professional development needs across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from teachers, school administrators, students, and professionals who have benefited from our services.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Pre-Payment Highlight */}
      <section className="py-10 bg-secondary">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Secure Your Services with Our Pre-Payment Model
              </h2>
              <p className="text-primary/80 text-lg">
                Pay upfront for seamless access to our premium services and begin your journey to global opportunities.
              </p>
            </div>
            <div>
              <Link to="/payment">
                <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-poppins flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
