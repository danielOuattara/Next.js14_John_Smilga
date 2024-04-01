# Prisma install info

`npm install -D prisma && npm install @prisma/client && npx prisma init`

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn: You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:

1. Set the DATABASE_URL in the `.env` file to point to your existing database. If your database has no tables yet, read <https://pris.ly/d/getting-started>
2. Set the provider of the datasource block in schema.prisma to match your database: `postgresql`, `mysql`, `sqlite`, `sqlserver`, `mongodb` or `cockroachdb`.
3. Run `prisma db pull` to turn your database schema into a Prisma schema.
4. Run `prisma generate` to generate the Prisma Client. You can then start querying your database.
6. In development, the command next dev clears Node.js cache on run. This in turn initializes a new PrismaClient instance each time due to hot reloading that creates a connection to the database. This can quickly exhaust the database connections as each PrismaClient instance holds its own connection pool.

[Prisma Instance](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#solution)

`create utils/db.ts`

```typescript
  import { PrismaClient } from '@prisma/client';

  const prismaClientSingleton = () => {
    return new PrismaClient();
  };

  type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

  const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined;
  };

  const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

  export default prisma;

  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

7. Create Model

```prisma
model Task {
  id String @id @default(uuid())
  content String
  createdAt DateTime @default(now())
  completed Boolean @default(false)
}
```

8. safely applies and tracks changes to the database structure: `npx prisma migrate dev`

9. in a new terminal window launch Prisma Studio, which is a visual editor for your database: `npx prisma studio`. Listen on: <http://localhost:5555>
