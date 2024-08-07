// import { Card, CardContent } from "../ui/card";
// import { Skeleton } from "../ui/skeleton";

// export default function LoadingSingleProductContainer() {
//   return (
//     <section>
//       <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
//         {/* IMAGE FIRST COL */}
//         <div className="relative h-full w-full">
//           <Card>
//             <CardContent className="relative h-full">
//               <Skeleton className="h-48 w-full" />
//               <Skeleton className="h-4 w-full mt-4" />
//               <Skeleton className="h-4 w-full mt-4" />
//             </CardContent>
//           </Card>
//         </div>

//         {/*  */}

//         <div className="h-full w-full">
//           {/* <div className=" flex gap-x-8 items-center"> */}
//           <Card>
//             <CardContent className="relative h-full">
//               <Skeleton className="h-48 w-full" />
//               <Skeleton className="h-4 w-full mt-4" />
//               <Skeleton className="h-4 w-full mt-4" />
//             </CardContent>
//           </Card>
//           {/* </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }

// function LoadingProduct() {
//   return (
//     <Card>
//       <CardContent className="relative h-full">
//         <Skeleton className="h-48 w-full" />
//         <Skeleton className="h-4 w-3/4 mt-4" />
//         <Skeleton className="h-4 w-1/4 mt-4" />
//       </CardContent>
//     </Card>
//   );
// }

import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function LoadingSingleProductContainer() {
  return (
    <section>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Card>
            <CardContent className="relative h-full">
              <Skeleton className="h-80 w-full" />{" "}
              {/* Adjusted height for better proportion */}
            </CardContent>
          </Card>
        </div>

        {/* PRODUCT INFO SECOND COL */}
        <div>
          <Card>
            <CardContent className="relative">
              <Skeleton className="h-6 w-3/4 mb-4" /> {/* Product Name */}
              <Skeleton className="h-4 w-1/4 mb-4" /> {/* Rating */}
              <Skeleton className="h-4 w-1/2 mb-4" /> {/* Company Name */}
              <Skeleton className="h-4 w-1/3 mb-4" /> {/* Price */}
              <Skeleton className="h-24 w-full mb-4" /> {/* Description */}
              <Skeleton className="h-10 w-1/2" /> {/* Add to Cart Button */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
