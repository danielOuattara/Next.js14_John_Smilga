"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { carouselImages } from "@/utilities/carouselImage";
import Autoplay from "embla-carousel-autoplay";

export default function HeroCarousel() {
  return (
    <div className="lg:block lg:col-start-1 lg:col-end-3">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3500,
          }),
        ]}
      >
        <CarouselContent>
          {carouselImages.map((image) => (
            <CarouselItem key={image.src}>
              <Card>
                <CardContent className="p-2">
                  <Image
                    src={image}
                    alt="hero picture"
                    className="w-full h-[24rem] rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
