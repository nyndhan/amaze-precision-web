import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Box, Ruler, Grid3x3, Layers, Zap } from "lucide-react";
import designExample from "@/assets/design/cad-design-example.png";
import cadDrawing1 from "@/assets/design/cad-technical-drawing-1.png";
import cadDrawing2 from "@/assets/design/cad-technical-drawing-2.png";
import cadDrawing3 from "@/assets/design/cad-technical-drawing-3.png";
import cadDrawing4 from "@/assets/design/cad-technical-drawing-4.png";
import cadDrawing5 from "@/assets/design/cad-technical-drawing-5.png";
import solidworks1 from "@/assets/design/solidworks-3d-model-1.png";
import solidworks2 from "@/assets/design/solidworks-3d-model-2.png";
import solidworks3 from "@/assets/design/solidworks-3d-model-3.png";

const Design = () => {
  const capabilities = [
    {
      icon: Cpu,
      title: "SolidWorks Design",
      description: "Advanced 3D CAD modeling and product design using SolidWorks for precision engineering components.",
    },
    {
      icon: Box,
      title: "AutoCAD Drafting",
      description: "Professional 2D and 3D technical drawings with precise dimensions and specifications.",
    },
    {
      icon: Ruler,
      title: "Parametric Modeling",
      description: "Flexible design modifications through intelligent parametric modeling techniques.",
    },
    {
      icon: Grid3x3,
      title: "Assembly Design",
      description: "Complex assembly modeling with motion simulation and interference detection.",
    },
    {
      icon: Layers,
      title: "Sheet Metal Design",
      description: "Specialized sheet metal design with flat pattern development and bend calculations.",
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick design iterations and prototyping support for faster product development.",
    },
  ];

  const features = [
    "3D Product Modeling & Visualization",
    "Technical Drawing & Documentation",
    "Design for Manufacturing (DFM)",
    "Reverse Engineering Services",
    "Assembly & Part Design",
    "Design Optimization & Analysis",
    "Material Selection Support",
    "Manufacturing Drawing Preparation",
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CAD/CAM Design Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional component design using industry-leading SolidWorks and AutoCAD platforms
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert CAD Design Solutions</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              At Amaze Engineering, we leverage cutting-edge CAD/CAM technology to deliver precise, 
              manufacturable designs. Our experienced design team uses SolidWorks and AutoCAD to create 
              detailed 3D models, technical drawings, and complete documentation for seamless manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
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
                    <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">
              Our Design Work
            </h2>
            
            <Card className="card-shadow overflow-hidden animate-scale-in mb-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      Precision 3D Modeling
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Our design team creates detailed 3D models with exact specifications, ensuring 
                      every component is optimized for manufacturing. We provide complete design 
                      documentation including assembly drawings, part specifications, and material lists.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Detailed dimensional accuracy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Manufacturing-ready designs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Complete technical documentation</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[400px] lg:h-[500px]">
                    <img
                      src={designExample}
                      alt="CAD Design Example - 3D Model"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="card-shadow overflow-hidden animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-0">
                  <div className="relative bg-black">
                    <video
                      controls
                      className="w-full h-auto"
                      poster={designExample}
                    >
                      <source src="/videos/solidworks-demo-1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">SolidWorks 3D Assembly Design</h3>
                    <p className="text-muted-foreground">
                      Complex assembly modeling with precise component integration and motion simulation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow overflow-hidden animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-0">
                  <div className="relative bg-black">
                    <video
                      controls
                      className="w-full h-auto"
                      poster={designExample}
                    >
                      <source src="/videos/solidworks-demo-2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">CAD Component Engineering</h3>
                    <p className="text-muted-foreground">
                      Detailed engineering design with parametric modeling and technical specifications.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-8">SolidWorks 3D Models</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="card-shadow overflow-hidden animate-scale-in" style={{ animationDelay: "0.3s" }}>
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-muted to-background p-4">
                      <img
                        src={solidworks1}
                        alt="SolidWorks 3D Component Model"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold">3D Component Assembly</h4>
                      <p className="text-sm text-muted-foreground">Precision mechanical assembly design</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow overflow-hidden animate-scale-in" style={{ animationDelay: "0.4s" }}>
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-muted to-background p-4">
                      <img
                        src={solidworks2}
                        alt="SolidWorks Circular Component"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold">Circular Component Design</h4>
                      <p className="text-sm text-muted-foreground">Detailed flange and gasket assembly</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow overflow-hidden animate-scale-in" style={{ animationDelay: "0.5s" }}>
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-muted to-background p-4">
                      <img
                        src={solidworks3}
                        alt="SolidWorks Mechanical Design"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold">Custom Mechanical Part</h4>
                      <p className="text-sm text-muted-foreground">Specialized component engineering</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center mb-8">CAD Technical Drawings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card-shadow overflow-hidden animate-scale-in" style={{ animationDelay: "0.6s" }}>
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted">
                      <img
                        src={cadDrawing1}
                        alt="CAD Technical Drawing - Component Assembly"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold">Component Assembly Drawing</h4>
                      <p className="text-sm text-muted-foreground">Detailed dimensional specifications</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow overflow-hidden animate-scale-in" style={{ animationDelay: "0.7s" }}>
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted">
                      <img
                        src={cadDrawing2}
                        alt="CAD Technical Drawing - Screw Assembly"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold">Threaded Component Design</h4>
                      <p className="text-sm text-muted-foreground">Precision screw and thread specifications</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow overflow-hidden animate-scale-in" style={{ animationDelay: "0.8s" }}>
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted">
                      <img
                        src={cadDrawing3}
                        alt="CAD Technical Drawing - Circular Component"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold">Circular Component Plans</h4>
                      <p className="text-sm text-muted-foreground">Top and section view with measurements</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow overflow-hidden animate-scale-in" style={{ animationDelay: "0.9s" }}>
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted">
                      <img
                        src={cadDrawing4}
                        alt="CAD Technical Drawing - Conveyor Shaft"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold">Conveyor Take Over Shaft</h4>
                      <p className="text-sm text-muted-foreground">Complete assembly with spacer details</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow overflow-hidden animate-scale-in" style={{ animationDelay: "1.0s" }}>
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted">
                      <img
                        src={cadDrawing5}
                        alt="CAD Technical Drawing - Flow Control"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold">Flow Control Assembly</h4>
                      <p className="text-sm text-muted-foreground">Multi-view technical specifications</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">
              Design Services We Offer
            </h2>
            <Card className="card-shadow animate-scale-in">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-shadow animate-scale-in bg-card">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                  Why Choose Our Design Services?
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Industry Expertise</h3>
                    <p className="text-muted-foreground">
                      Our design team has extensive experience across multiple industries including food 
                      processing, pharmaceutical, textile, and manufacturing sectors.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Design to Manufacturing Integration</h3>
                    <p className="text-muted-foreground">
                      Seamless integration between our design and manufacturing facilities ensures your 
                      components move from concept to production efficiently.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cost-Effective Solutions</h3>
                    <p className="text-muted-foreground">
                      We optimize designs for manufacturability, reducing production costs while maintaining 
                      high quality standards and performance requirements.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fast Turnaround</h3>
                    <p className="text-muted-foreground">
                      Quick design iterations and responsive communication ensure your projects stay on 
                      schedule from initial concept to final production.
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

export default Design;
