
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, GraduationCap, Briefcase, School, Building, Users, Globe, Award, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  services: {
    id: string;
    title: string;
    description: string;
    features?: string[];
  }[];
}

const AccordionSection = ({ title, description, icon, services }: AccordionSectionProps) => {
  return (
    <div className="mb-10">
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-3 rounded-full mr-4">{icon}</div>
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>

      <Accordion type="single" collapsible className="w-full">
        {services.map((service) => (
          <AccordionItem key={service.id} value={service.id}>
            <AccordionTrigger className="text-left font-poppins text-lg text-primary hover:no-underline">
              {service.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="py-2">
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.features && (
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={20} className="text-accent mr-2 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link to="/payment" className="mt-4 inline-block">
                  <Button className="bg-accent hover:bg-accent/90 text-white mt-4">
                    Get Started
                  </Button>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const SchoolConsultingPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const teacherServices = [
    {
      id: "international-teaching",
      title: "International Teaching Opportunities",
      description: "Connect with prestigious schools worldwide and advance your teaching career globally.",
      features: [
        "Placement in international schools across 30+ countries",
        "Comprehensive support with visa and relocation",
        "Contract negotiation assistance",
        "Cultural adaptation training",
        "Ongoing professional support"
      ]
    },
    {
      id: "teacher-training",
      title: "Teacher Training & Career Development",
      description: "Enhance your teaching skills and advance your career with our specialized training programs.",
      features: [
        "IB curriculum specialized training",
        "Modern teaching methodologies",
        "Digital classroom techniques",
        "Leadership development for educators",
        "Professional certification programs"
      ]
    },
    {
      id: "educator-fellowship",
      title: "Overseas Educator Fellowship",
      description: "Join our exclusive fellowship program for educators seeking international exposure and growth.",
      features: [
        "3-6 month fellowship placements",
        "Cross-cultural teaching experience",
        "Research opportunities",
        "Global educator network access",
        "Publication and presentation opportunities"
      ]
    }
  ];

  const schoolServices = [
    {
      id: "school-founding",
      title: "School Founding & Operations Consulting",
      description: "Comprehensive guidance for establishing and operating educational institutions.",
      features: [
        "Curriculum development and implementation",
        "Facilities design and planning",
        "Staff recruitment and training",
        "Regulatory compliance assistance",
        "Financial planning and sustainability"
      ]
    },
    {
      id: "teacher-outsourcing",
      title: "Global Teacher Outsourcing",
      description: "Access qualified international educators to enhance your school's teaching capabilities.",
      features: [
        "Rigorous teacher screening and selection",
        "Seamless onboarding process",
        "Ongoing professional development",
        "Performance monitoring and feedback",
        "Replacement guarantees"
      ]
    },
    {
      id: "teacher-support",
      title: "Comprehensive Teacher Support Services",
      description: "Holistic support services to maximize teacher effectiveness and satisfaction.",
      features: [
        "Professional development programs",
        "Mentoring and coaching",
        "Wellbeing and stress management",
        "Career progression planning",
        "Community building activities"
      ]
    },
    {
      id: "remote-educator",
      title: "Remote Educator Services",
      description: "Leverage technology to bring expert educators to your school, regardless of location.",
      features: [
        "Virtual teaching specialists",
        "Hybrid classroom setup assistance",
        "Digital teaching resources",
        "Technical support and training",
        "Student engagement strategies"
      ]
    },
    {
      id: "exchange-programs",
      title: "International Teacher Exchange Programs",
      description: "Facilitate transformative cultural and educational exchanges for your teaching staff.",
      features: [
        "Bi-directional teacher exchanges",
        "Cultural immersion opportunities",
        "Professional skill development",
        "Global educational perspective building",
        "School partnership formations"
      ]
    },
    {
      id: "ib-integration",
      title: "IB Integration & Adoption",
      description: "Expert guidance for schools transitioning to or enhancing their IB curriculum.",
      features: [
        "IB program implementation roadmap",
        "Teacher training and certification",
        "Curriculum alignment strategies",
        "Authorization preparation",
        "Ongoing compliance and quality management"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              School Consulting Services
            </h1>
            <p className="text-xl mb-8">
              Comprehensive solutions for teachers and educational institutions seeking global excellence and impact.
            </p>
            <Button 
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Consulting Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Knowledge Excellence offers specialized consulting services for both educators and educational institutions, 
              designed to elevate standards and create global opportunities.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Main Content */}
            <div className="md:w-2/3">
              <AccordionSection 
                title="For Teachers" 
                description="Expand your horizons and advance your teaching career with our specialized services for educators."
                icon={<GraduationCap size={24} className="text-primary" />}
                services={teacherServices}
              />

              <AccordionSection 
                title="For Schools" 
                description="Comprehensive consulting services to establish, operate, and elevate educational institutions."
                icon={<School size={24} className="text-primary" />}
                services={schoolServices}
              />
            </div>

            {/* Sidebar */}
            <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-primary">
                  Pre-pay for Consulting Services
                </h3>
                <p className="text-gray-600 mb-4">
                  Secure your services today and begin your journey to educational excellence.
                </p>
                
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-white mb-4"
                  onClick={() => setIsFormOpen(!isFormOpen)}
                >
                  {isFormOpen ? "Hide Form" : "Quick Inquiry Form"}
                  {isFormOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                </Button>

                {isFormOpen && (
                  <form className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      >
                        <option value="">Select a Service</option>
                        <option value="international-teaching">International Teaching</option>
                        <option value="teacher-training">Teacher Training</option>
                        <option value="school-consulting">School Consulting</option>
                        <option value="ib-integration">IB Integration</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                        placeholder="Tell us more about your needs..."
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                      Submit Inquiry
                    </Button>
                  </form>
                )}

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-primary mb-2">Why Choose Us?</h4>
                  <ul className="space-y-2">
                    <li className="flex">
                      <Check size={20} className="text-accent mr-2 flex-shrink-0" />
                      <span className="text-sm">Global network of educational institutions</span>
                    </li>
                    <li className="flex">
                      <Check size={20} className="text-accent mr-2 flex-shrink-0" />
                      <span className="text-sm">Expert consultants with international experience</span>
                    </li>
                    <li className="flex">
                      <Check size={20} className="text-accent mr-2 flex-shrink-0" />
                      <span className="text-sm">Personalized support throughout your journey</span>
                    </li>
                    <li className="flex">
                      <Check size={20} className="text-accent mr-2 flex-shrink-0" />
                      <span className="text-sm">Proven track record of successful placements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Ready to Begin Your Educational Journey?
              </h2>
              <p className="text-primary/80">
                Pre-pay for our consulting services and take the first step toward global educational excellence.
              </p>
            </div>
            <div>
              <Link to="/payment">
                <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md">
                  Secure Your Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolConsultingPage;
