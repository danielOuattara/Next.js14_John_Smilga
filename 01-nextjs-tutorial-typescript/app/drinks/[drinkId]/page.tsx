import Link from "next/link";
// import drinkImage from "./pexels-beverage.jpg";
import Image from "next/image";

// console.log(drinkImage);

type TSingleDrinkPageProps = {
  params: {
    drinkId: string;
  };
};

export default async function SingleDrinkPage({
  params,
}: TSingleDrinkPageProps) {
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

//----------
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id: string): Promise<IFetchData> => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch drink...");
  }
  return res.json();
};

const url_all_drinks =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async (): Promise<IFetchData> => {
  /** --- just for demo purposes --- */
  const response = await fetch(url_all_drinks);
  /* --- throw error --- */
  if (!response.ok) throw new Error("Failed to fetch drinks...");

  const data: IFetchData = await response.json();
  return data;
};

// this function SSR to SSG for all request on single drink
export async function generateStaticParams() {
  const data = await fetchDrinks();
  return data.drinks.map((drink) => ({ drinkId: drink.idDrink.toString() }));
}
