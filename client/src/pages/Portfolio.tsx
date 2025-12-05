import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";
import { Card3D } from "@/components/Card3D";
import { motion } from "framer-motion";

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
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>Our Portfolio</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Explore our latest projects and see how we've helped businesses transform their ideas into reality.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card3D max={10} scale={1.03}>
                                    <Card className="overflow-hidden flex flex-col hover:shadow-lg transition-all group shadow-3d-md hover:shadow-3d-lg">
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
                                        <CardHeader>
                                            <CardTitle className="text-xl">{project.title}</CardTitle>
                                            <CardDescription className="line-clamp-2 mt-2">
                                                {project.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="mt-auto">
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tags.map((tag, i) => (
                                                    <Badge key={i} variant="outline" className="text-xs">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex gap-4">
                                                <Button variant="outline" size="sm" className="w-full" asChild>
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                                                    </a>
                                                </Button>
                                                <Button variant="ghost" size="sm" className="w-full" asChild>
                                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                                        <Github className="h-4 w-4 mr-2" /> Code
                                                    </a>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Card3D>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>Have a Project in Mind?</h2>
                    <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg">
                        We can help you build something similar or completely unique. Let's discuss your requirements.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary" className="text-lg px-8">
                            Start Your Project
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
