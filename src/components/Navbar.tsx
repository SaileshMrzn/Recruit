import React from "react";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks } from "@/constants/navLinks";
import { Logos, Icons } from "@/constants/icons";

import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 lg:px-8 lg:py-4 bg-white">
      {/* logo */}
      <div className="min-w-56">
        <Logos.Logo_SM className="lg:hidden" />
        <Logos.Logo className="hidden lg:block" />
      </div>
      {/* nav links */}
      <nav className="hidden lg:flex w-1/2 lg:justify-between">
        {navLinks.map((nav, index) => (
          <Link href={nav.link} key={index}>
            {nav.title}
          </Link>
        ))}
      </nav>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Icons.MenuIcon className="lg:hidden" />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Menu</SheetTitle>
            <nav className="flex flex-col mt-6 gap-4">
              {navLinks.map((nav, index) => (
                <SheetClose key={index} asChild>
                  <Link
                    href={nav.link}
                    className="text-lg font-medium hover:text-primary"
                  >
                    {nav.title}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="flex gap-6 mt-6">
              <Button size="lg" variant="outline">
                Login
              </Button>
              <Button size="lg" className="text-white">
                Signup
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* buttons */}
      <div className="gap-6 hidden lg:flex min-w-56">
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
