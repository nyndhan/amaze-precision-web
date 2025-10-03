import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, Eye, Wrench } from "lucide-react";

const About = () => {
  const features = [
    { icon: CheckCircle2, title: "Expertise", desc: "Vast years of experience in precision engineering" },
    { icon: Target, title: "Quality", desc: "High repute for manufacturing precision parts" },
    { icon: Wrench, title: "Technology", desc: "State-of-the-art manufacturing facilities" },
    { icon: Eye, title: "Reliability", desc: "Proven track record across multiple industries" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Amaze Engineering</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your Trusted Partner in Precision Manufacturing and Fabrication
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-shadow mb-12 animate-scale-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Amaze Engineering is backed with an experience of vast years in the field of Engineering Products. 
                    We have grown today to a company of high repute for manufacturing, developing and supply of Precision 
                    Parts and Fabrication work.
                  </p>
                  <p>
                    We are a manufacturer, exporter and service provider of precision job work and fabrication products. 
                    Our technical expertise backed by the state-of-the-art manufacturing facilities gives us the upper edge 
                    to fulfill market requirements.
                  </p>
                  <p>
                    A talented workforce coupled with advances in manufacturing technologies has enabled us to stay progressive 
                    and competitive in both part duplication and production environments.
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-center mb-8 animate-slide-up">Why Choose Amaze Engineering</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="card-shadow hover:card-shadow-hover transition-all animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground">{feature.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-shadow animate-scale-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver high-quality precision engineering products and services that exceed customer expectations 
                    while maintaining the highest standards of quality, reliability, and innovation in the manufacturing industry.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-shadow animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be recognized as a leading provider of precision manufacturing and fabrication solutions, 
                    setting industry standards for quality, innovation, and customer satisfaction across diverse industrial sectors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 animate-slide-up">Our Capabilities</h2>
            <Card className="card-shadow animate-scale-in">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-4">Machine Shop</h3>
                    <p className="text-muted-foreground">
                      We manufacture stock shapes, semi-finished products, profiles, and machined components 
                      of engineering and high accuracy products in all kinds of materials of construction.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-4">Welding & Fabrication</h3>
                    <p className="text-muted-foreground">
                      Metal fabrication through cutting, bending, and assembling processes. We create machines, 
                      parts, and structures from various raw materials with precision and expertise.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
