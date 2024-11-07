type TypeNavLinks = {
  href: string;
  label: string;
  icon: React.ReactNode;
}[];

type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
};
