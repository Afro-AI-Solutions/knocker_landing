import React from "react";

const usefulLinks = [
  { text: "Home" },
  { text: "About us" },
  { text: "Services" },
  { text: "Terms of service" },
  { text: "Privacy policy" },
];

const services = [
  { text: "Web Design" },
  { text: "Web Development" },
  { text: "Product Management" },
  { text: "Marketing" },
  { text: "Graphic Design" },
];

const socialIcons = [
  { src: "/figmaAssets/link-6.svg", alt: "Social Link 1" },
  { src: "/figmaAssets/link-8.svg", alt: "Social Link 2" },
  { src: "/figmaAssets/link-5.svg", alt: "Social Link 3" },
  { src: "/figmaAssets/link-11.svg", alt: "Social Link 4" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#000704] py-12">
      <div className="container mx-auto px-[300px]">
        <div className="border-t border-[#ffffff1a] pt-[51px] pb-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-5">
              <div className="mb-[27px]">
                <h3 className="[font-family:'Barlow',Helvetica] font-bold text-white text-3xl tracking-[1.00px] leading-[30px]">
                  Passion
                </h3>
              </div>

              <p className="[font-family:'Barlow',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] mb-[26px]">
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna
                <br />
                derita valies darta donna mare fermentum iaculis eu non diam
                phasellus.
              </p>

              <div className="flex gap-[22px]">
                {socialIcons.map((icon, index) => (
                  <img
                    key={index}
                    className="w-10 h-10"
                    alt={icon.alt}
                    src={icon.src}
                  />
                ))}
              </div>
            </div>

            <div className="col-span-2">
              <h4 className="[font-family:'Barlow',Helvetica] font-bold text-white text-base tracking-[0] leading-[19.2px] mb-[20.2px]">
                Useful Links
              </h4>

              <nav className="flex flex-col gap-[14px]">
                {usefulLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffcc] text-sm tracking-[0] leading-[14px] hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </nav>
            </div>

            <div className="col-span-2">
              <h4 className="[font-family:'Barlow',Helvetica] font-bold text-white text-base tracking-[0] leading-[19.2px] mb-[20.2px]">
                Our Services
              </h4>

              <nav className="flex flex-col gap-[14px]">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffcc] text-sm tracking-[0] leading-[14px] hover:text-white transition-colors"
                  >
                    {service.text}
                  </a>
                ))}
              </nav>
            </div>

            <div className="col-span-3">
              <h4 className="[font-family:'Barlow',Helvetica] font-bold text-white text-base tracking-[0] leading-[19.2px] mb-[20.2px]">
                Contact Us
              </h4>

              <div className="flex flex-col gap-[5px]">
                <p className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px]">
                  A108 Adam Street
                </p>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px]">
                  New York, NY 535022
                </p>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px]">
                  United States
                </p>
              </div>

              <div className="mt-[26px] flex flex-col gap-2.5">
                <p className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px]">
                  <span className="font-bold">Phone:</span> +1 5589 55488 55
                </p>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px]">
                  <span className="font-bold">Email:</span> info@example.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff0d] py-[27px] flex flex-col items-center justify-center gap-[5px]">
          <div className="flex items-center justify-center gap-1">
            <span className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[21px]">
              © Copyright
            </span>
            <span className="[font-family:'Roboto',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-[21px]">
              MyWebsite
            </span>
            <span className="[font-family:'Roboto',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[21px]">
              All Rights Reserved
            </span>
          </div>

          <div className="flex items-center justify-center gap-1">
            <span className="[font-family:'Roboto',Helvetica] font-normal text-white text-[13px] text-center tracking-[0] leading-[19.5px]">
              Designed by
            </span>
            <span className="[font-family:'Roboto',Helvetica] font-normal text-[#12a16b] text-[13px] text-center tracking-[0] leading-[19.5px]">
              BootstrapMade
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
