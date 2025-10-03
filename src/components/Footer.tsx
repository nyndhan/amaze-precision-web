import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/services", label: "Services" },
  ];

  const otherLinks = [
    { path: "/infrastructure", label: "Infrastructure" },
    { path: "/industries", label: "Industries" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Amaze Engineering" className="h-12 w-auto" />
              <div>
                <h3 className="font-bold text-lg">Amaze Engineering</h3>
                <p className="text-xs text-primary-foreground/80">Precision Manufacturing</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/90">
              Your trusted partner in precision engineering, fabrication, and custom manufacturing solutions.
            </p>
          </div>

          <div className="bg-secondary/30 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/90 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary/30 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-4">More Info</h4>
            <ul className="space-y-2">
              {otherLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/90 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/90">
                  No.38, Third Street Extension, 100 Feet Road, Gandhipuram, Coimbatore – 641012
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div className="text-primary-foreground/90">
                  <a href="tel:+919486600749" className="hover:text-accent transition-colors">+91 9486600749</a>
                  <br />
                  <a href="tel:+918778145944" className="hover:text-accent transition-colors">+91 8778145944</a>
                </div>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:amazeengineeringcbe@gmail.com" className="text-primary-foreground/90 hover:text-accent transition-colors">
                  amazeengineeringcbe@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Amaze Engineering. All rights reserved. | GST: 33CWEPM5574K1Z5
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
