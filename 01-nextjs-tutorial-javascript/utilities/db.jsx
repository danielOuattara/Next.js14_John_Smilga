/**
 * In development, the command next dev clears Node.js cache on run. 
 * This in turn initializes a new PrismaClient instance each time 
 * due to hot reloading that creates a connection to the database. 
 * This can quickly exhaust the database connections as each PrismaClient 
 * instance holds its own connection pool.

[Prisma Instance](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#solution) 

*/

import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
