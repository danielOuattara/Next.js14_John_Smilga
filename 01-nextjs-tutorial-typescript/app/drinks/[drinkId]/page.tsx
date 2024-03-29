import Link from "next/link";

type TypeSingleDrinkPageProps = {
  params: {
    drinkId: string;
  };
};

export default async function SingleDrinkPage({
  params,
}: TypeSingleDrinkPageProps) {
  const data = await getSingleDrink(params.drinkId);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
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
