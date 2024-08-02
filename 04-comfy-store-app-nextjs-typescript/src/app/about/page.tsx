import prisma from "@/utils/prisma";

export default async function AboutPage() {
  await prisma.testProfile.create({
    data: { name: "John Doe Junior" },
  });

  const users = await prisma.testProfile.findMany();
  return (
    <>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}
