//----------

import { auth } from "@clerk/nextjs/server";

export default async function authenticateOrRedirect() {
  const myAuth = await auth();
  console.log(myAuth);
  const { userId, redirectToSignIn } = await auth();
  if (!userId) {
    return redirectToSignIn();
    // redirect('/')
  }
  return userId;
}
