import { z } from "zod";

export enum JobStatus {
  Pending = "pending",
  Declined = "declined",
  Interview1 = "1st interview",
  Interview2 = "2nd interview",
  Interview3 = "3rd interview",
}

export enum JobMode {
  FullTime = "full-time",
  PartTime = "part-time",
  Internship = "internship",
}

export enum JobPlace {
  FullyOnSite = "fully on-site",
  FullRemote = "full remote",
  HybridRemote = "hybrid remote ",
}

export const createAndEditJobSchema = z.object({
  position: z.string().min(2, {
    message: "position must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "company must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "location must be at least 2 characters.",
  }),
  status: z.nativeEnum(JobStatus),
  mode: z.nativeEnum(JobMode),
});

export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>;
