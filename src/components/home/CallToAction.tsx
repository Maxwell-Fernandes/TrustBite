import * as React from "react"
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="section-padding bg-trust-blue text-white">
      <div className="trust-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Community of Informed Consumers
          </h2>
          <p className="text-white/80 mb-8">
            Help build a safer marketplace by reviewing products and reporting quality concerns. 
            Your voice matters in ensuring product safety and compliance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="px-8 bg-white text-trust-blue hover:bg-gray-100">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/learn-more">
              <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-trust-blue/20">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;