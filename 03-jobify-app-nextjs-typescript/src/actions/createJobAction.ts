"use server";

import {
  TypeJob,
  InferTypeCreateAndEditJob,
  formSchemaCreateAndEditJob,
} from "@/components/jobs/utils/jobFormUtils";
import prisma from "../../prisma/db";
import { authenticateOrRedirect } from "./index";

// import { redirect } from "next/navigation";

export default async function createJobAction(
  values: InferTypeCreateAndEditJob,
): Promise<TypeJob> {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const userId = await authenticateOrRedirect();

    // Zod validation on Server
    formSchemaCreateAndEditJob.parse(values);

    // write to DB
    const job: TypeJob = await prisma.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    });

    // return the created job data
    return job;
  } catch (error) {
    console.error("Job creation error:", error);
    /* Throw a new error with a structured message to be caught by `onError` from React Query */
    throw new Error(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
}
