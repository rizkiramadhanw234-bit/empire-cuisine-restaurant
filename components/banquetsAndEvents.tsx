import Image from "next/image";
import bgImage from "../public/assets/background.jpeg";
import ListDecoration from "../public/assets/listDecoration.png";
import castle from "../public/assets/castle.png";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { weddingPackages } from "@/data/weddingPackages";
import imageWeddingPackages from "../public/assets/weddingPackages.jpg";
import Weddings from "../public/assets/weddings.jpg";
import CreateYourSong from "../public/assets/createYourSong.jpg";

export default function WeddingsAndEvents() {
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
            <h1 className="text-amber-400 font-semibold text-3xl sm:text-4xl md:text-6xl leading-10 md:leading-20">
              Banquets & Event Enquiry <br />
              <span className="font-chinese font-light">宴会与活动策划</span>
            </h1>
            <Image src={ListDecoration} alt="listDecoration" width={400} />
            <h2 className=" text-white text-xl md:text-3xl leading-9">
              Every Celebration Deserves a Perfect Venue
            </h2>
            <p className="text-white/90 text-lg md:text-lg leading-7 md:leading-8 max-w-lg">
              从温馨家宴到盛大庆典， 御膳楼以精致佳肴、典雅场地与专业服务，
              为您打造难忘的宴会体验。
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
          {/* Main Hall */}
          <div className="flex-1 border-2 border-(--bg3) rounded-2xl p-6 flex flex-col gap-4">
            <video
              className="w-full h-full object-cover rounded-2xl"
              src="https://res.cloudinary.com/dqp0y3avg/video/upload/v1780908225/main_hall_lwuzos.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
            <div className="flex flex-col items-center gap-2">
              <Image src={castle} alt="castle" width={60} />
              <p className="text-(--bg2) font-bold text-2xl">Main Hall</p>
              <Image src={ListDecoration} alt="listDecoration" width={150} />
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <p className="text-sm text-gray-600">Capacity</p>
              <p className="text-4xl font-bold text-(--bg2)">35</p>
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
              Enquire for Main Hall
            </Link>
          </div>
          {/* Hall 1 */}
          <div className="flex-1 border-2 border-(--bg3) rounded-2xl p-6 flex flex-col gap-4">
            <video
              className="w-full h-full object-cover rounded-2xl"
              src="https://res.cloudinary.com/dqp0y3avg/video/upload/v1780250984/Banquet_Hall_1_esrce1.mp4"
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
              src="https://res.cloudinary.com/dqp0y3avg/video/upload/v1780250987/Banquet_Hall_2_ndwep7.mp4"
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
            href={`https://wa.me/15559202436?text=I%20would%20like%20to%20enquire%20about%20wedding%20arrangements`}
            target="_blank"
            className="px-6 py-3 bg-(--bg3) text-white rounded-lg hover:bg-amber-700 hover:scale-105 transition duration-300 text-sm font-semibold whitespace-nowrap shrink-0"
          >
            WhatsApp Us Now
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6" data-aos="fade-up">
        <Image src={Weddings} alt="weddingPackages" className="rounded-2xl" />
      </div>

      {/* WEDDING PACKAGES */}
      <div className="pt-6 pb-10 max-w-7xl mx-auto  border-t border-b border-(--bg3) px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Wedding Packages
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
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

      {/* create your song */}
      <div
        className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 md:px-10 mb-6 mt-6 "
        data-aos="fade-up"
      >
        <h2 className="text-(--bg2) font-bold text-center text-xl md:text-4xl pb-6">
          Create Your Song for Your Wedding
        </h2>
        <Image
          src={CreateYourSong}
          alt="weddingPackages"
          className="rounded-2xl"
        />
        <div
          className="flex flex-col mt-6 items-center justify-center"
          data-aos="fade-up"
        >
          <p className="font-chinese font-bold text-(--bg3) text-xl md:text-2xl">
            为珍贵时刻，谱写专属回忆
          </p>
          <p className="mt-4 mb-4 text-xs md:text-lg">
            A Song Written for Your Precious Moments
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-2 "
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2 items-center justify-center p-8 bg-(--bg3)/5 border border-(--bg3)/40 rounded-xl w-full md:h-42">
            <p className="font-chinese font-bold text-(--bg2) text-center text-sm">
              1分钟专属短曲 · 3分钟MV纪念歌曲
            </p>
            <p className="text-xs md:text-sm text-gray-700 text-center">
              Custom 1-Minute Song · 3-Minute MV Memory Song
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center p-8 bg-(--bg3)/5 border border-(--bg3)/40 rounded-xl w-full md:h-42">
            <p className="font-chinese font-bold text-(--bg2) text-center text-sm">
              把爱、感恩与祝福，变成一首只属于您的歌。
            </p>
            <p className="text-xs md:text-sm text-gray-700 text-center">
              Turn love, gratitude and blessings into a song made only for you.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center p-8 bg-(--bg3)/5 border border-(--bg3)/40 rounded-xl w-full md:h-42">
            <p className="font-chinese font-bold text-(--bg2) text-center text-sm ">
              仅限御膳楼，巴生。
            </p>
            <p className="text-xs md:text-sm text-gray-700 text-center">
              Only at Empire Cuisine, Klang.
            </p>
          </div>
        </div>
        <Link
          href="https://wa.me/60122248811?text=Hi%2C%20I%27m%20interested%20in%20your%20Songwriting%20Offer!"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 mt-4 bg-(--bg2) text-xs md:text-sm text-white rounded-lg hover:bg-red-800 hover:scale-105 transition duration-300 text-center cursor-pointer"
        >
          Ask About Our Songwriting Offer Now!
        </Link>{" "}
      </div>
    </div>
  );
}
