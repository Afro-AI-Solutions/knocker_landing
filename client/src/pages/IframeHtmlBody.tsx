import { ChevronDownIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { BlogSection } from "./sections/BlogSection";
import { CardSection } from "./sections/CardSection";
import { ContactSection } from "./sections/ContactSection";
import { ContentSection } from "./sections/ContentSection";
import { FAQSection } from "./sections/FAQSection";
import { FeatureSection } from "./sections/FeatureSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { LayoutSection } from "./sections/LayoutSection";
import { MainSection } from "./sections/MainSection";
import { NavigationSection } from "./sections/NavigationSection";
import { PricingSection } from "./sections/PricingSection";
import { SidebarSection } from "./sections/SidebarSection";
import { TestimonialSection } from "./sections/TestimonialSection";

const topBarLinks = [
  {
    icon: "/figmaAssets/icon-31.svg",
    text: "contact@example.com",
    width: "w-[148.95px]",
  },
  {
    icon: "/figmaAssets/icon-32.svg",
    text: "+1 5589 55488 55",
    width: "w-[113.15px]",
  },
];

const socialLinks = [
  { src: "/figmaAssets/link-10.svg", alt: "Link" },
  { src: "/figmaAssets/link-1.svg", alt: "Link" },
  { src: "/figmaAssets/link.svg", alt: "Link" },
  { src: "/figmaAssets/link-2.svg", alt: "Link" },
];

const navItems = [
  { label: "Home", width: "w-[43.55px]", target: "home" },
  { label: "About", width: "w-[44.23px]", target: "about" },
  { label: "Services", width: "w-[62.33px]", target: "services" },
  { label: "Portfolio", width: "w-[60.3px]", target: "portfolio" },
  { label: "Team", width: "w-[40.8px]", target: "team" },
  { label: "Dropdown", width: "w-[90.28px]", hasDropdown: true },
  { label: "Megamenu", width: "w-[96.14px]", hasDropdown: true },
  { label: "Contact", width: "w-[56.78px]", target: "contact" },
];

export const IframeHtmlBody = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'team', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <header className={`fixed top-0 left-0 w-full z-[3] flex flex-col justify-start gap-2.5 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
        <div className={`w-full h-10 flex items-center transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-[#000704]'
          }`}>
          <div className="mx-auto max-w-[1320px] w-full px-3 flex items-center">
            <img
              className="w-3.5 h-3.5"
              alt="Icon"
              src="/figmaAssets/icon-31.svg"
            />

            <div className="h-px w-[148.95px] flex ml-[5px]">
              <div className="flex items-center justify-center w-[144.26px] h-4 [font-family:'Roboto',Helvetica] font-normal text-white text-sm tracking-[0] leading-[0.1px]">
                contact@example.com
              </div>
            </div>

            <img
              className="w-3.5 h-3.5 ml-[24.0px]"
              alt="Icon"
              src="/figmaAssets/icon-32.svg"
            />

            <div className="w-[113.15px] h-[21px] ml-[5.0px] [font-family:'Roboto',Helvetica] font-normal text-white text-sm leading-[21px] flex items-center justify-center tracking-[0] whitespace-nowrap">
              +1 5589 55488 55
            </div>

            <div className="flex gap-5 ml-auto">
              {socialLinks.map((link, index) => (
                <img
                  key={index}
                  className="h-3.5 w-3.5"
                  alt={link.alt}
                  src={link.src}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex items-center mb-2.5">
          <div className="mx-auto max-w-[1320px] w-full px-3 flex items-center justify-between">
            <div className="w-[104.23px] flex">
              <div className={`w-[104.59px] h-9 font-bold text-3xl leading-9 whitespace-nowrap flex items-center justify-center [font-family:'Barlow',Helvetica] tracking-[0] transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                Passion
              </div>
            </div>

            <nav className="flex gap-7">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className={`mt-[15px] ${item.width} h-[21px] relative flex items-center cursor-pointer hover:opacity-80 transition-opacity`}
                  onClick={() => item.target && scrollToSection(item.target)}
                >
                  {item.target && activeSection === item.target && (
                    <div className="absolute left-0 -bottom-1.5 w-full h-0.5 bg-[#12a16b]" />
                  )}
                  <div className={`flex items-center justify-center ml-0.5 [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[21px] whitespace-nowrap transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'
                    }`}>
                    {item.label}
                  </div>
                  {item.hasDropdown && (
                    <ChevronDownIcon className={`h-3 w-3 ml-[4.7px] transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'
                      }`} />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="w-full flex flex-col relative">
        <div id="home">
          <MainSection />
        </div>
        <div id="about">
          <LayoutSection />
        </div>
        <div className="w-full h-[145px] overflow-hidden relative">
          <img
            className="w-full h-[145px] animate-pulse"
            alt="Section"
            src="/figmaAssets/section.svg"
            style={{
              animation: 'scroll 20s linear infinite'
            }}
          />
          {/* <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style> */}
        </div>
        <div id="services">
          <CardSection />
          <ContentSection />
          <SidebarSection />
          <FeatureSection />
        </div>
        <div id="portfolio">
          <TestimonialSection />
          <PricingSection />
          <HeroSection />
          <NavigationSection />
          <BlogSection />
        </div>
        <div id="team">
          <FAQSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>

      <FooterSection />
    </div>
  );
};
