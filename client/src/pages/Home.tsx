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
                        Revolutionizing Digital Solutions
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-center"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                        Building the Future with{" "}
                        <br className="hidden md:block" />
                        <span className="text-primary">
                            <GlitchText glitchIntensity="medium">
                                Knocker AI
                            </GlitchText>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed text-center"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        We fuse{" "}
                        <span className="text-primary font-semibold">Artificial Intelligence</span>{" "}
                        with{" "}
                        <span className="text-primary font-semibold">Premium Web Design</span>{" "}
                        to create digital experiences that captivate and convert.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <Link href="/contact">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <NeonButton variant="cyan">
                                    Start Your Project <ArrowRight className="ml-2 h-5 w-5 inline" />
                                </NeonButton>
                            </motion.div>
                        </Link>
                        <Link href="/portfolio">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <NeonButton variant="magenta">
                                    View Our Work
                                </NeonButton>
                            </motion.div>
                        </Link>
                    </motion.div>
                    

                </div>
            </section>

            {/* Tech Stack Marquee */}
            <section className="py-10 border-y border-border/40 bg-muted/5 overflow-hidden">
                <div className="container mx-auto px-4 mb-6 text-center">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Powered by Modern Tech</p>
                </div>
                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                        {["React", "Next.js", "TypeScript", "Node.js", "Python", "TensorFlow", "AWS", "Docker", "Tailwind", "OpenAI"].map((tech, i) => (
                            <span key={i} className="text-2xl font-bold text-muted-foreground/50 mx-4">{tech}</span>
                        ))}
                        {["React", "Next.js", "TypeScript", "Node.js", "Python", "TensorFlow", "AWS", "Docker", "Tailwind", "OpenAI"].map((tech, i) => (
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
                        {[
                            { label: "Projects Delivered", value: "100+"   },
                            { label: "Happy Clients", value: "50+"  },
                            { label: "Team Experts", value: "25+" },
                            { label: "Years Experience", value: "5+" },
                        ].map((stat, index) => (
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>Why Choose Knocker AI?</h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
                            We combine technical expertise with creative innovation to deliver exceptional results that drive real business value.
                        </p>
                    </motion.div>

                    <div className="space-y-24">
                        {[
                            {
                                icon: <Code className="h-12 w-12" />,
                                title: "Web Development",
                                description: "Custom, responsive, and high-performance websites tailored to your brand using modern frameworks like React and Next.js.",
                                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
                            },
                            {
                                icon: <Brain className="h-12 w-12" />,
                                title: "AI Solutions",
                                description: "Intelligent automation, predictive analytics, and custom LLM integrations to optimize your operations.",
                                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
                            },
                            {
                                icon: <Cloud className="h-12 w-12" />,
                                title: "Cloud Systems",
                                description: "Scalable, secure, and cost-effective cloud infrastructure design and management on AWS, Azure, or GCP.",
                                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
                            },
                            {
                                icon: <Rocket className="h-12 w-12" />,
                                title: "Digital Growth",
                                description: "Strategic SEO, performance marketing, and conversion rate optimization to accelerate your market presence.",
                                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                            },
                            {
                                icon: <CheckCircle2 className="h-12 w-12" />,
                                title: "ERP Systems",
                                description: "Complete enterprise resource planning solutions to streamline your business processes and improve operational efficiency.",
                                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Animated connecting line */}
                                <div className="absolute hidden lg:block top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    <motion.div 
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                                        viewport={{ once: true }}
                                        className="w-24 h-0.5 bg-gradient-to-r from-primary to-primary/50 origin-center"
                                    >
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                                        <div className="absolute -top-1 -left-1 w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                    </motion.div>
                                </div>
                                
                                <div className="flex-1 glass-card p-8 rounded-3xl hover-lift border border-border/50 hover:border-primary/30 transition-all duration-500 group relative">
                                    <div className="mb-6 p-4 rounded-2xl bg-primary w-fit text-white group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
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
                        ))}
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
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>Featured Projects</h2>
                            <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed">
                                A glimpse into our recent success stories.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/portfolio">
                                <Button variant="outline" className="hidden md:flex hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/30 hover:border-primary">
                                    View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {[
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
                        ].map((project, i) => (
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

                    <div className="text-center md:hidden">
                        <Link href="/portfolio">
                            <Button variant="outline">
                                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 relative overflow-hidden bg-white">
                {/* Dynamic Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
                    {/* Particles */}
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-30" 
                             style={{ 
                                 left: `${Math.random() * 100}%`, 
                                 top: `${Math.random() * 100}%`,
                                 animationDelay: `${Math.random() * 5}s`,
                                 animationDuration: `${3 + Math.random() * 4}s`
                             }} />
                    ))}
                    <div className="absolute top-0 left-1/4 w-px h-full bg-primary/20 animate-pulse"></div>
                    <div className="absolute top-0 right-1/3 w-px h-full bg-primary/20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <motion.div className="relative mb-8">
                            <motion.h2 
                                className="text-6xl md:text-8xl font-bold text-primary relative z-10"
                                style={{ fontFamily: 'Orbitron, sans-serif' }}
                            >
                                DEVELOPMENT PROCESS
                            </motion.h2>

                        </motion.div>
                        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                            Agile software development methodology that delivers high-quality solutions
                        </p>
                    </motion.div>

                    <div className="relative max-w-7xl mx-auto">
                        {/* Enhanced Connection Network */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 1200 400">
                            <motion.path
                                d="M 100 200 Q 300 100 500 200 T 900 200 L 1100 200"
                                stroke="currentColor" className="text-primary"
                                strokeWidth="4"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                                viewport={{ once: true }}
                            />
                            {/* Pulsing energy orbs */}
                            <motion.circle cx="300" cy="150" r="4" fill="currentColor" className="text-primary" opacity="0.6"
                                animate={{ r: [4, 8, 4], opacity: [0.6, 0.2, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity }} />
                            <motion.circle cx="700" cy="250" r="4" fill="currentColor" className="text-primary" opacity="0.6"
                                animate={{ r: [4, 8, 4], opacity: [0.6, 0.2, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }} />

                        </svg>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { 
                                    title: "PLANNING", 
                                    desc: "Requirements analysis, user stories, and project roadmap creation",
                                    icon: "https://fonts.gstatic.com/s/i/materialiconsoutlined/assignment/v6/24px.svg",
                                    hex: "0x01"
                                },
                                { 
                                    title: "DESIGN", 
                                    desc: "UI/UX design, system architecture, and database modeling",
                                    icon: "https://fonts.gstatic.com/s/i/materialiconsoutlined/design_services/v6/24px.svg",
                                    hex: "0x02"
                                },
                                { 
                                    title: "DEVELOPMENT", 
                                    desc: "Agile coding sprints with continuous integration and testing",
                                    icon: "https://fonts.gstatic.com/s/i/materialiconsoutlined/code/v6/24px.svg",
                                    hex: "0x03"
                                },
                                { 
                                    title: "DEPLOYMENT", 
                                    desc: "Production launch with monitoring and ongoing maintenance",
                                    icon: "https://fonts.gstatic.com/s/i/materialiconsoutlined/rocket_launch/v6/24px.svg",
                                    hex: "0x04"
                                },
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 60, rotateX: -30 }}
                                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                    transition={{ delay: i * 0.4, duration: 1, type: "spring", stiffness: 100 }}
                                    viewport={{ once: true }}
                                    whileHover={{ 
                                        y: -25, 
                                        scale: 1.08,
                                        rotateY: 8,
                                        transition: { duration: 0.4, type: "spring" }
                                    }}
                                    className="relative group perspective-1000"
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {/* Holographic Frame */}
                                    <div className="absolute -inset-1 bg-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                                    
                                    {/* Hex Code */}
                                    <div className="absolute -top-6 right-4 z-30">
                                        <span className="text-xs font-mono text-primary bg-background px-2 py-1 rounded border border-primary/30">
                                            {step.hex}
                                        </span>
                                    </div>
                                    
                                    {/* Main Card */}
                                    <div className="relative bg-background/80 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 group-hover:border-primary/60 transition-all duration-500 overflow-hidden shadow-lg group-hover:shadow-xl">
                                        {/* Scanning Lines */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute top-0 left-0 w-full h-0.5 bg-primary animate-pulse"></div>
                                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                        </div>
                                        

                                        
                                        {/* Icon */}
                                        <motion.div 
                                            className="relative text-6xl mb-6 flex justify-center"
                                            whileHover={{ 
                                                scale: 1.2,
                                                rotate: [0, 360],
                                                transition: { duration: 0.8 }
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-500"></div>
                                            <img src={step.icon} alt={step.title} className="relative z-10 w-16 h-16 filter brightness-0 invert" />
                                        </motion.div>
                                        
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                                            {step.desc}
                                        </p>
                                        
                                        {/* Progress Bar */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 overflow-hidden">
                                            <motion.div 
                                                className="h-full bg-primary"
                                                initial={{ width: '0%' }}
                                                whileInView={{ width: '100%' }}
                                                transition={{ delay: i * 0.3 + 1, duration: 1.5 }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-muted/20 to-background">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>What Our Clients Say</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Real feedback from companies who trusted us with their digital transformation
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Knocker AI transformed our outdated system into a modern, efficient platform. The AI integration saved us hours of manual work every day.",
                                author: "Sarah J.",
                                role: "CTO, TechFlow",
                            },
                            {
                                quote: "The team's attention to detail and design aesthetics is unmatched. Our new landing page conversion rate doubled within a month.",
                                author: "Michael R.",
                                role: "Marketing Director, GrowthCo",
                            },
                            {
                                quote: "Professional, timely, and incredibly skilled. They didn't just build what we asked for; they improved upon our initial ideas.",
                                author: "Emily T.",
                                role: "Founder, StartUp X",
                            },
                        ].map((testimonial, i) => (
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
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <CardContent className="pt-8 pb-6 relative z-10">
                                        <div className="absolute top-4 right-4 text-6xl text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                                            "
                                        </div>
                                        
                                        <div className="mb-6 flex gap-1">
                                            {[...Array(5)].map((_, starIndex) => (
                                                <span key={starIndex} className="text-yellow-400 text-lg">★</span>
                                            ))}
                                    </div>
                                        <blockquote className="text-lg text-foreground mb-8 leading-relaxed italic">
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                                                {testimonial.author.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
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
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-primary">4.9/5</span>
                                <span className="text-sm">Average Rating</span>
                            </div>
                            <div className="hidden md:block w-px h-8 bg-border"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-primary">50+</span>
                                <span className="text-sm">Happy Clients</span>
                            </div>
                            <div className="hidden md:block w-px h-8 bg-border"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-primary">100%</span>
                                <span className="text-sm">Project Success Rate</span>
                            </div>
                        </div>
                    </motion.div>
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
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none" />
                        <div className="relative z-10">
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold mb-6 text-primary"
                                style={{ fontFamily: 'Orbitron, sans-serif' }}
                            >
                                Ready to Transform Your Business?
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
                            >
                                Let's collaborate to build something extraordinary. Whether you need a simple website or a complex AI system, we have the expertise to help.
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
                                            Get in Touch
                                        </Button>
                                    </motion.div>
                                </Link>
                                <Link href="/about">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                            Learn About Us
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
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>Stay Ahead of the Curve</h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                                Subscribe to our newsletter for the latest insights on AI, Tech trends, and Knocker AI updates.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                                />
                                <Button type="submit" className="px-8 py-4 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30">Subscribe</Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
