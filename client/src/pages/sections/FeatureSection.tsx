import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const services = [
  {
    id: 1,
    icon: "/figmaAssets/background-8.svg",
    title: "Web Development",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rutrum congue leo eget malesuada.",
    price: "Starting at $2,999",
    buttonText: "Get Started",
    featured: true,
  },
  {
    id: 2,
    icon: "/figmaAssets/background-11.svg",
    title: "UI/UX Design",
    description:
      "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.",
    price: "Starting at $1,899",
    buttonText: "Learn More",
    featured: false,
  },
];

const additionalServices = [
  {
    id: 3,
    icon: "/figmaAssets/background-15.svg",
    title: "Digital Marketing",
    description:
      "Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    buttonText: "Explore",
    featured: false,
  },
  {
    id: 4,
    icon: "/figmaAssets/background-10.svg",
    title: "Security Solutions",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar vel. Sed porttitor lectus nibh vestibulum ac diam sit.",
    buttonText: "Discover",
    featured: false,
  },
  {
    id: 5,
    icon: "/figmaAssets/background-12.svg",
    title: "Cloud Services",
    description:
      "Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    buttonText: "Get Quote",
    featured: false,
  },
];

const stats = [
  {
    value: "500+",
    label: "Projects Completed",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
  {
    value: "5+",
    label: "Years Experience",
  },
];

export const FeatureSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[60px] bg-[linear-gradient(145deg,rgba(244,249,247,1)_0%,rgba(18,161,107,0.05)_100%)]">
      <div className="max-w-[1320px] mx-auto px-3">
        <header className="flex flex-col gap-5 mb-9">
          <div className="relative flex flex-col items-center gap-5">
            <div className="relative flex items-center justify-center">
              <div className="absolute left-1/2 -translate-x-1/2 bottom-px w-40 h-px bg-[#141f1c66]" />
              <h2 className="relative [font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-[32px] text-center tracking-[0] leading-[38.4px] whitespace-nowrap">
                Services
              </h2>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60px] h-[3px] bg-[#14201c]" />
            </div>
            <p className="[font-family:'Roboto',Helvetica] font-normal text-[#14201c] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              CHECK OUR SERVICES
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-6">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service) => (
                <CarouselItem key={service.id} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                  <Card
                    className={`${
                      service.featured
                        ? "rounded-[20px] border-2 border-[#12a16b] bg-[linear-gradient(147deg,rgba(255,255,255,1)_0%,rgba(18,161,107,0.05)_100%)]"
                        : "rounded-[20px] border border-[#11a16b1a] bg-white"
                    }`}
                  >
                    <CardContent className="p-[33px] flex flex-col">
                      <img
                        className={`${service.featured ? "w-[82px] h-[82px]" : "w-[70px] h-[70px]"}`}
                        alt={service.title}
                        src={service.icon}
                      />
                      <h3
                        className={`${
                          service.featured
                            ? "[font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-[28.6px] tracking-[0] leading-[37.1px] mt-[26px]"
                            : "[font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-2xl tracking-[0] leading-[31.2px] mt-[26px]"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`${
                          service.featured
                            ? "[font-family:'Roboto',Helvetica] font-normal text-[#141f1ccc] text-[15.3px] tracking-[0] leading-[24.5px] mt-[25px]"
                            : "[font-family:'Roboto',Helvetica] font-normal text-[#141f1ccc] text-[15px] tracking-[0] leading-6 mt-[19.2px]"
                        }`}
                      >
                        {service.description}
                      </p>
                      {service.featured && (
                        <Badge className="w-[123px] h-[22px] mt-[28px] rounded-[20px] bg-[linear-gradient(170deg,rgba(40,167,69,1)_0%,rgba(32,201,151,1)_100%)] border-0">
                          <span className="[font-family:'Roboto',Helvetica] font-semibold text-white text-[12.2px] text-center tracking-[0.51px] leading-[12.2px]">
                            MOST POPULAR
                          </span>
                        </Badge>
                      )}
                      {service.price && (
                        <p
                          className={`${
                            service.featured
                              ? "[font-family:'Roboto',Helvetica] font-bold text-[#12a16b] text-[16.3px] tracking-[0] leading-[24.5px] mt-[28px] ml-[138px]"
                              : "[font-family:'Roboto',Helvetica] font-bold text-[#12a16b] text-base tracking-[0] leading-6 mt-7"
                          }`}
                        >
                          {service.price}
                        </p>
                      )}
                      <Button
                        className={`${
                          service.featured
                            ? "w-[147px] h-[46px] mt-[22px]"
                            : "w-[143.81px] h-[45px] mt-[25px]"
                        } h-auto rounded-[50px] bg-[linear-gradient(163deg,rgba(18,161,107,0.9)_0%,rgba(18,161,107,1)_100%)] hover:bg-[linear-gradient(163deg,rgba(18,161,107,1)_0%,rgba(18,161,107,1)_100%)] border-0`}
                      >
                        <span
                          className={`${
                            service.featured
                              ? "[font-family:'Roboto',Helvetica] font-semibold text-white text-[14.3px] tracking-[0] leading-[21.4px]"
                              : "[font-family:'Roboto',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[21px]"
                          }`}
                        >
                          {service.buttonText}
                        </span>
                        <img
                          className={`${service.featured ? "w-[14.28px] h-[14.28px]" : "w-3.5 h-3.5"} ml-2`}
                          alt="Icon"
                          src="/figmaAssets/icon-5.svg"
                        />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>

          <Carousel className="w-full mt-6">
            <CarouselContent className="-ml-2 md:-ml-4">
              {additionalServices.map((service) => (
                <CarouselItem key={service.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card
                    className="rounded-[20px] border border-[#11a16b1a] bg-white"
                  >
                    <CardContent className="p-[26px] flex flex-col">
                      <img
                        className="w-[60px] h-[60px]"
                        alt={service.title}
                        src={service.icon}
                      />
                      <h3 className="[font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-2xl tracking-[0] leading-[31.2px] mt-[26px]">
                        {service.title}
                      </h3>
                      <p className="[font-family:'Roboto',Helvetica] font-normal text-[#141f1ccc] text-[15px] tracking-[0] leading-6 mt-[19.2px]">
                        {service.description}
                      </p>
                      <Button className="w-fit h-[45px] mt-7 rounded-[50px] bg-[linear-gradient(159deg,rgba(18,161,107,0.9)_0%,rgba(18,161,107,1)_100%)] hover:bg-[linear-gradient(159deg,rgba(18,161,107,1)_0%,rgba(18,161,107,1)_100%)] border-0">
                        <span className="[font-family:'Roboto',Helvetica] font-semibold text-white text-sm tracking-[0] leading-[21px]">
                          {service.buttonText}
                        </span>
                        <img
                          className="w-3.5 h-3.5 ml-2"
                          alt="Icon"
                          src="/figmaAssets/icon-5.svg"
                        />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>

          <div className="relative mt-[190px] rounded-[25px] overflow-hidden bg-[#14201c] py-[50px]">
            <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(171deg,rgba(18,161,107,0)_0%,rgba(18,161,107,0.1)_100%)]" />
            <div className="relative grid grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-[linear-gradient(166deg,rgba(255,255,255,1)_0%,rgba(184,227,211,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Roboto',Helvetica] font-black text-5xl text-center tracking-[0] leading-[72px]">
                    {stat.value}
                  </div>
                  <p className="opacity-90 [font-family:'Roboto',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 mt-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
