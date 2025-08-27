
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedLaptops from "@/components/FeaturedLaptops";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedLaptops />
    </div>
  );
};

export default Index;
