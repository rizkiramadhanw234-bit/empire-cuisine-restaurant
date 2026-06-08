import Image from "next/image";
import castle from "../public/assets/castle.png";
import ImagePremium from "../public/assets/1.png";
import ImagePrivate from "../public/assets/2.png";
import ImageBanquet from "../public/assets/3.png";
import Dimsum from "../public/assets/dimSum.png";
import Seafood from "../public/assets/seafood.png";
import RoastedItems from "../public/assets/roastedItems.png";
import Noodles from "../public/assets/noodles.png";
import setMeals from "../public/assets/setMeals.png";
import Dishes from "../public/assets/signaturesDishes.png";
import Maps from "../public/assets/maps.png";
import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineBedroomChild } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import ListDecoration from "../public/assets/listDecoration.png";
import VipRoomsImage from "../public/assets/viprooms.jpg";

export default function Home() {
  const halls = [
    {
      id: 1,
      name: "Main Hall",
      tables: 32,
      minSpend: "RM15,000",
    },
    {
      id: 2,
      name: "Hall 2",
      tables: 32,
      minSpend: "RM15,000",
    },
    {
      id: 3,
      name: "Hall 3",
      tables: 50,
      minSpend: "RM30,000",
    },
  ];

  const features = [
    {
      id: 1,
      image: ImagePremium,
      titleChinese: "优 质 中 式 料 理",
      titleEnglish: "Premium Chinese Cuisine",
      descChinese: "精选优质食材，匠心烹饪，\n呈现正宗中式美味。",
    },
    {
      id: 2,
      image: ImagePrivate,
      titleChinese: "私 人 包 厢",
      titleEnglish: "Private Rooms",
      descChinese: "多间风格雅致的私人包厢，\n适合家宴、商务宴请与小型聚会。",
    },
    {
      id: 3,
      image: ImageBanquet,
      titleChinese: "双层多功能宴会厅",
      titleEnglish: "Two-Storey Multifunction\nBanquet Hall",
      descChinese: "双层宴会空间，设备齐全，\n满足不同规模宴会需求。",
    },
    {
      id: 4,
      image: ImagePremium,
      titleChinese: "一站式宴会服务",
      titleEnglish: "One-Stop Event Solutions",
      descChinese: "场地、餐饮、流程安排，\n让主办方更轻松。",
    },
    {
      id: 5,
      image: ImagePrivate,
      titleChinese: "巴生十大名菜",
      titleEnglish: "Signature Klang Specialties",
      descChinese: "品尝最具代表性的巴生风味。",
    },
    {
      id: 6,
      image: ImageBanquet,
      titleChinese: "免费停车",
      titleEnglish: "Ample FREE Parking Convenience",
      descChinese: "让宾客轻松赴宴。",
    },
  ];

  const DiningHighligts = [
    { id: 1, name: "Dim Sum", image: Dimsum },
    { id: 2, name: "Seafood", image: Seafood },
    { id: 3, name: "Roasted Items", image: RoastedItems },
    { id: 4, name: "Noodles", image: Noodles },
    { id: 5, name: "Set Meals", image: setMeals },
    { id: 6, name: "Signatures Dishes", image: Dishes },
  ];

  return (
    <div className="bg-(--primaryBackground)">
      {/*  HERO  */}
      <div className="min-h-screen w-full relative overflow-hidden items-center justify-center">
        <video
          className="z-0 absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dqp0y3avg/video/upload/v1780250620/Main_Page_Video_Background_l0tjih.mp4"
            type="video/mp4"
          />
        </video>

        <div className="relative z-10 flex flex-col items-start justify-center h-screen px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col gap-4 px-4 sm:px-10 md:mt-12"
            data-aos="fade-up"
          >
            <div className="font-chinese text-amber-400 text-4xl sm:text-5xl md:text-6xl">
              御膳楼大酒家
            </div>
            <h1 className="text-amber-400 font-semibold text-2xl sm:text-4xl md:text-5xl md:mb-4">
              Empire Cuisine Restaurant
            </h1>
            <h2 className="font-chinese font-bold text-amber-400 text-3xl sm:text-4xl md:text-6xl">
              巴生人的宴客中心之首选
            </h2>
            <p className="font-bold text-white text-sm md:text-4xl">
              Authentic Chinese Dining & Banquet Destination
            </p>

            <Image src={ListDecoration} alt="Empire Cuisine" width={300} />
            <h3 className="text-white text-sm md:text-2xl font-light leading-7 md:leading-9">
              从家庭聚餐、商务宴请到婚宴寿宴， 一站式满足您的餐饮与宴会需求。
            </h3>
          </div>

          {/* cta */}
          <div
            className="flex flex-wrap gap-4 mt-8 px-4 sm:px-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Link
              href="/vipRooms"
              className="bg-(--bg2) text-white px-5 py-3 text-xs md:text-base rounded-lg hover:bg-red-800 hover:scale-105 duration-300"
            >
              View VIP Rooms
            </Link>
            <Link
              href="/weddingsAndEvents"
              className="bg-(--bg3) text-white px-5 py-3 text-xs md:text-base rounded-lg hover:bg-amber-700 hover:scale-105 duration-300"
            >
              Enquire for Events
            </Link>
          </div>
        </div>
      </div>

      {/*  WHY EMPIRE CUISINE  */}
      <div className="pt-8 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div
            className="text-center text-xl md:text-2xl text-(--bg2) font-bold mb-2"
            data-aos="fade-up"
          >
            Why Empire Cuisine
          </div>
          <Image src={ListDecoration} alt="Empire Cuisine" width={250} />
        </div>

        <div
          className="flex flex-col md:grid md:grid-cols-3 items-start justify-between gap-8 md:gap-8 pt-5 pb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start justify-between gap-8"
            >
              <Image
                src={feature.image}
                alt={feature.titleEnglish}
                width={70}
                height={70}
                className="object-contain"
              />
              <div className="flex flex-col items-start justify-between gap-1">
                <p className="text-(--bg2) font-bold text-xl">
                  {feature.titleChinese}
                </p>
                <p
                  className="text-base font-bold pb-2"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {feature.titleEnglish}
                </p>
                <p className="text-sm" style={{ whiteSpace: "pre-line" }}>
                  {feature.descChinese}
                </p>
              </div>
              <span className="hidden md:block border md:border-y-0 md:border-x md:py-15 border-(--bg3) w-full md:w-auto border-t" />
            </div>
          ))}
        </div>
      </div>

      {/*  VIP + BANQUET CARDS  */}
      <div className="pt-4 pb-4  px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col lg:flex-row items-stretch justify-center gap-4"
          data-aos="fade-up"
        >
          {/* card 1 – VIP Rooms */}
          <div className="p-4 border border-(--bg3) rounded-2xl flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex flex-col md:flex items-center justify-between">
              <div className="flex flex-col items-center justify-between p-2">
                <p className="text-center font-bold text-(--bg2) text-xl pb-2">
                  Private Dining & VIP Rooms
                </p>
                <Image src={ListDecoration} alt="Empire Cuisine" width={250} />
                <div className="flex flex-col items-center justify-center gap-2 pt-2">
                  <p className="text-sm">Multiple private rooms available:</p>
                  <p className="text-xl font-bold text-(--bg2)">
                    VVIP8, V1, V2, V3, V5, V6, V7, V9.
                  </p>
                  <div className="flex flex-col items-start">
                    <div className="flex gap-3 items-start justify-center mt-3">
                      <div className="flex p-2 gap-3 items-center justify-center bg-(--bg2) rounded-full w-10 h-10 shrink-0">
                        <div className="text-white text-lg">
                          <BsPeopleFill />
                        </div>
                      </div>
                      <p className="text-sm ml-2">
                        <span className="font-bold text-(--bg2)">VVIP8</span>{" "}
                        accommodates up to{" "}
                        <span className="text-(--bg2) font-bold">34</span>{" "}
                        guests in total <br /> (22 at the main table + optional
                        extra seating for 12).
                      </p>
                    </div>
                    <div className="flex gap-3 items-center justify-center mt-3">
                      <div className="flex p-2 gap-2 items-center justify-center bg-(--bg2) rounded-full w-10 h-10 shrink-0">
                        <div className="text-white text-lg">
                          <MdOutlineBedroomChild />
                        </div>
                      </div>
                      <p className="text-sm ml-2">
                        <span className="text-(--bg2) font-bold">
                          VVIP8, V3
                        </span>{" "}
                        and <span className="text-(--bg2) font-bold"> V5 </span>
                        come with attached washroom.
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/vipRooms"
                  className="px-4 py-2 bg-(--bg2) text-white rounded-md mt-4 hover:bg-red-800 hover:scale-105 duration-300"
                >
                  Explore VIP Rooms
                </Link>
              </div>
              <Image
                src={VipRoomsImage}
                alt="Empire Cuisine"
                width={300}
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* card 2 – Banquet */}
          <div className="p-4 border border-(--bg3) rounded-2xl flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <p className="text-(--bg2) font-bold text-xl pb-2">
                Banquet & Celebration Spaces
              </p>
              <Image src={ListDecoration} alt="Empire Cuisine" width={250} />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {halls.map((hall) => (
                <div
                  key={hall.id}
                  className="p-4 bg-(--bg3)/10 rounded-2xl flex flex-col items-center justify-center w-full sm:w-50"
                >
                  <Image src={castle} alt="bgImage" width={50} height={50} />
                  <p className="text-(--bg2) font-bold">{hall.name}</p>
                  <p>
                    up to{" "}
                    <span className="text-xl text-(--bg2) font-bold">
                      {hall.tables}
                    </span>{" "}
                    tables
                  </p>
                  <Image
                    src={ListDecoration}
                    alt="Empire Cuisine"
                    width={150}
                  />
                  <p>Minimum spend</p>
                  <p className="text-(--bg2) font-bold text-xl">
                    {hall.minSpend}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-center">
              Ideal for weddings, company dinners, birthdays and large
              gatherings.
            </p>
          </div>
        </div>
      </div>

      {/*  DINING HIGHLIGHTS  */}
      <div className="pt-8 pb-4 max-w-7xl mx-auto px-4 sm:px-6 md:px-30">
        <div
          className="flex flex-col text-center items-center"
          data-aos="fade-up"
        >
          <p className="text-2xl text-(--bg2) font-bold pb-2">
            Dining Highlights
          </p>
          <Image src={ListDecoration} alt="Empire Cuisine" width={200} />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-10 items-center justify-items-center mt-4">
          {DiningHighligts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center hover:scale-105 duration-300 cursor-pointer"
              data-aos="zoom-in"
            >
              <Image
                src={item.image}
                alt="bgImage"
                width={70}
                height={70}
                className="rounded-full"
              />
              <p className="text-sm mt-2 text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/*  VISIT US  */}
      <div className="pt-8 pb-8 border-t border-(--bg3) max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center" data-aos="fade-up">
          <p className="text-2xl text-(--bg2) font-bold text-center pb-2">
            Visit Us
          </p>
          <Image src={ListDecoration} alt="Empire Cuisine" width={150} />
        </div>
        <div
          className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center pt-4"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-start gap-4 w-full lg:w-auto">
            <div className="flex items-start gap-2">
              <SiGooglemaps className="text-2xl text-(--bg2) mt-1 shrink-0" />
              <p className="text-base leading-7">
                157, Jalan Limau Gedong, <br />
                Kawasan 18, 41300 Klang, Selangor
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg text-(--bg2) shrink-0" />
              <p className="text-base">012-224 8811</p>
            </div>
            <div className="flex items-start gap-2">
              <FaRegClock className="text-2xl text-(--bg2) mt-1 shrink-0" />
              <p className="text-base leading-7">
                Mon-Fri: 10:30 AM-2:30 PM | 5:30 PM-10:30 PM <br />
                Sat-Sun & Public Holidays: 8:00 AM-2:30 PM | 5:30 PM-10:30 PM
              </p>
            </div>
            <Link
              href="https://waze.com/ul/hw281kehrc"
              target="_blank"
              className="px-5 py-3 bg-(--bg2) text-white rounded-lg hover:bg-red-800 hover:scale-105 transition-all duration-300"
            >
              Get Direction
            </Link>
          </div>
          <Link
            href="https://g.co/kgs/QS6EZvW"
            target="_blank"
            className="w-full md:w-2xl hover:scale-105 transition-all duration-300"
          >
            <Image
              src={Maps}
              alt="bgImage"
              width={1000}
              height={1000}
              className="shadow-lg rounded-lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
