import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "/figmaAssets/background-16.svg",
    title: "Quick Setup",
    description: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.",
  },
  {
    icon: "/figmaAssets/background-14.svg",
    title: "Full Security",
    description:
      "Sed ut perspiciatis unde omnis iste\nnatus error sit voluptatem.",
  },
];

const floatingBadges = [
  {
    icon: "/figmaAssets/icon-18.svg",
    text: "4.9 Rating",
    position: "top-[20.00%] left-0",
  },
  {
    icon: "/figmaAssets/icon-28.svg",
    text: "10k+ Users",
    position: "top-[65.95%] right-0",
  },
];

const decorativeCircles = [
  {
    className:
      "top-[-150px] right-[-100px] w-[300px] h-[300px] rounded-[150px] bg-[linear-gradient(135deg,rgba(18,161,107,0.15)_0%,rgba(18,161,107,0.05)_100%)]",
  },
  {
    className:
      "left-[259px] bottom-[-100px] w-[200px] h-[200px] rounded-[100px] bg-[linear-gradient(225deg,rgba(10,50,35,0.15)_0%,rgba(10,50,35,0.05)_100%)]",
  },
  {
    className:
      "top-[167px] left-[-75px] w-[150px] h-[150px] rounded-[75px] bg-[linear-gradient(45deg,rgba(18,161,107,0.08)_0%,rgba(10,50,35,0.08)_100%)]",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[100px] bg-[linear-gradient(176deg,rgba(244,249,247,1)_0%,rgba(233,245,240,1)_100%)]">
      <div className="max-w-[1320px] mx-auto px-3">
        <Card className="relative bg-white rounded-[20px] overflow-hidden border-0 shadow-none">
          <CardContent className="p-12 pr-0">
            <div className="flex gap-0">
              <div className="flex-1 pr-12">
                <Badge className="h-10 px-[19.2px] bg-[#11a16b1a] hover:bg-[#11a16b1a] rounded-[30px] border-0">
                  <span className="[font-family:'Roboto',Helvetica] font-semibold text-[#12a16b] text-[13.6px] tracking-[0.50px] leading-[20.4px]">
                    PREMIUM OFFER
                  </span>
                </Badge>

                <h1 className="mt-8 w-[643px] [font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-[40px] tracking-[0] leading-[48px]">
                  Transform Your Experience With Our
                  <br />
                  Solution
                </h1>

                <p className="mt-[43px] w-[594px] [font-family:'Roboto',Helvetica] font-normal text-[#141f1ccc] text-[16.8px] tracking-[0] leading-[26.9px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                  <br />
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam.
                </p>

                <div className="mt-[34px] flex gap-[276px]">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <img
                        className="w-[50px] h-[50px]"
                        alt={feature.title}
                        src={feature.icon}
                      />
                      <div>
                        <h3 className="[font-family:'Barlow',Helvetica] font-semibold text-[#0a3223] text-xl tracking-[0] leading-6">
                          {feature.title}
                        </h3>
                        <p className="mt-[10px] [font-family:'Roboto',Helvetica] font-normal text-[#141f1cbf] text-[14.4px] tracking-[0] leading-[21.6px] whitespace-pre-line">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-[73px] flex items-center gap-4">
                  <Button className="h-[50px] px-[33px] bg-[#12a16b] hover:bg-[#12a16b]/90 rounded-lg border border-solid">
                    <span className="[font-family:'Roboto',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-6">
                      Start Now
                    </span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-[52px] px-[34px] rounded-lg border-2 border-solid border-[#11a16bb2] bg-transparent hover:bg-transparent"
                  >
                    <span className="[font-family:'Roboto',Helvetica] font-semibold text-[#12a16b] text-base text-center tracking-[0] leading-6">
                      Learn More
                    </span>
                  </Button>

                  <div className="flex items-center gap-2 ml-6">
                    <img
                      className="w-5 h-5"
                      alt="Money back guarantee"
                      src="/figmaAssets/icon-16.svg"
                    />
                    <span className="[font-family:'Roboto',Helvetica] font-medium text-[#0a3223] text-[14.4px] tracking-[0] leading-[21.6px]">
                      30-Day Money Back
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative w-[444px] bg-[#11a16b0d] flex-shrink-0">
                <div className="absolute w-[31.48%] h-[30.55%] top-[59.46%] left-[10.00%] rounded-[20px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(18,161,107,0.6)_9%,rgba(18,161,107,0)_9%)] opacity-60" />

                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[444px] h-[296px] bg-[url(/figmaAssets/illustration.png)] bg-cover bg-[50%_50%]" />

                {floatingBadges.map((badge, index) => (
                  <div
                    key={index}
                    className={`absolute ${badge.position} h-[9.05%] flex items-center gap-2 px-4 rounded-xl shadow-[0px_10px_20px_#00000014] bg-white`}
                  >
                    <img
                      className="w-[17.59px] h-[18px]"
                      alt={badge.text}
                      src={badge.icon}
                    />
                    <span className="[font-family:'Roboto',Helvetica] font-semibold text-[#0a3223] text-[14.4px] tracking-[0] leading-[21.6px] whitespace-nowrap">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute w-full h-full top-0 left-0 overflow-hidden pointer-events-none">
              {decorativeCircles.map((circle, index) => (
                <div key={index} className={`absolute ${circle.className}`} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
