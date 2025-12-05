import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar?",
    answer:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
    defaultOpen: true,
  },
  {
    id: "item-2",
    question:
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem?",
    answer: "",
    defaultOpen: false,
  },
  {
    id: "item-3",
    question: "Vestibulum ante ipsum primis in faucibus orci luctus?",
    answer: "",
    defaultOpen: false,
  },
  {
    id: "item-4",
    question: "Nulla facilisi morbi tempus iaculis urna id volutpat?",
    answer: "",
    defaultOpen: false,
  },
  {
    id: "item-5",
    question: "Praesent sapien massa, convallis a pellentesque nec?",
    answer: "",
    defaultOpen: false,
  },
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="flex flex-col bg-white w-full py-[60px] px-4">
      <div className="max-w-[1320px] mx-auto w-full flex flex-col gap-5 mb-[60px]">
        <div className="relative flex flex-col items-center">
          <div className="absolute left-[calc(50%_-_80px)] bottom-px w-40 h-px bg-[#141f1c66]" />

          <h2 className="[font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-[32px] text-center tracking-[0] leading-[38.4px] whitespace-nowrap">
            Frequently Asked Questions
          </h2>

          <div className="w-[60px] h-[3px] bg-[#12a16b] mt-5" />
        </div>

        <p className="flex items-center justify-center h-6 [font-family:'Roboto',Helvetica] font-normal text-[#14201c] text-base text-center tracking-[0] leading-6 whitespace-nowrap mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="max-w-[800px] mx-auto w-full flex flex-col gap-6">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="flex flex-col gap-6"
        >
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-white rounded-[10px] overflow-hidden border-0 shadow-[0px_5px_20px_#00000014] data-[state=open]:border-l-4 data-[state=open]:border-l-[#12a16b]"
            >
              <AccordionTrigger className="flex items-center justify-between px-[29px] py-[38.7px] hover:no-underline [&[data-state=open]>div]:text-[#12a16b]">
                <div className="flex items-center gap-5 flex-1">
                  <img
                    className="w-[50px] h-[50px]"
                    alt="FAQ icon"
                    src="/figmaAssets/overlay-9.svg"
                  />
                  <div className="[font-family:'Barlow',Helvetica] font-semibold text-[#0a3223] text-[17.6px] tracking-[0] leading-[24.6px] text-left">
                    {faq.question}
                  </div>
                </div>
              </AccordionTrigger>
              {faq.answer && (
                <AccordionContent className="px-[54px] pb-[25px]">
                  <div className="[font-family:'Roboto',Helvetica] font-normal text-[#141f1ccc] text-[15.2px] tracking-[0] leading-[24.3px]">
                    {faq.answer}
                  </div>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
