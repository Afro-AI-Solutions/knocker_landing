import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    image: "/figmaAssets/person-f-5-webp.png",
    name: "Sara Wilsson",
    role: "Designer",
  },
  {
    quote:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    image: "/figmaAssets/person-f-12-webp.png",
    name: "Jena Karlis",
    role: "Store Owner",
  },
  {
    quote:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    image: "/figmaAssets/person-m-12-webp.png",
    name: "Matt Brandon",
    role: "Freelancer",
  },
];

const paginationDots = [
  { active: false },
  { active: true },
  { active: false },
  { active: false },
  { active: false },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <section className="bg-white py-[60px] w-full">
      <div className="max-w-[1296px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center">
              <Card className="bg-[#141f1c08] border-0 shadow-none mb-[35px] w-full">
                <CardContent className="relative p-6 pt-5">
                  <img
                    className="absolute top-5 left-7 w-[26px] h-[26px]"
                    alt="Quote icon"
                    src="/figmaAssets/icon-21.svg"
                  />

                  <div className="px-8 py-2">
                    <p className="[font-family:'Roboto',Helvetica] font-normal italic text-[#14201c] text-base text-center tracking-[0] leading-6">
                      {testimonial.quote}
                    </p>
                  </div>

                  <img
                    className="absolute bottom-5 right-7 w-[26px] h-[26px]"
                    alt="Quote icon"
                    src="/figmaAssets/icon-26.svg"
                  />
                </CardContent>
              </Card>

              <Avatar className="h-[90px] w-[90px] mb-[9px]">
                <AvatarImage
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover"
                />
              </Avatar>

              <h3 className="[font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-lg text-center tracking-[0] leading-[21.6px] mb-[5.6px]">
                {testimonial.name}
              </h3>

              <p className="[font-family:'Barlow',Helvetica] font-medium text-[#141f1ccc] text-sm text-center tracking-[0] leading-[16.8px]">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 mt-[37px]">
          {paginationDots.map((dot, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-md border border-solid ${
                dot.active
                  ? "bg-[#14201c] border-[#14201c]"
                  : "bg-white border-[#12a16b]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
