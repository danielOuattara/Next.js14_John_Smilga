/* 

Important Update !!!

The clerk has released a new version (5) 
that includes several breaking changes.

The authMiddleware function is deprecated. 
We now need to use the clerkMiddleware 
function, which is imported from '@clerk/nextjs/server'.

Instead of all routes being protected by default, 
all routes are now public. We need to specify 
which routes are protected. Protected routes 
can be defined using `createRouteMatcher`. 

In our case, we want to protect all routes 
within the dashboard.

*/

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/chat(.*)",
  "./profile(.*)",
  ".tours(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
