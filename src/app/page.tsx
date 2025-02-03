import JobsList from "@/components/JobsList";
import JobsNumber from "@/components/JobsNumber";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <JobsNumber />
      <JobsList />
    </div>
  );
}
