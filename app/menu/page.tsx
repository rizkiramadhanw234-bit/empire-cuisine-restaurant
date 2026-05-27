import Image from "next/image";
import bgImage from "../../public/assets/background.png";
import ListDecoration from "../../public/assets/listDecoration.png";
import Link from "next/link";

export default function MenuPage() {
  // Menu categories
  const menuCategories = [
    { id: 1, name: "Dim Sum", chinese: "点心" },
    { id: 2, name: "Seafood", chinese: "海鲜" },
    { id: 3, name: "Roasted Items", chinese: "烧腊" },
    { id: 4, name: "Noodles", chinese: "面食" },
    { id: 5, name: "Set Meals", chinese: "套餐" },
    { id: 6, name: "Wedding Packages", chinese: "婚宴配套" },
    { id: 7, name: "Beverages", chinese: "饮料" },
    { id: 8, name: "Signature Dishes", chinese: "招牌菜" },
  ];

  // Recommended dishes
  const recommendedDishes = [
    {
      id: 1,
      name: "Peking Duck",
      category: "Roasted Items",
      chinese: "北京烤鸭",
    },
    {
      id: 2,
      name: "Braised Abalone",
      category: "Premium Ingredients",
      chinese: "红烧鲍鱼",
    },
    {
      id: 3,
      name: "Wok-Fried Lobster",
      category: "Seafood Specialties",
      chinese: "炒龙虾",
    },
    {
      id: 4,
      name: "Crispy Roast Pork Belly",
      category: "Roasted Items",
      chinese: "脆皮烧肉",
    },
    {
      id: 5,
      name: "Ee-Fu Noodles with Seafood",
      category: "Noodles",
      chinese: "海鲜伊面",
    },
    {
      id: 6,
      name: "Dim Sum Delights",
      category: "Dim Sum",
      chinese: "精选点心",
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
              Our <br /> Menu
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
        <div className="flex flex-col items-center justify-center mb-6">
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Current Promotions
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* RM3++ Dim Sum Promo */}
          <div className="flex-1 border border-(--bg3) rounded-2xl p-6 bg-(--bg3)/5">
            <div className="flex flex-col gap-3">
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
          <div className="flex-1 border border-(--bg3) rounded-2xl p-6 bg-(--bg3)/5">
            <div className="flex flex-col gap-3">
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
                  <span>
                    Mon–Sun including Public Holidays, 10:30 AM–2:30 PM
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-(--bg2) font-bold shrink-0">
                    Dinner:
                  </span>
                  <span>
                    Mon–Thu excluding Public Holidays, 5:30 PM–10:30 PM
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-(--bg2) font-bold shrink-0">Rule:</span>
                  <span>
                    Min 6 pax choose 4 dishes or Min 10 pax choose 7 dishes.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-(--bg2) font-bold shrink-0">
                    Includes:
                  </span>
                  <span>Daily soup, rice, and tea.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MENU CATEGORIES */}
      <div className="pt-6 pb-6 max-w-7xl mx-auto border-t border-(--bg3) px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-6">
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
            >
              <p className="font-chinese text-(--bg2) text-2xl font-bold">
                {item.chinese}
              </p>
              <p className="text-sm font-semibold text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RECOMMENDED DISHES */}
      <div className="pt-6 pb-10 max-w-7xl mx-auto border-t border-(--bg3) px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-6">
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
              className="border border-(--bg3) rounded-2xl p-6 flex flex-col gap-2 hover:shadow-md transition duration-300"
            >
              {/* Placeholder image area */}
              <div className="w-full h-40 bg-(--bg3)/10 rounded-xl flex items-center justify-center">
                <p className="font-chinese text-(--bg2) text-4xl">
                  {item.chinese[0]}
                </p>
              </div>
              <p className="font-chinese text-(--bg3) text-lg font-bold">
                {item.chinese}
              </p>
              <p className="font-bold text-(--bg2)">{item.name}</p>
              <p className="text-xs text-gray-500">{item.category}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8">
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
