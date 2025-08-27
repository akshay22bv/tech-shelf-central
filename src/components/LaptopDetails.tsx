
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, HardDrive, Monitor, Zap, MessageCircle, X } from "lucide-react";

interface LaptopDetailsProps {
  laptop: {
    id: string;
    name: string;
    brand: string;
    price: number;
    image: string;
    processor: string;
    ram: string;
    storage: string;
    display: string;
    category: string;
  };
  onClose: () => void;
}

const LaptopDetails = ({ laptop, onClose }: LaptopDetailsProps) => {
  const handleWhatsAppChat = () => {
    const message = `Hi! I'm interested in the ${laptop.name} by ${laptop.brand} priced at $${laptop.price}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/919686721221?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-4 top-4 text-foreground-muted hover:text-brand-primary"
          >
            <X className="w-5 h-5" />
          </Button>
          <CardTitle className="text-2xl gradient-text pr-12">{laptop.name}</CardTitle>
          <p className="text-foreground-muted text-lg">{laptop.brand}</p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image */}
            <div className="relative">
              <img 
                src={laptop.image} 
                alt={laptop.name}
                className="w-full h-64 lg:h-96 object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">
                  {laptop.category}
                </Badge>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-brand-primary mb-2">${laptop.price}</div>
                <p className="text-foreground-muted">Competitive pricing with premium quality</p>
              </div>

              {/* Specifications */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Specifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-surface-elevated rounded-lg">
                    <Cpu className="w-5 h-5 mr-3 text-brand-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Processor</div>
                      <div className="text-foreground-muted">{laptop.processor}</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-surface-elevated rounded-lg">
                    <Zap className="w-5 h-5 mr-3 text-brand-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Memory</div>
                      <div className="text-foreground-muted">{laptop.ram} RAM</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-surface-elevated rounded-lg">
                    <HardDrive className="w-5 h-5 mr-3 text-brand-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Storage</div>
                      <div className="text-foreground-muted">{laptop.storage}</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-surface-elevated rounded-lg">
                    <Monitor className="w-5 h-5 mr-3 text-brand-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Display</div>
                      <div className="text-foreground-muted">{laptop.display}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <Button 
                onClick={handleWhatsAppChat}
                className="w-full bg-brand-primary hover:bg-interactive-primary-hover text-background flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LaptopDetails;
