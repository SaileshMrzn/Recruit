import React from "react";

import { Logos, Icons } from "@/constants/icons";
import { links } from "@/constants/footerLinks";

const Footer = () => {
  return (
    <div className="bg-[#020617] w-full text-white p-6 lg:p-16">
      {/* info and links container */}
      <div className="flex flex-col xl:flex-row xl:justify-between xl:gap-20 xl:items-center">
        {/* info */}
        <div className="self-start">
          <Logos.Logo_Second />
          <p className="mt-4 xl:w-2/3 self-start">
            Recruit Nepal is a pioneering recruitment agency established in
            2021, originally founded as Intern Nepal. We offer AI-driven talent
            extraction services. Our platform is unique to helping candidates
            find promising roles in top companies.
          </p>
        </div>

        {/* links */}
        <div className="flex flex-wrap gap-8 mt-16 w-full justify-between pr-44 xl:mt-0">
          {links.map((link, index) => (
            <div key={index}>
              <p className="mb-4 font-semibold">{link.category}</p>
              <ul className="flex flex-col gap-4">
                {link.links.map((item, index) => (
                  <li key={index}>{item.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* divider */}
      <div className="h-px w-full bg-white opacity-10 my-10"></div>

      {/* cc and socials container */}
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
        {/* cc */}
        <p>All rights reserved @rajeshgraphix2024</p>

        {/* socials */}
        <div className="flex gap-6 items-center">
          <Icons.Facebook />
          <Icons.Linkedin />
          <Icons.Instagram />
          <Icons.Youtube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
