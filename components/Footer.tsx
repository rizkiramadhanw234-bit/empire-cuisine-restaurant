"use client";

import Link from "next/link";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const quickLinks = [
  { id: "home", label: "Home", href: "/home" },
  { id: "about", label: "About", href: "/about" },
  { id: "menu", label: "Menu", href: "/menu" },
  { id: "vip", label: "VIP Rooms", href: "/vip" },
  { id: "weddings", label: "Weddings & Events", href: "/weddings" },
  { id: "gallery", label: "Gallery", href: "/gallery" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-(--bg2) pt-16 pb-8 border-t border-amber-600/20">
      <div className="max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="font-chinese text-2xl text-amber-500 font-semibold tracking-[4px]">
            御膳楼
          </div>
          <span className="font-cormorant text-sm text-amber-500/70 tracking-[3px] uppercase block mb-4">
            Empire Cuisine Restaurant
          </span>
          <div className="font-chinese text-sm text-amber-500 font-semibold tracking-[4px]">
            好吃 又有面子
          </div>
          <div className="font-chinese text-sm text-amber-500 font-semibold tracking-[4px]">
            位于巴生的精致中式餐饮酒楼，适合家庭聚餐、私人包厢聚会及宴会庆典。
          </div>
          <p className="font-eb-garamond text-sm text-amber-50/50 leading-relaxed italic max-w-xs mt-2">
            A refined Chinese dining destination in Klang for family dining,
            private gatherings and banquet celebrations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-cormorant text-xs tracking-[4px] uppercase text-amber-500 mb-5 font-semibold">
            Quick Links
          </div>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="font-eb-garamond text-sm text-amber-50/60 hover:text-amber-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-cormorant text-xs tracking-[4px] uppercase text-amber-500 mb-5 font-semibold">
            Contact
          </div>
          <div className="flex gap-2.5 mb-3">
            <FaPhone className="text-amber-500 mt-1 shrink-0 text-sm" />
            <a
              href="tel:+60122248811"
              className="font-eb-garamond text-sm text-amber-50/60 hover:text-amber-300 transition-colors"
            >
              012-224 8811
            </a>
          </div>
          <div className="flex gap-2.5 mb-4">
            <FaMapMarkerAlt className="text-amber-500 mt-1 shrink-0 text-sm" />
            <span className="font-eb-garamond text-sm text-amber-50/60">
              157, Jalan Limau Gedong, Kawasan 18, 41300 Klang, Selangor
            </span>
          </div>
          <Link
            href="https://wa.me/601222488811"
            target="_blank"
            className="inline-flex items-center gap-2 bg-emerald-700 text-white text-xs uppercase tracking-[2px] py-2.5 px-4 hover:bg-emerald-800 transition-all duration-300 rounded-sm"
          >
            <FaWhatsapp size={16} />
            WhatsApp Us
          </Link>
        </div>

        {/* Opening Hours */}
        <div>
          <div className="font-cormorant text-xs tracking-[4px] uppercase text-amber-500 mb-5 font-semibold">
            Opening Hours
          </div>
          <div className="flex flex-col gap-0.5 mb-3">
            <span className="text-amber-500/80 font-semibold text-sm">
              Mon – Fri
            </span>
            <span className="font-eb-garamond text-sm text-amber-50/60">
              10:30 AM – 2:30 PM
            </span>
            <span className="font-eb-garamond text-sm text-amber-50/60">
              5:30 PM – 10:30 PM
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-amber-500/80 font-semibold text-sm">
              Sat, Sun &amp; PH
            </span>
            <span className="font-eb-garamond text-sm text-amber-50/60">
              8:00 AM – 2:30 PM
            </span>
            <span className="font-eb-garamond text-sm text-amber-50/60">
              5:30 PM – 10:30 PM
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-10 pt-6 border-t border-amber-600/15 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-eb-garamond text-xs text-amber-50/60">
          © 2025 Empire Cuisine Restaurant (御膳楼). All Rights Reserved.
        </span>
        <span className="font-noto-serif-sc text-xs tracking-[3px] text-amber-50/60">
          御膳楼大酒家
        </span>
      </div>
    </footer>
  );
}
