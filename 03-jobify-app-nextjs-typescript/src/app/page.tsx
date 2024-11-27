import Image from "next/image";
import logo from "./../assets/logo-2.svg";
import landingImage from "./../assets/main-2.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <header className="mx-auto px-10 md:px-20 py-6 border bg-muted">
        <Link href={"/"}>
          <Image src={logo} alt="logo image" className="w-16 h-16" />
        </Link>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <Image
          src={landingImage}
          alt="landing image showing a road to the top of a mountain in the background"
          className=""
        />
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            A <span className="capitalize text-primary">randonnée</span> for a
            Job
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
            <Link href={"/jobs"} className="m-8">
              Let&apos;s go
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
