
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-mentor-light/20 to-white"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0Q0FGNTAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0xN2g0djFoLTR2LTF6TTE2IDM0aDR2MWgtNHYtMXptMC0xN2g0djFoLTR2LTF6TTQgNGgxdjFINFY0em0wIDE3aDEydjFINHYtMXptMCAxN2gxMnYxSDR2LTF6TTM2IDRoMXYxaC0xVjR6bTExIDBoMXYxaC0xVjR6TTM2IDIyaDEydjFIMzZ2LTF6bTAgMTdoMTJ2MUgzNnYtMXpNNDcgNGgxdjFoLTFWNHptMTEgMGgxdjFoLTFWNHptLTExIDE3aDEydjFINDd2LTF6bTAgMTdoMTJ2MUg0N3YtMXpNNTggNGgxdjFoLTFWNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-mentor/5 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-mentor/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
                Pathway To{" "}
                <span className="text-mentor-dark">Equality</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Empowering female students with personalized guidance and resources
                to help them achieve their educational and career goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Link to="/resources" className="mentor-button flex items-center justify-center gap-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#about" 
                className="px-6 py-3 border border-mentor text-mentor font-semibold rounded-lg transition-all duration-300 hover:bg-mentor/10 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Learn More</span>
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none animate-fade-in-slow">
            <div className="glass-panel p-8 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-mentor/20 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-mentor/10 rounded-full"></div>
              
              <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Women in education" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Meet Your AI Mentor</h3>
              <p className="text-muted-foreground mb-6">
                Personalized guidance and educational resources tailored to your specific needs and goals.
              </p>
              
              <div className="bg-white/70 rounded-lg p-4 border border-mentor/20 mb-6">
                <p className="italic text-muted-foreground">
                  "I'm here to guide you through educational resources specific to your field of interest."
                </p>
              </div>
              
              <Link to="/resources" className="mentor-button w-full flex items-center justify-center">
                Start Conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
