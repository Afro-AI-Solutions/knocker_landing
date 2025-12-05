import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: "/figmaAssets/background-2.svg",
    stepNumber: "STEP 1",
    title: "Research & Planning",
    description:
      "Nulla facilisi morbi tempus iaculis\nurna id. Vestibulum ante ipsum\nprimis in faucibus orci luctus et\nultrices posuere.",
    showArrow: true,
  },
  {
    icon: "/figmaAssets/background-4.svg",
    stepNumber: "STEP 2",
    title: "Creative Solutions",
    description:
      "Sed ut perspiciatis unde omnis\niste natus error sit voluptatem\naccusantium doloremque\nlaudantium, totam rem aperiam.",
    showArrow: true,
  },
  {
    icon: "/figmaAssets/background-6.svg",
    stepNumber: "STEP 3",
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt ut\nlabore et dolore magna.",
    showArrow: true,
  },
  {
    icon: "/figmaAssets/background-1.svg",
    stepNumber: "STEP 4",
    title: "Launch & Support",
    description:
      "At vero eos et accusamus et iusto\nodio dignissimos ducimus qui\nblanditiis praesentium voluptatum\ndeleniti atque.",
    showArrow: false,
  },
];

export const ContentSection = (): JSX.Element => {
  return (
    <section className="bg-white py-[60px] w-full">
      <div className="max-w-[1320px] mx-auto px-3">
        <header className="flex flex-col gap-5 mb-[60px]">
          <div className="relative flex flex-col items-center gap-[19.61px]">
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 bottom-px w-40 h-px bg-[#141f1c66]" />
              <h2 className="[font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-[32px] text-center tracking-[0] leading-[38.4px] whitespace-nowrap">
                How We Work
              </h2>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60px] h-[3px] bg-[#12a16b]" />
            </div>
          </div>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-[#14201c] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </header>

        <div className="grid grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white rounded-[20px] border border-solid border-[#11a16b1a] shadow-[0px_10px_40px_#00000014]">
                <CardContent className="flex flex-col items-center pt-[41px] pb-[45px] px-6">
                  <img
                    className="w-20 h-20"
                    alt={`${step.title} icon`}
                    src={step.icon}
                  />

                  <Badge className="mt-6 h-9 px-4 rounded-[25px] bg-[linear-gradient(155deg,rgba(18,161,107,1)_0%,rgba(14,129,86,1)_100%)] border-0 hover:bg-[linear-gradient(155deg,rgba(18,161,107,1)_0%,rgba(14,129,86,1)_100%)]">
                    <span className="[font-family:'Roboto',Helvetica] font-semibold text-white text-[13.6px] text-center tracking-[0.50px] leading-[20.4px] whitespace-nowrap">
                      {step.stepNumber}
                    </span>
                  </Badge>

                  <h3 className="mt-4 [font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-[22.4px] text-center tracking-[0] leading-[26.9px] whitespace-nowrap">
                    {step.title}
                  </h3>

                  <p className="mt-[19px] [font-family:'Roboto',Helvetica] font-normal text-[#14201c] text-[15.2px] text-center tracking-[0] leading-[24.3px] whitespace-pre-line">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {step.showArrow && (
                <img
                  className="absolute top-1/2 -translate-y-1/2 -right-3.5 w-[30px] h-[30px]"
                  alt="Arrow"
                  src="/figmaAssets/background-3.svg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
