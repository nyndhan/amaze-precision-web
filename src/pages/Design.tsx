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
import conveyorRollerShaft from "@/assets/design/conveyor-roller-shaft.png";
import foundationBolt from "@/assets/design/foundation-bolt.png";
import liftingTongs from "@/assets/design/lifting-tongs.png";
import reelLifting from "@/assets/design/reel-lifting.png";

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
              {[
                { src: "/videos/solidworks-demo-1.mp4", title: "SolidWorks 3D Assembly Design", desc: "Complex assembly modeling with precise component integration and motion simulation." },
                { src: "/videos/solidworks-demo-2.mp4", title: "SolidWorks 3D Assembly Design", desc: "Detailed engineering design with parametric modeling and technical specifications." },
                { src: "/videos/solidworks-demo-3.mp4", title: "SolidWorks 3D Assembly Design", desc: "Advanced component design with detailed specifications and assembly integration." },
                { src: "/videos/solidworks-demo-4.mp4", title: "SolidWorks 3D Assembly Design", desc: "Precision mechanical design with comprehensive technical documentation." },
                { src: "/videos/solidworks-demo-5.mp4", title: "SolidWorks 3D Assembly Design", desc: "Detailed 3D modeling with manufacturing-ready design specifications." },
                { src: "/videos/l-clamp.mp4", title: "L Clamp Assembly Design", desc: "Precision L clamp 3D modeling with detailed structural analysis." },
                { src: "/videos/lifting-tongs.mp4", title: "Lifting Tongs Assembly Design", desc: "Heavy-duty lifting tongs mechanism with motion simulation." },
                { src: "/videos/scissors-lift.mp4", title: "Scissors Lift Assembly Design", desc: "Hydraulic scissors lift mechanism with parametric modeling." },
                { src: "/videos/slide-gate.mp4", title: "Slide Gate Assembly Design", desc: "Industrial slide gate valve 3D design with flow analysis." },
                { src: "/videos/v-groove-roller.mp4", title: "V Groove Roller Assembly Design", desc: "V groove roller conveyor system with assembly integration." },
                { src: "/videos/bottom-open-pin.mp4", title: "Bottom Open Pin Assembly Design", desc: "Bottom open pin mechanism with detailed specifications." },
                { src: "/videos/crane-tongs.mp4", title: "Crane Tongs Assembly Design", desc: "Heavy-duty crane tongs with load-bearing analysis." },
                { src: "/videos/gear-box-lifting-mechanism.mp4", title: "Gear Box Lifting Mechanism Design", desc: "Gear box lifting mechanism with motion simulation and stress analysis." },
              ].map((video, index) => (
                <Card key={index} className="card-shadow overflow-hidden animate-scale-in" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                  <CardContent className="p-0">
                    <div className="relative bg-black">
                      <video controls className="w-full h-auto">
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                      <p className="text-muted-foreground">{video.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-8">SolidWorks 3D Models</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { src: solidworks1, title: "Valve Body Assembly", desc: "Precision valve body 3D model" },
                  { src: solidworks2, title: "Flange & Gasket Assembly", desc: "Detailed flange and gasket design" },
                  { src: solidworks3, title: "Coupling Component", desc: "Custom coupling engineering design" },
                  { src: conveyorRollerShaft, title: "Conveyor Roller Shaft", desc: "Multi-roller conveyor shaft assembly" },
                  { src: foundationBolt, title: "Foundation Bolt", desc: "Precision threaded foundation bolt" },
                  { src: liftingTongs, title: "Lifting Tongs Assembly", desc: "Heavy-duty lifting tongs mechanism" },
                  { src: reelLifting, title: "Reel Lifting Device", desc: "Reel lifting and handling equipment" },
                ].map((item, index) => (
                  <Card key={index} className="card-shadow overflow-hidden animate-scale-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <CardContent className="p-0">
                      <div className="aspect-square bg-gradient-to-br from-muted to-background p-4">
                        <img src={item.src} alt={item.title} className="w-full h-full object-contain" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center mb-8">CAD Technical Drawings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { src: cadDrawing1, title: "Sight Glass Assembly Drawing", desc: "Detailed dimensional specifications" },
                  { src: cadDrawing2, title: "Threaded Fastener Design", desc: "Precision screw and thread specifications" },
                  { src: cadDrawing3, title: "Circular Flange Drawing", desc: "Top and section view with measurements" },
                  { src: cadDrawing4, title: "Conveyor Take Over Shaft", desc: "Complete assembly with spacer details" },
                  { src: cadDrawing5, title: "Flow Control Assembly", desc: "Multi-view technical specifications" },
                ].map((item, index) => (
                  <Card key={index} className="card-shadow overflow-hidden animate-scale-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted">
                        <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
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
