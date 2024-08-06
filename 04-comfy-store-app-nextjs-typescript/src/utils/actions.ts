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

export async function fetchAllProducts() {
  return await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
