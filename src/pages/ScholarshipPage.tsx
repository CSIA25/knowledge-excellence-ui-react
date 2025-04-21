
import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Award, Calendar, FileText, Users, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ScholarshipServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ScholarshipService = ({ title, description, icon, features }: ScholarshipServiceProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-3 rounded-full mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="text-accent mr-2 flex-shrink-0 mt-1" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/payment">
        <Button className="w-full bg-accent hover:bg-accent/90 text-white">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

const scholarshipServices = [
  {
    id: "assessment",
    title: "Student Assessment & Profiling",
    description: "Comprehensive evaluation to identify scholarship opportunities matching your strengths and goals.",
    icon: <Users size={24} className="text-primary" />,
    features: [
      "Academic strength evaluation",
      "Extracurricular assessment",
      "Career goal alignment",
      "Personalized scholarship matching",
      "Opportunity gap analysis"
    ]
  },
  {
    id: "profile-building",
    title: "Profile Building",
    description: "Strategic enhancement of your academic and extracurricular profile to maximize scholarship potential.",
    icon: <FileText size={24} className="text-primary" />,
    features: [
      "Academic record optimization",
      "Extracurricular activity planning",
      "Leadership experience development",
      "Community service guidance",
      "Portfolio creation assistance"
    ]
  },
  {
    id: "roadmap",
    title: "Scholarship Roadmap",
    description: "Customized timeline and action plan to guide your scholarship application journey.",
    icon: <Award size={24} className="text-primary" />,
    features: [
      "Timeline development for applications",
      "Milestone tracking system",
      "Priority scholarship identification",
      "Application deadline management",
      "Progress monitoring and adjustments"
    ]
  },
  {
    id: "preparation",
    title: "Preparation Classes",
    description: "Specialized courses to prepare you for scholarship requirements and examinations.",
    icon: <BookOpen size={24} className="text-primary" />,
    features: [
      "Standardized test preparation",
      "Subject-specific tutoring",
      "Essay writing workshops",
      "Interview skills training",
      "Presentation technique development"
    ]
  },
  {
    id: "examination",
    title: "Examination and Evaluation",
    description: "Practice tests and evaluations to ensure you're prepared for scholarship examinations.",
    icon: <GraduationCap size={24} className="text-primary" />,
    features: [
      "Mock tests and examinations",
      "Performance evaluation",
      "Personalized improvement plans",
      "Test-taking strategies",
      "Stress management techniques"
    ]
  },
  {
    id: "essay",
    title: "Personal Essay Prep",
    description: "Expert guidance on crafting compelling personal statements and scholarship essays.",
    icon: <FileText size={24} className="text-primary" />,
    features: [
      "Topic selection guidance",
      "Structure and outline development",
      "Compelling storytelling techniques",
      "Grammar and style review",
      "Final editing and polishing"
    ]
  },
  {
    id: "visa",
    title: "Visa Interview Prep",
    description: "Comprehensive preparation for visa interviews to ensure successful scholarship acceptance.",
    icon: <Calendar size={24} className="text-primary" />,
    features: [
      "Mock interview sessions",
      "Documentation preparation",
      "Question and answer practice",
      "Non-verbal communication coaching",
      "Scenario-based preparation"
    ]
  },
  {
    id: "competitions",
    title: "ECA & International Competitions",
    description: "Access to extracurricular activities and competitions that strengthen scholarship applications.",
    icon: <Globe size={24} className="text-primary" />,
    features: [
      "International competition opportunities",
      "Extracurricular activity planning",
      "Competition preparation",
      "Achievement documentation",
      "Portfolio enhancement"
    ]
  }
];

const ScholarshipPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    amount: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically handle the form submission
    alert("Pre-payment inquiry submitted! We'll contact you shortly.");
    setFormData({
      name: "",
      email: "",
      program: "",
      amount: ""
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Global Scholarship Program
            </h1>
            <p className="text-xl mb-8">
              Build your path to global scholarships with expert guidance and comprehensive support.
            </p>
            <Link to="#scholarship-services">
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Start Your Scholarship Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop" 
                alt="Student with scholarship" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-primary">Our Scholarship Program</h2>
              <p className="text-gray-600 mb-4">
                Knowledge Excellence's Global Scholarship Program is designed to help students navigate the complex world 
                of international scholarships, from initial assessment to successful placement.
              </p>
              <p className="text-gray-600 mb-6">
                Our comprehensive approach addresses every aspect of the scholarship journey, ensuring students are 
                well-prepared and positioned for success in securing global educational opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Check size={20} className="text-accent mr-2" />
                  <span className="text-gray-700">98% Visa Success Rate</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-accent mr-2" />
                  <span className="text-gray-700">500+ Scholarships Secured</span>
                </div>
                <div className="flex items-center">
                  <Check size={20} className="text-accent mr-2" />
                  <span className="text-gray-700">30+ Destination Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Breakdown */}
      <section id="scholarship-services" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Scholarship Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive support at every stage of your scholarship journey, from initial assessment to final acceptance.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-8">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                All Services
              </TabsTrigger>
              <TabsTrigger value="preparation" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Preparation
              </TabsTrigger>
              <TabsTrigger value="application" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Application
              </TabsTrigger>
              <TabsTrigger value="support" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Support
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scholarshipServices.map(service => (
                  <ScholarshipService 
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    features={service.features}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="preparation" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scholarshipServices
                  .filter(s => ["assessment", "profile-building", "roadmap"].includes(s.id))
                  .map(service => (
                    <ScholarshipService 
                      key={service.id}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      features={service.features}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="application" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scholarshipServices
                  .filter(s => ["preparation", "examination", "essay"].includes(s.id))
                  .map(service => (
                    <ScholarshipService 
                      key={service.id}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      features={service.features}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="support" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scholarshipServices
                  .filter(s => ["visa", "competitions"].includes(s.id))
                  .map(service => (
                    <ScholarshipService 
                      key={service.id}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      features={service.features}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pre-Payment Section */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Pre-pay for Scholarship Services</h3>
            <p className="text-gray-600 mb-6">
              Secure your place in our scholarship program by pre-paying for services. This ensures dedicated support 
              and guidance throughout your scholarship journey.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                    Program Type
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                    required
                  >
                    <option value="">Select Program</option>
                    <option value="full">Full Scholarship Package</option>
                    <option value="assessment">Assessment & Profiling Only</option>
                    <option value="preparation">Exam Preparation Only</option>
                    <option value="essay">Essay & Interview Prep Only</option>
                    <option value="custom">Custom Program</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Amount
                  </label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                    placeholder="e.g., $500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white py-3">
                  Pre-pay for Services
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 text-center">
                You will be redirected to our secure payment page after submission.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Scholarship Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet some of our students who have successfully secured prestigious scholarships around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1629038799274-78a391d39e92?q=80&w=400&auto=format&fit=crop" 
                alt="Student success story" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-primary mb-2">Aarav Patel</h3>
                <p className="text-accent mb-2">Full Scholarship at Oxford University</p>
                <p className="text-gray-600 text-sm">
                  "Knowledge Excellence helped me refine my application and prepare for interviews, 
                  which ultimately led to my dream scholarship at Oxford."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573164713712-03790a178651?q=80&w=400&auto=format&fit=crop" 
                alt="Student success story" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-primary mb-2">Maya Sharma</h3>
                <p className="text-accent mb-2">Engineering Scholarship at MIT</p>
                <p className="text-gray-600 text-sm">
                  "The profile building and exam preparation services were exceptional. I couldn't have 
                  secured my MIT scholarship without Knowledge Excellence's support."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=400&auto=format&fit=crop" 
                alt="Student success story" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg text-primary mb-2">Raj Gurung</h3>
                <p className="text-accent mb-2">Medical Scholarship in Australia</p>
                <p className="text-gray-600 text-sm">
                  "From assessment to visa interview preparation, Knowledge Excellence provided 
                  comprehensive support that made my scholarship journey successful."
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Share Your Scholarship Goals
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScholarshipPage;
