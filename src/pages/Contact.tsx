
import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/dP9zeYmDFqWBtWEi7?g_st=aw', '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your iron and cement products. Can you help me?");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-roboto">
            Get in touch with us for all your construction material needs
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate mb-6 font-poppins">Get in Touch</h2>
                <p className="text-lg text-gray-600 font-roboto mb-8">
                  We're here to help you with all your construction material needs. 
                  Contact us today for competitive pricing and expert advice.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate font-poppins">Phone</h3>
                        <a href="tel:+919876543210" className="text-gray-600 hover:text-primary transition-colors font-roboto">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleLocationClick}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate font-poppins">Address</h3>
                        <p className="text-gray-600 font-roboto">
                          Banswada Road, Kamareddy<br />
                          Telangana, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate font-poppins">Email</h3>
                        <a href="mailto:info@shekarreddycement.com" className="text-gray-600 hover:text-primary transition-colors font-roboto">
                          info@shekarreddycement.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate font-poppins">Business Hours</h3>
                        <p className="text-gray-600 font-roboto">
                          Mon - Sat: 8:00 AM - 7:00 PM<br />
                          Sunday: 9:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-green-500 hover:bg-green-600 text-white font-poppins"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </Button>
                <Button
                  className="bg-coral hover:bg-coral/90 text-white font-poppins"
                  asChild
                >
                  <a href="tel:+919876543210">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate mb-6 font-poppins">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-slate font-poppins">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-slate font-poppins">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-slate font-poppins">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-slate font-poppins">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-slate font-poppins">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-poppins"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate mb-4 font-poppins">Find Our Store</h2>
            <p className="text-lg text-gray-600 font-roboto">Visit us at our location in Kamareddy</p>
          </div>
          
          <Card className="overflow-hidden shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div 
                className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-primary/30 hover:to-accent/30 transition-all duration-300"
                onClick={handleLocationClick}
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate mb-4 font-poppins">Click to Open Google Maps</h3>
                  <p className="text-gray-600 font-roboto">Get directions to our store</p>
                  <div className="mt-4">
                    <Button
                      className="bg-primary hover:bg-primary/90 text-white font-poppins"
                      onClick={handleLocationClick}
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate mb-4 font-poppins">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 font-roboto">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Do you offer delivery services?",
                answer: "Yes, we provide delivery services across Kamareddy and surrounding areas. Delivery charges vary based on distance and quantity."
              },
              {
                question: "What brands do you carry?",
                answer: "We stock premium brands including ACC, Ambuja, UltraTech, JSW Steel, Tata Steel, and many other trusted manufacturers."
              },
              {
                question: "Can I get a bulk discount?",
                answer: "Yes, we offer competitive pricing for bulk orders. Contact us with your requirements for a customized quote."
              },
              {
                question: "Do you provide technical support?",
                answer: "Absolutely! Our experienced team can help you choose the right materials for your specific construction needs."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate mb-3 font-poppins">{faq.question}</h3>
                      <p className="text-gray-600 font-roboto">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
