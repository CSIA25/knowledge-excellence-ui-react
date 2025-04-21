
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Globe, 
  Users, 
  FileText, 
  HeadphonesIcon, 
  Scissors, 
  Hearts, 
  BriefcaseIcon,
  MessageSquare,
  MapPin,
  Calendar,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TrainingCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image?: string;
  countries?: string[];
}

const TrainingCard = ({ title, description, icon, features, image, countries }: TrainingCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-primary/10 p-3 rounded-full mr-4">{icon}</div>
          <h3 className="text-xl font-bold text-primary">{title}</h3>
        </div>
        
        {countries && (
          <div className="flex flex-wrap gap-2 mb-4">
            {countries.map((country, index) => (
              <span 
                key={index} 
                className="bg-secondary/20 text-primary text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {country}
              </span>
            ))}
          </div>
        )}
        
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
            Enroll Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

const TrainingsPage = () => {
  const externalTrainings = [
    {
      id: 1,
      title: "PR Leading Skill Training",
      description: "Develop essential skills for permanent residency applications in Australia, Canada, and the UK.",
      icon: <Globe size={24} className="text-primary" />,
      features: [
        "Country-specific immigration policies",
        "Documentation preparation",
        "Interview preparation",
        "Skills assessment guidance",
        "Post-landing support"
      ],
      countries: ["Australia", "Canada", "UK"],
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "English Test Preparation",
      description: "Comprehensive preparation for IELTS, PTE, and other English proficiency tests required for immigration and education.",
      icon: <FileText size={24} className="text-primary" />,
      features: [
        "Reading, writing, speaking, listening modules",
        "Practice tests and evaluation",
        "Personalized improvement plans",
        "Test-taking strategies",
        "Mock interviews"
      ],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Hospitality (Cook/Chef)",
      description: "Professional culinary training for international careers in the hospitality industry.",
      icon: <Briefcase size={24} className="text-primary" />,
      features: [
        "International cuisine techniques",
        "Kitchen management",
        "Food safety certification",
        "Menu planning and costing",
        "Industry placement assistance"
      ],
      countries: ["Australia", "Canada", "UK", "New Zealand"],
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Healthcare Assistant",
      description: "Comprehensive training for healthcare assistant roles with international recognition.",
      icon: <Hearts className="h-6 w-6 text-primary" />,
      features: [
        "Patient care fundamentals",
        "Medical terminology",
        "First aid and emergency response",
        "Elderly care specialization",
        "Clinical placement opportunities"
      ],
      countries: ["UK", "Canada", "Australia"],
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Hair Dressing",
      description: "Professional hair styling training for international salon careers.",
      icon: <Scissors size={24} className="text-primary" />,
      features: [
        "Cutting and styling techniques",
        "Color application and theory",
        "Salon management basics",
        "Client consultation skills",
        "Portfolio development"
      ],
      countries: ["UK", "Australia", "New Zealand"],
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Beautician Program",
      description: "Complete beauty therapy training for international careers in spas and salons.",
      icon: <Scissors size={24} className="text-primary" />,
      features: [
        "Skincare treatments",
        "Makeup application",
        "Nail care and design",
        "Waxing and threading",
        "Business management for beauty professionals"
      ],
      countries: ["UK", "Australia", "Canada"],
      image: "https://images.unsplash.com/photo-1662752631428-b21b53ff34d8?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const relatedServices = [
    {
      id: 1,
      title: "Applicant Career Profiling",
      description: "Comprehensive assessment to identify the best career path and training options for your goals.",
      icon: <Users size={24} className="text-primary" />,
      features: [
        "Skills and qualifications assessment",
        "Career goals exploration",
        "Market demand analysis",
        "Training recommendations",
        "Long-term career planning"
      ]
    },
    {
      id: 2,
      title: "Applicant PR Roadmap",
      description: "Personalized permanent residency planning with step-by-step guidance for successful application.",
      icon: <MapPin size={24} className="text-primary" />,
      features: [
        "Eligibility assessment",
        "Documentation checklist",
        "Timeline creation",
        "Points calculation strategy",
        "Application review"
      ]
    },
    {
      id: 3,
      title: "PR Mentorship (One-on-One)",
      description: "Dedicated mentoring for your PR journey with personalized guidance and support.",
      icon: <MessageSquare size={24} className="text-primary" />,
      features: [
        "Weekly one-on-one sessions",
        "Customized guidance",
        "Application review",
        "Interview preparation",
        "Post-landing support"
      ]
    },
    {
      id: 4,
      title: "PR Counselling & Seminars",
      description: "Group sessions and webinars on various aspects of the PR process and international opportunities.",
      icon: <HeadphonesIcon size={24} className="text-primary" />,
      features: [
        "Regular information sessions",
        "Q&A with immigration experts",
        "Peer networking opportunities",
        "Latest policy updates",
        "Success story showcases"
      ]
    }
  ];

  const internationalTrainings = [
    {
      id: 1,
      title: "Overseas Training Experience",
      description: "Immersive training programs conducted internationally, providing hands-on experience in global settings.",
      icon: <BriefcaseIcon size={24} className="text-primary" />,
      features: [
        "International industry exposure",
        "Hands-on practical training",
        "Cultural adaptation experience",
        "Global networking opportunities",
        "International certification"
      ],
      countries: ["UK", "Australia", "Canada", "Singapore"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Global Exposure Program",
      description: "Short-term international exposure visits to understand global industry standards and practices.",
      icon: <Globe size={24} className="text-primary" />,
      features: [
        "Industry visits and tours",
        "Workshops with international experts",
        "Cross-cultural business practices",
        "Networking events",
        "Certificate of participation"
      ],
      countries: ["Singapore", "Malaysia", "Thailand", "UAE"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Competency Training Abroad",
      description: "Specialized skill development programs in international settings with recognized certification.",
      icon: <Briefcase size={24} className="text-primary" />,
      features: [
        "Industry-specific skill training",
        "International standards and best practices",
        "Hands-on projects and assessments",
        "Globally recognized certification",
        "Employment pathway assistance"
      ],
      countries: ["Australia", "New Zealand", "Canada", "UK"],
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Professional Training Programs
            </h1>
            <p className="text-xl mb-8">
              Specialized training programs designed to prepare you for international career opportunities and permanent residency pathways.
            </p>
            <Button 
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={() => document.getElementById("training-programs")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="training-programs" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Training Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive training solutions to prepare you for global career opportunities and successful immigration pathways.
            </p>
          </div>

          <Tabs defaultValue="external" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-8">
              <TabsTrigger value="external" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                External Trainings
              </TabsTrigger>
              <TabsTrigger value="related" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Related Services
              </TabsTrigger>
              <TabsTrigger value="international" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                International Trainings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="external" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {externalTrainings.map(training => (
                  <TrainingCard 
                    key={training.id}
                    title={training.title}
                    description={training.description}
                    icon={training.icon}
                    features={training.features}
                    image={training.image}
                    countries={training.countries}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="related" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {relatedServices.map(service => (
                  <TrainingCard 
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    features={service.features}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="international" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {internationalTrainings.map(training => (
                  <TrainingCard 
                    key={training.id}
                    title={training.title}
                    description={training.description}
                    icon={training.icon}
                    features={training.features}
                    image={training.image}
                    countries={training.countries}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Upcoming Training Events</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join our upcoming seminars, workshops, and information sessions to learn more about our training programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-primary/10 text-primary text-sm font-medium px-2.5 py-0.5 rounded">
                    Free Webinar
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-primary">PR Pathways for Healthcare Professionals</h3>
                </div>
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">May 15, 2023 | 6:00 PM NPT</span>
                </div>
                <div className="flex items-center mb-4">
                  <Globe size={18} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">Online (Zoom)</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Learn about permanent residency pathways for healthcare professionals in Australia, Canada, and the UK.
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  Register Now
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-secondary/20 text-primary text-sm font-medium px-2.5 py-0.5 rounded">
                    Workshop
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-primary">Hospitality Skills Assessment Workshop</h3>
                </div>
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">May 20, 2023 | 10:00 AM NPT</span>
                </div>
                <div className="flex items-center mb-4">
                  <MapPin size={18} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">Knowledge Excellence Center, Kathmandu</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Hands-on workshop on preparing for the hospitality skills assessment required for international employment.
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  Reserve Your Spot
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-primary/10 text-primary text-sm font-medium px-2.5 py-0.5 rounded">
                    Information Session
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-primary">Study & Work in Australia</h3>
                </div>
                <div className="flex items-center mb-2">
                  <Calendar size={18} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">May 25, 2023 | 4:00 PM NPT</span>
                </div>
                <div className="flex items-center mb-4">
                  <MapPin size={18} className="text-gray-500 mr-2" />
                  <span className="text-gray-500 text-sm">Hotel Annapurna, Kathmandu</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Comprehensive overview of study and work opportunities in Australia, featuring Australian education providers.
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  RSVP Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Payment Banner */}
      <section className="bg-secondary py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Pre-pay for Training Programs and Secure Your Spot!
              </h2>
              <p className="text-primary/80">
                Our popular training programs fill up quickly. Pre-pay today to reserve your place in upcoming cohorts.
              </p>
            </div>
            <div>
              <Link to="/payment">
                <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md">
                  Pre-pay Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who have successfully completed our training programs and achieved their career goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" 
                  alt="Testimonial" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg text-primary">Rajan Thapa</h3>
                  <p className="text-accent">Chef at Hilton, Sydney</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Knowledge Excellence's hospitality training program was comprehensive and practical. The skills I learned 
                were directly applicable to my job search in Australia. Within three months of completing the program, 
                I secured a position at the Hilton in Sydney. Their PR guidance was also invaluable throughout my journey."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" 
                  alt="Testimonial" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg text-primary">Anita Gurung</h3>
                  <p className="text-accent">Healthcare Assistant, London</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The healthcare assistant training program at Knowledge Excellence prepared me thoroughly for my role in the UK. 
                The practical training and cultural orientation were especially helpful. I'm now working at a care facility in 
                London and am on track for permanent residency. Their ongoing support has been incredible."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingsPage;
