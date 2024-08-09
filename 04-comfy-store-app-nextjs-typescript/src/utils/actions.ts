"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";
import { redirect } from "next/navigation";
import { productSchema } from "./zod-schemas";
// import { productSchema } from "./valibot-schemas";

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

//----------

// export const createProductAction = async (
//   prevState: any,
//   formData: FormData,
// ) => {
//   try {
//     const user = await getAuthUser();
//     //---
//     const name = formData.get("name") as string;
//     const company = formData.get("company") as string;
//     const price = Number(formData.get("price"));
//     const image = formData.get("image") as File;
//     const description = formData.get("description") as string;
//     const featured = Boolean(formData.get("featured") as string);

//     await prisma.product.create({
//       data: {
//         name,
//         company,
//         price,
//         image: "/images/product-1.jpg",
//         description,
//         featured,
//         clerkId: user.id,
//       },
//     });

//     return { message: "product created" };
//   } catch (error) {
//     return renderError(error);
//   }
// };

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
    const validatedData = productSchema.parse(rawData);

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
