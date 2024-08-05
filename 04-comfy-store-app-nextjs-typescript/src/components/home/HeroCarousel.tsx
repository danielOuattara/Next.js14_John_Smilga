import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { carouselImages } from "@/utils/carouselImages";

export default function HeroCarousel() {
  return (
    <section>
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-2">
                  <Image
                    src={image}
                    alt="hero"
                    className="w-full h-[24rem] rounded-md object-cover"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
