// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

// export default async function DrinkPage() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
//   return (
//     <div>
//       <h1 className="text-7xl">DrinksPage</h1>
//     </div>
//   );
// }

//-----------------------------------------------------------------------

// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

// const fetchDrinks = async () => {
//   /** just for demo purposes */
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };

// export default async function DrinkPage() {
//   const data = await fetchDrinks();
//   console.log(data);
//   return (
//     <div>
//       <h1 className="text-7xl">DrinksPage</h1>
//     </div>
//   );
// }

//-----------------------------------------------------------------------
//

import { DrinksList } from "@/components";

export default async function DrinkPage() {
  const data = await fetchDrinks();
  return (
    <div>
      <h1 className="text-7xl">DrinksPage</h1>
      <DrinksList drinks={data.drinks} />
    </div>
  );
}

//--------------

// ERROR
// const url = "https://www.thecocktaildb.com/api/json/v1/1/search.phpAAA?f=a";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

export const fetchDrinks = async () => {
  const response = await fetch(url);

  /* --- throw error --- */
  if (!response.ok) throw new Error("Failed to fetch drinks...");

  const data = await response.json();
  return data;
};
