import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

// Mock data for popular products
const popularProducts = [
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
];

const PopularProducts = () => {
  return (
    <section className="section-padding">
      <div className="trust-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-trust-dark">
            Popular Products
          </h2>
          <Link 
            to="/products" 
            className="text-trust-blue hover:text-trust-blue/80 font-medium"
          >
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge 
                      variant={product.compliant ? "default" : "destructive"}
                      className={`${product.compliant ? "bg-trust-green" : ""}`}
                    >
                      {product.compliant ? "Compliant" : "Issues Reported"}
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-500 mr-2">
                      <Star className="fill-current h-4 w-4" />
                      <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;