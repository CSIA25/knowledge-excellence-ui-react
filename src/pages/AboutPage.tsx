
import { Award, CheckCircle, Star, Heart } from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Sharma",
      role: "Founder & CEO",
      bio: "With over 20 years of experience in international education, Dr. Sharma founded Knowledge Excellence to bridge global educational gaps for Nepali students and professionals.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Maya Shrestha",
      role: "Director of School Consulting",
      bio: "Former principal with 15 years of experience in international schools across Asia. Maya specializes in curriculum development and teacher training.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Anil Thapa",
      role: "Head of Scholarship Programs",
      bio: "Education specialist with experience at universities in the UK and US. Anil has helped over 500 students secure international scholarships.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Priya Patel",
      role: "Director of Training Programs",
      bio: "With a background in hospitality management and PR consulting, Priya develops industry-relevant training programs for global careers.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Kumar Gurung",
      role: "International Relations Manager",
      bio: "Kumar maintains partnerships with educational institutions and employers across Australia, Canada, the UK, and other countries.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Sita Rai",
      role: "Student Success Coordinator",
      bio: "Dedicated to providing ongoing support to students and professionals throughout their international education and career journeys.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const companyValues = [
    {
      title: "Excellence",
      description: "We strive for excellence in every service we provide, ensuring the highest standards of quality and student satisfaction.",
      icon: <Star className="h-8 w-8 text-secondary" />
    },
    {
      title: "Integrity",
      description: "We operate with complete transparency and honesty, providing reliable information and ethical guidance to all our clients.",
      icon: <CheckCircle className="h-8 w-8 text-secondary" />
    },
    {
      title: "Innovation",
      description: "We constantly evolve our programs and approaches to meet the changing demands of global education and career landscapes.",
      icon: <Award className="h-8 w-8 text-secondary" />
    },
    {
      title: "Compassion",
      description: "We care deeply about the aspirations and challenges of our students, providing personalized support throughout their journey.",
      icon: <Heart className="h-8 w-8 text-secondary" />
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "Knowledge Excellence was founded in Kathmandu with a vision to connect Nepali educators and students with global opportunities."
    },
    {
      year: "2012",
      title: "First International Partnerships",
      description: "Established partnerships with educational institutions in Australia and the UK, launching our global scholarship program."
    },
    {
      year: "2015",
      title: "School Consulting Launch",
      description: "Expanded services to include comprehensive school consulting, helping local schools adopt international curricula."
    },
    {
      year: "2018",
      title: "Training Programs Development",
      description: "Launched specialized training programs focusing on hospitality, healthcare, and PR pathways for international careers."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Adapted to global challenges by introducing digital learning platforms and remote consulting services."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations with representative offices in Australia and Canada, strengthening our global network and service capabilities."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About Knowledge Excellence
            </h1>
            <p className="text-xl mb-4">
              Empowering global education and careers through excellence, innovation, and compassion.
            </p>
            <p className="text-lg opacity-80">
              Founded in Nepal with a global vision, we connect aspirational individuals with world-class opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Knowledge Excellence was founded in 2010 in Kathmandu, Nepal, with a vision to bridge the gap between 
                local talent and global opportunities. What began as a small consulting service for educators has grown 
                into a comprehensive platform for educational and professional development with international reach.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Dr. Rajesh Sharma, recognized the immense potential of Nepali students and professionals 
                in the global marketplace, but also the challenges they faced in accessing international opportunities. 
                Knowledge Excellence was established to address these challenges through expert guidance, specialized 
                training, and strategic partnerships with international institutions.
              </p>
              <p className="text-gray-600">
                Today, we are proud to have helped thousands of teachers, students, and professionals achieve their 
                international education and career goals across Australia, Canada, the UK, and many other countries. 
                Our commitment to excellence and personalized service remains at the heart of everything we do.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-primary">Our Timeline</h3>
                <div className="space-y-6 relative">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4">
                        <div className="flex flex-col items-center">
                          <div className="bg-secondary text-primary font-bold rounded-full w-12 h-12 flex items-center justify-center">
                            {milestone.year.substring(2)}
                          </div>
                          {index < milestones.length - 1 && (
                            <div className="h-full w-0.5 bg-gray-300 my-2"></div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{milestone.title} <span className="text-gray-500 font-normal">({milestone.year})</span></h4>
                        <p className="text-sm text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-8">
              "To empower individuals through global education and career opportunities, 
              bridging cultural divides and fostering excellence in a connected world."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-primary">For Educators</h3>
                <p className="text-gray-600">
                  We connect passionate teachers with international opportunities and provide 
                  schools with the expertise to achieve global educational standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-primary">For Students</h3>
                <p className="text-gray-600">
                  We guide ambitious students towards prestigious scholarships and international 
                  education pathways that align with their career aspirations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-primary">For Professionals</h3>
                <p className="text-gray-600">
                  We prepare skilled individuals for global career opportunities through specialized 
                  training and permanent residency pathways.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-primary">For Communities</h3>
                <p className="text-gray-600">
                  We contribute to global knowledge exchange, bringing international expertise to 
                  Nepal while showcasing Nepali talent on the world stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The core principles that guide our approach to education, consulting, and professional development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/5 p-4 rounded-full">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals behind Knowledge Excellence, committed to guiding 
              your educational and career journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-52 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-primary">{member.name}</h3>
                  <p className="text-accent mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Global Reach</h2>
              <p className="text-gray-600 mb-4">
                While we are proudly based in Nepal, our services and partnerships extend across 
                the globe. We have established relationships with educational institutions, employers, 
                and agencies in over 30 countries, ensuring diverse opportunities for our clients.
              </p>
              <p className="text-gray-600 mb-4">
                Our global network enables us to provide up-to-date information on international 
                education standards, immigration policies, and employment opportunities in various countries.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-primary">30+</h4>
                  <p className="text-gray-600">Partner Countries</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-primary">150+</h4>
                  <p className="text-gray-600">Educational Institutions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-primary">5,000+</h4>
                  <p className="text-gray-600">Success Stories</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-primary">500+</h4>
                  <p className="text-gray-600">Global Employers</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop" 
                  alt="Global map" 
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nepali Heritage Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop" 
                  alt="Nepal mountain landscape" 
                  className="w-full"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Nepali Heritage</h2>
              <p className="text-gray-600 mb-4">
                We are proud of our Nepali roots and the unique perspective it brings to our global services. 
                Our understanding of both Nepali culture and international expectations allows us to 
                effectively bridge gaps and create successful pathways for our clients.
              </p>
              <p className="text-gray-600 mb-4">
                We are committed to contributing to Nepal's development by enabling knowledge transfer and 
                cultural exchange, bringing international expertise back to Nepal while showcasing the 
                exceptional talents of Nepali individuals on the global stage.
              </p>
              <p className="text-gray-600">
                Our services incorporate elements of Nepali hospitality and personalized care, ensuring 
                that clients receive not just professional guidance, but also compassionate support 
                throughout their international journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
