
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIMentorChat from "@/components/AIMentorChat";
import { BookOpen, Search, ArrowRight, GraduationCap, Code, Microscope, Briefcase, Brush, Calculator } from "lucide-react";

const Resources = () => {
  const [specification, setSpecification] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const fields = [
    { name: "Computer Science & IT", icon: <Code className="w-5 h-5" /> },
    { name: "Medicine & Healthcare", icon: <Microscope className="w-5 h-5" /> },
    { name: "Business & Economics", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Arts & Design", icon: <Brush className="w-5 h-5" /> },
    { name: "Science & Engineering", icon: <Calculator className="w-5 h-5" /> },
    { name: "Other", icon: <BookOpen className="w-5 h-5" /> },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (specification.trim() !== "") {
      setHasSubmitted(true);
    }
  };

  const handleFieldSelect = (field: string) => {
    if (field === "Other") {
      setActiveField(field);
      return;
    }
    
    setSpecification(field);
    setActiveField(field);
    setHasSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="py-12 bg-gradient-to-br from-mentor-light/20 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <GraduationCap className="w-16 h-16 text-mentor mx-auto mb-4" />
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Educational Resources</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Tell us your educational interests, and our AI mentor will provide personalized resources and guidance.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              {!hasSubmitted ? (
                <div className="glass-panel p-8 animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6 text-center">What field are you interested in?</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {fields.map((field) => (
                      <button
                        key={field.name}
                        onClick={() => handleFieldSelect(field.name)}
                        className={`p-4 rounded-xl border transition-all flex items-center space-x-3 hover:border-mentor hover:bg-mentor/5 ${
                          activeField === field.name
                            ? "border-mentor bg-mentor/10"
                            : "border-gray-200"
                        }`}
                      >
                        <div className="w-10 h-10 rounded-full bg-mentor/10 flex items-center justify-center">
                          {field.icon}
                        </div>
                        <span className="font-medium">{field.name}</span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                      <label htmlFor="specification" className="block text-sm font-medium mb-2 flex items-center justify-center">
                        <Search className="w-4 h-4 mr-2 text-mentor" />
                        Or specify your field of interest
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          id="specification"
                          value={specification}
                          onChange={(e) => setSpecification(e.target.value)}
                          placeholder="e.g., Quantum Computing, Neuroscience, Digital Marketing..."
                          className="form-input rounded-r-none flex-1"
                        />
                        <button
                          type="submit"
                          className="mentor-button rounded-l-none px-4 flex items-center"
                          disabled={!specification.trim()}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="space-y-8 animate-fade-in">
                  <div className="glass-panel p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-5 h-5 text-mentor" />
                        <h2 className="text-xl font-semibold">Your Selected Field: <span className="text-mentor">{specification}</span></h2>
                      </div>
                      <button
                        onClick={() => setHasSubmitted(false)}
                        className="text-sm text-mentor hover:text-mentor-dark flex items-center"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                  
                  <AIMentorChat specification={specification} />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
