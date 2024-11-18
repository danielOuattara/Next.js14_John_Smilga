"use server";

import prisma from "../../prisma/db";
import { auth } from "@clerk/nextjs/server";
import {
  TypeJob,
  formSchemaCreateAndEditJob,
  InferTypeCreateAndEditJob,
} from "@/components/forms/jobFormUtils";
// import { redirect } from "next/navigation";

//----------

async function authenticateOrRedirect() {
  const myAuth = await auth();
  console.log(myAuth);
  const { userId, redirectToSignIn } = await auth();
  if (!userId) {
    return redirectToSignIn();
    // redirect('/')
  }
  return userId;
}

//----------

export default async function createJobAction(
  values: InferTypeCreateAndEditJob,
): Promise<TypeJob> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const userId = await authenticateOrRedirect();

    // zod validation
    formSchemaCreateAndEditJob.parse(values);

    // write to DB
    const job: TypeJob = await prisma.job.create({
      data: {
        ...values,
        clerkId: userId,
      },
    });
    return job; // return the created job data
  } catch (error) {
    console.error("Job creation error:", error);
    // Throw a new error with a structured message to be caught by `onError`
    throw new Error(
      error instanceof Error ? error.message : "Unknown error occurred",
    );
  }
}