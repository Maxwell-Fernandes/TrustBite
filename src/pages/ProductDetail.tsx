import * as React from "react"
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "../components/ui/tabs";
import { Star, Shield, AlertTriangle, Bookmark } from "lucide-react";

// Mock data for a single product
const mockProduct = {
  id: 1,
  name: "Organic Valley Milk",
  brand: "Organic Valley",
  category: "Dairy",
  description: "Farm-fresh organic whole milk sourced from family farms. No artificial hormones, antibiotics, or pesticides.",
  rating: 4.8,
  reviews: 124,
  image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&h=400&q=80",
  compliant: true,
  price: "$4.99",
  certifications: ["USDA Organic", "Non-GMO Project Verified", "Animal Welfare Approved"],
  nutritionalInfo: {
    calories: "150 per serving",
    fat: "8g",
    carbs: "12g",
    protein: "8g",
  },
  ingredients: "Organic Whole Milk",
  safetyInfo: {
    allergens: ["Milk"],
    storageInstructions: "Keep refrigerated at 33-40°F",
    shelfLife: "7-10 days after opening",
  },
  regulatoryCompliance: {
    fda: true,
    usda: true,
    organic: true,
  },
};

// Mock review data
const mockReviews = [
  {
    id: 1,
    user: "John D.",
    date: "March 15, 2025",
    rating: 5,
    comment: "Excellent quality milk. Fresh taste and the packaging keeps it cold for longer periods.",
    helpful: 12,
  },
  {
    id: 2,
    user: "Sarah M.",
    date: "March 10, 2025",
    rating: 4,
    comment: "Good milk, but packaging could be more eco-friendly. Otherwise, the quality is great.",
    helpful: 8,
  },
  {
    id: 3,
    user: "Michael T.",
    date: "February 28, 2025",
    rating: 5,
    comment: "My family loves this milk. We've been buying it for years and the quality has remained consistent.",
    helpful: 15,
  },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  
  // In a real app, we'd fetch product data based on the ID
  // For now, we'll just use our mock data
  const product = mockProduct;

  return (
    <Layout>
      <div className="trust-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">
                {product.category}
              </Badge>
              <Badge
                variant={product.compliant ? "default" : "destructive"}
                className={`${product.compliant ? "bg-trust-green" : ""}`}
              >
                {product.compliant ? "Compliant" : "Issues Reported"}
              </Badge>
            </div>

            <h1 className="text-3xl font-bold mb-1">{product.name}</h1>
            <p className="text-gray-600 mb-3">{product.brand}</p>

            <div className="flex items-center mb-6">
              <div className="flex items-center text-yellow-500 mr-3">
                <Star className="fill-current h-5 w-5" />
                <span className="ml-1 font-medium">{product.rating}</span>
              </div>
              <span className="text-gray-500">({product.reviews} reviews)</span>
              <span className="mx-3 text-gray-300">|</span>
              <span className="font-medium">{product.price}</span>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {product.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-trust-blue/10 text-trust-blue px-3 py-1 rounded-full text-sm flex items-center"
                >
                  <Shield className="h-4 w-4 mr-1" />
                  {cert}
                </div>
              ))}
            </div>

            <div className="flex gap-3 mb-8">
              <Button size="lg">Write a Review</Button>
              <Button size="lg" variant="outline">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Report Issue
              </Button>
              <Button size="icon" variant="ghost">
                <Bookmark className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs for additional information */}
        <div className="mt-12">
          <Tabs defaultValue="overview" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="safety">Safety</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
              <TabsContent value="overview" className="space-y-4">
                <h3 className="text-xl font-semibold">Product Overview</h3>
                <p>{product.description}</p>
                
                <h4 className="font-medium mt-6">Ingredients</h4>
                <p>{product.ingredients}</p>
                
                <h4 className="font-medium mt-6">Regulatory Compliance</h4>
                <div className="flex flex-wrap gap-3 mt-2">
                  {product.regulatoryCompliance.fda && (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      FDA Compliant
                    </Badge>
                  )}
                  {product.regulatoryCompliance.usda && (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      USDA Compliant
                    </Badge>
                  )}
                  {product.regulatoryCompliance.organic && (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      Certified Organic
                    </Badge>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="nutrition" className="space-y-4">
                <h3 className="text-xl font-semibold">Nutritional Information</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Calories</p>
                    <p className="font-semibold">{product.nutritionalInfo.calories}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Fat</p>
                    <p className="font-semibold">{product.nutritionalInfo.fat}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Carbs</p>
                    <p className="font-semibold">{product.nutritionalInfo.carbs}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-500 text-sm">Protein</p>
                    <p className="font-semibold">{product.nutritionalInfo.protein}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="safety" className="space-y-4">
                <h3 className="text-xl font-semibold">Safety Information</h3>
                
                <div className="mt-4">
                  <h4 className="font-medium">Allergen Information</h4>
                  <div className="flex gap-2 mt-2">
                    {product.safetyInfo.allergens.map((allergen, index) => (
                      <Badge key={index} variant="outline" className="border-yellow-500 text-yellow-700">
                        {allergen}
                      </Badge>
                    ))}
                  </div>
                  
                  <h4 className="font-medium mt-6">Storage Instructions</h4>
                  <p className="mt-2">{product.safetyInfo.storageInstructions}</p>
                  
                  <h4 className="font-medium mt-6">Shelf Life</h4>
                  <p className="mt-2">{product.safetyInfo.shelfLife}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                
                <div className="mt-6 space-y-6">
                  {mockReviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-medium">{review.user}</span>
                          <span className="text-gray-500 ml-2">{review.date}</span>
                        </div>
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? "fill-current" : ""}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-2 text-gray-700">{review.comment}</p>
                      <div className="mt-3">
                        <Button size="sm" variant="ghost">
                          Helpful ({review.helpful})
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;