import Image from "next/image";
import logo from "./../assets/logo-2.svg";
import landingImage from "./../assets/main-2.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <header className="mx-auto px-10 md:px-20 py-6 border bg-blue-50">
        <Image src={logo} alt="logo image" className="w-16 h-16" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <Image
          src={landingImage}
          alt="landing image showing a road to the top of a mountain in the background"
          className=""
        />
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            Job <span className="text-primary">randonnée</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ullam vero esse ratione nisi laudantium quo placeat nulla! Hic
            laborum delectus veniam. Laborum nam modi consequatur, mollitia
            ducimus similique unde, ipsum porro dolore nobis fuga harum beatae
            alias dolor! Aspernatur atque repudiandae quam modi assumenda
            dolorem accusantium corrupti? Quas, nihil.
          </p>
          <Button asChild>
            <Link href={"/add-job"} className="m-8">
              Add a new job
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
