import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/919486600749", "_blank");
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-24 right-8 z-50 h-14 w-14 rounded-full shadow-lg bg-secondary hover:bg-secondary-hover animate-scale-in"
      size="icon"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
