import Link from "next/link";
import drinkImage from "./pexels-beverage.jpg";
import Image from "next/image";
import { fetchDrinks } from "../page";
// console.log(drinkImage);

export default async function SingleDrinkPage({ params }) {
  const data = await getSingleDrink(params.drinkId);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>

      {/* <img src={drinkImage.src} alt="beverage" /> */}

      {/* <Image src={drinkImage} alt="beverage" className="w-48 h-64 rounded-lg" /> */}

      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded shadow-lg mb-4"
        priority
        alt={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
}

//-----------

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch drink...");
  }
  return res.json();
};

// this function SSR to SSG for all request on single drink
export async function generateStaticParams() {
  const data = await fetchDrinks();
  return data.drinks.map((drink) => ({ drinkId: drink.idDrink.toString() }));
}
