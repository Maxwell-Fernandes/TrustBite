import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Create an Account",
    description: "Sign up for free to access all features and join our community of reviewers.",
  },
  {
    number: "02",
    title: "Search Products",
    description: "Find products by name, category, or barcode to see reviews and ratings.",
  },
  {
    number: "03",
    title: "Read & Write Reviews",
    description: "Get insights from other users and share your own experiences with products.",
  },
  {
    number: "04",
    title: "Report Issues",
    description: "Flag products with potential safety, quality, or compliance concerns.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-trust-light">
      <div className="trust-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-trust-dark mb-4">
            How TrustBite Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our simple process helps you find safe, quality products and report concerns in just a few steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full">
                <div className="text-3xl font-bold text-trust-blue/20 mb-3">
                  {step.number}
                </div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="h-0.5 w-8 bg-trust-blue/20"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/signup">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;