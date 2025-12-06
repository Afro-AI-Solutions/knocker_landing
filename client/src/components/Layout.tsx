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
                        ? "bg-background/80 backdrop-blur-2xl border-b border-primary/20 shadow-2xl shadow-primary/10" 
                        : "bg-gradient-to-b from-background/50 to-transparent backdrop-blur-sm"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24">
                        {/* Logo */}
                        <Link href="/">
                            <a className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group relative">
                                <div className="relative">
                                    <img
                                        src="/figmaAssets/knocker logo.png"
                                        alt="Knocker AI"
                                        className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                    />
                                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary transition-all duration-300" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                    Knocker AI
                                </span>
                            </a>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link key={item.path} href={item.path}>
                                    <a
                                        className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${location === item.path ? "text-primary" : "text-foreground hover:text-primary"
                                            }`}
                                    >
                                        <span className="relative z-10">{item.label}</span>
                                        <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${location === item.path ? "bg-primary/10" : "bg-transparent group-hover:bg-primary/5"}`}></div>
                                        {location === item.path && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full"></div>}
                                    </a>
                                </Link>
                            ))}
                            <Link href="/contact">
                                <a className="ml-4 relative px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-bold hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/60 hover:scale-105 overflow-hidden group">
                                    <span className="relative z-10">Get Started</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="relative p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
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
            <footer className="relative bg-gradient-to-b from-muted/30 to-muted/50 border-t border-border/40 pt-20 pb-8 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_top,white,transparent)] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-3 mb-6 group">
                                <div className="relative">
                                    <img
                                        src="/figmaAssets/knocker logo.png"
                                        alt="Knocker AI"
                                        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                    Knocker AI
                                </h3>
                            </div>
                            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
                                Empowering businesses with cutting-edge AI solutions, custom web development, and digital transformation strategies.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path></svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-foreground text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Solutions</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/services"><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Web Development</a></Link></li>
                                <li><Link href="/services"><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block">AI Integration</a></Link></li>
                                <li><Link href="/services"><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Cloud Systems</a></Link></li>
                                <li><Link href="/services"><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block">ERP Systems</a></Link></li>
                                <li><Link href="/services"><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Digital Growth</a></Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-foreground text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>Company</h4>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/about"><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block">About Us</a></Link></li>
                                <li><Link href="/portfolio"><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Portfolio</a></Link></li>
                                <li><Link href="/contact"><a className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Contact</a></Link></li>
                                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Careers</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Knocker AI. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-muted-foreground">
                            <a href="#" className="hover:text-primary transition-colors">Terms</a>
                            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
