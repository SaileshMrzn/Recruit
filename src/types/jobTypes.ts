export interface Job {
  id: string;
  job_title: string;
  location: string;
  expected_salary: string;
  tags: string;
  company_logo: string;
}

export interface JobCardProps {
  title: string;
  company?: string;
  location: string;
  type?: string;
  salary: string;
  tags: string;
  logo: string;
  id: string;
}
