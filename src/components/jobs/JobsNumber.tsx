import React from "react";
import JobSearchBar from "./JobSearchBar";

const JobsNumber = () => {
  return (
    <div className="bg-[#F2F9FD] flex flex-col items-center justify-center py-16 gap-8 px-6 lg:px-16">
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl font-semibold text-primary">
          105 Jobs Available
        </p>
        <p className="text-xl text-center">
          We have variety of roles for everyone.
          <br />
          Search your preferences!
        </p>
      </div>
      <JobSearchBar />
    </div>
  );
};

export default JobsNumber;
