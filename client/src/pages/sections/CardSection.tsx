import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const serviceCards = [
  {
    icon: "/figmaAssets/background-18.svg",
    title: "Business Strategy & Planning",
    description:
      "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Nulla facilisi. Cras vehicula magna\neget lectus varius, at finibus massa\ncondimentum.",
    number: "01",
  },
  {
    icon: "/figmaAssets/background-5.svg",
    title: "Market Expansion Advisory",
    description:
      "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Nulla facilisi. Cras vehicula magna\neget lectus varius, at finibus massa\ncondimentum.",
    number: "02",
  },
  {
    icon: "/figmaAssets/background-13.svg",
    title: "Risk Management Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Nulla facilisi. Cras vehicula magna\neget lectus varius, at finibus massa\ncondimentum.",
    number: "03",
  },
  {
    icon: "/figmaAssets/background.svg",
    title: "Innovation & Digital Transformation",
    description:
      "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Nulla facilisi. Cras vehicula magna\neget lectus varius, at finibus massa\ncondimentum.",
    number: "04",
  },
  {
    icon: "/figmaAssets/background-16.svg",
    title: "Strategic Business Consulting",
    description:
      "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Nulla facilisi. Cras vehicula magna\neget lectus varius, at finibus massa\ncondimentum.",
    number: "05",
  },
];

export const CardSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = serviceCards.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="bg-[#f4f9f7] py-[60px] w-full">
      <div className="max-w-[1320px] mx-auto px-3">
        <header className="flex flex-col gap-5 mb-[60px]">
          <div className="relative flex flex-col items-center px-3">
            <div className="w-40 h-px bg-[#141f1c66] mb-[19.39px]" />
            <h2 className="[font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-[32px] leading-[38.4px] text-center tracking-[0] whitespace-nowrap">
              Featured Services
            </h2>
            <div className="w-[60px] h-[3px] bg-[#12a16b] mt-[17.39px]" />
          </div>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-[#14201c] text-base leading-6 text-center tracking-[0] whitespace-nowrap">
            Featured Srvices
          </p>
        </header>

        <div className="relative">
          <div className="grid grid-cols-2 gap-[72px] mb-[118px]">
            <div className="flex flex-col gap-8">
              <Badge className="w-fit bg-[#11a16b0f] text-[#12a16b] hover:bg-[#11a16b0f] h-10 px-4 rounded-md">
                <span className="[font-family:'Roboto',Helvetica] font-medium text-base tracking-[0] leading-6">
                  PROFESSIONAL SERVICES
                </span>
              </Badge>

              <h3 className="[font-family:'Barlow',Helvetica] font-semibold text-[#0a3223] text-[42px] leading-[50.4px] tracking-[0]">
                Elevating Business Performance
                <br />
                Through Strategic Solutions
              </h3>

              <p className="[font-family:'Roboto',Helvetica] font-normal text-[#14201c] text-lg leading-[28.8px] tracking-[0]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent varius risus
                <br />
                sed pellentesque auctor. Phasellus gravida magna at tortor
                cursus, sit amet
                <br />
                suscipit tortor malesuada.
              </p>

              <Button className="w-fit bg-[#12a16b] hover:bg-[#12a16b]/90 h-12 px-6 rounded gap-[7.7px] h-auto">
                <span className="[font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                  Request a Consultation
                </span>
                <img
                  className="w-4 h-4"
                  alt="Icon"
                  src="/figmaAssets/icon-5.svg"
                />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -top-[30px] -right-[18px] w-[180px] h-[180px] bg-[#11a16b1a] rounded-[90px]" />
              <div className="absolute -left-[72px] top-[349px] w-[100px] h-[100px] bg-[#11a16b1a]" />
              <div className="w-full h-[379px] bg-[url(/figmaAssets/business-services.png)] bg-cover bg-center rounded" />
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
            >
              {serviceCards.map((service, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-[10.75px]">
                  <Card className="bg-white rounded-2xl shadow-[0px_5px_15px_#0000000d] overflow-hidden">
                    <CardContent className="p-8 relative">
                      <div className="absolute -top-[50px] -right-[50px] w-10 h-10 bg-white rounded-[20px] -rotate-45 shadow-[0px_2px_10px_#0000001a]" />

                      <img
                        className="w-[70px] h-[70px] mb-6"
                        alt="Service icon"
                        src={service.icon}
                      />

                      <h4 className="[font-family:'Barlow',Helvetica] font-semibold text-[#0a3223] text-[22px] leading-[26.4px] tracking-[0] mb-[22px]">
                        {service.title}
                      </h4>

                      <p className="[font-family:'Roboto',Helvetica] font-normal text-[#14201c] text-base leading-[25.6px] tracking-[0] mb-[26px] whitespace-pre-line">
                        {service.description}
                      </p>

                      <div className="flex items-center gap-2">
                        <div className="w-[70px] h-px bg-[#12a16b]" />
                        <span className="[font-family:'Roboto',Helvetica] font-medium text-[#12a16b] text-lg leading-[27px] tracking-[0]">
                          {service.number}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 mt-[30px]">
              <button 
                className="w-14 h-14 hover:opacity-80 transition-opacity"
                onClick={prevSlide}
              >
                <img
                  className="w-full h-full"
                  alt="Button previous"
                  src="/figmaAssets/button---previous-slide.svg"
                />
              </button>
              <button 
                className="w-14 h-14 hover:opacity-80 transition-opacity"
                onClick={nextSlide}
              >
                <img
                  className="w-full h-full"
                  alt="Button next slide"
                  src="/figmaAssets/button---next-slide.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
