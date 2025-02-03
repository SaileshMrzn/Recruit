"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Dot } from "lucide-react";

import { navLinks } from "@/constants/navLinks";
import { Logos, Icons } from "@/constants/icons";

import { Button } from "./ui/button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center p-2 lg:px-8 lg:py-4 bg-white">
      {/* logo */}
      <div className="min-w-56">
        <Logos.Logo_SM className="lg:hidden" />
        <Logos.Logo className="hidden lg:block" />
      </div>
      {/* nav links */}
      <nav className="hidden lg:flex w-1/2 lg:justify-between">
        {navLinks.map((nav, index) => {
          const isActive = pathname === nav.link;
          return (
            <Link
              href={nav.link}
              key={index}
              className={`${
                isActive ? "text-primary font-semibold" : "text-gray-700"
              } hover:text-primary items-center justify-center relative`}
            >
              {nav.title}
              <div
                className={`${
                  isActive ? "absolute" : "hidden"
                } left-1/2 transform -translate-x-1/2 -bottom-5 flex justify-center w-full`}
              >
                <Dot />
              </div>
            </Link>
          );
        })}
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
