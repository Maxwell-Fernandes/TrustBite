import * as React from "react"
import { useState } from "react";
import Layout from "../components/Layout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search as SearchIcon, Loader2 } from "lucide-react";
import ProductCard, { Product } from "../components/products/ProductCard";

// Mock product data
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
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (searchTerm.trim() === "") return;
    
    setIsSearching(true);
    setHasSearched(true);
    
    // Simulate API search
    setTimeout(() => {
      const results = mockProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="trust-container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-trust-dark mb-8 text-center">
            Search Products
          </h1>
          
          <form onSubmit={handleSearch} className="mb-10">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search products, brands, or categories..."
                className="pl-10 py-6 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <Button type="submit" disabled={isSearching || searchTerm.trim() === ""}>
                  {isSearching ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    "Search"
                  )}
                </Button>
              </div>
            </div>
          </form>
          
          {hasSearched && (
            <div>
              {isSearching ? (
                <div className="text-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-trust-blue" />
                  <p className="text-gray-600">Searching for products...</p>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">
                      {searchResults.length > 0 
                        ? `Search Results (${searchResults.length})` 
                        : "No Results Found"}
                    </h2>
                    {searchResults.length > 0 && (
                      <Button variant="ghost" onClick={() => setHasSearched(false)}>
                        Clear Results
                      </Button>
                    )}
                  </div>
                  
                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {searchResults.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-8 rounded-lg text-center">
                      <p className="text-gray-700 mb-3">
                        No products found matching "{searchTerm}"
                      </p>
                      <p className="text-gray-500 text-sm">
                        Try searching with different keywords or browse our product categories.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          
          {!hasSearched && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {["Organic", "Dairy", "Gluten Free", "Non-GMO", "Vegan", "Snacks"].map((term) => (
                  <Button 
                    key={term} 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSearchTerm(term);
                      handleSearch();
                    }}
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Search;