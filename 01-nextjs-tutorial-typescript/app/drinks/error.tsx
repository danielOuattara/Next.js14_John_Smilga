"use client"; // Error components must be Client Components

// export default function error() {
//   return <div>There was an error...</div>;
// }

interface NextError extends Error {
  error: Error;
  reset: () => void;
}

export default function error(error: NextError) {
  console.log("error = ", error);
  return <div>{error.error.message}</div>;
}
