
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Plus, Laptop } from "lucide-react";
import Navbar from "@/components/Navbar";

const Admin = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    processor: "",
    ram: "",
    storage: "",
    display: "",
    category: "",
    description: "",
    image: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Laptop className="w-8 h-8 text-brand-primary mr-3" />
              <h1 className="text-3xl font-bold gradient-text">Admin Dashboard</h1>
            </div>
            <p className="text-foreground-muted">Manage your laptop inventory and add new products to the store.</p>
          </div>

          {/* Add Laptop Form */}
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="w-5 h-5 mr-2 text-brand-primary" />
                Add New Laptop
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Basic Info */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Laptop Name</Label>
                      <Input
                        id="name"
                        placeholder="e.g., MacBook Pro 16-inch"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-surface border-border-elevated"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="brand">Brand</Label>
                      <Input
                        id="brand"
                        placeholder="e.g., Apple"
                        value={formData.brand}
                        onChange={(e) => handleInputChange('brand', e.target.value)}
                        className="bg-surface border-border-elevated"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="price">Price ($)</Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="e.g., 2499"
                        value={formData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                        className="bg-surface border-border-elevated"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger className="bg-surface border-border-elevated">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gaming">Gaming</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="ultrabook">Ultrabook</SelectItem>
                          <SelectItem value="budget">Budget</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="processor">Processor</Label>
                      <Input
                        id="processor"
                        placeholder="e.g., Apple M3 Pro"
                        value={formData.processor}
                        onChange={(e) => handleInputChange('processor', e.target.value)}
                        className="bg-surface border-border-elevated"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="ram">RAM</Label>
                      <Input
                        id="ram"
                        placeholder="e.g., 16GB"
                        value={formData.ram}
                        onChange={(e) => handleInputChange('ram', e.target.value)}
                        className="bg-surface border-border-elevated"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="storage">Storage</Label>
                      <Input
                        id="storage"
                        placeholder="e.g., 512GB SSD"
                        value={formData.storage}
                        onChange={(e) => handleInputChange('storage', e.target.value)}
                        className="bg-surface border-border-elevated"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="display">Display</Label>
                      <Input
                        id="display"
                        placeholder="e.g., 16.2-inch Liquid Retina XDR"
                        value={formData.display}
                        onChange={(e) => handleInputChange('display', e.target.value)}
                        className="bg-surface border-border-elevated"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter laptop description..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="bg-surface border-border-elevated min-h-[100px]"
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <Label htmlFor="image">Image URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="image"
                      placeholder="Enter image URL or upload"
                      value={formData.image}
                      onChange={(e) => handleInputChange('image', e.target.value)}
                      className="bg-surface border-border-elevated"
                    />
                    <Button type="button" variant="outline" className="border-border-elevated">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-brand-primary hover:bg-interactive-primary-hover text-background"
                >
                  Add Laptop to Inventory
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">0</div>
                <div className="text-foreground-muted">Total Laptops</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">0</div>
                <div className="text-foreground-muted">Categories</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-brand-primary mb-2">$0</div>
                <div className="text-foreground-muted">Avg. Price</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
