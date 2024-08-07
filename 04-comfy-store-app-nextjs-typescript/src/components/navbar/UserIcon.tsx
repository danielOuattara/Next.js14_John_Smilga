import { LuUser2 } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function UserIcon() {
  const user = await currentUser();
  if (user?.imageUrl) {
    return (
      <Image
        src={user.imageUrl}
        className="w-7 h-7 rounded-full object-cover"
        alt={user.firstName || "user"}
        width={100}
        height={100}
      />
    );
  } else {
    return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
  }
}
