import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const pricingPlans = [
  {
    icon: "/figmaAssets/overlay-8.svg",
    name: "Standard",
    price: "9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    features: [
      "Vestibulum ante ipsum primis",
      "Fusce vulputate eleifend",
      "Nullam ac tortor vitae",
    ],
    isRecommended: false,
    buttonVariant: "outline" as const,
  },
  {
    icon: "/figmaAssets/overlay-7.svg",
    name: "Professional",
    price: "29",
    description: "Maecenas tempus tellus eget condimentum rhoncus semper.",
    features: [
      "Donec quam felis ultricies",
      "Aenean massa imperdiet",
      "Cras dapibus vivamus",
    ],
    isRecommended: true,
    buttonVariant: "default" as const,
  },
  {
    icon: "/figmaAssets/overlay-11.svg",
    name: "Ultimate",
    price: "49",
    description: "Etiam rhoncus maecenas tempus tellus eget condimentum.",
    features: [
      "Phasellus viverra nulla",
      "Quisque rutrum aenean",
      "Etiam ultricies nisi vel",
    ],
    isRecommended: false,
    buttonVariant: "outline" as const,
  },
];

export const TestimonialSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-[60px]">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="flex flex-col gap-5 mb-[60px]">
          <div className="relative flex items-center justify-center h-[58.39px] mx-3">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-px w-40 h-px bg-[#141f1c66]" />
            <h2 className="[font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-[32px] text-center tracking-[0] leading-[38.4px] whitespace-nowrap">
              Pricing
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60px] h-[3px] bg-[#14201c]" />
          </div>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-[#14201c] text-base text-center tracking-[0] leading-6 whitespace-nowrap mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-white rounded-2xl ${
                plan.isRecommended
                  ? "border-2 border-[#11a16b33] bg-[linear-gradient(115deg,rgba(18,161,107,0.03)_0%,rgba(255,255,255,1)_100%)]"
                  : "border-0 shadow-sm"
              }`}
            >
              {plan.isRecommended && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#14201c] hover:bg-[#14201c] rounded-[50px] h-[33px] px-6">
                  <span className="[font-family:'Roboto',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap">
                    Recommended
                  </span>
                </Badge>
              )}

              <CardContent className="flex flex-col items-center pt-10 pb-[32px] px-10">
                <img
                  className="w-14 h-14 mb-[18px]"
                  alt={`${plan.name} icon`}
                  src={plan.icon}
                />

                <h3 className="[font-family:'Barlow',Helvetica] font-medium text-[#0a3223] text-2xl text-center tracking-[0] leading-[28.8px] whitespace-nowrap mb-[29px]">
                  {plan.name}
                </h3>

                <div className="flex items-start justify-center mb-[18px]">
                  <span className="[font-family:'Roboto',Helvetica] font-medium text-[#0a3223] text-2xl text-center tracking-[0] leading-9 whitespace-nowrap">
                    $
                  </span>
                  <span className="[font-family:'Roboto',Helvetica] font-bold text-[#0a3223] text-5xl text-center tracking-[0] leading-[72px] whitespace-nowrap">
                    {plan.price}
                  </span>
                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[#141f1c99] text-base text-center tracking-[0] leading-6 whitespace-nowrap mt-[37px] ml-1">
                    /month
                  </span>
                </div>

                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#141f1cb2] text-base text-center tracking-[0] leading-6 mb-[35px] min-h-[43px]">
                  {plan.description}
                </p>

                <div className="flex flex-col gap-0 w-full mb-[33px]">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-[26px] h-[51px]"
                    >
                      <img
                        className="w-[18px] h-[18px] flex-shrink-0"
                        alt="Check icon"
                        src="/figmaAssets/icon-9.svg"
                      />
                      <span className="[font-family:'Roboto',Helvetica] font-normal text-[#141f1ccc] text-[15px] tracking-[0] leading-[22.5px] whitespace-nowrap">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`h-[46px] px-8 rounded-[50px] ${
                    plan.isRecommended
                      ? "bg-[#14201c] hover:bg-[#14201c]/90 text-white"
                      : "bg-[#11a16b1a] hover:bg-[#11a16b2a] text-[#12a16b]"
                  }`}
                  variant={plan.buttonVariant}
                >
                  <span className="[font-family:'Roboto',Helvetica] font-medium text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap">
                    Buy Now
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
