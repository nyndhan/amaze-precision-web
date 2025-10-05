import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Infrastructure = () => {
  const equipment = [
    { name: "Conventional Lathe", category: "Machining" },
    { name: "Gear Hobbing Machines", category: "Specialized" },
    { name: "DRO Milling Machine", category: "Machining" },
    { name: "Conventional Milling Machine", category: "Machining" },
    { name: "Surface Grinding", category: "Finishing" },
    { name: "Shaper Machine", category: "Machining" },
    { name: "Drilling Machines", category: "Machining" },
    { name: "Hydraulic Testing Equipments", category: "Testing" },
    { name: "Welding Machines and Fabrication Setup", category: "Fabrication" },
    { name: "Polishing and Grinding", category: "Finishing" },
    { name: "Large Assembly Areas", category: "Assembly" },
    { name: "Small Assembly Areas", category: "Assembly" },
    { name: "Critical Component Reconditioning Service", category: "Services" },
    { name: "Custom Casting (CI, Al, PB, Bronze)", category: "Casting" },
  ];

  const groupedEquipment = equipment.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="min-h-screen bg-background">
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Infrastructure</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Advanced Manufacturing Capabilities & State-of-the-Art Equipment
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl font-bold mb-4">Manufacturing Facilities</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our facility is equipped with cutting-edge machinery and technology, enabling us to deliver 
                precision engineering solutions across various manufacturing processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {Object.entries(groupedEquipment).map(([category, items], index) => (
                <Card
                  key={category}
                  className="card-shadow hover:card-shadow-hover transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">{category}</h3>
                    <ul className="space-y-2">
                      {items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="card-shadow animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Advantage</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                    <p className="text-muted-foreground">Years of Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                    <p className="text-muted-foreground">Advanced Machines</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                    <p className="text-muted-foreground">Products Manufactured</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 animate-slide-up">Quality Assurance</h2>
            <Card className="card-shadow animate-scale-in">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  All our products undergo rigorous quality checks and hydraulic testing to ensure they meet 
                  the highest industry standards. Our quality assurance process guarantees reliability, 
                  durability, and precision in every component we manufacture.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">ISO Standard Compliance</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Dimensional Accuracy Testing</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Material Verification</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Pressure Testing</span>
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

export default Infrastructure;
