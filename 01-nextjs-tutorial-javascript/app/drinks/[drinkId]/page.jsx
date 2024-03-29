export default function SingleDrinkPage({ params }) {
  console.log(params);
  return (
    <div>
      <h1 className="text-7xl">drinkId = {params.drinkId}</h1>
    </div>
  );
}
