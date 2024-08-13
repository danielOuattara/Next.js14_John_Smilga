"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "./prisma";
import { redirect } from "next/navigation";
import {
  imageSchema,
  productSchema,
  validateAgainstZodSchema,
} from "./zod-schemas";
import { getAuthUser, renderError } from "./actions-utils";

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
    const validatedFields = validateAgainstZodSchema(productSchema, rawData);

    const file = formData.get("image") as File;
    const validatedFileImage = validateAgainstZodSchema(imageSchema, {
      image: file,
    });

    console.log(validatedFileImage);

    await prisma.product.create({
      data: {
        ...validatedFields,
        image: "/images/product-1.jpg",
        clerkId: user.id,
      },
    });

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
