import JobsList from "@/components/jobs/JobsList";
import JobsNumber from "@/components/jobs/JobsNumber";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <JobsNumber />
      <JobsList />
    </div>
  );
}
