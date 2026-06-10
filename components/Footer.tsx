"use client";

import Link from "next/link";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import listDecoraton from "../public/assets/listDecoration.png";
import Image from "next/image";
import { LiaFacebook } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const quickLinks = [
  { id: "home", label: "Home", href: "/home" },
  { id: "about", label: "About", href: "/about" },
  { id: "menu", label: "Menu", href: "/menu" },
  { id: "vip", label: "VIP Rooms", href: "/vip" },
  {
    id: "weddings",
    label: "Weddings & Events",
    href: "/weddings",
  },
  {
    id: "gallery",
    label: "Gallery",
    href: "/gallery",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-(--bg3)/50 pt-16">
      <div className="max-w-7xl mx-auto px-7 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex flex-col items-start justify-center">
            <p className="font-chinese text-6xl text-(--bg2) font-semibold tracking-[4px]">
              御膳楼
            </p>
            <span className="font-cormorant font-bold text-sm text-(--bg2)  text-center uppercase mb-2 mt-4">
              Empire Cuisine Restaurant
            </span>
            <Image
              src={listDecoraton}
              alt="listDecoration"
              width={200}
              height={200}
              className="mb-2"
            />
          </div>
          <div className="font-chinese text-sm text-(--bg2) font-semibold tracking-[2px]">
            每一次相聚，都值得一场好宴
          </div>
          <div className="font-chinese text-xs text-gray-700 font-semibold tracking-[4px] mt-2">
            以精致中式料理、贴心服务及专业宴会空间，陪伴每一个重要时刻。
          </div>
          <p className="font-eb-garamond text-sm text-gray-700 leading-relaxed italic max-w-xs mt-2">
            More than a restaurant — a place where families gather, friendships
            grow, and celebrations come to life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-cormorant text-xs tracking-[4px] uppercase text-(--bg2) mb-5 font-semibold">
            Quick Links
          </div>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="font-eb-garamond text-sm text-gray-700 hover:text-amber-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-cormorant text-xs tracking-[4px] uppercase text-(--bg2) mb-5 font-semibold">
            Contact
          </div>
          <div className="flex gap-2.5 mb-3">
            <FaPhone className="text-(--bg2) mt-1 shrink-0 text-sm" />
            <a
              href="tel:+60122248811"
              className="font-eb-garamond text-sm text-gray-700 hover:text-amber-300 transition-colors"
            >
              012-224 8811
            </a>
          </div>
          <div className="flex gap-2.5 mb-4">
            <FaMapMarkerAlt className="text-(--bg2) mt-1 shrink-0 text-sm" />
            <span className="font-eb-garamond text-sm text-gray-700 leading-6">
              157, Jalan Limau Gedong, Kawasan 18, 41300 Klang, Selangor
            </span>
          </div>
          <Link
            href="https://wa.me/601222488811"
            target="_blank"
            className="inline-flex items-center gap-2 bg-transparent border border-(--bg2) text-(--bg2) text-xs uppercase tracking-[2px] py-2.5 px-4 hover:bg-(--bg3) hover:text-white transition-all duration-300 rounded-sm"
          >
            <FaWhatsapp size={16} />
            WhatsApp Us
          </Link>
        </div>

        {/* Opening Hours */}
        <div>
          <div className="font-cormorant text-xs tracking-[4px] uppercase text-(--bg2) mb-5 font-semibold">
            Opening Hours
          </div>
          <div className="flex flex-col gap-0.5 mb-3">
            <span className="text-(--bg2) font-semibold text-sm">
              Mon – Fri
            </span>
            <span className="font-eb-garamond text-sm text-gray-700">
              10:30 AM – 2:30 PM
            </span>
            <span className="font-eb-garamond text-sm text-gray-700">
              5:30 PM – 10:30 PM
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-(--bg2) font-semibold text-sm">
              Sat, Sun &amp; PH
            </span>
            <span className="font-eb-garamond text-sm text-gray-700">
              8:00 AM – 2:30 PM
            </span>
            <span className="font-eb-garamond text-sm text-gray-700">
              5:30 PM – 10:30 PM
            </span>
          </div>
        </div>
      </div>

      <div className="bg-amber-950/80 pb-10">
        <div className="max-w-7xl mx-auto px-10 pt-10 border-t border-amber-600/15 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex gap-6 md:flex items-center justify-center text-gray-300">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <p className="text-gray-300">Follow Us!</p>
              <div className="flex items-center justify-between gap-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61555584206586&sk=about"
                  target="_blank"
                >
                  <LiaFacebook size={30} />
                </Link>
                <Link
                  href="https://www.instagram.com/empirecuisine/"
                  target="_blank"
                >
                  <FaInstagram size={24} />
                </Link>
                <Link
                  href="https://www.youtube.com/@EmpireCuisineRestaurant"
                  target="_blank"
                >
                  <AiOutlineYoutube size={30} />
                </Link>
              </div>
            </div>
          </div>
          <span className="font-eb-garamond text-sm text-center text-gray-300">
            © 2025 Empire Cuisine Restaurant (御膳楼). All Rights Reserved.
          </span>
          <span className="font-chinese text-lg tracking-[3px] text-gray-300">
            御膳楼大酒家
          </span>
        </div>
      </div>
    </footer>
  );
}
