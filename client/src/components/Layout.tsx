import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [location] = useLocation();

    // Scroll to top on every route change
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo({ top: 0, left: 0 });
        document.documentElement.style.scrollBehavior = "";
    }, [location]);

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
            <div className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 transition-all duration-500">
                <nav
                    className={`transition-all duration-500 ease-in-out rounded-full border border-white/30 shadow-lg shadow-primary/10 ${
                        isScrolled
                            ? "w-[75%] max-w-2xl py-2 px-6"
                            : "w-[88%] max-w-4xl py-3 px-8"
                    }`}
                    style={{
                        background: "rgba(255,255,255,0.22)",
                        backdropFilter: "blur(18px)",
                        WebkitBackdropFilter: "blur(18px)",
                        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.10), inset 0 1px 0 rgba(255,255,255,0.4)",
                        border: "1px solid rgba(255,255,255,0.35)",
                    }}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/">
                            <a className="flex items-center hover:opacity-90 transition-all duration-300 group relative">
                                <img
                                    src="/light_logo.png"
                                    alt="Knocker AI"
                                    width={isScrolled ? 120 : 140}
                                    className="object-contain transition-all duration-500 group-hover:scale-105"
                                />
                            </a>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link key={item.path} href={item.path}>
                                    <a
                                        className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                                            location === item.path
                                                ? "text-primary bg-primary/10"
                                                : "text-foreground hover:text-primary hover:bg-primary/5"
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300"
                            >
                                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Dropdown */}
                {isMobileMenuOpen && (
                    <div
                        className="absolute top-[72px] left-1/2 -translate-x-1/2 w-[88%] max-w-sm rounded-3xl border border-white/30 p-4 md:hidden"
                        style={{
                            background: "rgba(255,255,255,0.28)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                            boxShadow: "0 8px 32px 0 rgba(31,38,135,0.12)",
                        }}
                    >
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <Link key={item.path} href={item.path}>
                                    <a
                                        className={`block px-4 py-3 rounded-2xl text-base font-medium transition-all duration-200 ${
                                            location === item.path
                                                ? "bg-primary/10 text-primary"
                                                : "text-foreground hover:bg-primary/5 hover:text-primary"
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
            </div>

            {/* Main Content */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <footer className="relative bg-gradient-to-b from-muted/30 to-muted/50 border-t border-border/40 pt-20 pb-8 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_top,white,transparent)] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-2">
                            <div className="mb-6 group">
                                <img
                                    src="/light_logo.png"
                                    alt="Knocker AI"
                                    width={200}
                                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
                                Empowering businesses with cutting-edge AI solutions, custom web development, and digital transformation strategies.
                            </p>
                            <div className="flex gap-4">
                                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                                </span>
                                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                                </span>
                                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
                                </span>
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
                                <li><span className="cursor-default opacity-50">Careers</span></li>
                                <li><span className="cursor-default opacity-50">Privacy Policy</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Knocker AI. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-muted-foreground">
                            <span className="cursor-default opacity-50">Terms</span>
                            <span className="cursor-default opacity-50">Privacy</span>
                            <span className="cursor-default opacity-50">Cookies</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
