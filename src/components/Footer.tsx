import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-trust-dark text-white pt-12 pb-8">
      <div className="trust-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-trust-blue">Trust</span>
              <span className="text-trust-green">Bite</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Ensuring product quality and safety through community-driven reviews and reports.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-trust-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-trust-blue transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/report" className="text-gray-400 hover:text-trust-blue transition-colors">
                  Report a Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-trust-blue transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-trust-blue transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/guidelines" className="text-gray-400 hover:text-trust-blue transition-colors">
                  Review Guidelines
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-trust-blue transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-trust-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-trust-blue transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-trust-blue transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-trust-blue transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-trust-blue transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} TrustBite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;