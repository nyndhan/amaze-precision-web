import { useState, useEffect } from "react";
import { productsData } from "@/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const [loadedProducts, setLoadedProducts] = useState<Record<string, Array<{ name: string; image: string }>>>({});
  const [selectedImage, setSelectedImage] = useState<{ name: string; image: string } | null>(null);

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

  const allProducts = Object.values(loadedProducts).flat();
  const categories = ["All Products", ...Object.keys(productsData)];

  return (
    <div className="min-h-screen bg-background">
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Browse Our Complete Collection of Precision Engineering Products
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All Products" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-12 h-auto gap-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs md:text-sm py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="All Products" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {allProducts.map((product, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded-lg cursor-pointer group card-shadow hover:card-shadow-hover transition-all animate-scale-in"
                    style={{ animationDelay: `${(index % 20) * 0.05}s` }}
                    onClick={() => setSelectedImage(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            {Object.entries(loadedProducts).map(([category, products]) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="aspect-square overflow-hidden rounded-lg cursor-pointer group card-shadow hover:card-shadow-hover transition-all animate-scale-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                      onClick={() => setSelectedImage(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <p className="text-white text-center text-lg mt-4 font-medium">{selectedImage.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
