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
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Message Sent!",
            description: "We'll get back to you as soon as possible.",
        });
        form.reset();
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Get in Touch</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind? We'd love to hear from you. Fill out the form below or reach out directly.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-6">
                            <Card3D max={8} scale={1.02}>
                                <Card className="shadow-3d-md hover:shadow-3d-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle>Contact Information</CardTitle>
                                        <CardDescription>Reach out to us directly.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="flex items-start space-x-3 text-muted-foreground">
                                            <Mail className="h-5 w-5 text-primary mt-1" />
                                            <div>
                                                <div className="font-semibold text-foreground">Email</div>
                                                <a href="mailto:contact@knockerai.com" className="hover:text-primary transition-colors">contact@knockerai.com</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 text-muted-foreground">
                                            <Phone className="h-5 w-5 text-primary mt-1" />
                                            <div>
                                                <div className="font-semibold text-foreground">Phone</div>
                                                <a href="tel:+15551234567" className="hover:text-primary transition-colors">+1 (555) 123-4567</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 text-muted-foreground">
                                            <MapPin className="h-5 w-5 text-primary mt-1" />
                                            <div>
                                                <div className="font-semibold text-foreground">Office</div>
                                                <span>123 Tech Avenue,<br />Silicon Valley, CA 94025</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 text-muted-foreground">
                                            <Clock className="h-5 w-5 text-primary mt-1" />
                                            <div>
                                                <div className="font-semibold text-foreground">Business Hours</div>
                                                <span>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: Closed</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Card3D>

                            <motion.div
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="bg-primary text-primary-foreground border-none shadow-3d-colored">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <MessageSquare className="h-5 w-5" />
                                            Live Chat
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="mb-4 text-primary-foreground/90">
                                            Need immediate assistance? Our support team is available for live chat during business hours.
                                        </p>
                                        <Button variant="secondary" className="w-full">Start Chat</Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card>
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
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">Common questions about working with us.</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What is your typical project timeline?</AccordionTrigger>
                            <AccordionContent>
                                Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application or AI integration could take 2-6 months. We provide a detailed timeline during the proposal phase.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Do you provide ongoing support?</AccordionTrigger>
                            <AccordionContent>
                                Yes! We offer various maintenance and support packages to ensure your software remains secure, up-to-date, and performs optimally after launch.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>What technologies do you specialize in?</AccordionTrigger>
                            <AccordionContent>
                                We specialize in the JavaScript ecosystem (React, Node.js, Next.js), Python for AI/ML tasks, and cloud platforms like AWS and Azure. We choose the best tool for the job.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>How do you handle project pricing?</AccordionTrigger>
                            <AccordionContent>
                                We offer both fixed-price contracts for well-defined projects and time-and-materials contracts for projects with evolving requirements. We're transparent about costs from day one.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </div>
    );
}
