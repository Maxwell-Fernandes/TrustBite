import * as React from "react"
import { Check, Shield, FileSearch, Star } from "lucide-react";

const features = [
  {
    title: "Verified Reviews",
    description: "Genuine user reviews and experiences with products across categories.",
    icon: <Star className="h-6 w-6 text-trust-blue" />,
  },
  {
    title: "Quality Reports",
    description: "Report product issues related to food safety, quality, and compliance.",
    icon: <FileSearch className="h-6 w-6 text-trust-blue" />,
  },
  {
    title: "Safety Standards",
    description: "Learn about product compliance with regulatory and safety standards.",
    icon: <Shield className="h-6 w-6 text-trust-blue" />,
  },
  {
    title: "Transparency",
    description: "Complete transparency about product quality and safety information.",
    icon: <Check className="h-6 w-6 text-trust-blue" />,
  },
];

const Features = () => {
  return (
    <section className="section-padding">
      <div className="trust-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-trust-dark mb-4">
            Why Choose TrustBite
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform provides comprehensive insights into product quality and safety through community-driven reviews and reports.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-trust-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;