import Image from "next/image";
import bgImage from "../../public/assets/background.png";
import ListDecoration from "../../public/assets/listDecoration.png";
import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";
import { MdBathroom } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

export default function VipRoomsPage() {
  // All VIP rooms data
  const vipRooms = [
    {
      id: "V1",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Business Dining", "Private Gathering"],
    },
    {
      id: "V2",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Birthday Celebration", "Business Dining"],
    },
    {
      id: "V3",
      hasWashroom: true,
      suitableFor: ["Family Dinner", "Business Dining", "Private Gathering"],
    },
    {
      id: "V5",
      hasWashroom: true,
      suitableFor: [
        "Birthday Celebration",
        "Business Dining",
        "Private Gathering",
      ],
    },
    {
      id: "V6",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Business Dining", "Private Gathering"],
    },
    {
      id: "V7",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Birthday Celebration", "Business Dining"],
    },
    {
      id: "V9",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Business Dining", "Private Gathering"],
    },
  ];

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
          <div className="flex flex-col gap-4 px-4 sm:px-10 md:mt-12">
            <h1 className="text-(--bg3) font-semibold text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-20">
              VIP <br /> Rooms
            </h1>
            <Image src={ListDecoration} alt="listDecoration" width={400} />
            <h2 className="text-white text-sm md:text-2xl leading-7 md:leading-9">
              Private Spaces. Exclusive Experiences.
            </h2>
            <h3 className="font-chinese text-white text-sm md:text-xl font-light leading-7 md:leading-9 md:mt-4">
              私密 <span className="text-(--bg3)">·</span> 尊享{" "}
              <span className="text-(--bg3)">·</span> 典雅
            </h3>
          </div>
        </div>
      </div>

      {/* VVIP8 FEATURE CARD */}
      <div className="pt-10 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-6">
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Select Your Private Room
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
          <p className="text-sm text-gray-600 mt-2">
            Elegantly appointed rooms for every special occasion.
          </p>
        </div>

        {/* VVIP8 Featured */}
        <div className="border-2 border-(--bg3) rounded-2xl p-6 mb-6 bg-(--bg3)/5">
          <div className="flex flex-col md:flex-row gap-6 items-start">
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

            {/* Placeholder image */}
            <div className="w-full md:w-72 h-60 bg-(--bg3)/10 rounded-2xl flex items-center justify-center shrink-0">
              <p className="font-chinese text-(--bg2) text-5xl font-bold">
                御膳楼
              </p>
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
      <div className="pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {vipRooms.map((room) => (
            <div
              key={room.id}
              className="border border-(--bg3) rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-(--bg2) transition duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="bg-(--bg2) text-white font-bold text-xl px-3 py-1 rounded-lg">
                  {room.id}
                </div>
                {room.hasWashroom && (
                  <div
                    className="flex items-center gap-1 text-xs text-(--bg3) font-semibold"
                    title="Attached Washroom"
                  >
                    <MdBathroom className="text-lg" />
                    <span>Toilet Inside</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold text-(--bg2)">
                  Suitable for:
                </p>
                {room.suitableFor.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <FaCheckCircle className="text-(--bg3) text-xs shrink-0" />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 italic">
                * Minimum spend applies. Please enquire.
              </p>

              <Link
                href={`https://wa.me/60122248811?text=I%20would%20like%20to%20enquire%20about%20${room.id}%20room`}
                target="_blank"
                className="px-3 py-2 bg-(--bg3) text-white rounded-lg hover:bg-amber-700 hover:scale-105 transition duration-300 text-xs text-center mt-auto"
              >
                Check Availability
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* SELLING POINTS */}
      <div className="pt-8 pb-10 max-w-7xl mx-auto border-t border-(--bg3) px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-6">
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
