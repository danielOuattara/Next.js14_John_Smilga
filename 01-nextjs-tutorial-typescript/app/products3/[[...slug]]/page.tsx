type Params = {
  params: {
    slug: string[] | undefined;
  };
};

export default function ParamsPage({ params: { slug } }: Params) {
  console.log(slug);

  // if (slug.length == 3) {
  //   return (
  //     <h2>
  //       Viewing docs for: {slug[0]}, {slug[1]} and {slug[2]}
  //     </h2>
  //   );
  // } else if (slug.length == 2) {
  //   return (
  //     <h2>
  //       Viewing docs for {slug[0]} and {slug[1]}
  //     </h2>
  //   );
  // } else if (slug.length == 1) {
  //   return <h2>Viewing docs for {slug[0]}</h2>;
  // } else {

  return (
    <>
      <h1>Viewing docs for :</h1>
      {slug?.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
}
