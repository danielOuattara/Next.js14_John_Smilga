type TypeSingleDrinkPageProps = {
  params: {
    drinkId: string;
  };
};

export default function SingleDrinkPage({ params }: TypeSingleDrinkPageProps) {
  console.log(params);
  return (
    <div>
      <h1 className="text-7xl">drinkId = {params.drinkId}</h1>
    </div>
  );
}
