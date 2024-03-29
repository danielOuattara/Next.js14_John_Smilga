import Link from "next/link";

interface IDrinksListProps {
  drinks: IDrink[];
}

export default function DrinksList({ drinks }: IDrinksListProps) {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
}
