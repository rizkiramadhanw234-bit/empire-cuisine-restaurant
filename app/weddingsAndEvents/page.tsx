import Image from "next/image";
import bgImage from "../../public/assets/background.jpeg";
import ListDecoration from "../../public/assets/listDecoration.png";
import castle from "../../public/assets/castle.png";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function WeddingsAndEventsPage() {
  // Wedding packages
  const weddingPackages = [
    {
      id: 1,
      name: "心心相印宴",
      price: "RM988",
      suffix: "++",
      unit: "per 10 pax",
      note: "Dish changes can be arranged with added price and manager discussion.",
    },
    {
      id: 2,
      name: "经典佳宴",
      price: "RM1,288",
      suffix: " nett",
      unit: "per 10 pax",
      note: "Dish changes can be arranged with added price and manager discussion.",
    },
    {
      id: 3,
      name: "豪华佳宴",
      price: "RM1,488",
      suffix: " nett",
      unit: "per 10 pax",
      note: null,
    },
    {
      id: 4,
      name: "尊贵佳宴",
      price: "RM1,688",
      suffix: " nett",
      unit: "per 10 pax",
      note: null,
    },
    {
      id: 5,
      name: "帝皇佳宴",
      price: "RM1,888",
      suffix: " nett",
      unit: "per 10 pax",
      note: null,
      featured: true,
    },
  ];

  // What's included / highlights
  const eventHighlights = [
    "Dedicated banquet coordinator",
    "Flexible seating arrangements",
    "Premium dining experience",
    "Suitable for weddings, company dinners, birthdays & large gatherings",
    "Tailored arrangements to suit your needs and budget",
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
              Weddings <br /> & Events
            </h1>
            <Image src={ListDecoration} alt="listDecoration" width={400} />
            <h2 className="font-chinese text-white text-xl md:text-3xl leading-9">
              囍宴佳期 · 幸福盛宴
            </h2>
            <p className="text-white/90 text-sm md:text-lg leading-7 md:leading-8 max-w-lg">
              Celebrate your most precious moments with exquisite cuisine,
              elegant venues and impeccable service. At Empire Cuisine, we make
              every celebration truly unforgettable.
            </p>
          </div>
        </div>
      </div>

      {/* BANQUET HALLS */}
      <div className="pt-10 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Banquet Halls
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
        </div>

        <div className="flex flex-col md:flex-row gap-4" data-aos="fade-up">
          {/* Hall 1 */}
          <div className="flex-1 border-2 border-(--bg3) rounded-2xl p-6 flex flex-col gap-4">
            <video
              className="w-full h-full object-cover rounded-2xl"
              src="https://github.com/rizkiramadhanw234-bit/empire-cuisine-restaurant/releases/download/banquet1/Banquet.Hall.1.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
            <div className="flex flex-col items-center gap-2">
              <Image src={castle} alt="castle" width={60} />
              <p className="text-(--bg2) font-bold text-2xl">Hall 1</p>
              <Image src={ListDecoration} alt="listDecoration" width={150} />
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-sm text-gray-600">Capacity</p>
              <p className="text-4xl font-bold text-(--bg2)">32</p>
              <p className="text-sm">tables</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center bg-(--bg3)/10 rounded-xl p-4">
              <p className="text-sm text-gray-600">Minimum Spend</p>
              <p className="text-2xl font-bold text-(--bg3)">RM15,000</p>
              <p className="text-xs text-gray-500">nett</p>
            </div>
            <div className="flex flex-col gap-2">
              {eventHighlights.slice(0, 4).map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <FaCheckCircle className="text-(--bg3) text-sm mt-1 shrink-0" />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href={`https://wa.me/60122248811?text=I%20would%20like%20to%20enquire%20about%20Hall%201`}
              target="_blank"
              className="px-4 py-3 bg-(--bg2) text-white rounded-lg hover:bg-red-800 hover:scale-105 transition duration-300 text-sm text-center mt-auto"
            >
              Enquire for Hall 1
            </Link>
          </div>

          {/* Hall 2 */}
          <div className="flex-1 border-2 border-(--bg2) rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-2xl"
              src="https://github.com/rizkiramadhanw234-bit/empire-cuisine-restaurant/releases/download/banquet2/Banquet.Hall.2.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
            <div className="absolute top-4 right-4 bg-(--bg2) text-white text-xs px-3 py-1 rounded-full font-semibold">
              Largest
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image src={castle} alt="castle" width={60} />
              <p className="text-(--bg2) font-bold text-2xl">Hall 2</p>
              <Image src={ListDecoration} alt="listDecoration" width={150} />
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-sm text-gray-600">Capacity</p>
              <p className="text-4xl font-bold text-(--bg2)">50</p>
              <p className="text-sm">tables</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center bg-(--bg2)/10 rounded-xl p-4">
              <p className="text-sm text-gray-600">Minimum Spend</p>
              <p className="text-2xl font-bold text-(--bg2)">RM30,000</p>
              <p className="text-xs text-gray-500">nett</p>
            </div>
            <div className="flex flex-col gap-2">
              {eventHighlights.slice(0, 4).map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <FaCheckCircle className="text-(--bg3) text-sm mt-1 shrink-0" />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href={`https://wa.me/60122248811?text=I%20would%20like%20to%20enquire%20about%20Hall%202`}
              target="_blank"
              className="px-4 py-3 bg-(--bg2) text-white rounded-lg hover:bg-red-800 hover:scale-105 transition duration-300 text-sm text-center mt-auto"
            >
              Enquire for Hall 2
            </Link>
          </div>
        </div>
      </div>

      {/* WEDDING ARRANGEMENT BANNER */}
      <div
        className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <div className="bg-(--bg2) text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-chinese text-(--bg3) text-2xl font-bold">
              囍宴特别安排
            </p>
            <p className="font-bold text-lg">Wedding Special Arrangement</p>
            <Image src={ListDecoration} alt="listDecoration" width={150} />
            <p className="text-sm leading-6 max-w-lg">
              We proudly support weddings from{" "}
              <strong>10 tables up to 32 tables</strong>. Tailored arrangements
              to suit your needs and budget. Please WhatsApp us to check
              availability and make arrangements.
            </p>
          </div>
          <Link
            href={`https://wa.me/60122248811?text=I%20would%20like%20to%20enquire%20about%20wedding%20arrangements`}
            target="_blank"
            className="px-6 py-3 bg-(--bg3) text-white rounded-lg hover:bg-amber-700 hover:scale-105 transition duration-300 text-sm font-semibold whitespace-nowrap shrink-0"
          >
            WhatsApp Us Now
          </Link>
        </div>
      </div>

      {/* WEDDING PACKAGES */}
      <div className="pt-6 pb-10 max-w-7xl mx-auto border-t border-(--bg3) px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Wedding Packages
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {weddingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`border rounded-2xl p-5 flex flex-col items-center gap-3 hover:shadow-md transition duration-300 ${
                pkg.featured
                  ? "border-2 border-(--bg2) bg-(--bg2)/5"
                  : "border-(--bg3)"
              }`}
              data-aos="zoom-in"
            >
              {pkg.featured && (
                <span className="bg-(--bg3) text-white text-xs px-3 py-1 rounded-full font-semibold">
                  ★ Premium
                </span>
              )}
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
              {pkg.note && (
                <p className="text-xs text-gray-500 italic text-center">
                  * {pkg.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Package note */}
        <div
          className="mt-4 p-4 bg-(--bg3)/5 border border-(--bg3)/40 rounded-xl"
          data-aos="fade-up"
        >
          <p className="text-xs text-gray-600 text-center">
            * For RM988 or RM1,288 package, if the customer wishes to change
            dishes, it can be arranged with added price and manager discussion.
          </p>
        </div>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          data-aos="fade-up"
        >
          <Link
            href={`https://wa.me/60122248811?text=I%20would%20like%20to%20enquire%20about%20wedding%20packages`}
            target="_blank"
            className="px-6 py-3 bg-(--bg2) text-white rounded-lg hover:bg-red-800 hover:scale-105 transition duration-300 text-sm md:text-base text-center"
          >
            Enquire for Packages
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-(--bg2) text-(--bg2) rounded-lg hover:bg-(--bg2)/10 hover:scale-105 transition duration-300 text-sm md:text-base text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
