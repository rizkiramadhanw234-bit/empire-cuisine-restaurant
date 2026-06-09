"use client";

import Image from "next/image";
import bgImage from "../public/assets/background.jpeg";
import ListDecoration from "../public/assets/listDecoration.png";
import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";
import { MdBathroom } from "react-icons/md";

// lazy loading
import dynamic from "next/dynamic";
const VipCards = dynamic(() => import("./vipCards"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-20">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-(--bg3) rounded-full animate-spin" />
    </div>
  ),
});
export default function VipRooms() {
  // Selling points
  const sellingPoints = [
    {
      id: 1,
      title: "Private & Exclusive",
      desc: "Enjoy complete privacy in elegant surroundings.",
      chinese: "私密尊享",
    },
    {
      id: 2,
      title: "Premium Hospitality",
      desc: "Dedicated service for a seamless dining experience.",
      chinese: "贴心服务",
    },
    {
      id: 3,
      title: "Perfect for Any Occasion",
      desc: "From intimate dinners to grand celebrations and corporate events.",
      chinese: "适合各种场合",
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
              VIP Rooms
            </h1>
            <Image src={ListDecoration} alt="listDecoration" width={400} />
            <h2 className="text-white text-sm md:text-2xl leading-7 md:leading-9">
              Private Spaces. Exclusive Experiences.
            </h2>
            <h3 className="font-chinese text-white text-sm md:text-3xl font-light leading-7 md:leading-9 md:mt-4">
              私密 <span className="text-(--bg3)">·</span> 尊享{" "}
              <span className="text-(--bg3)">·</span> 典雅
            </h3>
          </div>
        </div>
      </div>

      {/* VVIP8 FEATURE CARD */}
      <div className="pt-10 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Select Your Private Room
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
          <p className="text-sm text-gray-600 mt-2">
            Elegantly appointed rooms for every special occasion.
          </p>
        </div>

        {/* VVIP8 Featured */}
        <div
          className="border-2 border-(--bg3) rounded-2xl p-6 mb-6 bg-(--bg3)/5"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-(--bg2) text-white font-bold text-2xl px-4 py-2 rounded-lg">
                  VVIP8
                </div>
                <span className="bg-(--bg3)/20 text-(--bg3) text-xs px-3 py-1 rounded-full font-semibold">
                  ★ Featured Room
                </span>
              </div>
              <Image src={ListDecoration} alt="listDecoration" width={150} />

              {/* Capacity info */}
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-(--bg2) rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                    <BsPeopleFill className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="font-bold text-(--bg2)">
                      Maximum 34 pax total
                    </p>
                    <p className="text-sm text-gray-600">
                      1 big table: 22 pax &nbsp;|&nbsp; 1 extra table: 12 pax
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-(--bg2) rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                    <MdBathroom className="text-white text-lg" />
                  </div>
                  <p className="text-sm font-semibold text-(--bg2)">
                    Toilet / Washroom Inside
                  </p>
                </div>
              </div>

              {/* Suitable for */}
              <div className="mt-4">
                <p className="text-sm font-semibold text-(--bg2) mb-2">
                  Best for:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Family Dinner",
                    "Birthday Celebration",
                    "Business Dining",
                    "Private Gathering",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-(--bg2)/10 text-(--bg2) text-xs px-3 py-1 rounded-full border border-(--bg2)/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-gray-500 italic mt-4">
                * Minimum spend applies. Please enquire for the latest
                arrangement.
              </p>
            </div>
            <div className="w-full md:w-130 md:h-70 h-60 flex items-center justify-center shrink-0">
              <video
                className="w-full h-full rounded-2xl object-cover shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
                src="https://res.cloudinary.com/dqp0y3avg/video/upload/v1780250953/VVIP8_VVIP_Room_8_r59v0k.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link
              href={`https://wa.me/60122248811?text=I%20would%20like%20to%20enquire%20about%20VVIP8%20room`}
              target="_blank"
              className="px-5 py-3 bg-(--bg2) text-white rounded-lg hover:bg-red-800 hover:scale-105 transition duration-300 text-sm text-center"
            >
              WhatsApp Enquiry
            </Link>
            <Link
              href="tel:+60122248811"
              className="px-5 py-3 border border-(--bg2) text-(--bg2) rounded-lg hover:bg-(--bg2)/10 hover:scale-105 transition duration-300 text-sm text-center"
            >
              Call Us
            </Link>
          </div>
        </div>
      </div>

      {/* OTHER VIP ROOMS GRID */}
      <div>
        <VipCards />
      </div>

      {/* SELLING POINTS */}
      <div className="pt-8 pb-10 max-w-7xl mx-auto border-t border-(--bg3) px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Why Book a VIP Room?
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {sellingPoints.map((point) => (
            <div
              key={point.id}
              className="flex-1 border border-(--bg3) rounded-2xl p-6 flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <p className="font-chinese text-(--bg3) text-2xl font-bold">
                {point.chinese}
              </p>
              <p className="font-bold text-(--bg2) text-lg">{point.title}</p>
              <Image src={ListDecoration} alt="listDecoration" width={100} />
              <p className="text-sm text-gray-600">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          data-aos="fade-up"
        >
          <Link
            href={`https://wa.me/60122248811?text=I%20would%20like%20to%20enquire%20about%20VIP%20Rooms`}
            target="_blank"
            className="px-6 py-3 bg-(--bg2) text-white rounded-lg hover:bg-red-800 hover:scale-105 transition duration-300 text-sm md:text-base text-center"
          >
            WhatsApp Enquiry
          </Link>
          <Link
            href="/booking"
            className="px-6 py-3 bg-(--bg3) text-white rounded-lg hover:bg-amber-700 hover:scale-105 transition duration-300 text-sm md:text-base text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
