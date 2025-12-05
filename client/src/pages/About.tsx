import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Lightbulb, Users, Shield, Zap } from "lucide-react";
import { Card3D } from "@/components/Card3D";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="py-20 md:py-32 bg-muted/30">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>About Knocker AI</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        We are a team of passionate innovators, developers, and strategists dedicated to redefining the digital landscape through Artificial Intelligence and modern web technologies.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-lg dark:prose-invert">
                            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>Our Story</h2>
                            <p className="text-muted-foreground mb-4">
                                Founded in 2023, Knocker AI began with a simple idea: that advanced technology shouldn't be accessible only to tech giants. We saw a gap in the market where small to medium-sized businesses were struggling to adopt AI and modern web standards due to complexity and cost.
                            </p>
                            <p className="text-muted-foreground mb-4">
                                What started as a small consultancy has grown into a full-service digital agency. We've helped over 50 startups launch their MVPs and assisted established enterprises in modernizing their legacy systems.
                            </p>
                            <p className="text-muted-foreground">
                                Today, we continue to push the boundaries of what's possible, constantly exploring new technologies like Generative AI, Edge Computing, and Web3 to give our clients a competitive edge.
                            </p>
                        </div>
                        <div className="bg-muted rounded-2xl h-[400px] flex items-center justify-center relative overflow-hidden">
                            {/* Abstract visual representation */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20" />
                            <div className="text-9xl font-bold text-primary/10">AI</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-primary-foreground/10 p-8 rounded-2xl backdrop-blur-sm">
                            <Target className="h-12 w-12 mb-6 text-blue-300" />
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Our Mission</h2>
                            <p className="text-primary-foreground/80 leading-relaxed">
                                To democratize access to advanced technology, enabling startups and enterprises alike to leverage AI and modern web frameworks for sustainable growth. We believe in building tools that empower humans, not replace them.
                            </p>
                        </div>
                        <div className="bg-primary-foreground/10 p-8 rounded-2xl backdrop-blur-sm">
                            <Lightbulb className="h-12 w-12 mb-6 text-yellow-300" />
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Our Vision</h2>
                            <p className="text-primary-foreground/80 leading-relaxed">
                                A world where technology serves as a seamless catalyst for human creativity and business efficiency. We envision a future where every business, regardless of size, has the digital infrastructure to compete on a global scale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Our Core Values</h2>
                        <p className="text-muted-foreground">The principles that guide every decision we make.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Heart className="h-8 w-8 text-red-500" />, title: "Passion", desc: "We love what we do, and it shows in our work." },
                            { icon: <Shield className="h-8 w-8 text-blue-500" />, title: "Integrity", desc: "We are transparent, honest, and keep our promises." },
                            { icon: <Zap className="h-8 w-8 text-yellow-500" />, title: "Innovation", desc: "We constantly challenge the status quo." },
                            { icon: <Users className="h-8 w-8 text-green-500" />, title: "Collaboration", desc: "We work with you, not just for you." },
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card3D max={12} scale={1.04}>
                                    <Card className="text-center hover:shadow-md transition-shadow shadow-3d-sm hover:shadow-3d-md">
                                        <CardContent className="pt-6">
                                            <div className="mb-4 flex justify-center layer-2">{value.icon}</div>
                                            <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                                            <p className="text-muted-foreground text-sm">{value.desc}</p>
                                        </CardContent>
                                    </Card>
                                </Card3D>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Placeholder */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'Orbitron, sans-serif' }}>Meet the Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="group">
                                <div className="bg-muted h-64 rounded-xl mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                                    {/* Placeholder avatar */}
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                        Member {i}
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg">Team Member {i}</h3>
                                <p className="text-sm text-muted-foreground">Position Title</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Join Us on Our Journey</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Whether you're a startup looking for your first MVP or an established enterprise seeking digital transformation, we're here to help.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">Contact Us</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
