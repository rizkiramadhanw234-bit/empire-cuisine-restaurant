"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { alaCarteMenu } from "@/data/alaCarteMenu";
import Image from "next/image";

export default function CarouselMenu() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!api) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const closeModal = () => setSelectedIndex(null);
  const handleModalOpen = () => setSelectedIndex(0);
  const totalAlaCarte = alaCarteMenu.length;

  return (
    <>
      <div>
        <Button
          onClick={handleModalOpen}
          className="p-5 bg-(--bg2) hover:bg-red-800 cursor-pointer text-sm md:text-base text-white hover:scale-105 duration-300"
        >
          See Ala-Carte Menu
        </Button>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="relative">
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 z-10 bg-white rounded-full p-1 shadow mt-25 lg:mt-25 cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Modal card */}
            <div className="w-sm md:w-150 mt-25">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {alaCarteMenu.map((_, index) => (
                    <CarouselItem key={index}>
                      <Card className="m-px cursor-pointer p-0 overflow-hidden bg-(--bg3)/30">
                        <CardContent className="flex w-full items-center justify-center p-2">
                          <Image
                            src={alaCarteMenu[index].image}
                            alt="alaCarteMenu"
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-white/80">
                Slide {current} of {totalAlaCarte}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
