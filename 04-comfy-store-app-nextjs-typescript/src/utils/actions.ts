import prisma from "./prisma";

//-------------

export async function fetchFeaturedProducts() {
  return await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
}

//-------------

type TypeProps = {
  search: string;
};

export async function fetchAllProducts({ search = "" }: TypeProps) {
  return await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
