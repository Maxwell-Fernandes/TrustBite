import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard, { Product } from "@/components/products/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, Sliders } from "lucide-react";

// Mock data for products
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Organic Valley Milk",
    category: "Dairy",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=300&h=200&q=80",
    compliant: true,
  },
  {
    id: 2,
    name: "Nature's Path Cereal",
    category: "Breakfast",
    rating: 4.5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=300&h=200&q=80",
    compliant: true,
  },
  {
    id: 3,
    name: "Fresh Farms Eggs",
    category: "Dairy",
    rating: 4.7,
    reviews: 106,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=300&h=200&q=80",
    compliant: true,
  },
  {
    id: 4,
    name: "Green Valley Beef",
    category: "Meat",
    rating: 4.2,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=300&h=200&q=80",
    compliant: false,
  },
  {
    id: 5,
    name: "Sunny Fields Bread",
    category: "Bakery",
    rating: 4.6,
    reviews: 118,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=300&h=200&q=80",
    compliant: true,
  },
  {
    id: 6,
    name: "Pure Water Spring",
    category: "Beverages",
    rating: 4.4,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=300&h=200&q=80",
    compliant: true,
  },
  {
    id: 7,
    name: "Golden Grains Rice",
    category: "Grains",
    rating: 4.3,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=300&h=200&q=80",
    compliant: true,
  },
  {
    id: 8,
    name: "Natural Sweeteners",
    category: "Condiments",
    rating: 3.9,
    reviews: 47,
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=300&h=200&q=80",
    compliant: false,
  },
];

const categories = [
  "All Categories",
  "Dairy",
  "Bakery",
  "Meat",
  "Beverages",
  "Breakfast",
  "Grains",
  "Condiments",
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on search and category
  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = 
      selectedCategory === "All Categories" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <section className="bg-trust-light py-8">
        <div className="trust-container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-trust-dark mb-2">
                Browse Products
              </h1>
              <p className="text-gray-600">
                Discover products with verified quality and safety information
              </p>
            </div>
            
            {/* Search bar */}
            <div className="w-full md:w-auto">
              <div className="relative w-full md:w-80">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar filters */}
            <aside className="lg:col-span-1">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Sliders className="h-4 w-4 mr-2" />
                    {showFilters ? "Hide" : "Show"}
                  </Button>
                </div>
                
                <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
                  <Accordion type="single" collapsible defaultValue="category">
                    <AccordionItem value="category">
                      <AccordionTrigger className="py-2">Categories</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <div 
                              key={category}
                              className={`cursor-pointer py-1 px-2 rounded-md transition-colors ${
                                selectedCategory === category 
                                  ? "bg-trust-blue/10 text-trust-blue" 
                                  : "hover:bg-gray-100"
                              }`}
                              onClick={() => setSelectedCategory(category)}
                            >
                              {category}
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="compliance">
                      <AccordionTrigger className="py-2">Compliance Status</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input type="checkbox" id="compliant" className="mr-2" />
                            <label htmlFor="compliant">Compliant</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="issues" className="mr-2" />
                            <label htmlFor="issues">Issues Reported</label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rating">
                      <AccordionTrigger className="py-2">Minimum Rating</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <input
                            type="range"
                            min="1"
                            max="5"
                            step="0.5"
                            defaultValue="3"
                            className="w-full"
                          />
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>1★</span>
                            <span>3★</span>
                            <span>5★</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </aside>
            
            {/* Product list */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg text-center">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;