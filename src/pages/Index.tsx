
import React from 'react';
import { Phone, ArrowRight, Truck, Package, Users, Building, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Index = () => {
  const brands = [
    { name: 'ACC', tagline: 'India\'s Leading Cement' },
    { name: 'Ambuja', tagline: 'Strong. Durable. Reliable.' },
    { name: 'Coramandel', tagline: 'Quality Fertilizers' },
    { name: 'Ultratech', tagline: 'Engineer\'s Choice' },
    { name: 'JSW Steel', tagline: 'Excellence in Steel' },
    { name: 'Tata Steel', tagline: 'Trust & Quality' },
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery across Kamareddy and surrounding areas'
    },
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: 'Premium Brands',
      description: 'Only the best quality materials from trusted manufacturers'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Local Support',
      description: 'Personal service and support from your neighborhood dealer'
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: '15+ Years Experience',
      description: 'Serving the construction industry with expertise since 2009'
    }
  ];

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/dP9zeYmDFqWBtWEi7?g_st=aw', '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-slate/90 to-slate/70 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate/90 to-slate/70"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-poppins animate-fade-in">
            Your Trusted Iron & Cement Dealer
          </h1>
          <h2 className="text-2xl md:text-3xl text-accent mb-8 font-poppins animate-fade-in">
            in Kamareddy
          </h2>
          <p className="text-xl text-white mb-12 font-roboto max-w-2xl mx-auto animate-fade-in">
            Premium quality construction materials from trusted brands. Fast delivery, competitive prices, and reliable service since 2009.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-slate text-lg px-8 py-4 rounded-full font-poppins"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-coral hover:bg-coral/90 text-white border-coral text-lg px-8 py-4 rounded-full font-poppins"
              asChild
            >
              <a href="/products">
                View Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate mb-4 font-poppins">Serving Kamareddy for 15+ Years</h3>
              <p className="text-lg text-gray-600 font-roboto leading-relaxed">
                From small home repairs to large construction projects, we provide quality iron and cement materials 
                with the personal touch that only a local business can offer. Your success is our commitment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Brands */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate mb-4 font-poppins">Trusted Brands We Carry</h2>
            <p className="text-lg text-gray-600 font-roboto">Quality materials from India's most trusted manufacturers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                    <span className="text-white font-bold text-lg font-poppins">{brand.name.charAt(0)}</span>
                  </div>
                  <h4 className="font-semibold text-slate mb-2 font-poppins">{brand.name}</h4>
                  <p className="text-sm text-gray-600 font-roboto">{brand.tagline}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate mb-4 font-poppins">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 font-roboto">Experience the difference of working with a trusted local dealer</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate mb-4 font-poppins">{feature.title}</h3>
                  <p className="text-gray-600 font-roboto">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-poppins">What Our Customers Say</h2>
            <p className="text-lg text-white/90 font-roboto">Trusted by builders, contractors, and homeowners across Kamareddy</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ravi Kumar",
                role: "Contractor",
                comment: "Best quality cement and iron in Kamareddy. Shekar Reddy always delivers on time and at fair prices.",
                rating: 5
              },
              {
                name: "Priya Sharma",
                role: "Homeowner",
                comment: "Excellent service for my house construction. The team is very helpful and knowledgeable.",
                rating: 5
              },
              {
                name: "Mohan Reddy",
                role: "Builder",
                comment: "15 years of consistent quality and service. My go-to supplier for all construction materials.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 font-roboto italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-slate font-poppins">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 font-roboto">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Footer Preview */}
      <section className="py-12 bg-slate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4 font-poppins">Ready to Start Your Project?</h3>
              <p className="text-lg text-gray-300 mb-6 font-roboto">
                Contact us today for a quote or visit our store in Kamareddy for personalized service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-slate font-poppins"
                  asChild
                >
                  <a href="tel:+919876543210">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +91 98765 43210
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-slate font-poppins"
                  onClick={handleLocationClick}
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Visit Store
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-semibold text-accent mb-4 font-poppins">Store Location</h4>
              <p className="text-white font-roboto mb-4">
                Banswada Road, Kamareddy<br />
                Telangana, India
              </p>
              <div className="w-full h-48 bg-white/20 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors" onClick={handleLocationClick}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-6 h-6 text-slate" />
                  </div>
                  <p className="text-white font-roboto">Click to view on Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
