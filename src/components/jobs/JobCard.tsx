import React from "react";
import { Briefcase, Banknote, MapPin } from "lucide-react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";

import { JobCardProps } from "@/types/jobTypes";

const JobCard = ({
  title,
  company,
  location,
  salary,
  tags,
  type,
  logo,
  id,
}: JobCardProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="flex flex-row items-center gap-4">
        <Image
          src={logo}
          alt="Logo"
          width={75}
          height={75}
          className="border-2 flex items-center justify-center rounded-md"
        />
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-500 text-lg">{company || "N/A"}</p>
        </div>
      </CardHeader>

      {/* Job details */}
      <CardContent className="flex items-center gap-6 flex-wrap">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={20} />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Briefcase size={20} />
          <span>{type || "N/A"}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Banknote size={20} />
          <span>NPR {salary || "N/A"}</span>
        </div>
      </CardContent>

      {/* Skills */}
      <CardFooter className="flex gap-4 flex-wrap">
        <Badge
          variant="outline"
          className="bg-gray-100 text-base text-gray-500"
        >
          {tags}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
