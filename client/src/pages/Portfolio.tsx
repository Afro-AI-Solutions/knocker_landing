import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";
import { Card3D } from "@/components/Card3D";
import { motion } from "framer-motion";
import { InteractiveParticles } from "@/components/InteractiveParticles";

// Shared project data
export const projects = [
    {
        id: 1,
        title: "AI-Powered Analytics Dashboard",
        description: "A comprehensive data visualization platform that uses machine learning to predict market trends and optimize inventory management for a large retail chain.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        tags: ["React", "Python", "TensorFlow", "AWS"],
        category: "AI & ML",
        link: "#",
    },
    {
        id: 2,
        title: "EduTech Learning Platform",
        description: "An interactive Learning Management System (LMS) with real-time video conferencing, student progress tracking, and gamified assessments.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
        tags: ["Next.js", "Node.js", "WebRTC", "PostgreSQL"],
        category: "Web Development",
        link: "#",
    },
    {
        id: 3,
        title: "FinTech Secure Wallet",
        description: "A secure mobile-first digital wallet application supporting multi-currency transactions, biometric authentication, and instant peer-to-peer transfers.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        tags: ["React Native", "Node.js", "Blockchain", "Security"],
        category: "Mobile App",
        link: "#",
    },
    {
        id: 4,
        title: "Smart Home Automation Hub",
        description: "IoT dashboard allowing users to control smart devices, set automation routines, and monitor energy consumption in real-time.",
        image: "https://images.unsplash.com/photo-1558002038-109177381792?w=800&q=80",
        tags: ["Vue.js", "IoT", "MQTT", "Firebase"],
        category: "IoT",
        link: "#",
    },
    {
        id: 5,
        title: "Healthcare Patient Portal",
        description: "HIPAA-compliant patient management system for scheduling appointments, viewing medical records, and secure doctor-patient messaging.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        tags: ["React", "Django", "PostgreSQL", "Docker"],
        category: "Web Development",
        link: "#",
    },
    {
        id: 6,
        title: "E-commerce Recommendation Engine",
        description: "Custom AI engine that analyzes user behavior to provide personalized product recommendations, increasing conversion rates by 40%.",
        image: "https://images.unsplash.com/photo-1472851294608-41531b6574d4?w=800&q=80",
        tags: ["Python", "Scikit-learn", "FastAPI", "Redis"],
        category: "AI & ML",
        link: "#",
    },
];

export default function Portfolio() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
                <InteractiveParticles />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent" 
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                        Our Portfolio
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    >
                        Explore our latest projects and see how we've helped businesses transform their ideas into reality.
                    </motion.p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group"
                            >
                                <Card className="overflow-hidden flex flex-col border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 relative">
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 right-4">
                                                <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                                                    {project.category}
                                                </Badge>
                                            </div>
                                        </div>
                                        <CardHeader className="relative z-10">
                                            <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                                            <CardDescription className="line-clamp-2 mt-2 leading-relaxed">
                                                {project.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="mt-auto relative z-10">
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.map((tag, i) => (
                                                    <Badge key={i} variant="outline" className="text-xs">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex gap-4">
                                                <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                                                    </a>
                                                </Button>
                                                <Button variant="ghost" size="sm" className="w-full hover:bg-muted transition-all duration-300" asChild>
                                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                                        <Github className="h-4 w-4 mr-2" /> Code
                                                    </a>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-6" 
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                        Have a Project in Mind?
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        We can help you build something similar or completely unique. Let's discuss your requirements.
                    </motion.p>
                    <Link href="/contact">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="lg" variant="secondary" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                Start Your Project
                            </Button>
                        </motion.div>
                    </Link>
                </div>
            </section>
        </div>
    );
}
