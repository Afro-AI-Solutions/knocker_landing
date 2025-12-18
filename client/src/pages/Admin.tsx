import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, Eye, EyeOff, Upload, CheckCircle, AlertCircle, Plus, Trash2, Copy, Download, Upload as UploadIcon, Home, Briefcase, FolderOpen, User, Phone, Settings, LogOut, MessageSquare, Clock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("home");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const { toast } = useToast();

  // Home Page Content
  const [homeContent, setHomeContent] = useState({
    hero: {
      tagline: "Revolutionizing Digital Solutions",
      heading: "We Knock. You Win.",
      description: "Empowering your business with intelligent solutions that unlock growth, automate processes, and elevate performance—effortlessly.",
      buttons: {
        primary: "Start Your Project",
        secondary: "View Our Work"
      }
    },
    stats: [
      { label: "Projects Delivered", value: "100+" },
      { label: "Happy Clients", value: "50+" },
      { label: "Team Experts", value: "25+" },
      { label: "Years Experience", value: "5+" }
    ],
    techStack: {
      title: "Powered by Modern Tech",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python", "TensorFlow", "AWS", "Docker", "Tailwind", "OpenAI"]
    },
    features: {
      title: "Why Choose Knocker AI?",
      subtitle: "We combine technical expertise with creative innovation to deliver exceptional results that drive real business value.",
      items: [
        {
          title: "Web Development",
          description: "Custom, responsive, and high-performance websites tailored to your brand using modern frameworks like React and Next.js.",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
        },
        {
          title: "AI Solutions",
          description: "Intelligent automation, predictive analytics, and custom LLM integrations to optimize your operations.",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
        },
        {
          title: "Cloud Systems",
          description: "Scalable, secure, and cost-effective cloud infrastructure design and management on AWS, Azure, or GCP.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
        },
        {
          title: "Digital Growth",
          description: "Strategic SEO, performance marketing, and conversion rate optimization to accelerate your market presence.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
        },
        {
          title: "ERP Systems",
          description: "Complete enterprise resource planning solutions to streamline your business processes and improve operational efficiency.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A glimpse into our recent success stories.",
      buttonText: "View All Projects",
      items: [
        {
          title: "AI-Powered Analytics",
          desc: "Predictive market trends for retail.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          tag: "AI & ML"
        },
        {
          title: "EduTech Platform",
          desc: "Interactive LMS with real-time video.",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
          tag: "Web Dev"
        },
        {
          title: "FinTech Wallet",
          desc: "Secure mobile digital wallet.",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
          tag: "Mobile App"
        }
      ]
    },
    process: {
      title: "DEVELOPMENT PROCESS",
      subtitle: "Agile software development methodology that delivers high-quality solutions",
      steps: [
        {
          title: "PLANNING",
          desc: "Requirements analysis, user stories, and project roadmap creation",
          hex: "0x01"
        },
        {
          title: "DESIGN",
          desc: "UI/UX design, system architecture, and database modeling",
          hex: "0x02"
        },
        {
          title: "DEVELOPMENT",
          desc: "Agile coding sprints with continuous integration and testing",
          hex: "0x03"
        },
        {
          title: "DEPLOYMENT",
          desc: "Production launch with monitoring and ongoing maintenance",
          hex: "0x04"
        }
      ]
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Real feedback from companies who trusted us with their digital transformation",
      items: [
        {
          quote: "Knocker AI transformed our outdated system into a modern, efficient platform. The AI integration saved us hours of manual work every day.",
          author: "Sarah J.",
          role: "CTO, TechFlow"
        },
        {
          quote: "The team's attention to detail and design aesthetics is unmatched. Our new landing page conversion rate doubled within a month.",
          author: "Michael R.",
          role: "Marketing Director, GrowthCo"
        },
        {
          quote: "Professional, timely, and incredibly skilled. They didn't just build what we asked for; they improved upon our initial ideas.",
          author: "Emily T.",
          role: "Founder, StartUp X"
        }
      ]
    },
    cta: {
      title: "Ready to Transform Your Business?",
      description: "Let's collaborate to build something extraordinary. Whether you need a simple website or a complex AI system, we have the expertise to help.",
      buttons: {
        primary: "Get in Touch",
        secondary: "Learn About Us"
      }
    },
    newsletter: {
      title: "Stay Ahead of the Curve",
      description: "Subscribe to our newsletter for the latest insights on AI, Tech trends, and Knocker AI updates.",
      buttonText: "Subscribe"
    }
  });

  // Services Page Content
  const [servicesContent, setServicesContent] = useState({
    hero: {
      tagline: "Premium Services",
      heading: "Our Services",
      description: "Comprehensive technical solutions tailored to meet your unique business challenges. From concept to deployment, we handle it all."
    },
    services: [
      {
        title: "Custom Web Development",
        description: "We build fast, responsive, and SEO-friendly websites using the latest technologies.",
        features: [
          "React, Next.js, & Vue.js Development",
          "Progressive Web Apps (PWA)",
          "E-commerce Solutions (Shopify, WooCommerce)",
          "CMS Integration (Sanity, Contentful)",
          "API Design & Integration",
          "Performance Optimization"
        ]
      },
      {
        title: "AI & Machine Learning",
        description: "Leverage the power of AI to automate tasks and gain valuable insights.",
        features: [
          "Custom LLM Integration (GPT-4, Claude)",
          "Chatbots & Virtual Assistants",
          "Predictive Analytics Models",
          "Natural Language Processing (NLP)",
          "Computer Vision Solutions",
          "Process Automation (RPA)"
        ]
      }
    ],
    cta: {
      title: "Not sure what you need?",
      description: "Schedule a free consultation with our experts. We'll analyze your requirements and propose the best solution for your budget.",
      buttonText: "Book Free Consultation"
    }
  });

  // Portfolio Page Content
  const [portfolioContent, setPortfolioContent] = useState({
    hero: {
      heading: "Our Portfolio",
      description: "Explore our latest projects and see how we've helped businesses transform their ideas into reality."
    },
    projects: [
      {
        title: "AI-Powered Analytics Dashboard",
        description: "A comprehensive data visualization platform that uses machine learning to predict market trends and optimize inventory management for a large retail chain.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        tags: ["React", "Python", "TensorFlow", "AWS"],
        category: "AI & ML",
        link: "#"
      },
      {
        title: "EduTech Learning Platform",
        description: "An interactive Learning Management System (LMS) with real-time video conferencing, student progress tracking, and gamified assessments.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
        tags: ["Next.js", "Node.js", "WebRTC", "PostgreSQL"],
        category: "Web Development",
        link: "#"
      }
    ],
    cta: {
      title: "Have a Project in Mind?",
      description: "We can help you build something similar or completely unique. Let's discuss your requirements.",
      buttonText: "Start Your Project"
    }
  });

  // Contact Page Content
  const [contactContent, setContactContent] = useState({
    hero: {
      heading: "Get in Touch",
      description: "Have a project in mind? We'd love to hear from you. Fill out the form below or reach out directly."
    },
    contactInfo: {
      email: "contact@knockerai.com",
      phone: "+1 (555) 123-4567",
      address: "123 Tech Avenue,\nSilicon Valley, CA 94025",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM\nSat - Sun: Closed"
    },
    faq: [
      {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application or AI integration could take 2-6 months. We provide a detailed timeline during the proposal phase."
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes! We offer various maintenance and support packages to ensure your software remains secure, up-to-date, and performs optimally after launch."
      }
    ]
  });

  // Messages state
  const [messages, setMessages] = useState([]);
  const [messageStats, setMessageStats] = useState({ total: 0, unread: 0, read: 0 });
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [activeMessageFilter, setActiveMessageFilter] = useState('all');

  const fetchMessages = async () => {
    setMessagesLoading(true);
    try {
      // Try new API first, fallback to legacy
      let response = await fetch('/api/messages');
      if (response.ok) {
        const messages = await response.json();
        setMessages(messages || []);
        const total = messages.length;
        const unread = messages.filter(m => !m.isRead).length;
        const read = messages.filter(m => m.isRead).length;
        setMessageStats({ total, unread, read });
      } else {
        // Fallback to legacy API
        response = await fetch('/api/admin/contacts');
        const data = await response.json();
        setMessages(data.messages || []);
        setMessageStats(data.stats || { total: 0, unread: 0, read: 0 });
      }
    } catch (error) {
      console.error('Failed to fetch messages:', error);
      toast({
        title: "Load failed",
        description: "Failed to load messages from server",
        variant: "destructive"
      });
    } finally {
      setMessagesLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      // Try new API first, fallback to legacy
      let response = await fetch(`/api/messages/${id}/read`, { method: 'PUT' });
      if (!response.ok) {
        // Fallback to legacy API
        response = await fetch(`/api/admin/contacts/${id}/read`, { method: 'PATCH' });
      }
      if (response.ok) {
        fetchMessages();
        toast({
          title: "Success",
          description: "Message marked as read"
        });
      } else {
        throw new Error('Failed to mark as read');
      }
    } catch (error) {
      console.error('Failed to mark as read:', error);
      toast({
        title: "Error",
        description: "Failed to mark message as read",
        variant: "destructive"
      });
    }
  };

  const getFilteredMessages = () => {
    switch (activeMessageFilter) {
      case 'unread': return messages.filter(msg => !msg.isRead);
      case 'read': return messages.filter(msg => msg.isRead);
      default: return messages;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleLogin = () => {
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  // About Page Content
  const [aboutContent, setAboutContent] = useState({
    hero: {
      heading: "About Knocker AI",
      description: "We are a team of passionate innovators, developers, and strategists dedicated to redefining the digital landscape through Artificial Intelligence and modern web technologies."
    },
    story: {
      title: "Our Story",
      paragraphs: [
        "Founded in 2023, Knocker AI began with a simple idea: that advanced technology shouldn't be accessible only to tech giants. We saw a gap in the market where small to medium-sized businesses were struggling to adopt AI and modern web standards due to complexity and cost.",
        "What started as a small consultancy has grown into a full-service digital agency. We've helped over 50 startups launch their MVPs and assisted established enterprises in modernizing their legacy systems.",
        "Today, we continue to push the boundaries of what's possible, constantly exploring new technologies like Generative AI, Edge Computing, and Web3 to give our clients a competitive edge."
      ]
    },
    mission: {
      title: "Our Mission",
      description: "To democratize access to advanced technology, enabling startups and enterprises alike to leverage AI and modern web frameworks for sustainable growth. We believe in building tools that empower humans, not replace them."
    },
    vision: {
      title: "Our Vision",
      description: "A world where technology serves as a seamless catalyst for human creativity and business efficiency. We envision a future where every business, regardless of size, has the digital infrastructure to compete on a global scale."
    },
    values: {
      title: "Our Core Values",
      subtitle: "The principles that guide every decision we make.",
      items: [
        {
          title: "Passion",
          description: "We love what we do, and it shows in our work."
        },
        {
          title: "Integrity",
          description: "We are transparent, honest, and keep our promises."
        },
        {
          title: "Innovation",
          description: "We constantly challenge the status quo."
        },
        {
          title: "Collaboration",
          description: "We work with you, not just for you."
        }
      ]
    },
    team: {
      title: "Meet the Team",
      members: [
        { name: "Team Member 1", position: "Position Title", image: "" },
        { name: "Team Member 2", position: "Position Title", image: "" },
        { name: "Team Member 3", position: "Position Title", image: "" },
        { name: "Team Member 4", position: "Position Title", image: "" }
      ]
    },
    cta: {
      title: "Join Us on Our Journey",
      description: "Whether you're a startup looking for your first MVP or an established enterprise seeking digital transformation, we're here to help.",
      buttonText: "Contact Us"
    }
  });

  // Auto-save functionality
  useEffect(() => {
    const autoSave = setTimeout(() => {
      if (hasUnsavedChanges) {
        handleSave(true);
      }
    }, 5000);
    return () => clearTimeout(autoSave);
  }, [homeContent, aboutContent, servicesContent, portfolioContent, contactContent, hasUnsavedChanges]);

  // Load content from API on mount
  useEffect(() => {
    const loadContent = async () => {
      try {
        // Try to load from API first
        const response = await fetch('/api/content');
        if (response.ok) {
          const apiContent = await response.json();
          if (apiContent.home) setHomeContent(apiContent.home);
          if (apiContent.about) setAboutContent(apiContent.about);
          if (apiContent.services) setServicesContent(apiContent.services);
          if (apiContent.portfolio) setPortfolioContent(apiContent.portfolio);
          if (apiContent.contact) setContactContent(apiContent.contact);
        } else {
          // Fallback to localStorage if API fails
          const saved = {
            home: localStorage.getItem('homeContent'),
            about: localStorage.getItem('aboutContent'),
            services: localStorage.getItem('servicesContent'),
            portfolio: localStorage.getItem('portfolioContent'),
            contact: localStorage.getItem('contactContent')
          };
          
          if (saved.home) setHomeContent(JSON.parse(saved.home));
          if (saved.about) setAboutContent(JSON.parse(saved.about));
          if (saved.services) setServicesContent(JSON.parse(saved.services));
          if (saved.portfolio) setPortfolioContent(JSON.parse(saved.portfolio));
          if (saved.contact) setContactContent(JSON.parse(saved.contact));
        }
        
        const lastSavedTime = localStorage.getItem('lastSaved');
        if (lastSavedTime) setLastSaved(new Date(lastSavedTime));
      } catch (error) {
        console.error('Failed to load content:', error);
        toast({
          title: "Load failed",
          description: "Failed to load content from server",
          variant: "destructive"
        });
      }
    };
    
    if (isAuthenticated) loadContent();
  }, [isAuthenticated]);

  // Fetch messages when messages tab is active
  useEffect(() => {
    if (isAuthenticated && activeTab === 'messages') {
      fetchMessages();
    }
  }, [isAuthenticated, activeTab]);

  const handleImageUpload = (file: File, callback: (dataUrl: string) => void) => {
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 5MB",
        variant: "destructive"
      });
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      callback(e.target?.result as string);
      setHasUnsavedChanges(true);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async (isAutoSave = false) => {
    setIsSaving(true);
    try {
      // Save to API first
      const contentToSave = {
        home: homeContent,
        about: aboutContent,
        services: servicesContent,
        portfolio: portfolioContent,
        contact: contactContent
      };
      
      const savePromises = Object.entries(contentToSave).map(async ([pageKey, content]) => {
        const response = await fetch(`/api/content/${pageKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(content)
        });
        if (!response.ok) {
          throw new Error(`Failed to save ${pageKey} content`);
        }
        return response.json();
      });
      
      await Promise.all(savePromises);
      
      // Also save to localStorage as backup
      localStorage.setItem("homeContent", JSON.stringify(homeContent));
      localStorage.setItem("aboutContent", JSON.stringify(aboutContent));
      localStorage.setItem("servicesContent", JSON.stringify(servicesContent));
      localStorage.setItem("portfolioContent", JSON.stringify(portfolioContent));
      localStorage.setItem("contactContent", JSON.stringify(contactContent));
      
      const now = new Date();
      localStorage.setItem("lastSaved", now.toISOString());
      setLastSaved(now);
      setHasUnsavedChanges(false);
      
      toast({
        title: isAutoSave ? "Auto-saved" : "Saved successfully!",
        description: isAutoSave ? "Changes saved to server and locally" : "All content has been saved to server",
      });
    } catch (error) {
      console.error('Save error:', error);
      toast({
        title: "Save failed",
        description: "Failed to save content to server. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSaving(false);
    }
  };

  const exportData = () => {
    const data = {
      homeContent,
      aboutContent,
      servicesContent,
      portfolioContent,
      contactContent,
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `knocker-content-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        if (data.homeContent) setHomeContent(data.homeContent);
        if (data.aboutContent) setAboutContent(data.aboutContent);
        if (data.servicesContent) setServicesContent(data.servicesContent);
        if (data.portfolioContent) setPortfolioContent(data.portfolioContent);
        if (data.contactContent) setContactContent(data.contactContent);
        
        setHasUnsavedChanges(true);
        toast({
          title: "Import successful",
          description: "Content imported successfully. Don't forget to save!"
        });
      } catch (error) {
        toast({
          title: "Import failed",
          description: "Invalid file format. Please select a valid JSON export file.",
          variant: "destructive"
        });
      }
    };
    reader.readAsText(file);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                  placeholder="Enter admin password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <Button onClick={handleLogin} className="w-full">Login</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const sidebarItems = [
    { id: 'home', label: 'Home Page', icon: Home },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'portfolio', label: 'Portfolio', icon: FolderOpen },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Phone },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 shadow-lg">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Settings className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Admin Panel</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Content Management</p>
              </div>
            </div>
          </div>
          
          <ScrollArea className="h-[calc(100vh-140px)]">
            <div className="p-4 space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <Button
              onClick={() => {
                setIsAuthenticated(false);
                setPassword('');
              }}
              variant="ghost"
              className="w-full justify-start text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400"
            >
              <LogOut className="h-4 w-4 mr-3" />
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  {sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
                  {hasUnsavedChanges && <Badge variant="destructive" className="text-xs">Unsaved</Badge>}
                  {isSaving && <Badge variant="secondary" className="text-xs">Saving...</Badge>}
                </h2>
                {lastSaved && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Last saved: {lastSaved.toLocaleString()}
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <Button onClick={exportData} variant="outline" size="sm" className="border-slate-300 dark:border-slate-600">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <div className="relative">
                  <Input
                    type="file"
                    accept=".json"
                    onChange={importData}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Button variant="outline" size="sm" className="border-slate-300 dark:border-slate-600">
                    <UploadIcon className="h-4 w-4 mr-2" />
                    Import
                  </Button>
                </div>
                <Button 
                  onClick={() => handleSave()} 
                  disabled={isSaving} 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg"
                >
                  {isSaving ? (
                    <AlertCircle className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  {isSaving ? "Saving..." : "Save All"}
                </Button>
              </div>
            </div>
            
            {hasUnsavedChanges && (
              <Alert className="mt-4 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
                <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <AlertDescription className="text-amber-800 dark:text-amber-200">
                  You have unsaved changes. They will be auto-saved in a few seconds, or click "Save All" to save now.
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Content Area */}
          <div className="p-6">
            <ScrollArea className="h-[calc(100vh-200px)]">
              <div className="max-w-4xl mx-auto space-y-6">

                {activeTab === 'home' && (
                  <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Tagline</Label>
                  <Input
                    value={homeContent.hero.tagline}
                    onChange={(e) => setHomeContent({ ...homeContent, hero: { ...homeContent.hero, tagline: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Heading</Label>
                  <Input
                    value={homeContent.hero.heading}
                    onChange={(e) => setHomeContent({ ...homeContent, hero: { ...homeContent.hero, heading: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={homeContent.hero.description}
                    onChange={(e) => setHomeContent({ ...homeContent, hero: { ...homeContent.hero, description: e.target.value } })}
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Primary Button</Label>
                    <Input
                      value={homeContent.hero.buttons.primary}
                      onChange={(e) => setHomeContent({ ...homeContent, hero: { ...homeContent.hero, buttons: { ...homeContent.hero.buttons, primary: e.target.value } } })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Secondary Button</Label>
                    <Input
                      value={homeContent.hero.buttons.secondary}
                      onChange={(e) => setHomeContent({ ...homeContent, hero: { ...homeContent.hero, buttons: { ...homeContent.hero.buttons, secondary: e.target.value } } })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stats Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {homeContent.stats.map((stat, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Value</Label>
                      <Input
                        value={stat.value}
                        onChange={(e) => {
                          const newStats = [...homeContent.stats];
                          newStats[index].value = e.target.value;
                          setHomeContent({ ...homeContent, stats: newStats });
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Label</Label>
                      <Input
                        value={stat.label}
                        onChange={(e) => {
                          const newStats = [...homeContent.stats];
                          newStats[index].label = e.target.value;
                          setHomeContent({ ...homeContent, stats: newStats });
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tech Stack Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={homeContent.techStack.title}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, techStack: { ...homeContent.techStack, title: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Technologies (comma separated)</Label>
                  <Textarea
                    value={homeContent.techStack.technologies.join(", ")}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, techStack: { ...homeContent.techStack, technologies: e.target.value.split(", ").map(t => t.trim()) } });
                      setHasUnsavedChanges(true);
                    }}
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Features Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={homeContent.features.title}
                    onChange={(e) => setHomeContent({ ...homeContent, features: { ...homeContent.features, title: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Subtitle</Label>
                  <Textarea
                    value={homeContent.features.subtitle}
                    onChange={(e) => setHomeContent({ ...homeContent, features: { ...homeContent.features, subtitle: e.target.value } })}
                    rows={2}
                  />
                </div>
                {homeContent.features.items.map((feature, index) => (
                  <div key={index} className="border p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold">Feature {index + 1}</h4>
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        value={feature.title}
                        onChange={(e) => {
                          const newFeatures = [...homeContent.features.items];
                          newFeatures[index].title = e.target.value;
                          setHomeContent({ ...homeContent, features: { ...homeContent.features, items: newFeatures } });
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={feature.description}
                        onChange={(e) => {
                          const newFeatures = [...homeContent.features.items];
                          newFeatures[index].description = e.target.value;
                          setHomeContent({ ...homeContent, features: { ...homeContent.features, items: newFeatures } });
                        }}
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Image</Label>
                      <div className="flex gap-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleImageUpload(file, (dataUrl) => {
                                const newFeatures = [...homeContent.features.items];
                                newFeatures[index].image = dataUrl;
                                setHomeContent({ ...homeContent, features: { ...homeContent.features, items: newFeatures } });
                              });
                            }
                          }}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const newFeatures = [...homeContent.features.items];
                            newFeatures[index].image = "";
                            setHomeContent({ ...homeContent, features: { ...homeContent.features, items: newFeatures } });
                          }}
                        >
                          Clear
                        </Button>
                      </div>
                      {feature.image && (
                        <img src={feature.image} alt="Preview" className="w-32 h-20 object-cover rounded border" />
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Projects Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={homeContent.projects.title}
                    onChange={(e) => setHomeContent({ ...homeContent, projects: { ...homeContent.projects, title: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Subtitle</Label>
                  <Textarea
                    value={homeContent.projects.subtitle}
                    onChange={(e) => setHomeContent({ ...homeContent, projects: { ...homeContent.projects, subtitle: e.target.value } })}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Button Text</Label>
                  <Input
                    value={homeContent.projects.buttonText}
                    onChange={(e) => setHomeContent({ ...homeContent, projects: { ...homeContent.projects, buttonText: e.target.value } })}
                  />
                </div>
                {homeContent.projects.items.map((project, index) => (
                  <div key={index} className="border p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold">Project {index + 1}</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label>Title</Label>
                        <Input
                          value={project.title}
                          onChange={(e) => {
                            const newProjects = [...homeContent.projects.items];
                            newProjects[index].title = e.target.value;
                            setHomeContent({ ...homeContent, projects: { ...homeContent.projects, items: newProjects } });
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Tag</Label>
                        <Input
                          value={project.tag}
                          onChange={(e) => {
                            const newProjects = [...homeContent.projects.items];
                            newProjects[index].tag = e.target.value;
                            setHomeContent({ ...homeContent, projects: { ...homeContent.projects, items: newProjects } });
                          }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={project.desc}
                        onChange={(e) => {
                          const newProjects = [...homeContent.projects.items];
                          newProjects[index].desc = e.target.value;
                          setHomeContent({ ...homeContent, projects: { ...homeContent.projects, items: newProjects } });
                        }}
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Image</Label>
                      <div className="flex gap-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleImageUpload(file, (dataUrl) => {
                                const newProjects = [...homeContent.projects.items];
                                newProjects[index].image = dataUrl;
                                setHomeContent({ ...homeContent, projects: { ...homeContent.projects, items: newProjects } });
                              });
                            }
                          }}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const newProjects = [...homeContent.projects.items];
                            newProjects[index].image = "";
                            setHomeContent({ ...homeContent, projects: { ...homeContent.projects, items: newProjects } });
                          }}
                        >
                          Clear
                        </Button>
                      </div>
                      {project.image && (
                        <img src={project.image} alt="Preview" className="w-32 h-20 object-cover rounded border" />
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Process Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={homeContent.process.title}
                    onChange={(e) => setHomeContent({ ...homeContent, process: { ...homeContent.process, title: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Subtitle</Label>
                  <Textarea
                    value={homeContent.process.subtitle}
                    onChange={(e) => setHomeContent({ ...homeContent, process: { ...homeContent.process, subtitle: e.target.value } })}
                    rows={2}
                  />
                </div>
                {homeContent.process.steps.map((step, index) => (
                  <div key={index} className="border p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold">Step {index + 1}</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label>Title</Label>
                        <Input
                          value={step.title}
                          onChange={(e) => {
                            const newSteps = [...homeContent.process.steps];
                            newSteps[index].title = e.target.value;
                            setHomeContent({ ...homeContent, process: { ...homeContent.process, steps: newSteps } });
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Hex Code</Label>
                        <Input
                          value={step.hex}
                          onChange={(e) => {
                            const newSteps = [...homeContent.process.steps];
                            newSteps[index].hex = e.target.value;
                            setHomeContent({ ...homeContent, process: { ...homeContent.process, steps: newSteps } });
                          }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={step.desc}
                        onChange={(e) => {
                          const newSteps = [...homeContent.process.steps];
                          newSteps[index].desc = e.target.value;
                          setHomeContent({ ...homeContent, process: { ...homeContent.process, steps: newSteps } });
                        }}
                        rows={2}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Testimonials Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={homeContent.testimonials.title}
                    onChange={(e) => setHomeContent({ ...homeContent, testimonials: { ...homeContent.testimonials, title: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Subtitle</Label>
                  <Textarea
                    value={homeContent.testimonials.subtitle}
                    onChange={(e) => setHomeContent({ ...homeContent, testimonials: { ...homeContent.testimonials, subtitle: e.target.value } })}
                    rows={2}
                  />
                </div>
                {homeContent.testimonials.items.map((testimonial, index) => (
                  <div key={index} className="border p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold">Testimonial {index + 1}</h4>
                    <div className="space-y-2">
                      <Label>Quote</Label>
                      <Textarea
                        value={testimonial.quote}
                        onChange={(e) => {
                          const newTestimonials = [...homeContent.testimonials.items];
                          newTestimonials[index].quote = e.target.value;
                          setHomeContent({ ...homeContent, testimonials: { ...homeContent.testimonials, items: newTestimonials } });
                        }}
                        rows={3}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label>Author</Label>
                        <Input
                          value={testimonial.author}
                          onChange={(e) => {
                            const newTestimonials = [...homeContent.testimonials.items];
                            newTestimonials[index].author = e.target.value;
                            setHomeContent({ ...homeContent, testimonials: { ...homeContent.testimonials, items: newTestimonials } });
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Role</Label>
                        <Input
                          value={testimonial.role}
                          onChange={(e) => {
                            const newTestimonials = [...homeContent.testimonials.items];
                            newTestimonials[index].role = e.target.value;
                            setHomeContent({ ...homeContent, testimonials: { ...homeContent.testimonials, items: newTestimonials } });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CTA Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={homeContent.cta.title}
                    onChange={(e) => setHomeContent({ ...homeContent, cta: { ...homeContent.cta, title: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={homeContent.cta.description}
                    onChange={(e) => setHomeContent({ ...homeContent, cta: { ...homeContent.cta, description: e.target.value } })}
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Primary Button</Label>
                    <Input
                      value={homeContent.cta.buttons.primary}
                      onChange={(e) => setHomeContent({ ...homeContent, cta: { ...homeContent.cta, buttons: { ...homeContent.cta.buttons, primary: e.target.value } } })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Secondary Button</Label>
                    <Input
                      value={homeContent.cta.buttons.secondary}
                      onChange={(e) => setHomeContent({ ...homeContent, cta: { ...homeContent.cta, buttons: { ...homeContent.cta.buttons, secondary: e.target.value } } })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Features Section</CardTitle>
                <Button
                  onClick={() => {
                    const newFeature = {
                      title: "New Feature",
                      description: "Feature description",
                      image: ""
                    };
                    setHomeContent({ ...homeContent, features: { ...homeContent.features, items: [...homeContent.features.items, newFeature] } });
                    setHasUnsavedChanges(true);
                  }}
                  size="sm"
                  variant="outline"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Feature
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={homeContent.features.title}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, features: { ...homeContent.features, title: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Subtitle</Label>
                  <Textarea
                    value={homeContent.features.subtitle}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, features: { ...homeContent.features, subtitle: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                    rows={2}
                  />
                </div>
                {homeContent.features.items.map((feature, index) => (
                  <div key={index} className="border p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Feature {index + 1}</h4>
                      <Button
                        onClick={() => {
                          const newFeatures = homeContent.features.items.filter((_, i) => i !== index);
                          setHomeContent({ ...homeContent, features: { ...homeContent.features, items: newFeatures } });
                          setHasUnsavedChanges(true);
                        }}
                        size="sm"
                        variant="destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        value={feature.title}
                        onChange={(e) => {
                          const newFeatures = [...homeContent.features.items];
                          newFeatures[index].title = e.target.value;
                          setHomeContent({ ...homeContent, features: { ...homeContent.features, items: newFeatures } });
                          setHasUnsavedChanges(true);
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={feature.description}
                        onChange={(e) => {
                          const newFeatures = [...homeContent.features.items];
                          newFeatures[index].description = e.target.value;
                          setHomeContent({ ...homeContent, features: { ...homeContent.features, items: newFeatures } });
                          setHasUnsavedChanges(true);
                        }}
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Image</Label>
                      <div className="flex gap-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleImageUpload(file, (dataUrl) => {
                                const newFeatures = [...homeContent.features.items];
                                newFeatures[index].image = dataUrl;
                                setHomeContent({ ...homeContent, features: { ...homeContent.features, items: newFeatures } });
                              });
                            }
                          }}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const newFeatures = [...homeContent.features.items];
                            newFeatures[index].image = "";
                            setHomeContent({ ...homeContent, features: { ...homeContent.features, items: newFeatures } });
                            setHasUnsavedChanges(true);
                          }}
                        >
                          Clear
                        </Button>
                      </div>
                      {feature.image && (
                        <img src={feature.image} alt="Preview" className="w-32 h-20 object-cover rounded border" />
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Projects Section</CardTitle>
                <Button
                  onClick={() => {
                    const newProject = {
                      title: "New Project",
                      desc: "Project description",
                      image: "",
                      tag: "Web Dev"
                    };
                    setHomeContent({ ...homeContent, projects: { ...homeContent.projects, items: [...homeContent.projects.items, newProject] } });
                    setHasUnsavedChanges(true);
                  }}
                  size="sm"
                  variant="outline"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Project
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={homeContent.projects.title}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, projects: { ...homeContent.projects, title: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Subtitle</Label>
                  <Textarea
                    value={homeContent.projects.subtitle}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, projects: { ...homeContent.projects, subtitle: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Button Text</Label>
                  <Input
                    value={homeContent.projects.buttonText}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, projects: { ...homeContent.projects, buttonText: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                  />
                </div>
                {homeContent.projects.items.map((project, index) => (
                  <div key={index} className="border p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Project {index + 1}</h4>
                      <Button
                        onClick={() => {
                          const newProjects = homeContent.projects.items.filter((_, i) => i !== index);
                          setHomeContent({ ...homeContent, projects: { ...homeContent.projects, items: newProjects } });
                          setHasUnsavedChanges(true);
                        }}
                        size="sm"
                        variant="destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label>Title</Label>
                        <Input
                          value={project.title}
                          onChange={(e) => {
                            const newProjects = [...homeContent.projects.items];
                            newProjects[index].title = e.target.value;
                            setHomeContent({ ...homeContent, projects: { ...homeContent.projects, items: newProjects } });
                            setHasUnsavedChanges(true);
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Tag</Label>
                        <Input
                          value={project.tag}
                          onChange={(e) => {
                            const newProjects = [...homeContent.projects.items];
                            newProjects[index].tag = e.target.value;
                            setHomeContent({ ...homeContent, projects: { ...homeContent.projects, items: newProjects } });
                            setHasUnsavedChanges(true);
                          }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={project.desc}
                        onChange={(e) => {
                          const newProjects = [...homeContent.projects.items];
                          newProjects[index].desc = e.target.value;
                          setHomeContent({ ...homeContent, projects: { ...homeContent.projects, items: newProjects } });
                          setHasUnsavedChanges(true);
                        }}
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Image</Label>
                      <div className="flex gap-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleImageUpload(file, (dataUrl) => {
                                const newProjects = [...homeContent.projects.items];
                                newProjects[index].image = dataUrl;
                                setHomeContent({ ...homeContent, projects: { ...homeContent.projects, items: newProjects } });
                              });
                            }
                          }}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const newProjects = [...homeContent.projects.items];
                            newProjects[index].image = "";
                            setHomeContent({ ...homeContent, projects: { ...homeContent.projects, items: newProjects } });
                            setHasUnsavedChanges(true);
                          }}
                        >
                          Clear
                        </Button>
                      </div>
                      {project.image && (
                        <img src={project.image} alt="Preview" className="w-32 h-20 object-cover rounded border" />
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Process Section</CardTitle>
                <Button
                  onClick={() => {
                    const newStep = {
                      title: "NEW STEP",
                      desc: "Step description",
                      hex: `0x0${homeContent.process.steps.length + 1}`
                    };
                    setHomeContent({ ...homeContent, process: { ...homeContent.process, steps: [...homeContent.process.steps, newStep] } });
                    setHasUnsavedChanges(true);
                  }}
                  size="sm"
                  variant="outline"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Step
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={homeContent.process.title}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, process: { ...homeContent.process, title: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Subtitle</Label>
                  <Textarea
                    value={homeContent.process.subtitle}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, process: { ...homeContent.process, subtitle: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                    rows={2}
                  />
                </div>
                {homeContent.process.steps.map((step, index) => (
                  <div key={index} className="border p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Step {index + 1}</h4>
                      <Button
                        onClick={() => {
                          const newSteps = homeContent.process.steps.filter((_, i) => i !== index);
                          setHomeContent({ ...homeContent, process: { ...homeContent.process, steps: newSteps } });
                          setHasUnsavedChanges(true);
                        }}
                        size="sm"
                        variant="destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label>Title</Label>
                        <Input
                          value={step.title}
                          onChange={(e) => {
                            const newSteps = [...homeContent.process.steps];
                            newSteps[index].title = e.target.value;
                            setHomeContent({ ...homeContent, process: { ...homeContent.process, steps: newSteps } });
                            setHasUnsavedChanges(true);
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Hex Code</Label>
                        <Input
                          value={step.hex}
                          onChange={(e) => {
                            const newSteps = [...homeContent.process.steps];
                            newSteps[index].hex = e.target.value;
                            setHomeContent({ ...homeContent, process: { ...homeContent.process, steps: newSteps } });
                            setHasUnsavedChanges(true);
                          }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={step.desc}
                        onChange={(e) => {
                          const newSteps = [...homeContent.process.steps];
                          newSteps[index].desc = e.target.value;
                          setHomeContent({ ...homeContent, process: { ...homeContent.process, steps: newSteps } });
                          setHasUnsavedChanges(true);
                        }}
                        rows={2}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Testimonials Section</CardTitle>
                <Button
                  onClick={() => {
                    const newTestimonial = {
                      quote: "New testimonial quote",
                      author: "Client Name",
                      role: "Position, Company"
                    };
                    setHomeContent({ ...homeContent, testimonials: { ...homeContent.testimonials, items: [...homeContent.testimonials.items, newTestimonial] } });
                    setHasUnsavedChanges(true);
                  }}
                  size="sm"
                  variant="outline"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Testimonial
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={homeContent.testimonials.title}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, testimonials: { ...homeContent.testimonials, title: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Subtitle</Label>
                  <Textarea
                    value={homeContent.testimonials.subtitle}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, testimonials: { ...homeContent.testimonials, subtitle: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                    rows={2}
                  />
                </div>
                {homeContent.testimonials.items.map((testimonial, index) => (
                  <div key={index} className="border p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Testimonial {index + 1}</h4>
                      <Button
                        onClick={() => {
                          const newTestimonials = homeContent.testimonials.items.filter((_, i) => i !== index);
                          setHomeContent({ ...homeContent, testimonials: { ...homeContent.testimonials, items: newTestimonials } });
                          setHasUnsavedChanges(true);
                        }}
                        size="sm"
                        variant="destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label>Quote</Label>
                      <Textarea
                        value={testimonial.quote}
                        onChange={(e) => {
                          const newTestimonials = [...homeContent.testimonials.items];
                          newTestimonials[index].quote = e.target.value;
                          setHomeContent({ ...homeContent, testimonials: { ...homeContent.testimonials, items: newTestimonials } });
                          setHasUnsavedChanges(true);
                        }}
                        rows={3}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label>Author</Label>
                        <Input
                          value={testimonial.author}
                          onChange={(e) => {
                            const newTestimonials = [...homeContent.testimonials.items];
                            newTestimonials[index].author = e.target.value;
                            setHomeContent({ ...homeContent, testimonials: { ...homeContent.testimonials, items: newTestimonials } });
                            setHasUnsavedChanges(true);
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Role</Label>
                        <Input
                          value={testimonial.role}
                          onChange={(e) => {
                            const newTestimonials = [...homeContent.testimonials.items];
                            newTestimonials[index].role = e.target.value;
                            setHomeContent({ ...homeContent, testimonials: { ...homeContent.testimonials, items: newTestimonials } });
                            setHasUnsavedChanges(true);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CTA Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={homeContent.cta.title}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, cta: { ...homeContent.cta, title: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={homeContent.cta.description}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, cta: { ...homeContent.cta, description: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Primary Button</Label>
                    <Input
                      value={homeContent.cta.buttons.primary}
                      onChange={(e) => {
                        setHomeContent({ ...homeContent, cta: { ...homeContent.cta, buttons: { ...homeContent.cta.buttons, primary: e.target.value } } });
                        setHasUnsavedChanges(true);
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Secondary Button</Label>
                    <Input
                      value={homeContent.cta.buttons.secondary}
                      onChange={(e) => {
                        setHomeContent({ ...homeContent, cta: { ...homeContent.cta, buttons: { ...homeContent.cta.buttons, secondary: e.target.value } } });
                        setHasUnsavedChanges(true);
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Newsletter Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={homeContent.newsletter.title}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, newsletter: { ...homeContent.newsletter, title: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={homeContent.newsletter.description}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, newsletter: { ...homeContent.newsletter, description: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Button Text</Label>
                  <Input
                    value={homeContent.newsletter.buttonText}
                    onChange={(e) => {
                      setHomeContent({ ...homeContent, newsletter: { ...homeContent.newsletter, buttonText: e.target.value } });
                      setHasUnsavedChanges(true);
                    }}
                  />
                </div>
              </CardContent>
            </Card>
                  </div>
                )}

                {activeTab === 'services' && (
                  <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Tagline</Label>
                  <Input
                    value={servicesContent.hero.tagline}
                    onChange={(e) => setServicesContent({ ...servicesContent, hero: { ...servicesContent.hero, tagline: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Heading</Label>
                  <Input
                    value={servicesContent.hero.heading}
                    onChange={(e) => setServicesContent({ ...servicesContent, hero: { ...servicesContent.hero, heading: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={servicesContent.hero.description}
                    onChange={(e) => setServicesContent({ ...servicesContent, hero: { ...servicesContent.hero, description: e.target.value } })}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Services</CardTitle>
                <Button
                  onClick={() => {
                    const newService = {
                      title: "New Service",
                      description: "Service description",
                      features: ["Feature 1", "Feature 2"]
                    };
                    setServicesContent({ ...servicesContent, services: [...servicesContent.services, newService] });
                    setHasUnsavedChanges(true);
                  }}
                  size="sm"
                  variant="outline"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Service
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {servicesContent.services.map((service, index) => (
                  <div key={index} className="border p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Service {index + 1}</h4>
                      <Button
                        onClick={() => {
                          const newServices = servicesContent.services.filter((_, i) => i !== index);
                          setServicesContent({ ...servicesContent, services: newServices });
                          setHasUnsavedChanges(true);
                        }}
                        size="sm"
                        variant="destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        value={service.title}
                        onChange={(e) => {
                          const newServices = [...servicesContent.services];
                          newServices[index].title = e.target.value;
                          setServicesContent({ ...servicesContent, services: newServices });
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={service.description}
                        onChange={(e) => {
                          const newServices = [...servicesContent.services];
                          newServices[index].description = e.target.value;
                          setServicesContent({ ...servicesContent, services: newServices });
                        }}
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Features (one per line)</Label>
                      <Textarea
                        value={service.features.join('\n')}
                        onChange={(e) => {
                          const newServices = [...servicesContent.services];
                          newServices[index].features = e.target.value.split('\n').filter(f => f.trim());
                          setServicesContent({ ...servicesContent, services: newServices });
                        }}
                        rows={4}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CTA Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={servicesContent.cta.title}
                    onChange={(e) => setServicesContent({ ...servicesContent, cta: { ...servicesContent.cta, title: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={servicesContent.cta.description}
                    onChange={(e) => setServicesContent({ ...servicesContent, cta: { ...servicesContent.cta, description: e.target.value } })}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Button Text</Label>
                  <Input
                    value={servicesContent.cta.buttonText}
                    onChange={(e) => setServicesContent({ ...servicesContent, cta: { ...servicesContent.cta, buttonText: e.target.value } })}
                  />
                </div>
              </CardContent>
            </Card>
                  </div>
                )}

                {activeTab === 'portfolio' && (
                  <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Heading</Label>
                  <Input
                    value={portfolioContent.hero.heading}
                    onChange={(e) => setPortfolioContent({ ...portfolioContent, hero: { ...portfolioContent.hero, heading: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={portfolioContent.hero.description}
                    onChange={(e) => setPortfolioContent({ ...portfolioContent, hero: { ...portfolioContent.hero, description: e.target.value } })}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Projects</CardTitle>
                <Button
                  onClick={() => {
                    const newProject = {
                      title: "New Project",
                      description: "Project description",
                      image: "",
                      tags: ["Tag1", "Tag2"],
                      category: "Web Development",
                      link: "#"
                    };
                    setPortfolioContent({ ...portfolioContent, projects: [...portfolioContent.projects, newProject] });
                    setHasUnsavedChanges(true);
                  }}
                  size="sm"
                  variant="outline"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Project
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {portfolioContent.projects.map((project, index) => (
                  <div key={index} className="border p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">Project {index + 1}</h4>
                      <Button
                        onClick={() => {
                          const newProjects = portfolioContent.projects.filter((_, i) => i !== index);
                          setPortfolioContent({ ...portfolioContent, projects: newProjects });
                          setHasUnsavedChanges(true);
                        }}
                        size="sm"
                        variant="destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label>Title</Label>
                        <Input
                          value={project.title}
                          onChange={(e) => {
                            const newProjects = [...portfolioContent.projects];
                            newProjects[index].title = e.target.value;
                            setPortfolioContent({ ...portfolioContent, projects: newProjects });
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Category</Label>
                        <Input
                          value={project.category}
                          onChange={(e) => {
                            const newProjects = [...portfolioContent.projects];
                            newProjects[index].category = e.target.value;
                            setPortfolioContent({ ...portfolioContent, projects: newProjects });
                          }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={project.description}
                        onChange={(e) => {
                          const newProjects = [...portfolioContent.projects];
                          newProjects[index].description = e.target.value;
                          setPortfolioContent({ ...portfolioContent, projects: newProjects });
                        }}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Image</Label>
                      <div className="flex gap-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleImageUpload(file, (dataUrl) => {
                                const newProjects = [...portfolioContent.projects];
                                newProjects[index].image = dataUrl;
                                setPortfolioContent({ ...portfolioContent, projects: newProjects });
                              });
                            }
                          }}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const newProjects = [...portfolioContent.projects];
                            newProjects[index].image = "";
                            setPortfolioContent({ ...portfolioContent, projects: newProjects });
                          }}
                        >
                          Clear
                        </Button>
                      </div>
                      {project.image && (
                        <img src={project.image} alt="Preview" className="w-32 h-20 object-cover rounded border" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label>Tags (comma separated)</Label>
                      <Input
                        value={project.tags.join(', ')}
                        onChange={(e) => {
                          const newProjects = [...portfolioContent.projects];
                          newProjects[index].tags = e.target.value.split(',').map(t => t.trim());
                          setPortfolioContent({ ...portfolioContent, projects: newProjects });
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Link</Label>
                      <Input
                        value={project.link}
                        onChange={(e) => {
                          const newProjects = [...portfolioContent.projects];
                          newProjects[index].link = e.target.value;
                          setPortfolioContent({ ...portfolioContent, projects: newProjects });
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CTA Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={portfolioContent.cta.title}
                    onChange={(e) => setPortfolioContent({ ...portfolioContent, cta: { ...portfolioContent.cta, title: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={portfolioContent.cta.description}
                    onChange={(e) => setPortfolioContent({ ...portfolioContent, cta: { ...portfolioContent.cta, description: e.target.value } })}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Button Text</Label>
                  <Input
                    value={portfolioContent.cta.buttonText}
                    onChange={(e) => setPortfolioContent({ ...portfolioContent, cta: { ...portfolioContent.cta, buttonText: e.target.value } })}
                  />
                </div>
              </CardContent>
            </Card>
                  </div>
                )}

                {activeTab === 'about' && (
                  <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Heading</Label>
                  <Input
                    value={aboutContent.hero.heading}
                    onChange={(e) => setAboutContent({ ...aboutContent, hero: { ...aboutContent.hero, heading: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={aboutContent.hero.description}
                    onChange={(e) => setAboutContent({ ...aboutContent, hero: { ...aboutContent.hero, description: e.target.value } })}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Story Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={aboutContent.story.title}
                    onChange={(e) => setAboutContent({ ...aboutContent, story: { ...aboutContent.story, title: e.target.value } })}
                  />
                </div>
                {aboutContent.story.paragraphs.map((paragraph, index) => (
                  <div key={index} className="space-y-2">
                    <Label>Paragraph {index + 1}</Label>
                    <Textarea
                      value={paragraph}
                      onChange={(e) => {
                        const newParagraphs = [...aboutContent.story.paragraphs];
                        newParagraphs[index] = e.target.value;
                        setAboutContent({ ...aboutContent, story: { ...aboutContent.story, paragraphs: newParagraphs } });
                      }}
                      rows={3}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mission & Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Mission Title</Label>
                  <Input
                    value={aboutContent.mission.title}
                    onChange={(e) => setAboutContent({ ...aboutContent, mission: { ...aboutContent.mission, title: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Mission Description</Label>
                  <Textarea
                    value={aboutContent.mission.description}
                    onChange={(e) => setAboutContent({ ...aboutContent, mission: { ...aboutContent.mission, description: e.target.value } })}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Vision Title</Label>
                  <Input
                    value={aboutContent.vision.title}
                    onChange={(e) => setAboutContent({ ...aboutContent, vision: { ...aboutContent.vision, title: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Vision Description</Label>
                  <Textarea
                    value={aboutContent.vision.description}
                    onChange={(e) => setAboutContent({ ...aboutContent, vision: { ...aboutContent.vision, description: e.target.value } })}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Values Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={aboutContent.values.title}
                    onChange={(e) => setAboutContent({ ...aboutContent, values: { ...aboutContent.values, title: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Subtitle</Label>
                  <Input
                    value={aboutContent.values.subtitle}
                    onChange={(e) => setAboutContent({ ...aboutContent, values: { ...aboutContent.values, subtitle: e.target.value } })}
                  />
                </div>
                {aboutContent.values.items.map((value, index) => (
                  <div key={index} className="border p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold">Value {index + 1}</h4>
                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        value={value.title}
                        onChange={(e) => {
                          const newValues = [...aboutContent.values.items];
                          newValues[index].title = e.target.value;
                          setAboutContent({ ...aboutContent, values: { ...aboutContent.values, items: newValues } });
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={value.description}
                        onChange={(e) => {
                          const newValues = [...aboutContent.values.items];
                          newValues[index].description = e.target.value;
                          setAboutContent({ ...aboutContent, values: { ...aboutContent.values, items: newValues } });
                        }}
                        rows={2}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={aboutContent.team.title}
                    onChange={(e) => setAboutContent({ ...aboutContent, team: { ...aboutContent.team, title: e.target.value } })}
                  />
                </div>
                {aboutContent.team.members.map((member, index) => (
                  <div key={index} className="border p-4 rounded-lg space-y-3">
                    <h4 className="font-semibold">Team Member {index + 1}</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label>Name</Label>
                        <Input
                          value={member.name}
                          onChange={(e) => {
                            const newMembers = [...aboutContent.team.members];
                            newMembers[index].name = e.target.value;
                            setAboutContent({ ...aboutContent, team: { ...aboutContent.team, members: newMembers } });
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Position</Label>
                        <Input
                          value={member.position}
                          onChange={(e) => {
                            const newMembers = [...aboutContent.team.members];
                            newMembers[index].position = e.target.value;
                            setAboutContent({ ...aboutContent, team: { ...aboutContent.team, members: newMembers } });
                          }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Image</Label>
                      <div className="flex gap-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleImageUpload(file, (dataUrl) => {
                                const newMembers = [...aboutContent.team.members];
                                newMembers[index].image = dataUrl;
                                setAboutContent({ ...aboutContent, team: { ...aboutContent.team, members: newMembers } });
                              });
                            }
                          }}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            const newMembers = [...aboutContent.team.members];
                            newMembers[index].image = "";
                            setAboutContent({ ...aboutContent, team: { ...aboutContent.team, members: newMembers } });
                          }}
                        >
                          Clear
                        </Button>
                      </div>
                      {member.image && (
                        <img src={member.image} alt="Preview" className="w-32 h-20 object-cover rounded border" />
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CTA Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={aboutContent.cta.title}
                    onChange={(e) => setAboutContent({ ...aboutContent, cta: { ...aboutContent.cta, title: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={aboutContent.cta.description}
                    onChange={(e) => setAboutContent({ ...aboutContent, cta: { ...aboutContent.cta, description: e.target.value } })}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Button Text</Label>
                  <Input
                    value={aboutContent.cta.buttonText}
                    onChange={(e) => setAboutContent({ ...aboutContent, cta: { ...aboutContent.cta, buttonText: e.target.value } })}
                  />
                </div>
              </CardContent>
            </Card>
                  </div>
                )}

                {activeTab === 'contact' && (
                  <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Heading</Label>
                  <Input
                    value={contactContent.hero.heading}
                    onChange={(e) => setContactContent({ ...contactContent, hero: { ...contactContent.hero, heading: e.target.value } })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={contactContent.hero.description}
                    onChange={(e) => setContactContent({ ...contactContent, hero: { ...contactContent.hero, description: e.target.value } })}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      value={contactContent.contactInfo.email}
                      onChange={(e) => setContactContent({ ...contactContent, contactInfo: { ...contactContent.contactInfo, email: e.target.value } })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <Input
                      value={contactContent.contactInfo.phone}
                      onChange={(e) => setContactContent({ ...contactContent, contactInfo: { ...contactContent.contactInfo, phone: e.target.value } })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Address</Label>
                  <Textarea
                    value={contactContent.contactInfo.address}
                    onChange={(e) => setContactContent({ ...contactContent, contactInfo: { ...contactContent.contactInfo, address: e.target.value } })}
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Business Hours</Label>
                  <Textarea
                    value={contactContent.contactInfo.hours}
                    onChange={(e) => setContactContent({ ...contactContent, contactInfo: { ...contactContent.contactInfo, hours: e.target.value } })}
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>FAQ Section</CardTitle>
                <Button
                  onClick={() => {
                    const newFaq = {
                      question: "New Question?",
                      answer: "Answer to the question."
                    };
                    setContactContent({ ...contactContent, faq: [...contactContent.faq, newFaq] });
                    setHasUnsavedChanges(true);
                  }}
                  size="sm"
                  variant="outline"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add FAQ
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactContent.faq.map((faq, index) => (
                  <div key={index} className="border p-4 rounded-lg space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">FAQ {index + 1}</h4>
                      <Button
                        onClick={() => {
                          const newFaq = contactContent.faq.filter((_, i) => i !== index);
                          setContactContent({ ...contactContent, faq: newFaq });
                          setHasUnsavedChanges(true);
                        }}
                        size="sm"
                        variant="destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label>Question</Label>
                      <Input
                        value={faq.question}
                        onChange={(e) => {
                          const newFaq = [...contactContent.faq];
                          newFaq[index].question = e.target.value;
                          setContactContent({ ...contactContent, faq: newFaq });
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Answer</Label>
                      <Textarea
                        value={faq.answer}
                        onChange={(e) => {
                          const newFaq = [...contactContent.faq];
                          newFaq[index].answer = e.target.value;
                          setContactContent({ ...contactContent, faq: newFaq });
                        }}
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
                  </div>
                )}

                {activeTab === 'messages' && (
                  <div className="space-y-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
                          <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{messageStats.total}</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-orange-600">{messageStats.unread}</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Read Messages</CardTitle>
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-green-600">{messageStats.read}</div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Filter Buttons */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Message Filters</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button
                            variant={activeMessageFilter === 'all' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setActiveMessageFilter('all')}
                          >
                            All ({messageStats.total})
                          </Button>
                          <Button
                            variant={activeMessageFilter === 'unread' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setActiveMessageFilter('unread')}
                          >
                            Unread ({messageStats.unread})
                          </Button>
                          <Button
                            variant={activeMessageFilter === 'read' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setActiveMessageFilter('read')}
                          >
                            Read ({messageStats.read})
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={fetchMessages}
                            disabled={messagesLoading}
                          >
                            {messagesLoading ? 'Loading...' : 'Refresh'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Messages List */}
                    <div className="space-y-4">
                      {messagesLoading ? (
                        <Card>
                          <CardContent className="text-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                            <p className="mt-2 text-muted-foreground">Loading messages...</p>
                          </CardContent>
                        </Card>
                      ) : getFilteredMessages().length === 0 ? (
                        <Card>
                          <CardContent className="text-center py-8">
                            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground">
                              {activeMessageFilter === 'all' ? 'No messages yet' : 
                               activeMessageFilter === 'unread' ? 'No unread messages' : 'No read messages'}
                            </p>
                          </CardContent>
                        </Card>
                      ) : (
                        getFilteredMessages().map((message) => (
                          <Card key={message.id} className={`${!message.isRead ? 'border-orange-200 bg-orange-50/50' : ''} hover:shadow-lg transition-all duration-300`}>
                            <CardHeader>
                              <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <Badge variant={message.isRead ? "secondary" : "destructive"}>
                                      {message.isRead ? "Read" : "Unread"}
                                    </Badge>
                                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {formatDate(message.createdAt)}
                                    </span>
                                  </div>
                                  <CardTitle className="text-lg">{message.subject}</CardTitle>
                                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <User className="h-3 w-3" />
                                      {message.name}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Mail className="h-3 w-3" />
                                      {message.email}
                                    </span>
                                  </div>
                                </div>
                                {!message.isRead && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => markAsRead(message.id)}
                                    className="flex items-center gap-1"
                                  >
                                    <Eye className="h-3 w-3" />
                                    Mark as Read
                                  </Button>
                                )}
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <p className="whitespace-pre-wrap">{message.message}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}