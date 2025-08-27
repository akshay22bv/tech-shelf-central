
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, HardDrive, Monitor, Zap } from "lucide-react";

interface LaptopCardProps {
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
  onViewDetails: () => void;
}

const LaptopCard = ({ laptop, onViewDetails }: LaptopCardProps) => {
  return (
    <Card className="glass-card card-hover group cursor-pointer">
      <CardContent className="p-0">
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-lg" onClick={onViewDetails}>
          <img 
            src={laptop.image} 
            alt={laptop.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-brand-primary/10 text-brand-primary border-brand-primary/20">
              {laptop.category}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="text-lg font-bold text-brand-primary">${laptop.price}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-foreground mb-1">{laptop.name}</h3>
            <p className="text-foreground-muted">{laptop.brand}</p>
          </div>

          {/* Specs */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm text-foreground-muted">
              <Cpu className="w-4 h-4 mr-2 text-brand-primary" />
              {laptop.processor}
            </div>
            <div className="flex items-center text-sm text-foreground-muted">
              <Zap className="w-4 h-4 mr-2 text-brand-primary" />
              {laptop.ram} RAM
            </div>
            <div className="flex items-center text-sm text-foreground-muted">
              <HardDrive className="w-4 h-4 mr-2 text-brand-primary" />
              {laptop.storage}
            </div>
            <div className="flex items-center text-sm text-foreground-muted">
              <Monitor className="w-4 h-4 mr-2 text-brand-primary" />
              {laptop.display}
            </div>
          </div>

          {/* Actions */}
          <Button 
            onClick={onViewDetails}
            className="w-full bg-brand-primary hover:bg-interactive-primary-hover text-background"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LaptopCard;
