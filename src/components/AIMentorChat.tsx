
import React, { useState, useRef, useEffect } from "react";
import { Send, Loader2, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface AIMentorChatProps {
  specification?: string;
}

const AIMentorChat: React.FC<AIMentorChatProps> = ({ specification }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initial greeting based on specification
  useEffect(() => {
    if (specification) {
      const initialMessage = getInitialMessage(specification);
      setMessages([
        {
          id: 1,
          text: initialMessage,
          sender: "ai",
          timestamp: new Date(),
        },
      ]);
    } else {
      setMessages([
        {
          id: 1,
          text: "Hello! I'm your AI educational mentor. I can help guide you through educational resources and opportunities. What's your area of interest?",
          sender: "ai",
          timestamp: new Date(),
        },
      ]);
    }
  }, [specification]);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getInitialMessage = (spec: string) => {
    // Customize this function to generate appropriate responses for different specifications
    const field = spec.toLowerCase();
    
    if (field.includes("computer") || field.includes("tech") || field.includes("it") || field.includes("software")) {
      return `Welcome to your personalized resource guide for ${spec}! I'll help you navigate the world of technology education from beginner to advanced levels. Let's start with some foundational resources and then explore specialized learning paths. What specific area of ${spec} interests you most?`;
    } 
    else if (field.includes("medicine") || field.includes("health") || field.includes("nursing")) {
      return `Welcome to your personalized resource guide for ${spec}! The healthcare field offers many rewarding paths. I can help you find resources from pre-med preparation to specialized medical fields. What specific area of ${spec} would you like to explore first?`;
    }
    else if (field.includes("business") || field.includes("management") || field.includes("economics")) {
      return `Welcome to your personalized resource guide for ${spec}! Whether you're interested in entrepreneurship, management, or economics, I can help you find the right resources. What specific business topic would you like to start with?`;
    }
    else if (field.includes("art") || field.includes("design") || field.includes("creative")) {
      return `Welcome to your personalized resource guide for ${spec}! The creative fields offer many paths for expression and career growth. What specific area of ${spec} are you most passionate about?`;
    }
    else if (field.includes("science") || field.includes("biology") || field.includes("chemistry") || field.includes("physics")) {
      return `Welcome to your personalized resource guide for ${spec}! Scientific education offers fascinating exploration and discovery. Would you like to start with foundational resources or more advanced material in ${spec}?`;
    }
    else {
      return `Welcome to your personalized resource guide for ${spec}! I'll help you find the best educational resources and opportunities in this field. What specific aspects of ${spec} are you most interested in learning about?`;
    }
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(input, specification || "");
      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string, spec: string) => {
    const input = userInput.toLowerCase();
    const field = spec.toLowerCase();
    
    // Very basic response generation - would be replaced with actual AI in a real implementation
    if (input.includes("course") || input.includes("class") || input.includes("learn")) {
      if (field.includes("computer") || field.includes("tech")) {
        return "For technology education, I recommend these resources:\n\n1. Coursera - offers courses from top universities like Stanford and MIT on programming, AI, and more.\n2. edX - features computer science courses from Harvard, Berkeley, and others.\n3. freeCodeCamp - completely free platform for learning web development.\n4. Codecademy - interactive coding lessons.\n5. LeetCode - for practicing programming interview questions.\n\nWould you like more specific resources for a particular technology topic?";
      } else if (field.includes("medicine") || field.includes("health")) {
        return "For medical education, here are excellent resources:\n\n1. Khan Academy - MCAT preparation and basic medical sciences.\n2. Coursera's Medical School Prerequisite courses.\n3. edX's Healthcare courses from Harvard, MIT, and more.\n4. Osmosis - medical education platform with videos and flashcards.\n5. MedlinePlus - reliable health information from the National Library of Medicine.\n\nDo you want to focus on a particular area of healthcare?";
      } else {
        return "Here are some general educational platforms with courses in various fields:\n\n1. Coursera - offers courses from top universities worldwide.\n2. edX - features courses from institutions like Harvard and MIT.\n3. Khan Academy - free resources across many subjects.\n4. Udemy - wide variety of affordable courses.\n5. YouTube Educational channels - free video content on almost any topic.\n\nWould you like me to recommend specific courses for your field?";
      }
    } else if (input.includes("book") || input.includes("read")) {
      return "Reading is a wonderful way to expand your knowledge! Here are some recommended books and reading resources for students:\n\n1. Google Scholar - search for academic papers.\n2. JSTOR - digital library of academic journals and books.\n3. Open Library - free access to millions of books.\n4. Project Gutenberg - over 60,000 free eBooks.\n5. Your university library likely has digital resources accessible to students.\n\nAre you looking for textbooks or more general reading materials?";
    } else if (input.includes("scholarship") || input.includes("fund") || input.includes("financial")) {
      return "Funding your education is important! Here are scholarship resources specifically for female students:\n\n1. The Women's Colleges Coalition scholarships.\n2. Society of Women Engineers (SWE) scholarships.\n3. American Association of University Women (AAUW) grants.\n4. Scholarships.com - search for women-specific opportunities.\n5. Fastweb - scholarship search engine.\n6. Federal Student Aid (FAFSA) - government financial aid.\n\nWould you like help applying for any specific scholarships?";
    } else if (input.includes("internship") || input.includes("job") || input.includes("career")) {
      return "Building your career through internships and job opportunities is crucial. Here are some resources:\n\n1. LinkedIn - professional networking and job listings.\n2. Indeed - job search engine.\n3. Handshake - connect with employers through your university.\n4. Internships.com - search for internships in your field.\n5. Girls Who Code - opportunities for women in tech.\n6. Women in Technology International (WITI) - networking and career resources.\n\nWould you like tips on creating a strong resume or preparing for interviews?";
    } else if (input.includes("thank") || input.includes("helpful")) {
      return "You're very welcome! I'm here to support your educational journey. Feel free to ask about any resources you need or for guidance on your academic path. Remember, this is just the beginning of what's available - the educational landscape is vast and full of opportunities for you!";
    } else {
      return "That's a great question about " + field + ". Let me suggest some starting points for your learning journey:\n\n1. Check your university's learning management system for course materials.\n2. Academic databases like JSTOR and Google Scholar for research papers.\n3. Professional organizations in your field often have student memberships with resources.\n4. Look for online communities, forums, and social media groups related to " + field + ".\n\nCan you tell me more specifically what you're hoping to learn?";
    }
  };

  return (
    <div className="glass-panel flex flex-col h-[600px] max-h-[80vh]">
      <div className="bg-mentor p-4 rounded-t-2xl">
        <h2 className="text-white font-semibold text-lg flex items-center">
          <Bot className="mr-2 h-5 w-5" />
          AI Educational Mentor
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                message.sender === "user"
                  ? "bg-mentor/90 text-white"
                  : "bg-white border border-mentor/20"
              }`}
            >
              <div className="flex items-center mb-1">
                {message.sender === "ai" ? (
                  <Bot className="h-4 w-4 mr-1" />
                ) : (
                  <User className="h-4 w-4 mr-1" />
                )}
                <span className="text-xs opacity-70">
                  {message.sender === "ai" ? "AI Mentor" : "You"}
                </span>
              </div>
              <div className="whitespace-pre-line">{message.text}</div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-mentor/20 rounded-2xl p-3 max-w-[80%]">
              <div className="flex items-center space-x-2">
                <Bot className="h-4 w-4" />
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-mentor/60 animate-bounce"></div>
                  <div className="h-2 w-2 rounded-full bg-mentor/60 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="h-2 w-2 rounded-full bg-mentor/60 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask about educational resources..."
            className="flex-1 form-input"
            disabled={isTyping}
          />
          <button
            onClick={handleSendMessage}
            disabled={isTyping || !input.trim()}
            className="bg-mentor p-3 rounded-lg text-white transition-colors hover:bg-mentor-dark disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isTyping ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIMentorChat;
