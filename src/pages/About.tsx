import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Users, FileCheck, Handshake } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="bg-trust-light py-16">
        <div className="trust-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-trust-dark mb-6">
              About TrustBite
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to promote product quality and safety through community-driven reviews
              and transparent reporting.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="trust-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                TrustBite was founded in 2024 by a group of consumer advocates and food safety experts 
                who believed that consumers deserved better information about the products they purchase
                and consume.
              </p>
              <p className="text-gray-700 mb-4">
                After witnessing numerous product recalls and quality issues that could have been prevented
                through better transparency and reporting mechanisms, we decided to create a platform where
                consumers could share their experiences and report potential issues.
              </p>
              <p className="text-gray-700">
                Today, TrustBite has grown into a trusted community of engaged consumers, industry experts,
                and brands committed to maintaining the highest standards of product quality and safety.
              </p>
            </div>
            <div className="bg-trust-blue/10 p-8 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Team discussion"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-16">
        <div className="trust-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at TrustBite, from product development to community engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-trust-light p-6 rounded-lg">
              <div className="bg-trust-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-trust-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Consumer Safety</h3>
              <p className="text-gray-600">
                We believe that everyone deserves access to safe, quality products.
              </p>
            </div>
            
            <div className="bg-trust-light p-6 rounded-lg">
              <div className="bg-trust-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-trust-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Transparency</h3>
              <p className="text-gray-600">
                We promote complete transparency in all aspects of product information.
              </p>
            </div>
            
            <div className="bg-trust-light p-6 rounded-lg">
              <div className="bg-trust-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-trust-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Community</h3>
              <p className="text-gray-600">
                We empower consumers through shared knowledge and collective action.
              </p>
            </div>
            
            <div className="bg-trust-light p-6 rounded-lg">
              <div className="bg-trust-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Handshake className="h-6 w-6 text-trust-blue" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We work with consumers, brands, and regulators to improve standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="trust-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-gray-700 mb-8">
              Whether you're a consumer looking to make informed choices, a brand committed to quality,
              or an expert in food safety and compliance, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg">Sign Up Now</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;