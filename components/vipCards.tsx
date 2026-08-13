import Link from "next/link";
import { MdBathroom } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

export default function VipCards() {
  // All VIP rooms data
  const vipRooms = [
    {
      id: "V1",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Business Dining", "Private Gathering"],
      video:
        "https://drive.google.com/file/d/1dbLiQAVd609mZIqzWOUP48wBYpiPmYHN/preview",
    },
    {
      id: "V2",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Birthday Celebration", "Business Dining"],
      video:
        "https://drive.google.com/file/d/1AVuFh3tazE_58pMFZaHOk7wTzTXvLKtu/preview",
    },
    {
      id: "V3",
      hasWashroom: true,
      suitableFor: ["Family Dinner", "Business Dining", "Private Gathering"],
      video:
        "https://drive.google.com/file/d/1lOmEqxU4iB3eY0h5vM0q525MMImIn0Ow/preview",
    },
    {
      id: "V5",
      hasWashroom: true,
      suitableFor: [
        "Birthday Celebration",
        "Business Dining",
        "Private Gathering",
      ],
      video:
        "https://drive.google.com/file/d/1UMdI-I6QcjOprOpa5xAVQSd-bF3hrzTL/preview",
    },
    {
      id: "V6",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Business Dining", "Private Gathering"],
      video:
        "https://drive.google.com/file/d/1sIgq7PvxwDy_w-2EkKN6QVSBlO3FAMsT/preview",
    },
    {
      id: "V7",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Birthday Celebration", "Business Dining"],
      video:
        "https://drive.google.com/file/d/1yo8JnCUXJuixWdPdHwbcyI_HTFvdSDk-/preview",
    },
    {
      id: "V9",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Business Dining", "Private Gathering"],
      video:
        "https://drive.google.com/file/d/1nNOLhFY7p6WfDSIzlS1heOVxZIQhMK9R/preview",
    },
  ];

  return (
    <>
      <div className="pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {vipRooms.map((room) => (
            <div
              key={room.id}
              className="border border-(--bg3) rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-(--bg2) transition duration-300"
              data-aos="zoom-in"
            >
              <div className="relative w-full h-40 aspect-video rounded-2xl overflow-hidden">
                <iframe
                  className="absolute top-1/4 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 border-0"
                  src={room.video}
                  allow="autoplay"
                />
              </div>

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
    </>
  );
}
