import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Brain, Cloud, Rocket, CheckCircle2, Users, Zap, Trophy } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { Card3D } from "@/components/Card3D";
import { GlitchText } from "@/components/GlitchText";
import { HolographicCard } from "@/components/HolographicCard";
import { NeonButton } from "@/components/NeonButton";
import { InteractiveParticles } from "@/components/InteractiveParticles";

export default function Home() {
    const [content, setContent] = useState({
        hero: {
            tagline: "Revolutionizing Digital Solutions",
            heading: "We Knock. You Win.",
            description: "Empowering your business with intelligent solutions that unlock growth, automate processes, and elevate performance—effortlessly.",
            image: "",
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

    useEffect(() => {
        const savedContent = localStorage.getItem('homeContent');
        if (savedContent) {
            const parsed = JSON.parse(savedContent);
            setContent({
                ...content,
                ...parsed,
                hero: {
                    ...content.hero,
                    ...parsed.hero
                }
            });
        }
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-36 overflow-hidden flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
                <InteractiveParticles />
                <GridBackground />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 text-sm font-medium text-muted-foreground uppercase tracking-wider"
                    >
                        {content.hero.tagline}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1] text-center"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                        <span className="text-primary">
                            <GlitchText glitchIntensity="medium">
                                {content.hero.heading}
                            </GlitchText>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed text-center"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        {content.hero.description}
                    </motion.p>

                    {content.hero.image && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mb-12 max-w-2xl mx-auto"
                        >
                            <img 
                                src={content.hero.image} 
                                alt="Hero"
                                className="w-full h-auto rounded-2xl shadow-2xl border border-primary/20"
                            />
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex justify-center items-center"
                    >
                        <Link href="/contact">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <NeonButton variant="cyan">
                                    {content.hero.buttons?.primary || "Start Your Project"} <ArrowRight className="ml-2 h-5 w-5 inline" />
                                </NeonButton>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Marquee */}
            <section className="py-10 border-y border-border/40 bg-muted/5 overflow-hidden">
                <div className="container mx-auto px-4 mb-6 text-center">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{content.techStack.title}</p>
                </div>
                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                        {content.techStack.technologies.map((tech, i) => (
                            <span key={i} className="text-2xl font-bold text-muted-foreground/50 mx-4">{tech}</span>
                        ))}
                        {content.techStack.technologies.map((tech, i) => (
                            <span key={`dup-${i}`} className="text-2xl font-bold text-muted-foreground/50 mx-4">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 border-y border-border/30 bg-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {content.stats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card p-6 rounded-2xl hover-lift group"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>{stat.value}</div>
                                <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{content.features.title}</h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
                            {content.features.subtitle}
                        </p>
                    </motion.div>

                    <div className="space-y-24">
                        {content.features.items.map((feature, index) => {
                            const icons = [<Code className="h-12 w-12" />, <Brain className="h-12 w-12" />, <Cloud className="h-12 w-12" />, <Rocket className="h-12 w-12" />, <CheckCircle2 className="h-12 w-12" />];
                            return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 glass-card p-8 rounded-3xl hover-lift border border-border/50 hover:border-primary/30 transition-all duration-500 group relative">
                                    <div className="mb-6 p-4 rounded-2xl bg-primary w-fit text-white group-hover:scale-110 transition-transform duration-300">
                                        {icons[index] || <Code className="h-12 w-12" />}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{feature.title}</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{feature.description}</p>
                                </div>
                                
                                <div className="flex-1 flex justify-center relative">
                                    <div className="w-80 h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-primary/20 hover:border-primary/40">
                                        <img 
                                            src={feature.image} 
                                            alt={feature.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )})}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-24 bg-gradient-to-b from-muted/10 to-background">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>{content.projects.title}</h2>
                            <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed">
                                {content.projects.subtitle}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/portfolio">
                                <Button variant="outline" className="hidden md:flex hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/30 hover:border-primary">
                                    {content.projects.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {content.projects.items.map((project, i) => (
                            <Link key={i} href="/portfolio">
                                <motion.div
                                    className="group cursor-pointer"
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <div className="relative h-64 rounded-xl overflow-hidden mb-4 shadow-3d-md hover:shadow-3d-lg transition-shadow">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md text-xs font-medium">
                                                {project.tag}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground">{project.desc}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 relative overflow-hidden bg-white">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <motion.h2 
                            className="text-6xl md:text-8xl font-bold text-primary relative z-10 mb-8"
                            style={{ fontFamily: 'Orbitron, sans-serif' }}
                        >
                            {content.process.title}
                        </motion.h2>
                        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                            {content.process.subtitle}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.process.steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.4, duration: 1 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="relative bg-background/80 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 group-hover:border-primary/60 transition-all duration-500">
                                    <div className="absolute -top-6 right-4 z-30">
                                        <span className="text-xs font-mono text-primary bg-background px-2 py-1 rounded border border-primary/30">
                                            {step.hex}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-muted/20 to-background">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{content.testimonials.title}</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            {content.testimonials.subtitle}
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {content.testimonials.items.map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group"
                            >
                                <Card className="h-full glass-card border-2 border-border/50 hover:border-primary/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 relative overflow-hidden">
                                    <CardContent className="pt-8 pb-6 relative z-10">
                                        <div className="mb-6 flex gap-1">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <span key={starIndex} className="text-yellow-400 text-lg">★</span>
                                            ))}
                                        </div>
                                        <blockquote className="text-lg text-foreground mb-8 leading-relaxed italic">
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                                {testimonial.author.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div className="font-bold text-foreground">
                                                    {testimonial.author}
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {testimonial.role}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-3xl p-8 md:p-16 text-center border border-primary/20 relative overflow-hidden group hover:border-primary/40 transition-all duration-500"
                    >
                        <div className="relative z-10">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold mb-6 text-primary"
                                style={{ fontFamily: 'Orbitron, sans-serif' }}
                            >
                                {content.cta.title}
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
                            >
                                {content.cta.description}
                            </motion.p>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                viewport={{ once: true }}
                                className="flex flex-col sm:flex-row gap-6 justify-center"
                            >
                                <Link href="/contact">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button size="lg" className="text-lg px-10 py-4 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300">
                                            {content.cta.buttons?.primary || "Get in Touch"}
                                        </Button>
                                    </motion.div>
                                </Link>
                                <Link href="/about">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                            {content.cta.buttons?.secondary || "Learn About Us"}
                                        </Button>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 bg-gradient-to-b from-background to-muted/20 border-t border-border/30">
                <div className="container mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/30 text-center relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{content.newsletter.title}</h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                                {content.newsletter.description}
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                                />
                                <Button type="submit" className="px-8 py-4 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30">{content.newsletter.buttonText}</Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}