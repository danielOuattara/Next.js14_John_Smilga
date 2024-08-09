"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";
import { redirect } from "next/navigation";
import { productSchema } from "./zod-schemas";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  return user;
};

//-------------

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

//-------------

export async function fetchFeaturedProducts() {
  return await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
}

//-------------

export async function fetchAllProducts({ search = "" }) {
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

//-------------

export async function fetchSingleProduct(productId: string) {
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    redirect("/products");
  }

  return product;
}

// ---------
// using Zod
export const createProductAction = async (
  prevState: any,
  formData: FormData,
) => {
  try {
    const user = await getAuthUser();
    //---
    const rawData = Object.fromEntries(formData);
    const validatedFields = productSchema.safeParse(rawData);

    if (!validatedFields.success) {
      const errors = validatedFields.error.errors.map(
        (error) => `\n - ${error.message}`,
      );
      throw new Error("Error:\n" + errors.join("\n"));
    }

    // await prisma.product.create({
    //   data: {
    //     name,
    //     company,
    //     price,
    //     image: "/images/product-1.jpg",
    //     description,
    //     featured,
    //     clerkId: user.id,
    //   },
    // });

    return { message: "product created" };
  } catch (error) {
    return renderError(error);
  }
};

//--------------
// using Valibot

// TODO: uncomment and try again validation on checkbox

// import { parse } from "valibot";
// import { productSchema } from "./valibot-schemas";

// export const createProductAction = async (
//   prevState: any,
//   formData: FormData,
// ) => {
//   try {
//     const user = await getAuthUser();
//     const rawData = Object.fromEntries(formData);

//     const validatedData = parse(productSchema, rawData);
//     return { message: "product created" };
//   } catch (error) {
//     return renderError(error);
//   }
// };
