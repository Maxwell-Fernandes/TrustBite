import * as React from "react"
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  compliant: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/products/${product.id}`}>
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
  );
};

export default ProductCard;