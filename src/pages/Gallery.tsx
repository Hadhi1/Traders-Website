
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&w=800',
      title: 'Our Main Store',
      category: 'Store',
      description: 'Well-organized store with a wide variety of construction materials'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&w=800',
      title: 'Steel Rods Inventory',
      category: 'Inventory',
      description: 'High-quality steel rods from trusted manufacturers'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&w=800',
      title: 'Cement Bags Storage',
      category: 'Inventory',
      description: 'Properly stored cement bags in climate-controlled environment'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=800',
      title: 'Sand & Aggregates',
      category: 'Materials',
      description: 'Quality sand and aggregates for all construction needs'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&w=800',
      title: 'Delivery Truck',
      category: 'Delivery',
      description: 'Our delivery fleet ensuring timely material transport'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&w=800',
      title: 'Construction Site Delivery',
      category: 'Delivery',
      description: 'Materials delivered directly to construction sites'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&w=800',
      title: 'Team at Work',
      category: 'Team',
      description: 'Our dedicated team ensuring quality service'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&w=800',
      title: 'Quality Control',
      category: 'Operations',
      description: 'Regular quality checks to ensure material standards'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&w=800',
      title: 'Completed Project',
      category: 'Projects',
      description: 'Modern building constructed with our materials'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&w=800',
      title: 'Residential Project',
      category: 'Projects',
      description: 'Beautiful residential construction using our premium materials'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&w=800',
      title: 'Commercial Building',
      category: 'Projects',
      description: 'Large commercial project showcasing our material quality'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&w=800',
      title: 'Infrastructure Project',
      category: 'Projects',
      description: 'Infrastructure development with our trusted materials'
    }
  ];

  const categories = ['All', 'Store', 'Inventory', 'Materials', 'Delivery', 'Team', 'Operations', 'Projects'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev + 1) % filteredImages.length : 0));
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0));
  };

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins">Gallery</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-roboto">
            A glimpse into our products, operations, and successful projects
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'text-primary border-primary hover:bg-primary hover:text-white'
                } font-poppins`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-lg font-semibold font-poppins mb-2">{image.title}</h3>
                      <p className="text-sm font-roboto">Click to view larger</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-slate mb-2 font-poppins">{image.title}</h3>
                  <p className="text-sm text-gray-600 font-roboto">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={filteredImages[selectedImage].url} 
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="text-xl font-semibold font-poppins mb-2">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="font-roboto">{filteredImages[selectedImage].description}</p>
              <p className="text-sm text-gray-300 mt-2 font-roboto">
                {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Before/After Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate mb-4 font-poppins">Project Transformations</h2>
            <p className="text-lg text-gray-600 font-roboto">See how our quality materials transform construction projects</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581578949510-fa7315b8b8a2?ixlib=rb-4.0.3&w=600" 
                    alt="Before Construction"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-coral text-white px-3 py-1 rounded-full text-sm font-poppins">
                    Before
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate mb-2 font-poppins">Construction Site</h3>
                  <p className="text-gray-600 font-roboto">Raw land ready for development</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&w=600" 
                    alt="After Construction"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-poppins">
                    After
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate mb-2 font-poppins">Completed Building</h3>
                  <p className="text-gray-600 font-roboto">Modern structure built with our premium materials</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate to-slate/90">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-roboto">
              Let us help you achieve similar results with our quality materials and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-slate font-poppins"
                asChild
              >
                <a href="tel:+919876543210">
                  Call for Consultation
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
    </Layout>
  );
};

export default Gallery;
