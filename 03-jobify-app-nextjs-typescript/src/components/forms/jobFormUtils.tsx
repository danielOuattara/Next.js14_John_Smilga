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
  //   country: string;
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
  company: z.string().min(2, {
    message: "company must be at least 2 characters.",
  }),
  //   country: z.string().min(2, {
  //     message: "location must be at least 2 characters.",
  //   }),
  location: z.string().min(2, {
    message: "location must be at least 2 characters.",
  }),
  position: z.string().min(2, {
    message: "position must be at least 2 characters.",
  }),
  mode: z.nativeEnum(EnumJobMode),
  status: z.nativeEnum(EnumJobStatus),
  workplace: z.nativeEnum(EnumJobWorkPlace),
});

export type InferTypeCreateAndEditJob = z.infer<
  typeof formSchemaCreateAndEditJob
>;

//-------
type TypeFormInput = keyof z.infer<typeof formSchemaCreateAndEditJob>;

export const customFormInputList: TypeFormInput[] = [
  "position",
  "company",
  "location",
  //   "country",
];

//-----

type TypeSingleFormSelect = {
  name: TypeFormInput;
  labelText: string;
  items: string[];
};

export const customFormSelectList: TypeSingleFormSelect[] = [
  {
    name: "mode",
    labelText: "Job Mode",
    items: Object.values(EnumJobMode),
  },
  {
    name: "status",
    labelText: "Job Status",
    items: Object.values(EnumJobStatus),
  },
  {
    name: "workplace",
    labelText: "Job Workplace",
    items: Object.values(EnumJobWorkPlace),
  },
];
