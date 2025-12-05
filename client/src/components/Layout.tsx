import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [location] = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: "Portfolio", path: "/portfolio" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            {/* Navigation */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled 
                        ? "bg-background/70 backdrop-blur-xl border-b border-border/30 shadow-lg shadow-primary/5" 
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/">
                            <a className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group">
                                <div className="relative">
                                    <img
                                        src="/figmaAssets/knocker logo.png"
                                        alt="Knocker AI"
                                        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <span className="text-xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                    Knocker AI
                                </span>
                            </a>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link key={item.path} href={item.path}>
                                    <a
                                        className={`text-sm font-medium transition-colors hover:text-primary ${location === item.path ? "text-primary" : "text-muted-foreground"
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                </Link>
                            ))}
                            <Link href="/contact">
                                <a className="relative px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 overflow-hidden group">
                                    <span className="relative z-10">Get Started</span>
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-foreground p-2"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-background border-b border-border/40">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navItems.map((item) => (
                                <Link key={item.path} href={item.path}>
                                    <a
                                        className={`block px-3 py-3 rounded-md text-base font-medium ${location === item.path
                                                ? "bg-primary/10 text-primary"
                                                : "text-foreground hover:bg-muted"
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-muted/30 border-t border-border/40 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src="/figmaAssets/knocker logo.png"
                                    alt="Knocker AI"
                                    className="h-10 w-auto object-contain"
                                />
                                <h3 className="text-2xl font-bold text-primary">
                                    Knocker AI
                                </h3>
                            </div>
                            <p className="text-muted-foreground max-w-sm">
                                Empowering businesses with cutting-edge AI solutions, custom web development, and digital transformation strategies.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-foreground">Solutions</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">AI Integration</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Cloud Systems</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">ERP Systems</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Digital Growth</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
                                <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Knocker AI. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
