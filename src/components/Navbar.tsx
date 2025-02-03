import React from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { navLinks } from "@/constants/navLinks";
import { Logos } from "@/constants/icons";

import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 lg:px-8 lg:py-4 bg-white">
      {/* logo */}
      <Logos.Logo_SM />
      {/* nav links */}
      <ul className="hidden lg:flex w-1/2 lg:justify-between">
        {navLinks.map((nav, index) => (
          <Link href={nav.link} key={index}>
            <li>{nav.title}</li>
          </Link>
        ))}
      </ul>

      <HiOutlineMenuAlt3 size={30} className="lg:hidden" />

      {/* buttons */}
      <div className="gap-6 hidden lg:flex">
        <Button size="lg" variant="outline">
          Login
        </Button>
        <Button size="lg" className="text-white">
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
