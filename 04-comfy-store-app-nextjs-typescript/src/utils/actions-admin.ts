"use server";

import prisma from "./prisma";
import { redirect } from "next/navigation";
import {
  imageSchema,
  productSchema,
  validateAgainstZodSchema,
} from "./zod-schemas";
import { getAdminUser, getAuthUser, renderError } from "./actions-utils";
import { deleteImageInBucket, uploadImage } from "./supabase";
import { revalidatePath } from "next/cache";

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

    const imagePath = await uploadImage(validatedFileImage.image);

    await prisma.product.create({
      data: {
        ...validatedFields,
        image: imagePath,
        clerkId: user.id,
      },
    });

    // return { message: "product created" };
  } catch (error) {
    return renderError(error);
  }

  redirect("/admin/products");
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

//-------
export const fetchAdminProducts = async () => {
  await getAdminUser();
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};

//-------
export const deleteProduct = async (productId: string) => {
  await getAdminUser();
  try {
    const product = await prisma.product.delete({
      where: {
        id: productId,
      },
    });

    await deleteImageInBucket(product.image);
    revalidatePath("/admin/products");
    return { message: "product removed" };
  } catch (error) {
    return renderError(error);
  }
};

//-------
export const editProductAction = async () => {};

//-------
export const fetchAdminProductsDetails = async (productId: string) => {
  await getAdminUser();
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    redirect("/admin/products");
  }

  return product;
};

//-------
export const updateProduct = async (prevState: any, formData: FormData) => {
  try {
    return { message: "Product updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

//-------
export const updateProductImage = async (
  prevState: any,
  formData: FormData,
) => {
  try {
    return { message: "Product Image updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};
//-------
