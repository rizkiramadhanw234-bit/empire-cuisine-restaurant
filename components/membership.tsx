import Image from "next/image";
import bgImage from "../public/assets/membershipBg.jpg";
import ListDecoration from "../public/assets/listDecoration.png";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillGiftFill } from "react-icons/bs";
import { FaCakeCandles } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import CardImage from "../public/assets/card.png";
import { PiNotePencilFill } from "react-icons/pi";
import { HiHandThumbUp } from "react-icons/hi2";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "./ui/button";
import { IoPerson } from "react-icons/io5";

export default function MembershipPage() {
  const exclusiveBenefits = [
    {
      id: 1,
      name: "Member-Only",
      name2: "Promotions",
      desc: "Enjoy exclusive offers and special privileges.",
      icon: <BsFillGiftFill />,
    },
    {
      id: 2,
      name: "Birthday ",
      name2: "Privileges",
      desc: "Special treats for your birthday month.",
      icon: <FaCakeCandles />,
    },
    {
      id: 3,
      name: "Festive",
      name2: "Updates",
      desc: "Be the first to know about festive packages.",
      icon: <FaCalendarAlt />,
    },
    {
      id: 4,
      name: "Banquet & ",
      name2: "VIP Updates",
      desc: "Priority updates on banquets and VIP rooms.",
      icon: <FaPeopleGroup />,
    },
    {
      id: 5,
      name: "Rewards & ",
      name2: "Privileges",
      desc: "Enjoy rewards based on our events.",
      icon: <FaAward />,
    },
    {
      id: 6,
      name: "Referral ",
      name2: "Privileges",
      desc: "Refer your friends and enjoy more privileges.",
      icon: <BsFillPeopleFill />,
    },
  ];

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
            <h1 className="text-(--bg2) font-semibold text-3xl sm:text-4xl md:text-6xl">
              Membership Benefits
            </h1>
            <h2 className="text-(--bg2) text-3xl md:text-4xl mb-2">
              会员 · 尊享礼遇
            </h2>
            <Image src={ListDecoration} alt="listDecoration" width={400} />
            <h3 className="text-(--bg3) font-bold text-xl md:text-3xl leading-7 md:leading-9 md:mt-2">
              More Than A Membership
            </h3>
            <p>
              More than a membership, <br /> it is a sense of belonging and
              exclusive privilege
            </p>
            <p>
              Enjoy member-only offers, birthday treats,
              <br />
              and special dining privileges all year round.
            </p>
          </div>
        </div>
      </div>

      {/* exclusive benefits */}
      <div className="max-w-7xl mx-auto pt-6 pb-6">
        <div
          className="flex flex-col gap-2 items-center justify-center"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl">
            Exclusive Benefits
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={220} />
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-6 pt-4 md:px-10"
          data-aos="fade-up"
        >
          {exclusiveBenefits.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-start gap-1 md:gap-2 py-2 px-4 md:px-6 border-r border-(--bg3)"
            >
              <div className="text-4xl text-(--bg3) pt-2">{item.icon}</div>
              <p className="text-center text-base font-semibold text-(--bg2)">
                {item.name} <br /> {item.name2}
              </p>
              <p className="text-center text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="md:max-w-6xl mx-auto pt-4 pb-6 w-full px-8"
        data-aos="fade-up"
      >
        <div className="p-4 bg-(--bg3)/20 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between px-6 md:px-20 py-8 md:py-10">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <p className="text-xl md:text-2xl text-(--bg2) font-semibold leading-10">
                Be part of our family and <br />
                enjoy a more rewarding dining experience.
              </p>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start gap-3 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center p-2 w-10 h-10 rounded-full bg-white">
                    <PiNotePencilFill className="text-2xl text-(--bg3)" />
                  </div>
                  <p className="text-(--bg2) font-semibold">Sign Up</p>
                </div>
                <span className="hidden md:block">
                  <FaLongArrowAltRight className="text-xl text-(--bg3)" />
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center p-2 w-10 h-10 rounded-full bg-white">
                    <HiHandThumbUp className="text-2xl text-(--bg3)" />
                  </div>
                  <p className="text-(--bg2) font-semibold">Enjoy</p>
                </div>
                <span className="hidden md:block">
                  <FaLongArrowAltRight className="text-xl text-(--bg3)" />
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center p-2 w-10 h-10 rounded-full bg-white">
                    <FaAward className="text-2xl text-(--bg3)" />
                  </div>
                  <p className="text-(--bg2) font-semibold">Be Rewarded</p>
                </div>
              </div>
            </div>

            <Image
              src={CardImage}
              alt="cardImage"
              width={350}
              className="w-55 md:w-87.5"
            />
          </div>
          <div className="flex justify-center pb-4">
            <Button className="bg-(--bg2) hover:bg-amber-800 cursor-pointer">
              <IoPerson />
              Join Now!
            </Button>
          </div>
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
