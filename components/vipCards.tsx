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
        "https://res.cloudinary.com/dqp0y3avg/video/upload/v1780250945/V1_VIP_Room_1_i5ck5m.mp4",
    },
    {
      id: "V2",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Birthday Celebration", "Business Dining"],
      video:
        "https://res.cloudinary.com/dqp0y3avg/video/upload/v1780250946/V2_VIP_Room_2_th8tze.mp4",
    },
    {
      id: "V3",
      hasWashroom: true,
      suitableFor: ["Family Dinner", "Business Dining", "Private Gathering"],
      video:
        "https://res.cloudinary.com/dqp0y3avg/video/upload/v1780250946/V3_VIP_Room_3_egnjvv.mp4",
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
        "https://res.cloudinary.com/dqp0y3avg/video/upload/v1780250947/V5_VIP_Room_5_pafqzn.mp4",
    },
    {
      id: "V6",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Business Dining", "Private Gathering"],
      video:
        "https://res.cloudinary.com/dqp0y3avg/video/upload/v1780250947/V6_VIP_Room_6_erd7eq.mp4",
    },
    {
      id: "V7",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Birthday Celebration", "Business Dining"],
      video:
        "https://res.cloudinary.com/dqp0y3avg/video/upload/v1780250949/V7_VIP_Room_7_dlvnjm.mp4",
    },
    {
      id: "V9",
      hasWashroom: false,
      suitableFor: ["Family Dinner", "Business Dining", "Private Gathering"],
      video:
        "https://res.cloudinary.com/dqp0y3avg/video/upload/v1780250955/V9_VIP_Room_9_gxfnwy.mp4",
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
              <video
                className="h-full w-full object-cover rounded-2xl"
                src={room.video}
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="none"
              />

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
