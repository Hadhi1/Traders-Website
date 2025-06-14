
import React from 'react';
import { Building, Users, Award, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-primary" />, number: '500+', label: 'Happy Customers' },
    { icon: <Building className="w-8 h-8 text-primary" />, number: '15+', label: 'Years Experience' },
    { icon: <Award className="w-8 h-8 text-primary" />, number: '100+', label: 'Projects Completed' },
    { icon: <MapPin className="w-8 h-8 text-primary" />, number: '50+', label: 'Areas Served' },
  ];

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/dP9zeYmDFqWBtWEi7?g_st=aw', '_blank');
  };

  return (
    <Layout>
      {/* Header Banner */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-roboto">
            Building trust and delivering quality construction materials since 2009
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-4xl font-poppins">SR</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate text-center mb-4 font-poppins">Shekar Reddy</h3>
                  <p className="text-lg text-primary text-center mb-4 font-roboto">Founder & Managing Director</p>
                  <div className="bg-neutral p-4 rounded-lg">
                    <p className="text-slate font-roboto italic text-center">
                      "Proudly serving Banswada and nearby areas since 2009. Our commitment to quality and customer satisfaction has made us the most trusted name in construction materials."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate mb-6 font-poppins">Our Story</h2>
              <p className="text-lg text-gray-700 font-roboto leading-relaxed">
                What started as a small venture in 2009 has grown into one of Kamareddy's most trusted suppliers of construction materials. Shekar Reddy founded our company with a simple vision: to provide quality materials at fair prices with exceptional service.
              </p>
              <p className="text-lg text-gray-700 font-roboto leading-relaxed">
                Over the years, we've built strong relationships with leading manufacturers and have become the preferred choice for contractors, builders, and homeowners across the region. Our success is built on trust, reliability, and an unwavering commitment to quality.
              </p>
              <p className="text-lg text-gray-700 font-roboto leading-relaxed">
                Today, we continue to serve our community with the same dedication and personal touch that has been our hallmark from the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate mb-6 font-poppins">Our Mission</h2>
              <p className="text-xl text-gray-700 font-roboto leading-relaxed mb-8">
                To supply top-quality construction materials with honesty, integrity, and speed. We believe in building not just structures, but lasting relationships with our customers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-slate" />
                  </div>
                  <h3 className="font-semibold text-slate mb-2 font-poppins">Quality First</h3>
                  <p className="text-sm text-gray-600 font-roboto">Only the finest materials from trusted brands</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-slate" />
                  </div>
                  <h3 className="font-semibold text-slate mb-2 font-poppins">Timely Delivery</h3>
                  <p className="text-sm text-gray-600 font-roboto">Your project timeline is our priority</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-slate" />
                  </div>
                  <h3 className="font-semibold text-slate mb-2 font-poppins">Personal Service</h3>
                  <p className="text-sm text-gray-600 font-roboto">Building relationships, not just sales</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate mb-4 font-poppins">Our Journey in Numbers</h2>
            <p className="text-lg text-gray-600 font-roboto">A testament to our commitment and growth</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-slate mb-2 font-poppins">{stat.number}</h3>
                  <p className="text-gray-600 font-roboto">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location/Service Area */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6 font-poppins">Our Location & Service Area</h2>
              <p className="text-lg text-white/90 mb-8 font-roboto">
                Strategically located in Kamareddy, we serve a wide area including Banswada, Yellareddy, Domakonda, and surrounding villages. Our central location ensures quick delivery to your project site.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-semibold font-poppins">Main Store Address:</p>
                    <p className="text-white/90 font-roboto">Banswada Road, Kamareddy, Telangana</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-semibold font-poppins">Service Hours:</p>
                    <p className="text-white/90 font-roboto">Mon-Sat: 8:00 AM - 7:00 PM | Sun: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div 
                    className="w-full h-80 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-primary/30 hover:to-accent/30 transition-all duration-300"
                    onClick={handleLocationClick}
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate mb-2 font-poppins">View on Google Maps</h3>
                      <p className="text-gray-600 font-roboto">Click to get directions to our store</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate mb-4 font-poppins">Meet Our Team</h2>
            <p className="text-lg text-gray-600 font-roboto">Dedicated professionals committed to your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Shekar Reddy",
                role: "Founder & Managing Director",
                description: "15+ years of experience in construction materials supply"
              },
              {
                name: "Raj Kumar",
                role: "Operations Manager",
                description: "Ensures timely delivery and quality control"
              },
              {
                name: "Priya Sharma",
                role: "Customer Relations",
                description: "Your point of contact for all inquiries and support"
              }
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl font-poppins">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate mb-2 font-poppins">{member.name}</h3>
                  <p className="text-primary font-roboto font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 font-roboto">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
