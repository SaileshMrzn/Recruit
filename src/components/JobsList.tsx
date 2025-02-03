"use client";

import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, MapPin } from "lucide-react";

import JobCard from "./JobCard";

import { Job } from "@/types/jobTypes";

import jobApi from "@/apis/jobApi";

const sortOptions = ["Newest Post", "Timing", "Position"];

const JobsList: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState("Newest Post");
  const [jobsList, setJobsList] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const fetchJobs = async () => {
    try {
      setIsLoading(true);
      const jobs = await jobApi.getJobs();
      setJobsList(jobs);
    } catch (error) {
      console.error("Failed to fetch jobs", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSortOptionClick = (opt: string) => {
    setSelectedSort(opt);
    setIsPopoverOpen(false);
  };

  return (
    <div className="px-6 lg:px-16 py-6">
      {/* top */}
      <div className="flex items-center justify-between mb-6">
        <p>
          Show <span className="font-semibold">{jobsList.length}</span> of{" "}
          <span className="font-semibold">{jobsList.length}</span> Jobs
        </p>
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <PopoverTrigger
            className="flex items-center text-gray-700 justify-between border p-2 rounded-lg"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            <span>
              Sort By:{" "}
              <span className="font-semibold px-2">{selectedSort}</span>
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </PopoverTrigger>
          <PopoverContent className="w-52">
            {sortOptions.map((opt) => (
              <div
                key={opt}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSortOptionClick(opt)}
              >
                {opt}
              </div>
            ))}
          </PopoverContent>
        </Popover>
      </div>
      {/* job lists */}
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <p>Loading...</p>
        </div>
      )}

      {!isLoading && jobsList.length === 0 && (
        <div className="flex justify-center items-center h-64">
          <p>No jobs available</p>
        </div>
      )}

      {!isLoading && jobsList.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {jobsList.map((job) => (
            <JobCard
              key={job.id}
              title={job.job_title}
              location={job.location}
              salary={job.expected_salary}
              tags={job.tags}
              logo={job.company_logo}
              id={job.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobsList;
