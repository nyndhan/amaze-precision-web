import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Award, Wrench, Target, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import acrylicSiteGlass from "@/assets/products/ball-float-valve.jpg";
import ballFloatValve from "@/assets/products/brass-safety-valve.jpg";
import brassSafetyValve from "@/assets/products/butterfly-valve.jpg";
import duplexStrainer from "@/assets/products/duplex-strainer.jpg";
import magneticLevelIndicator from "@/assets/products/magnetic-level-indicator.jpg";
import cncComponents from "@/assets/products/cnc-machined-components.jpg";

const Home = () => {
  const featuredProducts = [
    { name: "Acrylic Site Glass", image: acrylicSiteGlass },
    { name: "Ball Float Valve", image: ballFloatValve },
    { name: "Brass Safety Valve", image: brassSafetyValve },
    { name: "Butterfly Valve Duplex Strainer", image: duplexStrainer },
    { name: "Magnetic Level Indicator", image: magneticLevelIndicator },
    { name: "CNC Machined Components", image: cncComponents },
  ];

  const highlights = [
    { icon: Award, title: "15+ Years Experience", desc: "Proven track record in precision manufacturing" },
    { icon: Factory, title: "Advanced Machinery", desc: "State-of-the-art CNC and fabrication equipment" },
    { icon: Wrench, title: "CAD/CAM Design", desc: "Expert design services using SolidWorks & AutoCAD" },
    { icon: Target, title: "Multi-Industry", desc: "Serving food, pharma, textile, and more" },
  ];

  const industries = [
    "Food Processing",
    "Pharmaceutical",
    "Textile",
    "Oil & Chemical",
    "Steel Manufacturing",
    "Foundry",
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[600px] flex items-center justify-center text-center text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(rgba(27, 94, 32, 0.85), rgba(46, 125, 50, 0.85)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Precision. Performance. Perfection.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your Trusted Partner in Engineering, Fabrication & Custom Manufacturing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Explore Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white hover:text-primary">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Amaze Engineering</h2>
            <p className="text-muted-foreground leading-relaxed">
              Amaze Engineering is backed with an experience of vast years in the field of Engineering Products. 
              We have grown today to a company of high repute for manufacturing, developing and supply of Precision 
              Parts and Fabrication work. Our technical expertise, backed by state-of-the-art manufacturing facilities 
              and professional CAD/CAM design capabilities using SolidWorks and AutoCAD, gives us the upper edge to 
              fulfill market requirements with precision-engineered solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="card-shadow hover:card-shadow-hover transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="pt-6 text-center">
                    <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <Card key={index} className="card-shadow hover:card-shadow-hover transition-all cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-6 text-center">
                  <p className="font-medium text-sm">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground">High-quality precision components for your industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="card-shadow hover:card-shadow-hover transition-all overflow-hidden group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/products">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                View All Products <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for custom engineering solutions tailored to your needs
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
