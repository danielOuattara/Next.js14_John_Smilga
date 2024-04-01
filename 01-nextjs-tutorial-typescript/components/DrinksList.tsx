// import Link from "next/link";

// interface IDrinksListProps {
//   drinks: IDrink[];
// }

// export default function DrinksList({ drinks }: IDrinksListProps) {
//   return (
//     <ul className="menu menu-vertical pl-0">
//       {drinks.map((drink) => (
//         <li key={drink.idDrink}>
//           <Link
//             href={`/drinks/${drink.idDrink}`}
//             className="text-xl font-medium"
//           >
//             {drink.strDrink}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

//------------------------------------------------------------------------------

import Link from "next/link";
import Image from "next/image";

interface IDrinksListProps {
  drinks: IDrink[];
}

export default function DrinksList({ drinks }: IDrinksListProps) {
  return (
    <ul className="grid md:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                alt={drink.strDrink}
                className="rounded-md object-cover"
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
}
