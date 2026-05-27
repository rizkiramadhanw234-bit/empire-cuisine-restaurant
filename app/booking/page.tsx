// NOTE: This is a static information/form page only.
// No payment gateway or e-wallet integration.
// On submit, the booking details are sent via WhatsApp message.

"use client";
import { useState } from "react";
import Image from "next/image";
import bgImage from "../../public/assets/background.png";
import ListDecoration from "../../public/assets/listDecoration.png";
import { FaRegClock, FaWhatsapp } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineBedroomChild } from "react-icons/md";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    pax: "",
    area: "",
    foodPackage: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const msg = `Hello Empire Cuisine! I would like to make a reservation.

Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Time: ${form.time}
Number of Pax: ${form.pax}
Area: ${form.area}
Food / Package Preference: ${form.foodPackage}
Remarks: ${form.remarks}`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/60122248811?text=${encoded}`, "_blank");
  };

  const areaOptions = ["Main Hall", "VIP Room", "VVIP8"];

  const foodPackageOptions = [
    "Dim Sum",
    "Seafood",
    "Roasted Items",
    "Set Meals",
    "Wedding Package",
    "Signature Dishes",
    "No Preference",
  ];

  const importantNotes = [
    "All bookings are subject to availability.",
    "Please arrive on time.",
    "For changes or cancellations, kindly inform us in advance.",
    "Advance booking is highly recommended to ensure your preferred date, time, and seating.",
  ];

  return (
    <div className="bg-(--primaryBackground)">
      {/* HERO */}
      <div className="min-h-screen w-full relative overflow-hidden items-center justify-center">
        <Image src={bgImage} alt="bgImage" fill className="object-cover z-0" />

        <div className="relative z-10 flex flex-col items-start justify-center h-screen px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 px-4 sm:px-10 md:mt-12">
            <h1 className="text-(--bg3) font-semibold text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-20">
              Book <br /> a Table
            </h1>
            <Image src={ListDecoration} alt="listDecoration" width={400} />
            <h2 className="text-white text-sm md:text-2xl leading-7 md:leading-9">
              Reserve your dining experience <br /> at 御膳楼 Empire Cuisine.
            </h2>
            <h3 className="font-chinese text-white text-sm md:text-3xl font-light leading-7 md:leading-9 md:mt-4">
              预约订位 <span className="text-(--bg3)">|</span> 尊享体验
            </h3>
          </div>
        </div>
      </div>

      {/* GUIDES */}
      <div className="pt-10 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* VVIP8 Guide */}
          <div className="flex-1 border border-(--bg3) rounded-2xl p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-(--bg2) rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                <BsPeopleFill className="text-white text-lg" />
              </div>
              <p className="font-bold text-(--bg2)">VVIP8 Capacity Guide</p>
            </div>
            <Image src={ListDecoration} alt="listDecoration" width={120} />
            <p className="text-sm leading-6">
              VVIP8 can seat up to{" "}
              <span className="font-bold text-(--bg2)">22 guests</span> at one
              big round table. An additional one table of{" "}
              <span className="font-bold text-(--bg2)">12 pax</span> can be
              added. Total capacity: up to{" "}
              <span className="font-bold text-(--bg2)">34 guests</span>.
            </p>
          </div>

          {/* Large Event Guide */}
          <div className="flex-1 border border-(--bg3) rounded-2xl p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-(--bg3) rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                <MdOutlineBedroomChild className="text-white text-lg" />
              </div>
              <p className="font-bold text-(--bg3)">Weddings & Large Events</p>
            </div>
            <Image src={ListDecoration} alt="listDecoration" width={120} />
            <p className="text-sm leading-6">
              For wedding or large event enquiries below{" "}
              <span className="font-bold text-(--bg2)">32 tables</span>, please
              contact us via WhatsApp for special arrangement.
            </p>
          </div>

          {/* Opening Hours Quick View */}
          <div className="flex-1 border border-(--bg3) rounded-2xl p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-(--bg2) rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                <FaRegClock className="text-white text-lg" />
              </div>
              <p className="font-bold text-(--bg2)">Opening Hours</p>
            </div>
            <Image src={ListDecoration} alt="listDecoration" width={120} />
            <p className="text-sm leading-6">
              <span className="font-semibold">Mon–Fri:</span> 10:30 AM–2:30 PM |
              5:30 PM–10:30 PM
              <br />
              <span className="font-semibold">
                Sat–Sun & Public Holidays:
              </span>{" "}
              8:00 AM–2:30 PM | 5:30 PM–10:30 PM
            </p>
          </div>
        </div>
      </div>

      {/* BOOKING FORM */}
      <div className="pt-4 pb-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-(--bg3) rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-(--bg2) font-bold text-2xl md:text-3xl pb-2">
              Reservation Form
            </h2>
            <Image src={ListDecoration} alt="listDecoration" width={200} />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Fill in your details and we will confirm your booking via
              WhatsApp.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-(--bg2)">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="border border-(--bg3) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--bg2) transition"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-(--bg2)">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 012-345 6789"
                className="border border-(--bg3) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--bg2) transition"
              />
            </div>

            {/* Date + Time */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-sm font-semibold text-(--bg2)">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="border border-(--bg3) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--bg2) transition"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-sm font-semibold text-(--bg2)">
                  Time <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="border border-(--bg3) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--bg2) transition"
                />
              </div>
            </div>

            {/* Pax + Area */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-sm font-semibold text-(--bg2)">
                  Number of Pax <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="pax"
                  value={form.pax}
                  onChange={handleChange}
                  placeholder="e.g. 10"
                  min="1"
                  className="border border-(--bg3) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--bg2) transition"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label className="text-sm font-semibold text-(--bg2)">
                  Area Preference <span className="text-red-500">*</span>
                </label>
                <select
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                  className="border border-(--bg3) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--bg2) transition bg-white"
                >
                  <option value="">Select area</option>
                  {areaOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Food / Package */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-(--bg2)">
                Food / Package Preference
              </label>
              <select
                name="foodPackage"
                value={form.foodPackage}
                onChange={handleChange}
                className="border border-(--bg3) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--bg2) transition bg-white"
              >
                <option value="">Select preference</option>
                {foodPackageOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Remarks */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-(--bg2)">
                Remarks
              </label>
              <textarea
                name="remarks"
                value={form.remarks}
                onChange={handleChange}
                placeholder="Any special requests, dietary requirements, or additional notes..."
                rows={3}
                className="border border-(--bg3) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--bg2) transition resize-none"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-(--bg2) text-white rounded-lg hover:bg-red-800 hover:scale-105 transition duration-300 text-sm font-semibold mt-2"
            >
              <FaWhatsapp className="text-lg" />
              Confirm Booking via WhatsApp
            </button>

            <p className="text-xs text-gray-500 text-center">
              You will receive a confirmation via WhatsApp after we process your
              request.
            </p>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-6 p-4 bg-(--bg3)/5 border border-(--bg3)/40 rounded-xl">
          <p className="text-sm font-semibold text-(--bg2) mb-3">
            Important Notes
          </p>
          <div className="flex flex-col gap-2">
            {importantNotes.map((note, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-(--bg3) font-bold shrink-0">•</span>
                <p className="text-xs text-gray-600">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
