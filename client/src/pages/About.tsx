import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Lightbulb, Users, Shield, Zap } from "lucide-react";
import { Card3D } from "@/components/Card3D";
import { motion } from "framer-motion";
import { InteractiveParticles } from "@/components/InteractiveParticles";

export default function About() {
    const [content, setContent] = useState({
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

    useEffect(() => {
        const loadContent = async () => {
            try {
                const response = await fetch('/api/content/about');
                if (response.ok) {
                    const json = await response.json();
                    const data = json?.data ?? json;
                    if (data?.hero) setContent(prev => ({ ...prev, ...data }));
                }
            } catch (error) {
                console.error('Failed to load about content:', error);
            }
        };
        loadContent();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
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

            {/* Story Section */}
            <section className="py-24 bg-gradient-to-b from-background to-muted/20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="prose prose-lg dark:prose-invert"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{content.story.title}</h2>
                            {content.story.paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-muted-foreground mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-muted rounded-2xl h-[400px] flex items-center justify-center relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20" />
                            <div className="text-9xl font-bold text-primary/10">AI</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-primary-foreground/10 p-8 rounded-2xl backdrop-blur-sm border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-500"
                        >
                            <Target className="h-12 w-12 mb-6 text-blue-300" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>{content.mission.title}</h2>
                            <p className="text-primary-foreground/80 leading-relaxed">
                                {content.mission.description}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-primary-foreground/10 p-8 rounded-2xl backdrop-blur-sm border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-500"
                        >
                            <Lightbulb className="h-12 w-12 mb-6 text-yellow-300" />
                            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>{content.vision.title}</h2>
                            <p className="text-primary-foreground/80 leading-relaxed">
                                {content.vision.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>{content.values.title}</h2>
                        <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">{content.values.subtitle}</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.values.items.map((value, i) => {
                            const icons = [<Heart className="h-10 w-10" />, <Shield className="h-10 w-10" />, <Zap className="h-10 w-10" />, <Users className="h-10 w-10" />];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.15, duration: 0.7 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -15, scale: 1.03 }}
                                    className="group"
                                >
                                    <Card className="h-full text-center border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 relative overflow-hidden bg-gradient-to-br from-background to-muted/30">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <CardContent className="pt-8 pb-8 px-6 relative z-10">
                                            <motion.div
                                                className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-500"
                                                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {icons[i]}
                                            </motion.div>
                                            <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{value.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5"></div>
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-3xl p-8 md:p-12 text-center border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-2xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>{content.cta.title}</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                            {content.cta.description}
                        </p>
                        <Link href="/contact">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300">{content.cta.buttonText}</Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}