import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactCards = [
  {
    icon: "/figmaAssets/overlay-20.svg",
    title: "Location",
    content: "8721 Broadway Avenue, New York, NY\n10023",
    gridArea: "location",
  },
  {
    icon: "/figmaAssets/overlay-16.svg",
    title: "Email",
    content: "info@examplecompany.com",
    gridArea: "email",
  },
  {
    icon: "/figmaAssets/overlay-17.svg",
    title: "Call",
    content: "+1 (212) 555-7890",
    gridArea: "call",
  },
  {
    icon: "/figmaAssets/overlay-18.svg",
    title: "Open Hours",
    content: "Monday-Friday: 9AM - 6PM",
    gridArea: "hours",
  },
];

const socialLinks = [
  { icon: "/figmaAssets/link-3.svg", alt: "Social link 1" },
  { icon: "/figmaAssets/link-7.svg", alt: "Social link 2" },
  { icon: "/figmaAssets/link-9.svg", alt: "Social link 3" },
  { icon: "/figmaAssets/link-4.svg", alt: "Social link 4" },
];

const mapTiles = [
  { top: "top-[614px]", left: "left-12", bg: "bg-[url(/figmaAssets/vt.png)]" },
  {
    top: "top-[614px]",
    left: "-left-52",
    bg: "bg-[url(/figmaAssets/vt-1.png)]",
  },
  {
    top: "top-[-154px]",
    left: "-left-52",
    bg: "bg-[url(/figmaAssets/vt-2.png)]",
  },
  {
    top: "top-[358px]",
    left: "left-12",
    bg: "bg-[url(/figmaAssets/vt-3.png)]",
  },
  {
    top: "top-[102px]",
    left: "-left-52",
    bg: "bg-[url(/figmaAssets/vt-4.png)]",
  },
  {
    top: "top-[102px]",
    left: "left-12",
    bg: "bg-[url(/figmaAssets/vt-5.png)]",
  },
  {
    top: "top-[358px]",
    left: "-left-52",
    bg: "bg-[url(/figmaAssets/vt-6.png)]",
  },
  {
    top: "top-[-154px]",
    left: "left-12",
    bg: "bg-[url(/figmaAssets/vt-7.png)]",
  },
  {
    top: "top-[358px]",
    left: "left-[304px]",
    bg: "bg-[url(/figmaAssets/vt-8.png)]",
  },
  {
    top: "top-[358px]",
    left: "left-[560px]",
    bg: "bg-[url(/figmaAssets/vt-9.png)]",
  },
  {
    top: "top-[-154px]",
    left: "left-[560px]",
    bg: "bg-[url(/figmaAssets/vt-10.png)]",
  },
  {
    top: "top-[614px]",
    left: "left-[304px]",
    bg: "bg-[url(/figmaAssets/vt-11.png)]",
  },
  {
    top: "top-[614px]",
    left: "left-[560px]",
    bg: "bg-[url(/figmaAssets/vt-12.png)]",
  },
  {
    top: "top-[102px]",
    left: "left-[560px]",
    bg: "bg-[url(/figmaAssets/vt-13.png)]",
  },
  {
    top: "top-[-154px]",
    left: "left-[304px]",
    bg: "bg-[url(/figmaAssets/vt-14.png)]",
  },
  {
    top: "top-[102px]",
    left: "left-[304px]",
    bg: "bg-[url(/figmaAssets/vt-15.png)]",
  },
];

const stars = Array(5).fill(null);

export const ContactSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[60px]">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="flex flex-col gap-[117.6px]">
        <header className="flex flex-col gap-5">
          <div className="relative flex items-center justify-center h-[58.39px] px-3">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-px w-40 h-px bg-[#141f1c66]" />
            <h2 className="[font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-[32px] text-center tracking-[0] leading-[38.4px] whitespace-nowrap">
              Contact
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60px] h-[3px] bg-[#12a16b]" />
          </div>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-[#14201c] text-base text-center tracking-[0] leading-6 max-w-[585.42px] mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </header>

        <div className="grid grid-cols-[583px_1fr] gap-6">
          <div className="rounded-2xl overflow-hidden">
            <div className="relative w-full h-[776.48px] bg-[#e5e3df] overflow-hidden">
              {mapTiles.map((tile, index) => (
                <div
                  key={index}
                  className={`absolute w-64 h-64 ${tile.bg} bg-cover bg-[50%_50%] ${tile.top} ${tile.left}`}
                />
              ))}

              <Card className="absolute top-2.5 left-2.5 w-[302px] h-[108px] rounded-sm shadow-[0px_1px_4px_-1px_#0000004c]">
                <CardContent className="p-0 h-full">
                  <div className="p-2.5">
                    <div className="flex items-center justify-between">
                      <h3 className="[font-family:'Roboto',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal]">
                        Downtown. Conference Center
                      </h3>
                    </div>
                    <p className="mt-2 [font-family:'Roboto',Helvetica] font-normal text-[#5b5b5b] text-xs tracking-[0] leading-[normal]">
                      157 William St, New York, NY 10038
                    </p>
                  </div>

                  <div className="absolute top-2.5 right-5 flex flex-col items-center gap-[5px]">
                    <div className="w-[22px] h-[22px] [background:url(/figmaAssets/image-5.png)_50%_50%_/_cover]" />
                    <span className="[font-family:'Roboto',Helvetica] font-normal text-[#1a73e8] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                      Directions
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-3 flex items-center gap-2">
                    <span className="[font-family:'Roboto',Helvetica] font-medium text-[#5b5b5b] text-sm tracking-[0] leading-[normal]">
                      4.3
                    </span>
                    <div className="flex gap-0">
                      {stars.map((_, index) => (
                        <div
                          key={index}
                          className="w-[11px] h-[11px] [background:url(/figmaAssets/image-5.png)_50%_50%_/_cover]"
                        />
                      ))}
                    </div>
                    <span className="[font-family:'Roboto',Helvetica] font-normal text-[#1a73e8] text-xs tracking-[0] leading-[normal]">
                      84 reviews
                    </span>
                  </div>

                  <button className="absolute bottom-3 left-3 [font-family:'Roboto',Helvetica] font-normal text-[#1a73e8] text-xs tracking-[0] leading-[normal]">
                    View larger map
                  </button>
                </CardContent>
              </Card>

              <img
                className="absolute top-[712px] left-[533px] w-10 h-10"
                alt="Map camera controls"
                src="/figmaAssets/gmp-internal-camera-control---button---map-camera-controls.svg"
              />

              <img
                className="absolute top-[723px] left-2.5 w-[42px] h-[42px]"
                alt="Show satellite imagery"
                src="/figmaAssets/button---show-satellite-imagery.svg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              {contactCards.map((card, index) => (
                <Card
                  key={index}
                  className="rounded-xl shadow-[0px_5px_15px_#0000000a]"
                >
                  <CardContent className="p-5 flex gap-[15px]">
                    <img
                      className="w-[50px] h-[50px] flex-shrink-0"
                      alt={card.title}
                      src={card.icon}
                    />
                    <div className="flex flex-col gap-3">
                      <h3 className="[font-family:'Barlow',Helvetica] font-semibold text-[#0a3223] text-lg tracking-[0] leading-[21.6px]">
                        {card.title}
                      </h3>
                      <p className="[font-family:'Roboto',Helvetica] font-normal text-[#14201c] text-sm tracking-[0] leading-[21px] whitespace-pre-line">
                        {card.content}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="rounded-2xl shadow-[0px_10px_30px_#00000014]">
              <CardContent className="p-[30px]">
                <form className="flex flex-col gap-[16px]">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="h-[54px] bg-[#fbfcfe] rounded-[10px] border-[#141f1c1a] [font-family:'Roboto',Helvetica] font-normal text-base"
                    />
                    <Input
                      placeholder="Your Email"
                      type="email"
                      className="h-[54px] bg-[#fbfcfe] rounded-[10px] border-[#141f1c1a] [font-family:'Roboto',Helvetica] font-normal text-base"
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    className="h-[54px] bg-[#fbfcfe] rounded-[10px] border-[#141f1c1a] [font-family:'Roboto',Helvetica] font-normal text-base"
                  />
                  <Textarea
                    placeholder="Message"
                    className="h-[150px] bg-[#fbfcfe] rounded-[10px] border-[#141f1c1a] [font-family:'Roboto',Helvetica] font-normal text-base resize-none"
                  />
                  <div className="flex justify-end gap-[10px] mt-5">
                    {socialLinks.map((link, index) => (
                      <button
                        key={index}
                        type="button"
                        className="w-[38px] h-[38px]"
                      >
                        <img
                          className="w-full h-full"
                          alt={link.alt}
                          src={link.icon}
                        />
                      </button>
                    ))}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
