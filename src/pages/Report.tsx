import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { AlertTriangle, FileSearch, Check } from "lucide-react";

const Report = () => {
  const [issueType, setIssueType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Report submitted successfully. Thank you for helping improve product safety!");
    }, 1500);
  };

  return (
    <Layout>
      <div className="bg-trust-light py-12">
        <div className="trust-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-trust-dark mb-4">
                Report a Product Issue
              </h1>
              <p className="text-gray-600">
                Help ensure product quality and safety standards by reporting issues or concerns.
                Your reports contribute to a safer marketplace for everyone.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Product Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Product Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="product-name">Product Name *</Label>
                        <Input 
                          id="product-name" 
                          placeholder="Enter product name" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="brand">Brand Name *</Label>
                        <Input 
                          id="brand" 
                          placeholder="Enter brand name" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="barcode">Barcode/UPC (if available)</Label>
                      <Input 
                        id="barcode" 
                        placeholder="Enter barcode number" 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="purchase-date">Purchase Date</Label>
                        <Input 
                          id="purchase-date" 
                          type="date" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="purchase-location">Purchase Location</Label>
                        <Input 
                          id="purchase-location" 
                          placeholder="Where did you buy the product?" 
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Issue Details */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h3 className="text-xl font-semibold">Issue Details</h3>
                    
                    <div className="space-y-3">
                      <Label>Type of Issue *</Label>
                      <RadioGroup 
                        value={issueType} 
                        onValueChange={setIssueType}
                        required
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="safety" id="safety" />
                          <Label htmlFor="safety" className="cursor-pointer">
                            <span className="flex items-center">
                              <AlertTriangle className="h-4 w-4 mr-2 text-red-500" />
                              Safety Concern
                            </span>
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="quality" id="quality" />
                          <Label htmlFor="quality" className="cursor-pointer">
                            <span className="flex items-center">
                              <FileSearch className="h-4 w-4 mr-2 text-amber-500" />
                              Quality Issue
                            </span>
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="labeling" id="labeling" />
                          <Label htmlFor="labeling" className="cursor-pointer">
                            <span className="flex items-center">
                              <Check className="h-4 w-4 mr-2 text-blue-500" />
                              Labeling/Compliance Issue
                            </span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Detailed Description *</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Please describe the issue in detail" 
                        className="min-h-32"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="image">Upload Images (optional)</Label>
                      <Input 
                        id="image" 
                        type="file" 
                        accept="image/*"
                        multiple
                      />
                      <p className="text-sm text-gray-500">
                        You can upload up to 3 images. Supported formats: JPG, PNG
                      </p>
                    </div>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h3 className="text-xl font-semibold">Your Contact Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input 
                          id="name" 
                          placeholder="Enter your name" 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email"
                          placeholder="Enter your email" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-top space-x-2 pt-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        I confirm that the information provided is accurate to the best of my knowledge, and I agree to the
                        <a href="/terms" className="text-trust-blue hover:underline mx-1">Terms of Service</a>
                        and
                        <a href="/privacy" className="text-trust-blue hover:underline ml-1">Privacy Policy</a>.
                      </Label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Report"}
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-800">
              <p className="font-medium">Note:</p>
              <p>
                All reports are reviewed by our team for validity. For serious health or safety concerns,
                please also contact the relevant regulatory authorities in your region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Report;