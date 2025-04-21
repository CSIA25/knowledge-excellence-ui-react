
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Knowledge Excellence helped me secure a teaching position in an international school in Singapore. Their guidance throughout the process was invaluable.",
    name: "Sarah Johnson",
    role: "Teacher",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "As a school administrator, I found their consulting services to be thorough and transformative. Our school has greatly benefited from their IB integration program.",
    name: "Michael Lee",
    role: "School Principal",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "The scholarship program was a game-changer for me. I'm now studying at my dream university in the UK, all thanks to the team at Knowledge Excellence.",
    name: "Priya Sharma",
    role: "Student",
    avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    quote: "Their hospitality training program prepared me perfectly for my career in Australia. The PR guidance was especially helpful in my transition.",
    name: "David Chen",
    role: "Chef",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div 
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative">
        <Quote className="text-primary/10 absolute top-6 left-6 h-16 w-16" />
        
        <div className="relative z-10">
          <div className="mb-6">
            <p className="text-lg text-gray-700 italic mb-6">"{testimonials[currentIndex].quote}"</p>
            <div className="flex items-center">
              <img 
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-primary">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
