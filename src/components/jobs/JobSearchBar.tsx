"use client";

import React, { useCallback, useEffect, useState } from "react";
import { MapPin, Search, List, ChevronDown } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";

const cities = ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur"];
const categories = ["IT", "Marketing", "Design", "Finance"];

const JobSearchBar = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [jobPlaceholder, setJobPlaceholder] = useState("Job title...");
  const [cityPlaceholder, setCityPlaceholder] = useState("Select city...");
  const [categoryPlaceholder, setCategoryPlaceholder] =
    useState("Select category...");

  const updatePlaceholders = useCallback(() => {
    if (window.innerWidth <= 450) {
      setJobPlaceholder("...");
      setCityPlaceholder("...");
      setCategoryPlaceholder("...");
    } else if (window.innerWidth > 450 && window.innerWidth < 1280) {
      setJobPlaceholder("Job...");
      setCityPlaceholder("City...");
      setCategoryPlaceholder("Category");
    } else if (window.innerWidth >= 1280) {
      setJobPlaceholder("Job title, keywords, or company");
      setCityPlaceholder("City, Location");
      setCategoryPlaceholder("Category");
    } else {
      setJobPlaceholder("Job title, keywords, or company");
      setCityPlaceholder("City, Location...");
      setCategoryPlaceholder("Category");
    }
  }, []);

  useEffect(() => {
    updatePlaceholders();
    window.addEventListener("resize", updatePlaceholders);
    return () => window.removeEventListener("resize", updatePlaceholders);
  }, [updatePlaceholders]);

  return (
    <div className="flex items-center bg-white rounded-xl shadow-md py-2 px-4 md:gap-2 w-full justify-between md:max-w-[80%]">
      {/* Job Title Input */}
      <div className="flex items-center space-x-2 px-3 xl:w-1/4">
        <Search className="w-5 h-5 text-gray-500" />
        <span className="text-gray-700">{jobPlaceholder}</span>
        {/* <Input
          className="text-gray-700 border-none"
          placeholder={jobPlaceholder}
        /> */}
      </div>

      {/* Divider */}
      <span className="h-6 w-[1px] bg-gray-300"></span>

      {/* City Dropdown */}
      <Popover>
        <PopoverTrigger className="flex items-center text-gray-700 xl:w-1/4 justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-500" />
            <span>{selectedCity || cityPlaceholder}</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500 hidden md:block" />
        </PopoverTrigger>
        <PopoverContent className="w-52">
          {cities.map((city) => (
            <div
              key={city}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </div>
          ))}
        </PopoverContent>
      </Popover>

      {/* Divider */}
      <span className="h-6 w-[1px] bg-gray-300"></span>

      {/* Category Dropdown */}
      <Popover>
        <PopoverTrigger className="flex items-center text-gray-700 xl:w-1/4 justify-between">
          <div className="flex items-center gap-2">
            <List className="w-5 h-5 text-gray-500" />
            <span>{selectedCategory || categoryPlaceholder}</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500 hidden md:block" />
        </PopoverTrigger>
        <PopoverContent className="w-52">
          {categories.map((category) => (
            <div
              key={category}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </PopoverContent>
      </Popover>

      {/* Search Button */}
      <Button size="sm" className="lg:hidden text-white">
        Find Job
      </Button>
      <Button size="lg" className="hidden lg:block text-white">
        Find Jobs
      </Button>
    </div>
  );
};

export default JobSearchBar;
