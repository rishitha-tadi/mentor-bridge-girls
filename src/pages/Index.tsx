
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Brain, Award, Users, Lightbulb } from "lucide-react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: <Brain className="w-10 h-10 text-mentor" />,
      title: "AI-Powered Guidance",
      description: "Get personalized educational resource recommendations tailored to your specific needs and goals."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-mentor" />,
      title: "Curated Resources",
      description: "Access a carefully selected collection of high-quality learning materials, courses, and opportunities."
    },
    {
      icon: <Award className="w-10 h-10 text-mentor" />,
      title: "Scholarship Information",
      description: "Discover financial aid opportunities specifically available for female students across various fields."
    },
    {
      icon: <Users className="w-10 h-10 text-mentor" />,
      title: "Community Support",
      description: "Connect with mentors and peers who can help guide your educational and career journey."
    }
  ];

  const testimonials = [
    {
      quote: "The AI mentor helped me find resources I never knew existed for women in computer science. It completely changed my educational journey!",
      name: "Priya M.",
      role: "Computer Science Student"
    },
    {
      quote: "As a medical student, finding specialized resources was challenging until I discovered this platform. The personalized guidance is invaluable.",
      name: "Sarah J.",
      role: "Medical Student"
    },
    {
      quote: "The scholarship information provided by the AI mentor helped me secure funding for my engineering degree. I couldn't be more grateful!",
      name: "Emma L.",
      role: "Engineering Student"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 bg-white" id="about">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Empowering Education for All</h2>
              <p className="text-muted-foreground">
                Our platform provides female students with the guidance and resources they need to succeed in their educational journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 hover:translate-y-[-5px] transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-br from-mentor-light/20 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our AI-powered platform makes it easy to find personalized educational resources in just a few simple steps.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-mentor text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Share Your Interests</h3>
                <p className="text-muted-foreground">
                  Tell us about your educational field and specific interests.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-mentor text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Personalized Recommendations</h3>
                <p className="text-muted-foreground">
                  Our AI mentor analyzes your needs and suggests tailored resources.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-mentor text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Advance Your Learning</h3>
                <p className="text-muted-foreground">
                  Access the resources and track your educational progress.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/resources" className="mentor-button inline-flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Hear from female students who have transformed their educational journey with our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass-card p-6 flex flex-col">
                  <div className="flex-1">
                    <div className="text-4xl text-mentor/20 mb-4">"</div>
                    <p className="italic text-muted-foreground mb-6">{testimonial.quote}</p>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-mentor">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <Lightbulb className="w-12 h-12 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
              <p className="text-white/80 mb-8">
                Connect with our AI mentor today and discover the resources that will help you succeed.
              </p>
              <Link to="/resources" className="px-8 py-3 bg-white text-mentor font-semibold rounded-lg transition-all duration-300 hover:bg-opacity-90 inline-flex items-center">
                Start Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
