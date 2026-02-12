import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const statistics = [
  {
    value: "8+",
    label: "YEARS EXPERIENCE",
  },
  {
    value: "450+",
    label: "PROJECTS COMPLETED",
  },
  {
    value: "25",
    label: "TEAM MEMBERS",
  },
];

export const LayoutSection = (): JSX.Element => {
  return (
    <section className="bg-white w-full py-[60px]">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="[font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-[40px] leading-[48px] tracking-[0]">
              Transforming Ideas Into Reality
              <br />
              Since 2015
            </h2>

            <p className="[font-family:'Roboto',Helvetica] font-medium text-[#141f1ccc] text-xl tracking-[0] leading-8">
              We are a passionate team of innovators dedicated to creating
              <br />
              exceptional digital experiences that drive meaningful results for
              <br />
              businesses worldwide.
            </p>

            <p className="[font-family:'Roboto',Helvetica] font-normal text-[#141f1cd9] text-base tracking-[0] leading-[27.2px]">
              Our journey began with a simple vision: to bridge the gap between
              cutting-edge
              <br />
              technology and human-centered design. Today, we&#39;ve grown into
              a trusted partner for
              <br />
              companies seeking to transform their digital presence and
              accelerate their growth.
            </p>

            <p className="[font-family:'Roboto',Helvetica] font-normal text-[#141f1cd9] text-base tracking-[0] leading-[27.2px]">
              Through collaborative partnerships and innovative solutions,
              we&#39;ve helped hundreds of
              <br />
              organizations achieve their goals while building lasting
              relationships founded on trust,
              <br />
              transparency, and exceptional results.
            </p>

            <div className="border-t border-b border-[#141f1c26] py-8 mt-6">
              <div className="grid grid-cols-3 gap-8">
                {statistics.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="[font-family:'Barlow',Helvetica] font-bold text-[#12a16b] text-[40px] leading-[60px] tracking-[0] text-center">
                      {stat.value}
                    </div>
                    <div className="[font-family:'Roboto',Helvetica] font-normal text-[#141f1cb2] text-[14.4px] tracking-[0.50px] leading-[21.6px] text-center whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <Button className="h-[52px] bg-[#14201c] hover:bg-[#14201c]/90 rounded-[50px] border-2 border-[#14201c] px-8">
                <span className="[font-family:'Roboto',Helvetica] font-semibold text-white text-base tracking-[0.50px] leading-6">
                  DISCOVER OUR WORK
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-[52px] bg-transparent hover:bg-[#14201c]/10 rounded-[50px] border-2 border-[#14201c] px-8"
              >
                <span className="[font-family:'Roboto',Helvetica] font-semibold text-[#12a16b] text-base tracking-[0.50px] leading-6">
                  MEET OUR TEAM
                </span>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-square rounded-[20px] bg-[url(/figmaAssets/about-us.png)] bg-cover bg-center" />

            <Card className="absolute bottom-8 left-[-40px] w-[273px] bg-white rounded-[15px] border border-[#141f1c1a] shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <img
                    className="w-[60px] h-[60px]"
                    alt="Excellence Award"
                    src="/figmaAssets/overlay-5.svg"
                  />
                  <div className="flex flex-col gap-1">
                    <div className="[font-family:'Barlow',Helvetica] font-semibold text-[#0a3223] text-[17.6px] tracking-[0] leading-[21.1px]">
                      Excellence Award
                    </div>
                    <div className="[font-family:'Roboto',Helvetica] font-normal text-[#141f1c99] text-[14.4px] tracking-[0] leading-[21.6px]">
                      Digital Innovation 2023
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
