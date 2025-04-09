import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-trust-blue/10 to-trust-green/10 section-padding">
      <div className="trust-container">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-trust-dark mb-4 max-w-3xl">
            Ensuring Product Quality Through Community Reviews
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Join thousands of consumers in reviewing and reporting product quality,
            food safety standards, and regulatory compliance. Make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button size="lg" className="px-8">
                Browse Products
              </Button>
            </Link>
            <Link to="/report">
              <Button size="lg" variant="outline" className="px-8">
                Report a Product
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-12 max-w-lg mx-auto w-full">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="form-input block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-trust-blue focus:border-trust-blue text-gray-900"
              placeholder="Search for products, brands, or categories..."
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button className="bg-trust-blue text-white px-4 py-1 rounded-md text-sm">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;