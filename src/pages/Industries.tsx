import { Card, CardContent } from "@/components/ui/card";
import { Factory, Pill, Milk, Wheat, Heart, Shirt, HardHat, Droplets, Flame } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      title: "Food Processing",
      description: "Precision components for food processing machinery, maintaining hygiene standards and efficiency.",
    },
    {
      icon: Pill,
      title: "Pharmaceutical",
      description: "High-quality parts for pharmaceutical equipment meeting stringent regulatory requirements.",
    },
    {
      icon: Milk,
      title: "Dairy and Poultry",
      description: "Specialized components for dairy and poultry processing equipment and systems.",
    },
    {
      icon: Wheat,
      title: "Sugar and Fertilizer",
      description: "Durable parts for sugar mills and fertilizer production facilities.",
    },
    {
      icon: Heart,
      title: "Healthcare & Pharmaceuticals",
      description: "Precision engineering for medical and healthcare equipment manufacturing.",
    },
    {
      icon: Shirt,
      title: "Textile",
      description: "Custom components for textile machinery and garment manufacturing equipment.",
    },
    {
      icon: HardHat,
      title: "Steel and Valve Manufacturing",
      description: "Heavy-duty components for steel mills and valve manufacturing industries.",
    },
    {
      icon: Droplets,
      title: "Chemical and Oil Industries",
      description: "Corrosion-resistant parts for chemical processing and oil industry applications.",
    },
    {
      icon: Flame,
      title: "Foundry Industries",
      description: "Heat-resistant components and custom casting solutions for foundry operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Trusted Manufacturing Partner Across Diverse Industrial Sectors
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">Our Expertise Spans Multiple Industries</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              With years of experience and state-of-the-art manufacturing capabilities, we provide 
              customized engineering solutions tailored to each industry's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
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
                    <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
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
                <h2 className="text-3xl font-bold text-primary mb-6 text-center">Why Industries Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Industry-Specific Expertise</h3>
                    <p className="text-muted-foreground">
                      Deep understanding of each industry's unique challenges and requirements, enabling us to 
                      provide targeted solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Quality Compliance</h3>
                    <p className="text-muted-foreground">
                      All products meet industry-specific standards and regulatory requirements for safety and performance.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Custom Engineering</h3>
                    <p className="text-muted-foreground">
                      Tailored solutions designed to meet specific operational needs and technical specifications.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Reliable Partnership</h3>
                    <p className="text-muted-foreground">
                      Long-term support and service ensuring continuous operation and minimal downtime.
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

export default Industries;
