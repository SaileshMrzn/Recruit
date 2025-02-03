import JobsList from "@/components/jobs/JobsList";
import JobsNumber from "@/components/jobs/JobsNumber";

export default function Home() {
  return (
    <div>
      <JobsNumber />
      <JobsList />
    </div>
  );
}
