"use client";
import { useState } from "react";
import Image from "next/image";
import bgImage from "../public/assets/background.jpeg";
import ListDecoration from "../public/assets/listDecoration.png";
import { GalleryImage } from "@/data/galleryImage";
import { GalleryVideo } from "@/data/galleryVideo";
import { gallerySignature } from "@/data/gallerySignature";

const ITEMS_PER_PAGE = 15;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSignature, setCurrentSignature] = useState(1);

  const galleryItems = [...GalleryImage, ...GalleryVideo];
  const filterTabs = ["All", "Images", "Videos"];

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const signaturePaginated = gallerySignature.slice(
    (currentSignature - 1) * ITEMS_PER_PAGE,
    currentSignature * ITEMS_PER_PAGE,
  );

  const totalSignaturePages = Math.ceil(
    gallerySignature.length / ITEMS_PER_PAGE,
  );

  const handleFilterChange = (tab: string) => {
    setActiveFilter(tab);
    setCurrentPage(1);
  };

  return (
    <div className="bg-(--primaryBackground)">
      {/* HERO  */}
      <div className="min-h-screen w-full relative overflow-hidden items-center justify-center">
        <Image src={bgImage} alt="bgImage" fill className="object-cover z-0" />
        <div className="relative z-10 flex flex-col items-start justify-center h-screen px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col gap-4 px-4 sm:px-10 md:mt-12"
            data-aos="fade-up"
          >
            <h1 className="text-amber-400 font-semibold text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-20">
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
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Our Gallery
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
        </div>
        <div
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
          data-aos="fade-up"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleFilterChange(tab)}
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

      {/* GRID */}
      <div className="pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4"
          data-aos="zoom-in"
        >
          {paginated.map((item) => (
            <div
              key={item.category + item.id}
              className="flex items-center justify-center rounded-2xl overflow-hidden border border-(--bg3) group relative cursor-pointer hover:scale-105 hover:shadow-lg transition duration-300"
            >
              {item.category === "Videos" ? (
                <video
                  src={item.item}
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={item.item}
                  alt={item.category}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              )}
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

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {/* Prev */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full text-sm font-semibold border border-(--bg3) text-(--bg2) disabled:opacity-30 hover:bg-(--bg3)/10 transition duration-300"
            >
              ← Prev
            </button>

            {/* pages numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-full text-sm font-semibold transition duration-300 ${
                  currentPage === page
                    ? "bg-(--bg2) text-white"
                    : "border border-(--bg3) text-(--bg2) hover:bg-(--bg3)/10"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full text-sm font-semibold border border-(--bg3) text-(--bg2) disabled:opacity-30 hover:bg-(--bg3)/10 transition duration-300"
            >
              Next →
            </button>
          </div>
        )}
      </div>

      {/* food photos and menu highlights*/}
      <div className="pt-10 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-center text-2xl md:text-4xl pb-2">
            Signature Taste of Empire Cuisine
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
          <p className="font-chinese text-(--bg3) text-lg mt-1">御膳美食</p>
        </div>
        <div className="pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4"
            data-aos="zoom-in"
          >
            {signaturePaginated.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center rounded-2xl overflow-hidden border border-(--bg3) group relative cursor-pointer hover:scale-105 hover:shadow-lg transition duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {signaturePaginated.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="font-chinese text-(--bg3) text-4xl mb-2">无</p>
              <p className="text-gray-500 text-sm">
                No items found in this category.
              </p>
            </div>
          )}

          {/* PAGINATION */}
          {totalSignaturePages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              {/* Prev */}
              <button
                onClick={() => setCurrentSignature((p) => Math.max(p - 1, 1))}
                disabled={currentSignature === 1}
                className="px-4 py-2 rounded-full text-sm font-semibold border border-(--bg3) text-(--bg2) disabled:opacity-30 hover:bg-(--bg3)/10 transition duration-300"
              >
                ← Prev
              </button>

              {/* pages numbers */}
              {Array.from({ length: totalSignaturePages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentSignature(page)}
                    className={`w-9 h-9 rounded-full text-sm font-semibold transition duration-300 ${
                      currentSignature === page
                        ? "bg-(--bg2) text-white"
                        : "border border-(--bg3) text-(--bg2) hover:bg-(--bg3)/10"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              {/* Next */}
              <button
                onClick={() =>
                  setCurrentSignature((p) =>
                    Math.min(p + 1, totalSignaturePages),
                  )
                }
                disabled={currentSignature === totalSignaturePages}
                className="px-4 py-2 rounded-full text-sm font-semibold border border-(--bg3) text-(--bg2) disabled:opacity-30 hover:bg-(--bg3)/10 transition duration-300"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
