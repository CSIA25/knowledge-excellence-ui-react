
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-primary font-poppins">{title}</h3>
        <p className="text-gray-600 mb-4 font-opensans">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors group-hover:underline"
        >
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
