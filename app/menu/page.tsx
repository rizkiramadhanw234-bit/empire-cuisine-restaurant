import Image from "next/image";
import bgImage from "../../public/assets/background.jpeg";
import ListDecoration from "../../public/assets/listDecoration.png";
import RM1 from "../../public/assets/RM1++.jpg";
import RM3 from "../../public/assets/RM3++.jpg";
import RM21 from "../../public/assets/RM2180++.jpg";
import Link from "next/link";

// menu category images
import DimSumImage from "../../public/assets/menu/dimsum.jpg";
import RM21Image from "../../public/assets/menu/RM2180++.jpg";
import buffetImage from "../../public/assets/menu/buffet.jpg";
import alaCarteImage from "../../public/assets/menu/alacarte.jpg";
import birthdayImage from "../../public/assets/menu/Birthday Meals.jpg";
import businessImage from "../../public/assets/menu/Business Events Meals.jpg";
import weddingImage from "../../public/assets/menu/weddings.jpg";

// recommended dishes images
import dish1 from "../../public/assets/recommededDishes/01_金碧辉煌龙虾五福拼.jpg.jpeg";
import dish2 from "../../public/assets/recommededDishes/02_上汤一品大盘鱼.jpg.jpeg";
import dish3 from "../../public/assets/recommededDishes/03_金果黑毛猪排骨.jpg.jpeg";
import dish4 from "../../public/assets/recommededDishes/04_驰名文昌鸡饭.jpg.jpeg";
import dish5 from "../../public/assets/recommededDishes/05_红烧海味五宝拼.jpg.jpeg";
import dish6 from "../../public/assets/recommededDishes/06_红烧大鲍翅.jpg.jpeg";
import dish7 from "../../public/assets/recommededDishes/07_人参瑶柱炖鸡汤.jpg.jpeg";
import dish8 from "../../public/assets/recommededDishes/08_上汤蟹皇翅.jpg.jpeg";
import dish9 from "../../public/assets/recommededDishes/09_猪肚汤面线.jpg.jpeg";
import dish10 from "../../public/assets/recommededDishes/10_炭烧脆皮乳猪.jpg.jpeg";

export default function MenuPage() {
  // Menu categories
  const menuCategories = [
    {
      id: 1,
      name: "RM1++ Dinner Add-On",
      chinese: "RM1++ 超值加购晚餐",
      image: RM1,
      download:
        "https://github.com/rizkiramadhanw234-bit/empire-cuisine-restaurant/releases/download/RM1%2B%2B-Menu/RM1++.Special.Promotion.Package.RM1++.png",
    },
    {
      id: 2,
      name: "⁠RM3++ Dim Sum",
      chinese: "RM3++ 点心",
      image: DimSumImage,
      download:
        "https://github.com/rizkiramadhanw234-bit/empire-cuisine-restaurant/releases/download/RM3-dimsum/01_DIMSUM_FULL_MENU.pdf",
    },
    {
      id: 3,
      name: "RM21.80++ Super Value Package",
      chinese: "RM21.80++ 超值套餐",
      image: RM21Image,
      download:
        "https://github.com/rizkiramadhanw234-bit/empire-cuisine-restaurant/releases/download/RM21.80%2B%2B_Super-value-package/RM21.80++_Super-value-package.jpeg",
    },
    {
      id: 4,
      name: "Buffet",
      chinese: "自助餐",
      image: buffetImage,
      download:
        "https://github.com/rizkiramadhanw234-bit/empire-cuisine-restaurant/releases/download/Buffet/EMPIRE.CUISINE.BUFFET.LEAFLET.pdf",
    },
    {
      id: 5,
      name: "Ala-Carte Menu",
      chinese: "单点菜单",
      image: alaCarteImage,
      download:
        "https://github.com/rizkiramadhanw234-bit/empire-cuisine-restaurant/releases/download/Ala-Carte/01_ALA_CARTE_MENU.pdf",
    },
    {
      id: 6,
      name: "Birthday Meals",
      chinese: "生日套餐",
      image: birthdayImage,
      download:
        "https://github.com/rizkiramadhanw234-bit/empire-cuisine-restaurant/releases/download/Birthday-meals-menu/birthday-meals-menu.jpg",
    },
    {
      id: 7,
      name: "Business Events Meals",
      chinese: "商务配套",
      image: businessImage,
      download:
        "https://github.com/rizkiramadhanw234-bit/empire-cuisine-restaurant/releases/download/Business-Events-Meals/Business-Events-Meals.jpeg",
    },
    {
      id: 8,
      name: "Wedding Packages",
      chinese: "婚宴配套",
      image: weddingImage,
      download: "/weddingsAndEvents",
    },
  ];

  // Recommended dishes
  const recommendedDishes = [
    {
      id: 1,
      name: "Lobster Five Combinations ",
      chinese: "金碧辉煌龙虾五福拼",
      image: dish1,
    },
    {
      id: 2,
      name: "Braised Fish in Superior Broth",
      chinese: "上汤一品大盘鱼",
      image: dish2,
    },
    {
      id: 3,
      name: "Premium Spanish lberico pork Rib",
      chinese: "金果黑毛猪排骨",
      image: dish3,
    },
    {
      id: 4,
      name: "“Man Cheong” Chicken with rice ",
      chinese: " 驰名文昌鸡饭",
      image: dish4,
    },
    {
      id: 5,
      name: "Braised Assorted Dried seafood",
      chinese: "红烧海味五宝拼",
      image: dish5,
    },
    {
      id: 6,
      name: "Braised Shark’s Fin",
      chinese: " 红烧大鲍翅",
      image: dish6,
    },
    {
      id: 7,
      name: "Stewed Chicken Soup with Ginseng and Dry Scallop",
      chinese: "人参瑶柱炖鸡汤 ",
      image: dish7,
    },
    {
      id: 8,
      name: "Shark Fin Soup with Crab Meat",
      chinese: "上汤蟹皇翅",
      image: dish8,
    },
    {
      id: 9,
      name: "Pork Tripe Soup with Noodle",
      chinese: "猪肚汤面线",
      image: dish9,
    },
    {
      id: 10,
      name: "Roasted Suckling Pig",
      chinese: "炭烧脆皮乳猪",
      image: dish10,
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
              Our Menu
            </h1>
            <Image src={ListDecoration} alt="listDecoration" width={400} />
            <h2 className="text-white text-sm md:text-2xl leading-7 md:leading-9">
              Savour authentic Chinese cuisine crafted with <br /> premium
              ingredients and timeless culinary tradition.
            </h2>
            <h3 className="font-chinese text-white text-sm md:text-2xl font-light leading-7 md:leading-9 md:mt-4">
              精选优质食材 <span className="text-(--bg3)">|</span> 匠心烹饪{" "}
              <span className="text-(--bg3)">|</span> 正宗中式美味
            </h3>
          </div>
        </div>
      </div>

      {/* PROMOTIONS HIGHLIGHT */}
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

        <div
          className="flex flex-col md:flex-row gap-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* RM1++ Dinner Add-on Promotion */}
          <div className="flex-1 border border-(--bg3) rounded-2xl p-6 bg-(--bg3)/5 hover:scale-105 transition duration-300 cursor-pointer">
            <div className="flex flex-col gap-3">
              <Image src={RM1} alt="logo" width={400} className="rounded-2xl" />
              <div className="flex items-center gap-3">
                <div className="bg-(--bg3) text-white text-2xl font-bold px-4 py-2 rounded-lg shrink-0">
                  RM1<span className="text-sm">++</span>
                </div>
                <div>
                  <p className="text-(--bg3) font-bold text-lg">
                    Dinner Add-on Promotion
                  </p>
                  <p className="text-sm text-gray-600">Dinner hours only</p>
                </div>
              </div>
              <Image src={ListDecoration} alt="listDecoration" width={150} />

              <div className="flex flex-col gap-4">
                <div className="bg-(--bg2)/10 rounded-lg px-4 py-2">
                  <p className="text-sm">
                    Available Monday to Sunday, including Public Holidays.
                  </p>
                </div>
                <div className="bg-(--bg2)/10 rounded-lg px-4 py-2">
                  <p className="text-sm">
                    Only applicable with selected special set meals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RM3++ Dim Sum Promo */}
          <div className="flex-1 border border-(--bg3) rounded-2xl p-6 bg-(--bg3)/5 hover:scale-105 transition duration-300 cursor-pointer">
            <div className="flex flex-col gap-3">
              <Image src={RM3} alt="logo" width={400} className="rounded-2xl" />
              <div className="flex items-center gap-3">
                <div className="bg-(--bg2) text-white text-2xl font-bold px-4 py-2 rounded-lg shrink-0">
                  RM3<span className="text-sm">++</span>
                </div>
                <div>
                  <p className="text-(--bg2) font-bold text-lg">
                    Dim Sum Promotion
                  </p>
                  <p className="text-sm text-gray-600">Special Price</p>
                </div>
              </div>
              <Image src={ListDecoration} alt="listDecoration" width={150} />
              <p className="text-sm font-semibold text-(--bg2)">
                Applies only to:
              </p>
              <div className="flex flex-col gap-2">
                <div className="bg-(--bg2)/10 rounded-lg px-4 py-2">
                  <p className="font-bold text-(--bg2)">御膳烧卖</p>
                  <p className="text-sm">Empire Siew Mai</p>
                </div>
                <div className="bg-(--bg2)/10 rounded-lg px-4 py-2">
                  <p className="font-bold text-(--bg2)">上海小笼包</p>
                  <p className="text-sm">Shanghai Xiao Long Bao</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 italic">
                * Other dim sum items are priced as per menu.
              </p>
            </div>
          </div>

          {/* RM21.80++ Set Meal */}
          <div className="flex-1 border border-(--bg3) rounded-2xl p-6 bg-(--bg3)/5 hover:scale-105 transition duration-300 cursor-pointer">
            <div className="flex flex-col gap-3">
              <Image
                src={RM21}
                alt="logo"
                width={400}
                className="rounded-2xl"
              />
              <div className="flex items-center gap-3">
                <div className="bg-(--bg3) text-white text-2xl font-bold px-4 py-2 rounded-lg shrink-0">
                  RM21.80<span className="text-sm">++</span>
                </div>
                <div>
                  <p className="text-(--bg3) font-bold text-lg">
                    Value Set Meal
                  </p>
                  <p className="text-sm text-gray-600">Main Hall Only</p>
                </div>
              </div>
              <Image src={ListDecoration} alt="listDecoration" width={150} />
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-(--bg2) font-bold shrink-0">
                    Lunch:
                  </span>
                  <span className="ml-4">
                    Mon–Sun including Public Holidays, 10:30 AM–2:30 PM
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-(--bg2) font-bold shrink-0">
                    Dinner:
                  </span>
                  <span className="ml-3">
                    Mon–Thu excluding Public Holidays, 5:30 PM–10:30 PM
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-(--bg2) font-bold shrink-0">Rule:</span>
                  <span className="ml-7">
                    Min 6 pax choose 4 dishes or Min 10 pax choose 7 dishes.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-(--bg2) font-bold shrink-0">
                    Includes:
                  </span>
                  <span className="ml-0.5">Daily soup, rice, and tea.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MENU CATEGORIES */}
      <div className="pt-6 pb-6 max-w-7xl mx-auto border-t border-(--bg3) px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Menu Categories
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {menuCategories.map((item) => (
            <div
              key={item.id}
              className="border border-(--bg3) rounded-2xl p-4 flex flex-col items-center justify-center gap-1 hover:bg-(--bg3)/10 hover:scale-105 transition duration-300 cursor-pointer"
              data-aos="zoom-in"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                className="rounded-2xl"
              />
              <p className="font-chinese text-(--bg2) text-lg font-bold">
                {item.chinese}
              </p>
              <p className="text-sm font-semibold text-center">{item.name}</p>
              <Link
                href={item.download}
                target="_blank"
                className="px-4 py-2 bg-(--bg2) rounded-lg text-xs text-white mt-2 hover:bg-red-800"
              >
                Download Menu
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* RECOMMENDED DISHES */}
      <div className="pt-6 pb-10 max-w-7xl mx-auto border-t border-(--bg3) px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Recommended Dishes
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
          <p className="text-sm text-gray-600 mt-2 text-center">
            Perfect for family meals, business gatherings, and celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recommendedDishes.map((item) => (
            <div
              key={item.id}
              className="border border-(--bg3) rounded-2xl p-6 flex flex-col items-center gap-2 hover:shadow-md transition duration-300"
              data-aos="zoom-in"
            >
              {/* image */}
              <Image
                src={item.image}
                alt={item.name}
                width={350}
                className="rounded-2xl"
              />
              <p className="font-chinese text-(--bg3) text-lg font-bold">
                {item.chinese}
              </p>
              <p className="font-bold text-(--bg2) text-center">{item.name}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8" data-aos="fade-up">
          <Link
            href="/contact"
            className="px-6 py-3 bg-(--bg2) text-white rounded-lg hover:bg-red-800 hover:scale-105 transition duration-300 text-sm md:text-base"
          >
            Enquire for Full Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
