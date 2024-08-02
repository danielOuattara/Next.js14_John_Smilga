// TODO: Does not work, not important, but found why !

import { PrismaClient } from "@prisma/client";
import products from "./products.json";

const prisma = new PrismaClient();

async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

/* 
   to run :
   - install node-ts
   - run node-ts db-seed.ts
*/
