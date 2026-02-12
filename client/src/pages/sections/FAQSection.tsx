import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sophia Reynolds",
    role: "Product Designer",
    description:
      "Duis aute irure dolor in reprehenderit in\nvoluptate velit esse cillum dolore eu fugiat\nnulla pariatur.",
    image: "/figmaAssets/person-f-5-webp-1.png",
  },
  {
    name: "Daniel Chen",
    role: "Marketing Specialist",
    description:
      "Excepteur sint occaecat cupidatat non\nproident, sunt in culpa qui officia deserunt\nmollit anim id est laborum.",
    image: "/figmaAssets/person-m-8-webp.png",
  },
  {
    name: "Olivia Thompson",
    role: "Lead Developer",
    description:
      "Sed ut perspiciatis unde omnis iste natus\nerror sit voluptatem accusantium\ndoloremque laudantium.",
    image: "/figmaAssets/person-f-9-webp.png",
  },
  {
    name: "Jason Parker",
    role: "UI/UX Designer",
    description:
      "Nemo enim ipsam voluptatem quia\nvoluptas sit aspernatur aut odit aut fugit,\nsed quia consequuntur magni.",
    image: "/figmaAssets/person-m-12-webp-1.png",
  },
];

const paginationDots = [
  { width: "w-2.5", active: false },
  { width: "w-[30px]", active: true },
  { width: "w-2.5", active: false },
  { width: "w-2.5", active: false },
  { width: "w-2.5", active: false },
];

export const FAQSection = (): JSX.Element => {
  return (
    <section className="py-[60px] bg-white w-full">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="flex flex-col gap-5 mb-[60px]">
          <div className="relative px-3">
            <div className="absolute left-[calc(50.00%_-_80px)] bottom-px w-40 h-px bg-[#141f1c66]" />

            <div className="flex items-center justify-center">
              <h2 className="[font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-[32px] text-center tracking-[0] leading-[38.4px] whitespace-nowrap">
                Team
              </h2>
            </div>

            <div className="absolute left-[calc(50.00%_-_30px)] bottom-0 w-[60px] h-[3px] bg-[#14201c]" />
          </div>

          <p className="[font-family:'Roboto',Helvetica] font-normal text-[#14201c] text-base text-center tracking-[0] leading-6 whitespace-nowrap mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-4 gap-[31px]">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white rounded-[10px] overflow-hidden shadow-[0px_5px_25px_#00000014] border-0"
              >
                <CardContent className="p-0 flex flex-col">
                  <div
                    className="w-full h-[301.5px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />

                  <div className="flex flex-col items-center px-5 pb-5">
                    <h3 className="mt-5 [font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-xl text-center tracking-[0] leading-6 whitespace-nowrap">
                      {member.name}
                    </h3>

                    <p className="mt-[5px] [font-family:'Roboto',Helvetica] font-normal text-[#141f1cb2] text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                      {member.role}
                    </p>

                    <p className="mt-5 [font-family:'Roboto',Helvetica] font-normal text-[#141f1ce6] text-sm text-center tracking-[0] leading-[21px] whitespace-pre-line">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center gap-5 mt-[62px]">
            {paginationDots.map((dot, index) => (
              <div
                key={index}
                className={`${dot.width} h-2.5 rounded-[5px] ${
                  dot.active ? "bg-[#14201c]" : "bg-[#14201c]/30"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-[calc(50.00%_-_22px)] left-2.5 w-10 h-10 bg-[#11a16bcc] rounded-[20px] hover:bg-[#11a16bcc]/90"
          >
            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[8px] tracking-[0] leading-4">
              prev
            </span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-[calc(50.00%_-_22px)] right-2.5 w-10 h-10 bg-[#11a16bcc] rounded-[20px] hover:bg-[#11a16bcc]/90"
          >
            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[8px] tracking-[0] leading-4">
              next
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
