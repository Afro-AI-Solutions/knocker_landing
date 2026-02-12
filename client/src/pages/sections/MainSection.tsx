import { PlayIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const statistics = [
  {
    value: "500+",
    label: "PROJECTS COMPLETED",
  },
  {
    value: "98%",
    label: "CLIENT SATISFACTION",
  },
  {
    value: "24/7",
    label: "SUPPORT AVAILABLE",
  },
];

const featureCards = [
  {
    icon: "/figmaAssets/icon-22.svg",
    title: "Secure & Reliable",
  },
  {
    icon: "/figmaAssets/icon-4.svg",
    title: "High Performance",
  },
  {
    icon: "/figmaAssets/icon.svg",
    title: "Expert Team",
  },
  {
    icon: "/figmaAssets/icon-6.svg",
    title: "Award Winning",
  },
];

export const MainSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1168px] bg-[#000704]">
      <div className="absolute w-full h-full top-0 left-0 bg-[url(/figmaAssets/bg-14-webp.png)] bg-cover bg-[50%_50%]" />

      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(149deg,rgba(0,7,4,0.75)_0%,rgba(0,7,4,0.9)_100%)]" />

      <div className="relative max-w-[1920px] mx-auto h-full">
        <div className="absolute top-[355px] left-[315px]">
          <Badge className="h-auto px-[21px] py-[11px] bg-[#11a16bcc] border-[#11a16b66] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] rounded-[50px] hover:bg-[#11a16bcc]">
            <span className="[font-family:'Roboto',Helvetica] font-semibold text-white text-sm tracking-[1.00px] leading-[21px]">
              INNOVATIVE SOLUTIONS
            </span>
          </Badge>
        </div>

        <h1 className="absolute top-[411px] left-[315px] w-[625px] [font-family:'Barlow',Helvetica] font-extrabold text-white text-[56px] leading-[61.6px] tracking-[0]">
          Transform Your Business
          <br />
          with Modern Technology
        </h1>

        <p className="absolute top-[565px] left-[315px] w-[493px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffb2] text-xl leading-8 tracking-[0]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Sed do eiusmod tempor incididunt ut labore et dolore
          <br />
          magna aliqua. Ut enim ad minim veniam quis nostrud.
        </p>

        <div className="absolute top-[calc(50.00%_+_113px)] left-[315px] flex items-center gap-4">
          <Button className="h-14 px-8 bg-[#14201c] hover:bg-[#14201c]/90 rounded-lg">
            <span className="[font-family:'Roboto',Helvetica] font-semibold text-white text-base tracking-[0] leading-6">
              Explore Services
            </span>
          </Button>

          <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
            <div className="flex items-center gap-3">
              <PlayIcon className="w-6 h-6 text-[#12a16b] fill-[#12a16b]" />
              <span className="[font-family:'Roboto',Helvetica] font-semibold text-[#12a16b] text-base tracking-[0] leading-6">
                Watch Demo
              </span>
            </div>
          </Button>
        </div>

        <div className="absolute top-[813px] left-[315px] flex gap-[40px]">
          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="[font-family:'Roboto',Helvetica] font-extrabold text-[#12a16b] text-[32px] leading-8 tracking-[0]">
                {stat.value}
              </div>
              <div className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffb2] text-sm tracking-[0.50px] leading-[21px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-[473px] left-[50.21%] w-[16.90%] flex flex-col gap-5">
          {featureCards.slice(0, 2).map((card, index) => (
            <Card
              key={index}
              className="bg-[#ffffff1a] border-[#ffffff33] shadow-[0px_8px_32px_#0000001a] backdrop-blur-[2.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100%)] rounded-2xl"
            >
              <CardContent className="flex flex-col items-center gap-[21px] pt-8 pb-8">
                <img className="w-8 h-8" alt="Icon" src={card.icon} />
                <div className="[font-family:'Roboto',Helvetica] font-semibold text-[#ffffffb2] text-sm text-center tracking-[0] leading-[21px]">
                  {card.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="absolute top-[473px] left-[67.11%] w-[16.90%] flex flex-col gap-5">
          {featureCards.slice(2, 4).map((card, index) => (
            <Card
              key={index}
              className="bg-[#ffffff1a] border-[#ffffff33] shadow-[0px_8px_32px_#0000001a] backdrop-blur-[2.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100%)] rounded-2xl"
            >
              <CardContent className="flex flex-col items-center gap-[21px] pt-8 pb-8">
                <img className="w-8 h-8" alt="Icon" src={card.icon} />
                <div className="[font-family:'Roboto',Helvetica] font-semibold text-[#ffffffb2] text-sm text-center tracking-[0] leading-[21px]">
                  {card.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
