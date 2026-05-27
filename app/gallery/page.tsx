// NOTE: Replace the placeholder divs with actual <Image> components once
// the real photo assets are added to /public/assets/gallery/.
// Example: <Image src={galleryImage1} alt="..." fill className="object-cover" />

"use client";
import { useState } from "react";
import Image from "next/image";
import bgImage from "../../public/assets/background.png";
import ListDecoration from "../../public/assets/listDecoration.png";

type GallerySize = "small" | "medium" | "large";

type GalleryItem = {
  id: number;
  category: string;
  label: string;
  chinese: string;
  size: GallerySize;
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = [
    "All",
    "Restaurant Interior",
    "Dim Sum",
    "Seafood",
    "Banquet",
    "Wedding",
    "VIP Rooms",
    "Festive Events",
  ];

  // Gallery items – replace `placeholder` with real image imports once assets are ready
  // Each item: { id, category, label, chinese }
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: "Restaurant Interior",
      label: "Main Dining Hall",
      chinese: "大厅",
      size: "large",
    },
    {
      id: 2,
      category: "Dim Sum",
      label: "御膳烧卖",
      chinese: "烧卖",
      size: "small",
    },
    {
      id: 3,
      category: "Seafood",
      label: "Wok-Fried Lobster",
      chinese: "炒龙虾",
      size: "small",
    },
    {
      id: 4,
      category: "Banquet",
      label: "Banquet Hall Setup",
      chinese: "宴会厅",
      size: "medium",
    },
    {
      id: 5,
      category: "Wedding",
      label: "Wedding Decoration",
      chinese: "婚礼布置",
      size: "large",
    },
    {
      id: 6,
      category: "VIP Rooms",
      label: "VVIP8 Room",
      chinese: "贵宾室",
      size: "medium",
    },
    {
      id: 7,
      category: "Dim Sum",
      label: "Shanghai Xiao Long Bao",
      chinese: "小笼包",
      size: "small",
    },
    {
      id: 8,
      category: "Festive Events",
      label: "Festive Gathering",
      chinese: "节庆",
      size: "small",
    },
    {
      id: 9,
      category: "Restaurant Interior",
      label: "Restaurant Entrance",
      chinese: "入口",
      size: "medium",
    },
    {
      id: 10,
      category: "Seafood",
      label: "Braised Abalone",
      chinese: "鲍鱼",
      size: "small",
    },
    {
      id: 11,
      category: "Wedding",
      label: "Wedding Banquet",
      chinese: "婚宴",
      size: "medium",
    },
    {
      id: 12,
      category: "VIP Rooms",
      label: "V3 Private Room",
      chinese: "私人包厢",
      size: "small",
    },
    {
      id: 13,
      category: "Banquet",
      label: "Corporate Dinner Setup",
      chinese: "企业晚宴",
      size: "large",
    },
    {
      id: 14,
      category: "Festive Events",
      label: "Chinese New Year",
      chinese: "新年",
      size: "medium",
    },
    {
      id: 15,
      category: "Dim Sum",
      label: "Dim Sum Spread",
      chinese: "点心拼盘",
      size: "medium",
    },
  ];

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // Map size to Tailwind row/col spans for masonry feel
  const sizeClass = {
    small: "row-span-1",
    medium: "row-span-2",
    large: "row-span-3",
  };

  const heightClass = {
    small: "h-40",
    medium: "h-64",
    large: "h-80",
  };

  return (
    <div className="bg-(--primaryBackground)">
      {/* HERO */}
      <div className="min-h-screen w-full relative overflow-hidden items-center justify-center">
        <Image src={bgImage} alt="bgImage" fill className="object-cover z-0" />

        <div className="relative z-10 flex flex-col items-start justify-center h-screen px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 px-4 sm:px-10 md:mt-12">
            <h1 className="text-(--bg3) font-semibold text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-20">
              Gallery
            </h1>
            <Image src={ListDecoration} alt="listDecoration" width={400} />
            <h2 className="text-white text-sm md:text-2xl leading-7 md:leading-9">
              A visual journey through exceptional <br /> dining experiences.
            </h2>
            <h3 className="font-chinese text-white text-sm md:text-3xl font-light leading-7 md:leading-9 md:mt-4">
              御膳楼 <span className="text-(--bg3)">·</span> 光影留存
            </h3>
          </div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="pt-10 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-6">
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Our Gallery
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
        </div>

        {/* Scrollable filter tabs on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
                activeFilter === tab
                  ? "bg-(--bg2) text-white"
                  : "border border-(--bg3) text-(--bg2) hover:bg-(--bg3)/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* MASONRY GRID */}
      <div className="pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`break-inside-avoid rounded-2xl overflow-hidden border border-(--bg3) group relative ${heightClass[item.size]}`}
            >
              {/* Placeholder – replace with real Image once assets exist */}
              <div className="w-full h-full bg-(--bg3)/10 flex items-center justify-center relative">
                <p className="font-chinese text-(--bg2) text-4xl font-bold opacity-30">
                  {item.chinese}
                </p>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-(--bg2)/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center gap-2 p-4">
                  <p className="font-chinese text-white text-xl font-bold">
                    {item.chinese}
                  </p>
                  <p className="text-white text-sm text-center">{item.label}</p>
                  <span className="text-xs text-white bg-white/20 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="font-chinese text-(--bg3) text-4xl mb-2">无</p>
            <p className="text-gray-500 text-sm">
              No items found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
