import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card3D } from "@/components/Card3D";
import { motion } from "framer-motion";
import { InteractiveParticles } from "@/components/InteractiveParticles";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.string().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

export default function Contact() {
    const { toast } = useToast();
    const [content, setContent] = useState({
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

    useEffect(() => {
        const savedContent = localStorage.getItem('contactContent');
        if (savedContent) {
            const parsed = JSON.parse(savedContent);
            setContent({
                ...content,
                ...parsed
            });
        }
    }, []);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const result = await response.json();

            if (result.success) {
                toast({
                    title: "Message Sent!",
                    description: "We'll get back to you as soon as possible.",
                });
                form.reset();
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive",
            });
        }
    }

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

            <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
                                    <CardHeader>
                                        <CardTitle>Contact Information</CardTitle>
                                        <CardDescription>Reach out to us directly.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="flex items-start space-x-3 text-muted-foreground">
                                            <Mail className="h-5 w-5 text-primary mt-1" />
                                            <div>
                                                <div className="font-semibold text-foreground">Email</div>
                                                <a href={`mailto:${content.contactInfo.email}`} className="hover:text-primary transition-colors">{content.contactInfo.email}</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 text-muted-foreground">
                                            <Phone className="h-5 w-5 text-primary mt-1" />
                                            <div>
                                                <div className="font-semibold text-foreground">Phone</div>
                                                <a href={`tel:${content.contactInfo.phone.replace(/[^+\d]/g, '')}`} className="hover:text-primary transition-colors">{content.contactInfo.phone}</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 text-muted-foreground">
                                            <MapPin className="h-5 w-5 text-primary mt-1" />
                                            <div>
                                                <div className="font-semibold text-foreground">Office</div>
                                                <span dangerouslySetInnerHTML={{ __html: content.contactInfo.address.replace(/\n/g, '<br />') }} />
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 text-muted-foreground">
                                            <Clock className="h-5 w-5 text-primary mt-1" />
                                            <div>
                                                <div className="font-semibold text-foreground">Business Hours</div>
                                                <span dangerouslySetInnerHTML={{ __html: content.contactInfo.hours.replace(/\n/g, '<br />') }} />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <Card className="bg-primary text-primary-foreground border-none shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <MessageSquare className="h-5 w-5" />
                                            Quick Response
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="text-primary-foreground/90 space-y-3">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></span>
                                                <span className="text-sm">We respond within <strong>24 hours</strong></span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-primary-foreground/60 shrink-0"></span>
                                                <span className="text-sm">Free project consultation included</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-primary-foreground/60 shrink-0"></span>
                                                <span className="text-sm">NDA available upon request</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-primary-foreground/60 shrink-0"></span>
                                                <span className="text-sm">No commitment required</span>
                                            </div>
                                        </div>
                                        <a href={`mailto:${content.contactInfo.email}`} className="block">
                                            <Button variant="secondary" className="w-full">Email Us Directly</Button>
                                        </a>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            className="lg:col-span-2"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="border-2 border-border/50 hover:border-primary/50 transition-all duration-500">
                                <CardHeader>
                                    <CardTitle>Send us a Message</CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we'll respond within 24 hours.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <FormField
                                                    control={form.control}
                                                    name="name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="John Doe" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Email</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="john@example.com" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <FormField
                                                control={form.control}
                                                name="subject"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Subject</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Project Inquiry" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="message"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Message</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Tell us about your project requirements..."
                                                                className="min-h-[150px]"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <Button type="submit" className="w-full md:w-auto px-8">
                                                Send Message
                                            </Button>
                                        </form>
                                    </Form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] pointer-events-none"></div>
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>Frequently Asked Questions</h2>
                        <p className="text-muted-foreground text-lg">Common questions about working with us.</p>
                    </motion.div>

                    <Accordion type="single" collapsible className="w-full">
                        {content.faq.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
}
