
import React, { useState } from 'react';
import { Package, CheckCircle, Phone, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: <Package className="w-5 h-5" /> },
    { id: 'cement', name: 'Cement', icon: <Package className="w-5 h-5" /> },
    { id: 'iron', name: 'Iron & Steel', icon: <Package className="w-5 h-5" /> },
    { id: 'other', name: 'Other Materials', icon: <Package className="w-5 h-5" /> },
  ];

  const products = [
    {
      id: 1,
      name: 'ACC Cement',
      category: 'cement',
      brand: 'ACC',
      description: 'High-quality OPC 53 grade cement, ideal for all construction needs',
      features: ['53 Grade', 'Fast Setting', 'High Strength'],
      inStock: true,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&w=400'
    },
    {
      id: 2,
      name: 'Ambuja Cement',
      category: 'cement',
      brand: 'Ambuja',
      description: 'Premium cement for residential and commercial projects',
      features: ['43 Grade', 'Durable', 'Weather Resistant'],
      inStock: true,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&w=400'
    },
    {
      id: 3,
      name: 'UltraTech Cement',
      category: 'cement',
      brand: 'UltraTech',
      description: 'Engineer\'s choice for superior construction quality',
      features: ['53 Grade', 'High Compressive Strength', 'Low Heat of Hydration'],
      inStock: true,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&w=400'
    },
    {
      id: 4,
      name: 'JSW Steel Bars',
      category: 'iron',
      brand: 'JSW Steel',
      description: 'TMT bars with superior strength and flexibility',
      features: ['Fe 500', 'Corrosion Resistant', 'Earthquake Resistant'],
      inStock: true,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&w=400'
    },
    {
      id: 5,
      name: 'Tata Steel TMT',
      category: 'iron',
      brand: 'Tata Steel',
      description: 'Premium TMT bars for maximum safety and durability',
      features: ['Fe 500D', 'High Tensile Strength', 'Bend & Rebend'],
      inStock: true,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&w=400'
    },
    {
      id: 6,
      name: 'Vizag Steel',
      category: 'iron',
      brand: 'Vizag Steel',
      description: 'Cost-effective steel bars for residential construction',
      features: ['Fe 415', 'Good Weldability', 'Uniform Quality'],
      inStock: true,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&w=400'
    },
    {
      id: 7,
      name: 'River Sand',
      category: 'other',
      brand: 'Local Supplier',
      description: 'High-quality river sand for construction and plastering',
      features: ['Washed & Graded', 'Low Silt Content', 'Bulk Supply'],
      inStock: true,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=400'
    },
    {
      id: 8,
      name: 'M-Sand',
      category: 'other',
      brand: 'Manufactured',
      description: 'Manufactured sand - eco-friendly alternative to river sand',
      features: ['Consistent Quality', 'No Impurities', 'Eco-Friendly'],
      inStock: true,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=400'
    },
    {
      id: 9,
      name: 'Aggregates',
      category: 'other',
      brand: 'Various Sizes',
      description: 'Stone aggregates in various sizes for concrete mixing',
      features: ['6mm, 12mm, 20mm', 'Crushed Stone', 'High Strength'],
      inStock: true,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=400'
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins">Our Products</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-roboto">
            Premium quality construction materials from India's most trusted brands
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`${
                  activeFilter === category.id 
                    ? 'bg-primary text-white' 
                    : 'text-primary border-primary hover:bg-primary hover:text-white'
                } font-poppins`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    {product.inStock ? (
                      <Badge className="bg-green-500 text-white">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        In Stock
                      </Badge>
                    ) : (
                      <Badge variant="destructive">Out of Stock</Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-slate font-poppins">{product.name}</h3>
                    <Badge variant="outline" className="text-primary border-primary">
                      {product.brand}
                    </Badge>
                  </div>
                  <p className="text-gray-600 font-roboto mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate mb-2 font-poppins">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90 text-slate font-poppins"
                    asChild
                  >
                    <a href="tel:+919876543210">
                      <Phone className="w-4 h-4 mr-2" />
                      Call to Order
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate to-slate/90">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Need Help Choosing the Right Materials?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-roboto">
              Our experienced team is here to help you select the best materials for your project. 
              Get expert advice and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-slate font-poppins"
                asChild
              >
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Expert Advice
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-slate font-poppins"
                asChild
              >
                <a href="/contact">
                  Get Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate mb-4 font-poppins">Trusted Brands We Supply</h2>
            <p className="text-lg text-gray-600 font-roboto">Quality materials from India's leading manufacturers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['ACC', 'Ambuja', 'UltraTech', 'JSW Steel', 'Tata Steel', 'Birla'].map((brand, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                    <span className="text-white font-bold text-lg font-poppins">{brand.charAt(0)}</span>
                  </div>
                  <h4 className="font-semibold text-slate font-poppins">{brand}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
