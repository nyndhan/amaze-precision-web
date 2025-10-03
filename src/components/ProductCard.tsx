import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuoteModal from "./QuoteModal";

interface ProductCardProps {
  name: string;
  image: string;
  category?: string;
}

const ProductCard = ({ name, image, category }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <Card className="card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden group animate-scale-in">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden bg-muted">
            {!imageError ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={() => setImageError(true)}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Image unavailable</span>
              </div>
            )}
          </div>
          <div className="p-4">
            {category && (
              <span className="text-xs text-primary font-medium bg-accent/20 px-2 py-1 rounded">
                {category}
              </span>
            )}
            <h3 className="font-semibold text-lg mt-2 text-foreground">{name}</h3>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Get Quote
          </Button>
        </CardFooter>
      </Card>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={name}
      />
    </>
  );
};

export default ProductCard;
