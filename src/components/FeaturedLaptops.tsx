
import { useState } from "react";
import LaptopCard from "./LaptopCard";
import LaptopDetails from "./LaptopDetails";

const FeaturedLaptops = () => {
  const [selectedLaptopIndex, setSelectedLaptopIndex] = useState<number | null>(null);

  // Mock data - in a real app, this would come from an API
  const featuredLaptops = [
    {
      id: "1",
      name: "MacBook Pro 16-inch",
      brand: "Apple",
      price: 2499,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=300&fit=crop",
      processor: "Apple M3 Pro",
      ram: "18GB",
      storage: "512GB SSD",
      display: "16.2-inch Liquid Retina XDR",
      category: "Professional"
    },
    {
      id: "2",
      name: "ROG Strix G15",
      brand: "ASUS",
      price: 1299,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=300&fit=crop",
      processor: "AMD Ryzen 7 6800H",
      ram: "16GB",
      storage: "1TB SSD",
      display: "15.6-inch FHD 144Hz",
      category: "Gaming"
    },
    {
      id: "3",
      name: "ThinkPad X1 Carbon",
      brand: "Lenovo",
      price: 1599,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=300&fit=crop",
      processor: "Intel Core i7-1365U",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14-inch WUXGA",
      category: "Business"
    }
  ];

  const handleViewDetails = (laptopIndex: number) => {
    setSelectedLaptopIndex(laptopIndex);
  };

  const handleCloseDetails = () => {
    setSelectedLaptopIndex(null);
  };

  const handlePrevious = () => {
    if (selectedLaptopIndex !== null && selectedLaptopIndex > 0) {
      setSelectedLaptopIndex(selectedLaptopIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedLaptopIndex !== null && selectedLaptopIndex < featuredLaptops.length - 1) {
      setSelectedLaptopIndex(selectedLaptopIndex + 1);
    }
  };

  const selectedLaptop = selectedLaptopIndex !== null ? featuredLaptops[selectedLaptopIndex] : null;
  const hasPrevious = selectedLaptopIndex !== null && selectedLaptopIndex > 0;
  const hasNext = selectedLaptopIndex !== null && selectedLaptopIndex < featuredLaptops.length - 1;

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Laptops</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium laptops, carefully chosen 
            for their exceptional performance and innovative features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredLaptops.map((laptop, index) => (
            <LaptopCard 
              key={laptop.id} 
              laptop={laptop} 
              onViewDetails={() => handleViewDetails(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-primary hover:bg-interactive-primary-hover text-background px-8 py-3 rounded-xl font-semibold transition-colors">
            View All Laptops
          </button>
        </div>
      </div>

      {/* Laptop Details Modal */}
      {selectedLaptop && (
        <LaptopDetails 
          laptop={selectedLaptop} 
          onClose={handleCloseDetails}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
        />
      )}
    </section>
  );
};

export default FeaturedLaptops;
