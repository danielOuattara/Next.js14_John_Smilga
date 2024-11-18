import { TypeJob } from "@/components/forms/jobFormUtils";
import { authenticateOrRedirect } from "./index";
import prisma from "./../../prisma/db";
import { Prisma } from "@prisma/client";

type TypeParams = {
  search?: string;
  jobStatus?: string;
  page?: number;
  limit?: number;
};

type TypeReturn = {
  jobs: TypeJob[];
  count: number;
  page: number;
  totalPages: number;
};

export default async function getAllJobsAction({
  search,
  jobStatus,
  page = 1,
  limit = 10,
}: TypeParams): Promise<TypeReturn> {
  try {
    const userId = await authenticateOrRedirect();
    let whereClause: Prisma.JobWhereInput = {
      clerkId: userId,
    };

    if (search) {
      whereClause = {
        ...whereClause,
        OR: [
          {
            position: {
              contains: search,
            },
          },
          {
            company: {
              contains: search,
            },
          },
        ],
      };
    }

    if (jobStatus && jobStatus !== "all") {
      whereClause = {
        ...whereClause,
        status: jobStatus,
      };
    }
    const jobs: TypeJob[] = await prisma.job.findMany({
      where: whereClause,
      orderBy: {
        createdAt: "desc",
      },
    });

    return { jobs, count: 0, page: 1, totalPages: 0 };
  } catch (error) {
    console.error(error);
    return { jobs: [], count: 0, page: 1, totalPages: 0 };
  }
}
