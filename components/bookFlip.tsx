"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { PageFlip } from "page-flip";
import { alaCarteMenu } from "@/data/alaCarteMenu";
import Image from "next/image";

export default function FlipBookMenu() {
  const bookRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<InstanceType<typeof PageFlip> | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const getSize = useCallback(() => {
    const vw = window.innerWidth;
    if (vw < 480)
      return { width: Math.floor(vw / 2) - 16, height: Math.floor(vw / 2) };
    if (vw < 768) return { width: 220, height: 250 };
    if (vw < 1024) return { width: 320, height: 350 };
    return { width: 400, height: 450 };
  }, []);

  const initFlip = useCallback(() => {
    if (!bookRef.current) return;

    pageFlipRef.current?.destroy();
    pageFlipRef.current = null;

    const { width, height } = getSize();

    pageFlipRef.current = new PageFlip(bookRef.current, {
      width,
      height,
      size: "fixed",
      startPage: 1,
      showCover: false,
      mobileScrollSupport: false,
      useMouseEvents: true,
      flippingTime: 600,
      usePortrait: window.innerWidth < 480,
    });

    pageFlipRef.current.loadFromHTML(bookRef.current.querySelectorAll(".page"));

    pageFlipRef.current.on("flip", (e: { data: number }) => {
      setCurrentPage(e.data as number);
    });
  }, [getSize]);

  useEffect(() => {
    const timer = setTimeout(initFlip, 100);

    const handleResize = () => {
      clearTimeout(timer);
      setTimeout(initFlip, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      pageFlipRef.current?.destroy();
      pageFlipRef.current = null;
    };
  }, [initFlip]);

  const totalPages = alaCarteMenu.length;

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center w-full"
    >
      <div ref={bookRef} className="stf__parent">
        {alaCarteMenu.map((item, index) => (
          <div key={index} className="page">
            <div className="relative w-full h-full bg-white shadow-md">
              <Image
                src={item.image}
                alt={`Menu page ${index + 1}`}
                fill
                className="object-cover cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="py-2 text-center text-sm text-black/80">
        Page {currentPage + 1} of {totalPages}
      </div>
    </div>
  );
}
