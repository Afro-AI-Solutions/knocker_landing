import React from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const filterCategories = [
  { id: "all", label: "All" },
  { id: "photography", label: "Photography" },
  { id: "design", label: "Design" },
  { id: "automotive", label: "Automotive" },
  { id: "nature", label: "Nature" },
];

const portfolioItems = [
  {
    id: 1,
    image: "/figmaAssets/portfolio-image-5.png",
    height: "h-[555px]",
    gridRow: "row-span-2",
  },
  {
    id: 2,
    image: "/figmaAssets/portfolio-image.png",
    height: "h-[277px]",
    gridRow: "row-span-1",
  },
  {
    id: 3,
    image: "/figmaAssets/portfolio-image-1.png",
    height: "h-[555px]",
    gridRow: "row-span-2",
  },
  {
    id: 4,
    image: "/figmaAssets/portfolio-image-3.png",
    height: "h-[277px]",
    gridRow: "row-span-1",
  },
  {
    id: 5,
    image: "/figmaAssets/portfolio-image-2.png",
    height: "h-[555px]",
    gridRow: "row-span-2",
  },
  {
    id: 6,
    image: "/figmaAssets/portfolio-image-4.png",
    height: "h-[277px]",
    gridRow: "row-span-1",
  },
];

export const BlogSection = (): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = React.useState("all");

  return (
    <section className="relative w-full bg-white py-[60px]">
      <div className="max-w-[1320px] mx-auto px-3">
        <header className="flex flex-col gap-5 mb-[84px]">
          <div className="relative flex flex-col items-center gap-[20.39px]">
            <div className="relative w-40 h-px bg-[#141f1c66]" />
            <h2 className="[font-family:'Barlow',Helvetica] font-bold text-[#0a3223] text-[32px] text-center tracking-[0] leading-[38.4px]">
              Portfolio
            </h2>
            <div className="w-[60px] h-[3px] bg-[#14201c]" />
          </div>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-[#14201c] text-base text-center tracking-[0] leading-6">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </header>

        <div className="flex justify-center mb-[61px]">
          <ToggleGroup
            type="single"
            value={selectedFilter}
            onValueChange={(value) => value && setSelectedFilter(value)}
            className="flex gap-[9px]"
          >
            {filterCategories.map((category) => (
              <ToggleGroupItem
                key={category.id}
                value={category.id}
                className={`h-[31px] px-4 rounded-[50px] [font-family:'Roboto',Helvetica] font-medium text-[15px] tracking-[0] leading-[15px] ${
                  selectedFilter === category.id
                    ? "bg-[#14201c] text-white data-[state=on]:bg-[#14201c] data-[state=on]:text-white"
                    : "bg-[#f2f4f4] text-[#0a3223] data-[state=on]:bg-[#14201c] data-[state=on]:text-white"
                }`}
              >
                {category.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="grid grid-cols-3 gap-[15px] auto-rows-[277px]">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`${item.gridRow} group relative rounded-lg overflow-hidden cursor-pointer`}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
              }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end justify-center pb-[80px] gap-[15px] opacity-0 group-hover:opacity-100">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-[50px] h-[50px] bg-white/90 hover:bg-white rounded-sm"
                >
                  <img className="w-6 h-6" alt="Link" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-[50px] h-[50px] bg-white/90 hover:bg-white rounded-sm"
                >
                  <img className="w-6 h-6" alt="Link" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
