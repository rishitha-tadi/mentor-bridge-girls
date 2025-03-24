
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="py-12 bg-gradient-to-br from-mentor-light/20 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="flex flex-col justify-center">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                      <p className="text-muted-foreground mb-8">
                        We're here to help and answer any questions you might have. 
                        We look forward to hearing from you.
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-mentor/10 p-3 rounded-full">
                          <Mail className="w-6 h-6 text-mentor" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <a href="mailto:seepanajyothirmai60@gmail.com" className="social-link">
                            seepanajyothirmai60@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-mentor/10 p-3 rounded-full">
                          <Linkedin className="w-6 h-6 text-mentor" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">LinkedIn</h3>
                          <a 
                            href="https://www.linkedin.com/in/jyothirmai-seepana-0b57192b8" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link"
                          >
                            Jyothirmai Seepana
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="bg-mentor/10 p-3 rounded-full">
                          <MapPin className="w-6 h-6 text-mentor" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Creator</h3>
                          <p className="text-muted-foreground">
                            Seepana Jyothirmai
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
