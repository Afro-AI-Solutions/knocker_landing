import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const sidebarItems = [
  {
    id: 1,
    icon: "/figmaAssets/overlay-3.svg",
    title: "Web Development",
    subtitle: "Modern web applications",
  },
  {
    id: 2,
    icon: "/figmaAssets/overlay.svg",
    title: "Mobile Apps",
    subtitle: "iOS and Android development",
  },
  {
    id: 3,
    icon: "/figmaAssets/overlay-4.svg",
    title: "Cloud Solutions",
    subtitle: "Scalable cloud infrastructure",
  },
  {
    id: 4,
    icon: "/figmaAssets/overlay-1.svg",
    title: "Data Analytics",
    subtitle: "Business intelligence solutions",
  },
  {
    id: 5,
    icon: "/figmaAssets/overlay-2.svg",
    title: "AI/ML Solutions",
    subtitle: "Artificial intelligence & machine learning",
  },
];

type ContentData = {
  [key: number]: {
    title: string;
    description: string;
    highlight: string;
    bulletPoints: string[];
    image: string;
  };
};

const contentData: ContentData = {
  1: {
    title: "Web Development Excellence",
    description: "We create modern, responsive web applications using cutting-edge technologies and best practices.",
    highlight: "Our team specializes in React, Vue, Angular, and Node.js to deliver scalable web solutions.",
    bulletPoints: [
      "Responsive design for all devices",
      "SEO optimized and fast loading",
      "Modern JavaScript frameworks",
      "Progressive Web Applications",
    ],
    image: "/figmaAssets/misc-square-6-webp.png"
  },
  2: {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    highlight: "We build apps for iOS and Android using React Native, Flutter, and native technologies.",
    bulletPoints: [
      "Cross-platform compatibility",
      "Native performance optimization",
      "App Store deployment",
      "Push notifications & analytics",
    ],
    image: "/figmaAssets/business-services.png"
  },
  3: {
    title: "Cloud Infrastructure Solutions",
    description: "Scalable and secure cloud solutions to power your business growth and digital transformation.",
    highlight: "AWS, Azure, and Google Cloud expertise for enterprise-grade solutions.",
    bulletPoints: [
      "Auto-scaling infrastructure",
      "Microservices architecture",
      "DevOps and CI/CD pipelines",
      "Security and compliance",
    ],
    image: "/figmaAssets/about-us.png"
  },
  4: {
    title: "Data Analytics & Intelligence",
    description: "Transform your data into actionable insights with our comprehensive analytics solutions.",
    highlight: "Advanced data processing, visualization, and business intelligence platforms.",
    bulletPoints: [
      "Real-time data processing",
      "Interactive dashboards",
      "Predictive analytics",
      "Data warehouse solutions",
    ],
    image: "/figmaAssets/illustration.png"
  },
  5: {
    title: "AI/ML Solutions",
    description: "Harness the power of artificial intelligence and machine learning to automate processes and gain competitive advantages.",
    highlight: "Custom AI models, natural language processing, computer vision, and predictive analytics.",
    bulletPoints: [
      "Custom machine learning models",
      "Natural language processing",
      "Computer vision applications",
      "Predictive analytics and forecasting",
      "AI-powered automation",
      "Deep learning solutions",
    ],
    image: "/figmaAssets/portfolio-image-1.png"
  }
};



export const SidebarSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState(1);
  const currentContent = contentData[activeItem];

  return (
    <section className="bg-white py-[60px] w-full">
      <div className="max-w-[1320px] mx-auto px-3 flex gap-10">
        <aside className="flex-shrink-0 w-[416px]">
          <div className="flex flex-col gap-3.5 bg-[#ffffff80] rounded-2xl backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] p-0">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`flex items-center gap-4 p-5 rounded-xl overflow-hidden transition-colors ${activeItem === item.id ? "bg-[#12a16b]" : "bg-white hover:bg-gray-50"
                  }`}
              >
                <img
                  className="w-[50px] h-[50px] flex-shrink-0"
                  alt={item.title}
                  src={item.icon}
                />
                <div className="flex flex-col items-start gap-1 flex-1">
                  <div
                    className={`[font-family:'Barlow',Helvetica] font-semibold text-base tracking-[0] leading-[19.2px] ${activeItem === item.id ? "text-white" : "text-[#0a3223]"
                      }`}
                  >
                    {item.title}
                  </div>
                  <div
                    className={`[font-family:'Roboto',Helvetica] font-normal text-sm tracking-[0] leading-[21px] ${activeItem === item.id ? "text-[#ffffffcc]" : "text-[#141f1c99]"
                      }`}
                  >
                    {item.subtitle}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <Card className="flex-1 rounded-2xl shadow-[0px_8px_32px_#0000000d] border-0">
          <CardContent className="p-10 flex gap-10">
            <div className="flex-1 flex flex-col">
              <div className="flex flex-col gap-[11.41px]">
                <h2 className="[font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-[28px] tracking-[0] leading-[33.6px]">
                  {currentContent.title}
                </h2>
                <div className="w-[50px] h-[3px] bg-[#12a16b] rounded-[3px]" />
              </div>

              <p className="mt-[23px] [font-family:'Roboto',Helvetica] font-normal text-[#141f1ccc] text-base tracking-[0] leading-[25.6px]">
                {currentContent.description}
              </p>

              <div className="mt-[23.6px] p-5 rounded-xl bg-[linear-gradient(163deg,rgba(18,161,107,0.08)_0%,rgba(18,161,107,0.05)_100%)]">
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#141f1ccc] text-base tracking-[0] leading-[25.6px]">
                  {currentContent.highlight}
                </p>
              </div>

              <div className="mt-[30px] flex flex-col gap-[15px]">
                {currentContent.bulletPoints.map((point: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <img
                      className="w-5 h-5 mt-[4.5px] flex-shrink-0"
                      alt="Check icon"
                      src="/figmaAssets/icon-2.svg"
                    />
                    <div className="[font-family:'Roboto',Helvetica] font-normal text-[#141f1ccc] text-base tracking-[0] leading-6">
                      {point}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[376px] h-[376px] flex-shrink-0 rounded-xl overflow-hidden shadow-[0px_15px_35px_#0000001a] relative">
              <div className={`absolute inset-0 bg-[url(${currentContent.image})] bg-cover bg-center`} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.05)_100%)]" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
