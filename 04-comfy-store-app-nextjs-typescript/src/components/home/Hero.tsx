import Link from "next/link";
import { Button } from "../ui/button";
import { HeroCarousel } from "./index";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center p-4">
      <HeroCarousel />
      <article className="lg:col-start-3 lg:col-end-auto">
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Shop with us and live like never before
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et
          voluptas saepe in quae voluptate, laborum maiores possimus illum.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Shop now</Link>
        </Button>
      </article>
    </section>
  );
}
