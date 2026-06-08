"use client";
import Image from "next/image";
import bgImage from "../public/assets/background.jpeg";
import ListDecoration from "../public/assets/listDecoration.png";
import DimsumImage from "../public/assets/RM3++.jpg";
import RM2180Image from "../public/assets/RM2180++.jpg";
import Link from "next/link";
import { weddingPackages } from "@/data/weddingPackages";
import imageWeddingPackages from "../public/assets/weddingPackages.jpg";
import RM1Image from "../public/assets/RM1++.jpg";

export default function Promotions() {
  const promotions = [
    {
      id: 1,
      image: RM1Image,
      tag: "Dinner hours only",
      title: "RM1++ Dinner Add-on Promotion",
      chinese: "",
      badge: "RM1++",
      badgeColor: "bg-(--bg3)",
      details: [
        {
          label: "Information",
          value: "Available Monday to Sunday, including Public Holidays",
        },
        {
          label: "Note",
          value: "Only applicable with selected special set meals",
        },
      ],
      cta: "View Menu",
      ctaHref: "/menu",
      ctaStyle: "bg-(--bg3)",
    },
    {
      id: 2,
      image: DimsumImage,
      tag: "Dim Sum Special",
      title: "RM3++ Dim Sum Promotion",
      chinese: "点心优惠",
      badge: "RM3++",
      badgeColor: "bg-(--bg2)",
      details: [
        {
          label: "Applies only to",
          value:
            "御膳烧卖 (Empire Siew Mai) and 上海小笼包 (Shanghai Xiao Long Bao)",
        },
        {
          label: "Note",
          value: "Other dim sum items are priced as per menu.",
        },
      ],
      cta: "View Menu",
      ctaHref: "/menu",
      ctaStyle: "bg-(--bg2)",
    },
    {
      id: 3,
      image: RM2180Image,
      tag: "Value Meal",
      title: "RM21.80++ Value Set Meal",
      chinese: "超值套餐",
      badge: "RM21.80++",
      badgeColor: "bg-(--bg3)",
      details: [
        { label: "Location", value: "Main Hall only" },
        {
          label: "Lunch",
          value: "Mon–Sun including Public Holidays, 10:30 AM–2:30 PM",
        },
        {
          label: "Dinner",
          value: "Mon–Thu excluding Public Holidays, 5:30 PM–10:30 PM",
        },
        {
          label: "Rule",
          value:
            "Minimum 6 pax choose 4 dishes or minimum 10 pax choose 7 dishes.",
        },
        { label: "Includes", value: "Daily soup, rice, and tea." },
      ],
      cta: "Book Now",
      ctaHref: "/booking",
      ctaStyle: "bg-(--bg3)",
    },
  ];

  return (
    <div className="bg-(--primaryBackground)">
      {/* HERO */}
      <div className="min-h-screen w-full relative overflow-hidden items-center justify-center">
        <Image src={bgImage} alt="bgImage" fill className="object-cover z-0" />

        <div className="relative z-10 flex flex-col items-start justify-center h-screen px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col gap-4 px-4 sm:px-10 md:mt-12"
            data-aos="fade-up"
          >
            <h1 className="text-amber-400 font-semibold text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-20">
              Promotions <br /> & Packages
            </h1>
            <Image src={ListDecoration} alt="listDecoration" width={400} />
            <h2 className="text-white text-sm md:text-2xl leading-7 md:leading-9">
              Exclusive deals and special packages <br /> for every occasion.
            </h2>
            <h3 className="font-chinese text-white text-sm md:text-3xl font-light leading-7 md:leading-9 md:mt-4">
              优惠特价 <span className="text-(--bg3)">|</span> 精选配套
            </h3>
          </div>
        </div>
      </div>

      {/* MAIN PROMOTIONS */}
      <div className="pt-10 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Current Promotions
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="flex-1 border border-(--bg3) rounded-2xl p-6 flex flex-col gap-4"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  width={550}
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`${promo.badgeColor} text-white font-bold text-xl px-4 py-2 rounded-lg shrink-0`}
                >
                  {promo.badge}
                </div>
                <div>
                  <p className="font-chinese text-(--bg2) font-bold text-lg">
                    {promo.chinese}
                  </p>
                  <p className="text-xs text-gray-500">{promo.tag}</p>
                </div>
              </div>
              <p className="font-bold text-(--bg2) text-lg">{promo.title}</p>
              <Image src={ListDecoration} alt="listDecoration" width={150} />
              <div className="flex flex-col gap-2 flex-1">
                {promo.details.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-2">
                    <span className="text-(--bg2) font-semibold text-xs shrink-0 w-20">
                      {detail.label}:
                    </span>
                    <span className="text-xs text-gray-700">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href={promo.ctaHref}
                className={`${promo.ctaStyle} text-white px-4 py-2 rounded-lg hover:opacity-80 hover:scale-105 transition duration-300 text-sm text-center`}
              >
                {promo.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* WEDDING PACKAGES */}
      <div className="pt-6 pb-6 max-w-7xl mx-auto border-t border-(--bg3) px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Wedding Packages
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
          <p className="font-chinese text-(--bg3) text-lg mt-1">囍宴配套</p>
        </div>
        <div className="mb-6" data-aos="fade-up">
          <Image
            src={imageWeddingPackages}
            alt="weddingPackages"
            className="rounded-2xl"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {weddingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`border border-(--bg3) rounded-2xl p-5 flex flex-col items-center justify-between gap-3 hover:shadow-md transition duration-300 `}
              data-aos="zoom-in"
            >
              <p className="font-chinese text-(--bg2) text-xl font-bold text-center">
                {pkg.name}
              </p>
              <Image src={ListDecoration} alt="listDecoration" width={100} />
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-(--bg2)">
                  {pkg.price}
                  <span className="text-sm font-normal">{pkg.suffix}</span>
                </p>
                <p className="text-xs text-gray-500">{pkg.unit}</p>
              </div>
              <p className="text-xs text-gray-500 italic text-center">
                * {pkg.note}
              </p>

              <a
                href={pkg.download}
                target="_blank"
                className="px-4 py-2 bg-(--bg2) text-white rounded-lg hover:bg-red-800 hover:scale-105 transition duration-300 text-xs md:text-xs text-center"
              >
                Download Menu
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6" data-aos="fade-up">
          <Link
            href="/weddingsAndEvents"
            className="px-6 py-3 bg-(--bg3) text-white rounded-lg hover:bg-amber-700 hover:scale-105 transition duration-300 text-sm"
          >
            Explore Packages
          </Link>
        </div>
      </div>

      {/* BRING YOUR OWN FISH / PRAWN */}
      <div className="pt-6 pb-10 max-w-7xl mx-auto border-t border-(--bg3) px-4 sm:px-6 lg:px-50">
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Bring Your Own Fish or Prawn
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
          <p className="font-chinese text-(--bg3) text-lg mt-1">
            自带海鲜加工服务
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
        >
          <div className="flex-1 border border-(--bg3) rounded-2xl p-6 flex flex-col items-center gap-3 max-w-80 mx-auto w-full sm:w-auto">
            <p className="text-sm text-gray-600 text-center">
              Steam cooking fee
            </p>
            <p className="text-2xl font-bold text-(--bg2)">
              RM50<span className="text-base font-normal">++ per kg</span>
            </p>
            <Image src={ListDecoration} alt="listDecoration" width={100} />
            <p className="font-semibold text-(--bg2)">Fish or Prawn</p>
          </div>
          <div className="flex-1 border border-(--bg3) rounded-2xl p-6 flex flex-col items-center gap-3 max-w-80 mx-auto w-full sm:w-auto">
            <p className="text-sm text-gray-600 text-center">Cooking fee</p>
            <p className="text-2xl font-bold text-(--bg2)">
              RM80<span className="text-base font-normal">++ per kg</span>
            </p>
            <Image src={ListDecoration} alt="listDecoration" width={100} />
            <p className="font-semibold text-(--bg2)">Others</p>
          </div>
        </div>
        <p
          className="text-xs text-gray-500 italic text-center mt-4"
          data-aos="fade-up"
        >
          * Advance notice is required and subject to market availability.
        </p>
      </div>
    </div>
  );
}
