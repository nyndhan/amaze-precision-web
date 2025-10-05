import { Card, CardContent } from "@/components/ui/card";
import { Cog, Wrench, Recycle, Settings, TestTube, Sparkles, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "CAD/CAM Design",
      description: "Professional component design using SolidWorks and AutoCAD for precision engineering solutions.",
    },
    {
      icon: Cog,
      title: "Precision Machining",
      description: "CNC machining, milling, turning, and drilling with high accuracy for complex components.",
    },
    {
      icon: Wrench,
      title: "Welding & Metal Fabrication",
      description: "Expert welding services and custom metal fabrication for diverse industrial applications.",
    },
    {
      icon: Recycle,
      title: "Custom Casting",
      description: "CI, Aluminum, Phosphorus Bronze casting services for custom components.",
    },
    {
      icon: Settings,
      title: "Reconditioning & Assembly",
      description: "Critical component reconditioning service and large-scale assembly operations.",
    },
    {
      icon: TestTube,
      title: "Hydraulic Testing",
      description: "Comprehensive hydraulic testing equipment and pressure testing services.",
    },
    {
      icon: Sparkles,
      title: "Polishing & Grinding",
      description: "Surface finishing, polishing, and precision grinding for optimal product quality.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive Engineering and Manufacturing Solutions
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="card-shadow hover:card-shadow-hover transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="inline-block p-4 bg-primary/10 rounded-lg mb-4">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-shadow animate-scale-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6 text-center">Additional Capabilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">CAD/CAM Engineering Design</h3>
                    <p className="text-muted-foreground">
                      Professional 3D modeling and technical drawing services using SolidWorks and AutoCAD platforms.
                    </p>
                    <Link to="/design">
                      <Button variant="link" className="p-0 h-auto text-primary">
                        Learn more about our design services →
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Technical Consultation</h3>
                    <p className="text-muted-foreground">
                      Expert technical advice and support for your engineering and manufacturing projects.
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

export default Services;
