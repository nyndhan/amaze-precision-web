import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { productsData } from "@/data/products";

const Products = () => {
  const [loadedProducts, setLoadedProducts] = useState<Record<string, Array<{ name: string; image: string }>>>({});

  useEffect(() => {
    const loadImages = async () => {
      const loaded: Record<string, Array<{ name: string; image: string }>> = {};
      
      for (const [category, products] of Object.entries(productsData)) {
        loaded[category] = await Promise.all(
          products.map(async (product) => ({
            name: product.name,
            image: (await product.image()).default,
          }))
        );
      }
      
      setLoadedProducts(loaded);
    };

    loadImages();
  }, []);

  const categories = Object.keys(productsData);

  return (
    <div className="min-h-screen bg-background">
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            High-Quality Precision Engineering Components for Various Industries
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto gap-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-sm md:text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">{category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {loadedProducts[category]?.map((product, index) => (
                    <ProductCard
                      key={index}
                      name={product.name}
                      image={product.image}
                      category={category}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Products;
