
import { useState } from "react";
import { Check, CreditCard, LockIcon, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [serviceData, setServiceData] = useState({
    serviceType: "",
    serviceDetails: "",
    amount: ""
  });
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setServiceData(prev => ({ ...prev, [name]: value }));
  };

  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalData(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const processPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      console.log("Payment processed", { serviceData, personalData, paymentData });
    }, 2000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary mb-6">Select Service</h2>
            
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                Service Category *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={serviceData.serviceType}
                onChange={handleServiceChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                required
              >
                <option value="">Select a Category</option>
                <option value="school-consulting">School Consulting Services</option>
                <option value="global-scholarship">Global Scholarship Program</option>
                <option value="trainings">Training Programs</option>
              </select>
            </div>
            
            {serviceData.serviceType && (
              <div>
                <label htmlFor="serviceDetails" className="block text-sm font-medium text-gray-700 mb-1">
                  Specific Service *
                </label>
                <select
                  id="serviceDetails"
                  name="serviceDetails"
                  value={serviceData.serviceDetails}
                  onChange={handleServiceChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                  required
                >
                  <option value="">Select a Service</option>
                  {serviceData.serviceType === "school-consulting" && (
                    <>
                      <option value="international-teaching">International Teaching Opportunities</option>
                      <option value="teacher-training">Teacher Training & Career Development</option>
                      <option value="school-founding">School Founding & Operations Consulting</option>
                      <option value="teacher-outsourcing">Global Teacher Outsourcing</option>
                      <option value="ib-integration">IB Integration & Adoption</option>
                    </>
                  )}
                  {serviceData.serviceType === "global-scholarship" && (
                    <>
                      <option value="full-scholarship">Full Scholarship Package</option>
                      <option value="student-assessment">Student Assessment & Profiling</option>
                      <option value="profile-building">Profile Building</option>
                      <option value="preparation-classes">Preparation Classes</option>
                      <option value="essay-prep">Personal Essay Prep</option>
                      <option value="visa-interview">Visa Interview Prep</option>
                    </>
                  )}
                  {serviceData.serviceType === "trainings" && (
                    <>
                      <option value="pr-training">PR Leading Skill Training</option>
                      <option value="english-test">English Test Preparation</option>
                      <option value="hospitality">Hospitality (Cook/Chef)</option>
                      <option value="healthcare">Healthcare Assistant</option>
                      <option value="hair-dressing">Hair Dressing</option>
                      <option value="beautician">Beautician Program</option>
                    </>
                  )}
                </select>
              </div>
            )}
            
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                Payment Amount (USD) *
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                value={serviceData.amount}
                onChange={handleServiceChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                placeholder="e.g., 500"
                required
              />
            </div>
            
            <div className="pt-4">
              <Button 
                onClick={nextStep} 
                className="w-full bg-accent hover:bg-accent/90 text-white"
                disabled={!serviceData.serviceType || !serviceData.serviceDetails || !serviceData.amount}
              >
                Continue to Personal Details
              </Button>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary mb-6">Personal Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={personalData.firstName}
                  onChange={handlePersonalChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                  placeholder="First Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={personalData.lastName}
                  onChange={handlePersonalChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={personalData.email}
                onChange={handlePersonalChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={personalData.phone}
                onChange={handlePersonalChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                placeholder="Your Phone Number"
                required
              />
            </div>
            
            <div className="flex justify-between pt-4">
              <Button 
                onClick={prevStep} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800"
              >
                Back
              </Button>
              <Button 
                onClick={nextStep} 
                className="bg-accent hover:bg-accent/90 text-white"
                disabled={!personalData.firstName || !personalData.lastName || !personalData.email || !personalData.phone}
              >
                Continue to Payment
              </Button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary mb-6">Payment Details</h2>
            
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                Name on Card *
              </label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={paymentData.cardName}
                onChange={handlePaymentChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                placeholder="Cardholder Name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Card Number *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handlePaymentChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent pl-11"
                  placeholder="XXXX XXXX XXXX XXXX"
                  maxLength={19}
                  required
                />
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date *
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={paymentData.expiryDate}
                  onChange={handlePaymentChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                  placeholder="MM/YY"
                  maxLength={5}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                  CVV *
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handlePaymentChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"
                  placeholder="XXX"
                  maxLength={3}
                  required
                />
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 flex items-start">
              <AlertCircle className="text-yellow-600 mr-3 flex-shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-yellow-800">
                This is a mock payment form for demonstration purposes. No actual payment will be processed, 
                and no credit card details will be stored or transmitted.
              </p>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <LockIcon className="h-4 w-4 mr-2 text-gray-400" />
              <span>Your payment information is secure and encrypted</span>
            </div>
            
            <div className="flex justify-between pt-4">
              <Button 
                onClick={prevStep} 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800"
              >
                Back
              </Button>
              <Button 
                onClick={processPayment} 
                className="bg-accent hover:bg-accent/90 text-white"
                disabled={!paymentData.cardName || !paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || isProcessing}
              >
                {isProcessing ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  `Pay $${serviceData.amount} Now`
                )}
              </Button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Secure Your Services
            </h1>
            <p className="text-xl">
              Pre-pay for our premium services and begin your journey to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Flow Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {!isComplete ? (
              <>
                {/* Stepper */}
                <div className="mb-8">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center w-full max-w-3xl justify-between">
                      <div className="flex flex-col items-center">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                          currentStep >= 1 ? "bg-accent text-white" : "bg-gray-200 text-gray-500"
                        }`}>
                          {currentStep > 1 ? <Check className="w-6 h-6" /> : "1"}
                        </div>
                        <p className={`mt-2 text-sm ${
                          currentStep >= 1 ? "text-primary font-medium" : "text-gray-500"
                        }`}>Select Service</p>
                      </div>
                      
                      <div className={`flex-1 h-1 mx-4 ${
                        currentStep > 1 ? "bg-accent" : "bg-gray-200"
                      }`}></div>
                      
                      <div className="flex flex-col items-center">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                          currentStep >= 2 ? "bg-accent text-white" : "bg-gray-200 text-gray-500"
                        }`}>
                          {currentStep > 2 ? <Check className="w-6 h-6" /> : "2"}
                        </div>
                        <p className={`mt-2 text-sm ${
                          currentStep >= 2 ? "text-primary font-medium" : "text-gray-500"
                        }`}>Enter Details</p>
                      </div>
                      
                      <div className={`flex-1 h-1 mx-4 ${
                        currentStep > 2 ? "bg-accent" : "bg-gray-200"
                      }`}></div>
                      
                      <div className="flex flex-col items-center">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                          currentStep >= 3 ? "bg-accent text-white" : "bg-gray-200 text-gray-500"
                        }`}>
                          3
                        </div>
                        <p className={`mt-2 text-sm ${
                          currentStep >= 3 ? "text-primary font-medium" : "text-gray-500"
                        }`}>Payment</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Form Content */}
                <div className="bg-white rounded-lg shadow-md p-8">
                  {renderStepContent()}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Payment Successful!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your payment. Your service has been secured.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                  <h3 className="font-bold text-lg text-primary mb-4">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service:</span>
                      <span className="font-medium">{serviceData.serviceDetails}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-medium">${serviceData.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{personalData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transaction ID:</span>
                      <span className="font-medium">{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  A confirmation email has been sent to {personalData.email}. One of our representatives 
                  will contact you shortly to discuss the next steps.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white" onClick={() => window.location.href = "/"}>
                    Return to Home
                  </Button>
                  <Button className="bg-accent hover:bg-accent/90 text-white" onClick={() => window.location.href = "/contact"}>
                    Contact Support
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Security Badges */}
      <section className="py-10 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
              <div className="flex items-center mb-6 md:mb-0">
                <div className="bg-white p-4 rounded-full shadow-sm mr-4">
                  <LockIcon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Secure Payment</h3>
                  <p className="text-sm text-gray-600">Your data is protected with encryption</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white p-4 rounded-full shadow-sm mr-4">
                  <Check className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Trusted by Thousands</h3>
                  <p className="text-sm text-gray-600">Join our successful clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;
