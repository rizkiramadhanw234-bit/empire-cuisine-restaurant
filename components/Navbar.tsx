"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Logo from "../public/assets//logo/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavItems = [
    { id: 1, name: "Home", href: "/home" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Menu", href: "/menu" },
    { id: 4, name: "VIP Rooms", href: "/vipRooms" },
    { id: 5, name: "Weddings & Events", href: "/weddingsAndEvents" },
    { id: 6, name: " Gallery", href: "/gallery" },
    { id: 7, name: "Promotions", href: "/promotions" },
    { id: 8, name: "Booking", href: "/booking" },
    { id: 9, name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed right-0 top-0 left-0 z-50 bg-(--primaryBackground)/75 backdrop-blur-sm shadow-md">
      <div className="px-4 py-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-17">
          <Link href="/home" className="shrink-0">
            <Image src={Logo} alt="Logo" width={80} height={30} />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center text-base lg:text-base gap-6 lg:gap-10">
            {NavItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-(--bg2) underline underline-offset-7"
                    : "text-black hover:text-red-800 transition duration-300 hover:scale-105"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            <Link
              href={"/"}
              className="px-4 py-2 lg:px-6 lg:py-2.5 bg-(--bg2) rounded-full text-white hover:bg-red-800 hover:scale-105 transition duration-300 text-sm lg:text-base"
            >
              Contact
            </Link>
            <Link
              href={"/"}
              className="px-4 py-2 lg:px-6 lg:py-2.5 bg-(--bg3) rounded-full text-white hover:bg-amber-700 hover:scale-105 transition duration-300 text-sm lg:text-base"
            >
              WhatsApp
            </Link>
          </div>

          {/* Mobile button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              className="text-2xl text-black"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu open */}
      <div
        className={`md:hidden w-full bg-transparent flex flex-col transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 max-h-screen translate-y-0"
            : "opacity-0 max-h-0 -translate-y-5 pointer-events-none overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 pb-6 pt-2">
          {NavItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`py-3 px-4 rounded-md text-base transition duration-300 ${
                pathname === item.href
                  ? "text-(--bg2) underline underline-offset-4 font-semibold"
                  : "text-black hover:text-red-800 hover:bg-red-50"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* CTA buttons */}
          <div className="flex gap-3 mt-4 px-4">
            <Link
              href={"/"}
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center px-4 py-2.5 bg-(--bg2) rounded-full text-white hover:bg-red-800 transition duration-300 text-sm"
            >
              Contact
            </Link>
            <Link
              href={"/"}
              onClick={() => setIsOpen(false)}
              className="flex-1 text-center px-4 py-2.5 bg-(--bg3) rounded-full text-white hover:bg-amber-700 transition duration-300 text-sm"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
