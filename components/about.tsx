import Image from "next/image";
import bgImage from "../public/assets/background.jpeg";
import ListDecoration from "../public/assets/listDecoration.png";
import image1 from "../public/assets/1.png";
import image2 from "../public/assets/2.png";
import image3 from "../public/assets/3.png";
import DiningExperience from "../public/assets/diningExperience.png";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBusinessTime } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { BiSolidParty } from "react-icons/bi";
import { MdOutlineCorporateFare } from "react-icons/md";
import { MdCelebration } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  const whatWeOffer = [
    {
      id: 1,
      name: "Premium Chinese Cuisine",
      desc: "Authentic flavors crafted with quality ingredients and time-honored techniques.",
      image: image1,
    },
    {
      id: 2,
      name: "Private Rooms",
      desc: "Elegant and comfortable private rooms for intimate gatherings and VIP dining.",
      image: image2,
    },
    {
      id: 3,
      name: "Two-Storey Multifunction Banquet Hall",
      desc: "Spacious and versatile spaces ideal for weddings, corporate events, and celebrations.",
      image: image3,
    },
  ];

  const diningExperience = [
    { id: 1, name: "Family Meals", icon: <BsFillPeopleFill /> },
    { id: 2, name: "Business Dining", icon: <FaBusinessTime /> },
    { id: 3, name: "Birthdays", icon: <FaBirthdayCake /> },
    { id: 4, name: "Weddings", icon: <BiSolidParty /> },
    { id: 5, name: "Corporate Dinners", icon: <MdOutlineCorporateFare /> },
    { id: 6, name: "Festive Celebrations", icon: <MdCelebration /> },
  ];

  const visitInformation = [
    {
      id: 1,
      name: "Address",
      desc: "157, Jalan Limau Gedong, Kawasan 18, 41300 Klang, Selangor",
      desc2: "",
      icon: <SiGooglemaps />,
    },
    {
      id: 2,
      name: "Phone",
      desc: "012-224 8811",
      desc2: "",
      icon: <FaPhoneAlt />,
    },
    {
      id: 3,
      name: "Opening Hours",
      desc: "Mon-Fri: 10:30 AM-2:30 PM | 5:30 PM-10:30 PM",
      desc2: "Sat-Sun & Public Holidays: 8:00 AM-2:30 PM | 5:30 PM-10:30 PM",
      icon: <FaRegClock />,
    },
  ];

  return (
    <div className="bg-(--primaryBackground)">
      {/*  HERO  */}
      <div className="min-h-screen w-full relative overflow-hidden items-center justify-center">
        <Image src={bgImage} alt="bgImage" fill className="object-cover z-0" />

        <div
          className="relative z-10 flex flex-col items-start justify-center h-screen px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-4 px-4 sm:px-10 md:mt-12">
            <h1 className="text-amber-400 font-semibold text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-20">
              About <br /> Empire Cuisine
            </h1>
            <Image src={ListDecoration} alt="listDecoration" width={400} />
            <h2 className="text-white text-sm md:text-3xl leading-7 md:leading-11">
              A Refined Chinese Dining <br /> Destination in Klang
            </h2>
            <h3 className="font-chinese text-white text-sm md:text-2xl font-light leading-7 md:leading-9 md:mt-4">
              优质中式料理 <span className="text-amber-400">|</span> 私人包厢{" "}
              <span className="text-amber-400">|</span> 双层多功能宴会厅
            </h3>
          </div>
        </div>
      </div>

      {/*  OUR STORY  */}
      <div className="pt-10 pb-6">
        <div className="flex flex-col items-start justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-(--bg2) font-bold text-3xl sm:text-4xl md:text-6xl pb-2"
            data-aos="fade-up"
          >
            Our Story
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
          <p
            className="pt-3 leading-7 text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Empire Cuisine is a refined Chinese dining destination in Klang,{" "}
            <br className="hidden sm:block" />
            dedicated to delivering exceptional cuisine and warm hospitality.
            <br /> <br />
            We are the perfect choice for family dining, private gatherings,
            <br className="hidden sm:block" /> VIP room dining, and grand
            banquet celebrations.
          </p>
        </div>
      </div>

      {/*  WHAT WE OFFER  */}
      <div className="pt-6 pb-4 max-w-7xl mx-auto border-t border-(--bg3) px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center"
          data-aos="fade-up"
        >
          <div className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            What We Offer
          </div>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
        </div>

        {/* cards */}
        <div
          className="flex flex-col md:flex-row items-stretch justify-center gap-4 mt-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {whatWeOffer.map((item) => (
            <div
              key={item.id}
              className="px-6 py-6 rounded-2xl border border-amber-700 w-full md:flex-1 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                <Image
                  src={item.image}
                  alt="image1"
                  width={75}
                  className="shrink-0"
                />
                <div className="flex flex-col sm:items-center md:items-start justify-center gap-2">
                  <div className="text-xl text-(--bg2) font-bold text-center md:text-left">
                    {item.name}
                  </div>
                  <p className="pt-2 text-sm md:text-base text-center md:text-left">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  DINING EXPERIENCE  */}
      <div className="pt-6 pb-6 px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-15 max-w-7xl mx-auto"
          data-aos="fade-up"
        >
          <Image
            src={DiningExperience}
            alt="DiningExperience"
            width={800}
            className="rounded-2xl w-full lg:w-1/2"
          />
          <div className="flex flex-col items-start justify-center gap-2 w-full lg:w-auto">
            <h2 className="text-2xl font-bold text-(--bg2)">
              Dining Experience
            </h2>
            <Image src={ListDecoration} alt="listDecoration" width={150} />
            <p className="mb-2 text-sm md:text-base">
              At Empire Cuisine, every meal is more than just dining - it is an
              experience to be cherished.
            </p>

            <div className="grid grid-cols-2 gap-4 w-full">
              {diningExperience.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <div className="p-4 bg-(--bg2) rounded-full h-10 w-10 text-white flex items-center justify-center shrink-0">
                    <p className="text-xl">{item.icon}</p>
                  </div>
                  <p className="text-sm md:text-base">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*  VISIT INFORMATION  */}
      <div className="pt-8 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col gap-2 items-center justify-center"
          data-aos="fade-up"
        >
          <h2 className="font-bold text-2xl md:text-3xl text-(--bg2)">
            Visit Information
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
        </div>

        {/* cards */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-4 border border-(--bg3) p-4 sm:p-6 rounded-2xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {visitInformation.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-start sm:items-center justify-start gap-4 w-full sm:w-auto"
            >
              <div className="w-12 h-12 p-4 bg-(--bg2) rounded-full flex items-center justify-center shrink-0">
                <p className="text-white text-2xl">{item.icon}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-(--bg2) font-semibold">{item.name}</p>
                <p className="text-sm">{item.desc}</p>
                <p className="text-sm">{item.desc2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  PLAN YOUR VISIT  */}
      <div className="pt-4 pb-6 max-w-7xl mx-auto border-t border-(--bg3) px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col gap-2 items-center justify-center text-center"
          data-aos="fade-up"
        >
          <h2 className="md:text-3xl text-2xl font-bold text-(--bg2)">
            Plan Your Visit
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={200} />
          <p className="text-base md:text-lg">
            We look forward to welcoming you to Empire Cuisine!
          </p>
          <div className="flex flex-row gap-4 mt-2">
            <Link
              href="/vipRooms"
              className="text-white px-4 py-2 bg-(--bg3) rounded-md hover:bg-amber-700 hover:scale-105 transition duration-300 text-sm md:text-base"
            >
              View VIP Rooms
            </Link>
            <Link
              href="/vipRooms"
              className="text-white px-4 py-2 bg-(--bg2) rounded-md hover:bg-red-800 hover:scale-105 transition duration-300 text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
