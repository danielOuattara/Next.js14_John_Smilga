"use client"; // Error components must be Client Components

// export default function error() {
//   return <div>There was an error...</div>;
// }

export default function error(error) {
  console.log("error = ", error);
  return <div>{error.error.message}</div>;
}
