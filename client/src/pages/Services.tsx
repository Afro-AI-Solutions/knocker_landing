import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Code2, Database, Globe, Cpu, Layers, Smartphone, BarChart, ArrowRight, Sparkles, Heart, DollarSign, ShoppingCart, GraduationCap, Building2, Truck } from "lucide-react";
import { Link } from "wouter";
import { Card3D } from "@/components/Card3D";
import { motion } from "framer-motion";
import { InteractiveParticles } from "@/components/InteractiveParticles";
import { GridBackground } from "@/components/GridBackground";

export default function Services() {
    const [content, setContent] = useState({
        hero: {
            tagline: "Premium Services",
            heading: "Our Services",
            description: "Comprehensive technical solutions tailored to meet your unique business challenges. From concept to deployment, we handle it all."
        },
        cta: {
            title: "Not sure what you need?",
            description: "Schedule a free consultation with our experts. We'll analyze your requirements and propose the best solution for your budget.",
            buttonText: "Book Free Consultation"
        }
    });

    useEffect(() => {
        const savedContent = localStorage.getItem('servicesContent');
        if (savedContent) {
            const parsed = JSON.parse(savedContent);
            setContent({
                ...content,
                ...parsed
            });
        }
    }, []);

    const services = [
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Custom Web Development",
            description: "We build fast, responsive, and SEO-friendly websites using the latest technologies.",
            features: [
                "React, Next.js, & Vue.js Development",
                "Progressive Web Apps (PWA)",
                "E-commerce Solutions (Shopify, WooCommerce)",
                "CMS Integration (Sanity, Contentful)",
                "API Design & Integration",
                "Performance Optimization"
            ],
        },
        {
            icon: <Cpu className="h-8 w-8" />,
            title: "AI & Machine Learning",
            description: "Leverage the power of AI to automate tasks and gain valuable insights.",
            features: [
                "Custom LLM Integration (GPT-4, Claude)",
                "Chatbots & Virtual Assistants",
                "Predictive Analytics Models",
                "Natural Language Processing (NLP)",
                "Computer Vision Solutions",
                "Process Automation (RPA)"
            ],
        },
        {
            icon: <Layers className="h-8 w-8" />,
            title: "Learning Solutions",
            description: "Educational platforms and LMS tailored to your training needs.",
            features: [
                "Custom Learning Management Systems",
                "Interactive Course Content",
                "Student Progress Tracking",
                "Gamification & Engagement",
                "Certification & Badge Systems",
                "Video Streaming Integration"
            ],
        },
        {
            icon: <BarChart className="h-8 w-8" />,
            title: "Digital Marketing & SEO",
            description: "High-converting strategies to capture leads and drive sales.",
            features: [
                "Search Engine Optimization (SEO)",
                "Conversion Rate Optimization (CRO)",
                "Pay-Per-Click (PPC) Management",
                "Social Media Marketing",
                "Content Strategy & Copywriting",
                "Analytics & Reporting"
            ],
        },
        {
            icon: <Smartphone className="h-8 w-8" />,
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android.",
            features: [
                "React Native & Flutter Development",
                "iOS & Android Native Apps",
                "App Store Optimization (ASO)",
                "Mobile UI/UX Design",
                "Push Notifications",
                "Offline Functionality"
            ],
        },
        {
            icon: <Database className="h-8 w-8" />,
            title: "Cloud & DevOps",
            description: "Secure and scalable infrastructure for your applications.",
            features: [
                "AWS, Azure, & Google Cloud",
                "CI/CD Pipeline Setup",
                "Docker & Kubernetes",
                "Serverless Architecture",
                "Database Management",
                "Security Audits"
            ],
        },
        {
            icon: <Code2 className="h-8 w-8" />,
            title: "ERP Systems",
            description: "Complete enterprise resource planning solutions to streamline business processes.",
            features: [
                "Custom ERP Development",
                "Inventory Management Systems",
                "Financial Management Integration",
                "Supply Chain Optimization",
                "Business Intelligence & Reporting",
                "Multi-location Support"
            ],
        },
    ];

    const industries = [
        "Healthcare",
        "Finance & Fintech",
        "E-commerce",
        "Education",
        "Real Estate",
        "Logistics"
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Header */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
                <InteractiveParticles />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">{content.hero.tagline}</span>
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                        {content.hero.heading}
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    >
                        {content.hero.description}
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group h-full"
                            >
                                <Card className="relative flex flex-col h-full overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-500 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl hover:shadow-primary/20">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <CardHeader className="relative z-10">
                                        <motion.div 
                                            className="mb-6 p-6 rounded-3xl bg-primary/10 border border-primary/20 w-fit text-primary shadow-lg group-hover:shadow-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"
                                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            {service.icon}
                                        </motion.div>
                                        <CardTitle className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-500">
                                            {service.title}
                                        </CardTitle>
                                        <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-500">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    
                                    <CardContent className="flex-grow relative z-10">
                                        <ul className="space-y-3">
                                            {service.features.map((feature, i) => (
                                                <motion.li 
                                                    key={i} 
                                                    className="flex items-start text-muted-foreground group-hover:text-foreground transition-colors duration-500"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 + i * 0.05 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <motion.div 
                                                        className="p-1.5 rounded-full bg-primary/20 mr-3 flex-shrink-0 mt-0.5 group-hover:bg-primary transition-colors duration-500"
                                                        whileHover={{ scale: 1.2 }}
                                                    >
                                                        <Check className="h-3 w-3 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                                                    </motion.div>
                                                    <span className="text-sm leading-relaxed">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    
                                    <div className="p-6 pt-0 mt-auto relative z-10">
                                        <Link href="/contact">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Button 
                                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 py-3"
                                                >
                                                    Get a Quote
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </motion.div>
                                        </Link>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
                <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                        Industries We Serve
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-primary-foreground/80 mb-16 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Delivering excellence across diverse sectors with specialized expertise
                    </motion.p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { name: "Healthcare", icon: <Heart className="h-10 w-10" /> },
                            { name: "Finance & Fintech", icon: <DollarSign className="h-10 w-10" /> },
                            { name: "E-commerce", icon: <ShoppingCart className="h-10 w-10" /> },
                            { name: "Education", icon: <GraduationCap className="h-10 w-10" /> },
                            { name: "Real Estate", icon: <Building2 className="h-10 w-10" /> },
                            { name: "Logistics", icon: <Truck className="h-10 w-10" /> }
                        ].map((industry, i) => (
                            <motion.div
                                key={i}
                                className="group relative p-8 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all duration-500 border-2 border-gray-200 hover:border-gray-300 cursor-pointer shadow-lg"
                                whileHover={{
                                    y: -12,
                                    scale: 1.05,
                                    transition: { duration: 0.3 }
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg">{industry.icon}</div>
                                    <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">{industry.name}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-24 bg-gradient-to-b from-background to-muted/20">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                        Our Technology Stack
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground mb-12 max-w-2xl mx-auto"
                    >
                        We use the best tools in the industry to build robust solutions
                    </motion.p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {["React", "TypeScript", "Node.js", "Python", "Laravel", "PostgreSQL", "AWS", "Docker", "Next.js", "Tailwind CSS", "TensorFlow"].map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="px-6 py-3 rounded-xl bg-gradient-to-br from-muted to-muted/50 border border-border hover:border-primary/50 transition-all duration-300 cursor-default shadow-md hover:shadow-lg hover:shadow-primary/10"
                            >
                                <span className="text-lg md:text-xl font-bold text-foreground hover:text-primary transition-colors">
                                    {tech}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5"></div>
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto glass-card rounded-3xl p-12 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-2xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            {content.cta.title}
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                            {content.cta.description}
                        </p>
                        <Link href="/contact">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button 
                                    size="lg" 
                                    className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                                >
                                    {content.cta.buttonText}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
