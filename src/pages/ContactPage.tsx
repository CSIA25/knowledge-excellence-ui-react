
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl mb-4">
              Get in touch with our team for inquiries about our services or to begin your journey.
            </p>
            <p className="text-lg opacity-80">
              We're here to assist you with any questions about our school consulting, scholarship programs, or training services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">Our Location</h3>
                  <p className="text-gray-600">
                    Kamaladi, Kathmandu <br />
                    Nepal
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">Phone</h3>
                  <p className="text-gray-600">
                    +977-1-XXXXXXX <br />
                    +977-9XXXXXXXX
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">Email</h3>
                  <p className="text-gray-600">
                    info@knowledgeexcellence.com <br />
                    support@knowledgeexcellence.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">Office Hours</h3>
                  <p className="text-gray-600">
                    Sunday - Friday: 9AM - 5PM <br />
                    Saturday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
              
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you for your message! We will get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                      required
                    >
                      <option value="">Select a Service</option>
                      <option value="school-consulting">School Consulting</option>
                      <option value="teacher-training">Teacher Training</option>
                      <option value="scholarship">Global Scholarship</option>
                      <option value="pr-training">PR Training</option>
                      <option value="hospitality">Hospitality Training</option>
                      <option value="healthcare">Healthcare Training</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="bg-accent hover:bg-accent/90 text-white py-3 px-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Map */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Find Us</h2>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
                <iframe 
                  title="Knowledge Excellence Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.857353934142!2d85.31315672466398!3d27.7054023906151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1909b5a789d3%3A0x12f76fa833d24683!2sKamaladi%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1682661484676!5m2!1sen!2snp" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg text-primary mb-4">International Offices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold">Australia Office</h4>
                    <p className="text-gray-600 text-sm">Sydney, Australia</p>
                    <p className="text-gray-600 text-sm">+61 X XXXX XXXX</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Canada Office</h4>
                    <p className="text-gray-600 text-sm">Toronto, Canada</p>
                    <p className="text-gray-600 text-sm">+1 XXX XXX XXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and how we can assist you.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-primary mb-2">How do I get started with your services?</h3>
                <p className="text-gray-600">
                  You can get started by filling out our contact form, calling our office, or visiting us in person. 
                  We'll arrange an initial consultation to understand your needs and recommend the most suitable services.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-primary mb-2">How does the pre-payment model work?</h3>
                <p className="text-gray-600">
                  Our pre-payment model requires securing services with an upfront payment. This ensures dedicated 
                  resources for your needs and demonstrates mutual commitment to achieving your goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-primary mb-2">Do you guarantee successful placements?</h3>
                <p className="text-gray-600">
                  While we can't guarantee specific outcomes, our high success rate is testament to our effective 
                  approach. We work tirelessly to maximize your chances of achieving your education and career goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-primary mb-2">How long do your programs typically take?</h3>
                <p className="text-gray-600">
                  Program durations vary depending on the service. Scholarship preparations can take 3-6 months, 
                  while training programs typically range from 2 weeks to 3 months, depending on the specialization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
