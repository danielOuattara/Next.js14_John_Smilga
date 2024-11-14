import { z } from "zod";

export type TypeJob = {
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

export enum EnumJobStatus {
  Pending = "pending",
  Declined = "declined",
  Interview1 = "1st interview",
  Interview2 = "2nd interview",
  Interview3 = "3rd interview",
}

export enum EnumJobMode {
  FullTime = "full-time",
  PartTime = "part-time",
  Internship = "internship",
}

export enum EnumJobWorkPlace {
  FullyOnSite = "fully on-site",
  FullRemote = "full remote",
  HybridRemote = "hybrid remote ",
}

export const formSchemaCreateAndEditJob = z.object({
  position: z.string().min(2, {
    message: "position must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "company must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "location must be at least 2 characters.",
  }),

  country: z.string().min(2, {
    message: "location must be at least 2 characters.",
  }),
  status: z.nativeEnum(EnumJobStatus),
  mode: z.nativeEnum(EnumJobMode),
  workplace: z.nativeEnum(EnumJobWorkPlace),
});

export type TypeCreateAndEditJob = z.infer<typeof formSchemaCreateAndEditJob>;
