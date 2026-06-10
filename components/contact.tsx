"use client";
import { useState } from "react";
import Image from "next/image";
import bgImage from "../public/assets/background.jpeg";
import ListDecoration from "../public/assets/listDecoration.png";
import Maps from "../public/assets/maps.png";
import Link from "next/link";
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt, FaRegClock, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdOutlineBedroomChild, MdCelebration } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const msg = `Hello Empire Cuisine!

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/60122248811?text=${encoded}`, "_blank");
  };

  const contactCards = [
    {
      id: 1,
      title: "WhatsApp Booking",
      desc: "Fast booking via WhatsApp",
      chinese: "预约订位",
      icon: <FaWhatsapp />,
      cta: "WhatsApp Now",
      href: "https://wa.me/60122248811?text=I%20would%20like%20to%20make%20a%20reservation",
      style: "bg-(--bg2)",
    },
    {
      id: 2,
      title: "Phone Enquiry",
      desc: "Call us directly",
      chinese: "来电咨询",
      icon: <FaPhoneAlt />,
      cta: "012-224 8811",
      href: "tel:+60122248811",
      style: "bg-(--bg3)",
    },
    {
      id: 3,
      title: "Wedding & Events",
      desc: "Enquire for banquet packages",
      chinese: "婚宴活动",
      icon: <MdCelebration />,
      cta: "Enquire Now",
      href: "https://wa.me/60122248811?text=I%20would%20like%20to%20enquire%20about%20weddings%20and%20events",
      style: "bg-(--bg2)",
    },
    {
      id: 4,
      title: "VIP Room Enquiry",
      desc: "Reserve your private room",
      chinese: "贵宾包厢",
      icon: <MdOutlineBedroomChild />,
      cta: "Enquire Now",
      href: "https://wa.me/60122248811?text=I%20would%20like%20to%20enquire%20about%20VIP%20rooms",
      style: "bg-(--bg3)",
    },
    {
      id: 5,
      title: "Dining Reservation",
      desc: "Book a table for your meal",
      chinese: "用餐预约",
      icon: <BiSolidDish />,
      cta: "Book Now",
      href: "/booking",
      style: "bg-(--bg2)",
    },
    {
      id: 6,
      title: "General Enquiry",
      desc: "Any other questions? Ask us!",
      chinese: "一般咨询",
      icon: <MdEmail />,
      cta: "Chat on WhatsApp",
      href: "https://wa.me/60122248811?text=Hello%2C%20I%20have%20a%20question%20for%20Empire%20Cuisine",
      style: "bg-(--bg3)",
    },
  ];

  const quickHelp = [
    {
      q: "How do I make a reservation?",
      a: "You can book via WhatsApp, call us at 012-224 8811, or use our online booking form.",
    },
    {
      q: "Do you cater for events?",
      a: "Yes! Our two-storey multifunction banquet hall accommodates up to 50 tables. WhatsApp us for arrangement.",
    },
    {
      q: "Do you have private rooms?",
      a: "Yes, we have 8 private rooms: VVIP8, V1, V2, V3, V5, V6, V7, V9. VVIP8, V3 and V5 have attached washrooms.",
    },
    {
      q: "Do you offer takeaway?",
      a: "Please WhatsApp or call us for takeaway enquiries.",
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
            <h1 className="text-amber-400 font-semibold text-4xl md:text-6xl leading-tight md:leading-20">
              Contact Us
            </h1>
            <Image src={ListDecoration} alt="listDecoration" width={400} />
            <div className="md:w-150">
              <h2 className="text-white text-xl md:text-2xl leading-7 md:leading-9">
                We are here to help. Reach out to us for reservations,
                enquiries, events or special occasions.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT CARDS */}
      <div className="pt-10 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-4xl pb-2">
            Get In Touch
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={250} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {contactCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : "_self"}
              className="border border-(--bg3) rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-(--bg2) transition duration-300 group"
              data-aos="zoom-in"
            >
              <div
                className={`${card.style} text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition duration-300`}
              >
                {card.icon}
              </div>
              <div>
                <p className="font-bold text-(--bg2) text-base">{card.title}</p>
                <p className="font-chinese text-(--bg3) text-sm">
                  {card.chinese}
                </p>
                <p className="text-xs text-gray-500 mt-1">{card.desc}</p>
              </div>
              <p className="text-sm font-semibold text-(--bg2) mt-auto group-hover:underline">
                {card.cta} →
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* LOCATION + HOURS */}
      <div className="pt-6 pb-6 max-w-7xl mx-auto border-t border-(--bg3) px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col lg:flex-row gap-8 items-start"
          data-aos="fade-up"
        >
          {/* Info */}
          <div className="flex flex-col gap-5 w-full lg:w-1/3">
            <div className="flex flex-col gap-2">
              <h3 className="text-(--bg2) font-bold text-xl md:text-2xl">
                Visit Us
              </h3>
              <Image src={ListDecoration} alt="listDecoration" width={150} />
            </div>

            <div className="flex items-start gap-3">
              <SiGooglemaps className="text-2xl text-(--bg2) mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-sm text-(--bg2)">Address</p>
                <p className="text-sm leading-6">
                  157, Jalan Limau Gedong, Kawasan 18, <br />
                  41300 Klang, Selangor
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-lg text-(--bg2) shrink-0" />
              <div>
                <p className="font-semibold text-sm text-(--bg2)">Phone</p>
                <p className="text-sm">012-224 8811</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaRegClock className="text-2xl text-(--bg2) mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-sm text-(--bg2)">
                  Opening Hours
                </p>
                <p className="text-sm leading-6">
                  Mon–Fri: 10:30 AM–2:30 PM | 5:30 PM–10:30 PM
                  <br />
                  Sat–Sun & Public Holidays: 8:00 AM–2:30 PM | 5:30 PM–10:30 PM
                </p>
              </div>
            </div>

            <Link
              href="https://www.google.com/maps/place/157+Jalan+Limau+Gedong,+Kawasan+18,+41300+Klang,+Selangor"
              target="_blank"
              className="px-5 py-3 bg-(--bg2) text-white rounded-lg hover:bg-red-800 hover:scale-105 transition duration-300 text-sm text-center"
            >
              Get Directions
            </Link>
          </div>

          {/* Map */}
          <Image
            src={Maps}
            alt="Maps"
            width={700}
            className="rounded-2xl shadow-lg w-full lg:flex-1"
          />
        </div>
      </div>

      {/* QUICK HELP */}
      <div className="pt-6 pb-6 max-w-7xl mx-auto border-t border-(--bg3) px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center justify-center mb-6"
          data-aos="fade-up"
        >
          <h2 className="text-(--bg2) font-bold text-2xl md:text-3xl pb-2">
            Quick Help
          </h2>
          <Image src={ListDecoration} alt="listDecoration" width={200} />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          data-aos="fade-up"
        >
          {quickHelp.map((item, i) => (
            <div key={i} className="border border-(--bg3) rounded-2xl p-5">
              <p className="font-bold text-(--bg2) text-sm mb-2">{item.q}</p>
              <p className="text-sm text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="pt-6 pb-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="border border-(--bg3) rounded-2xl p-6 sm:p-8"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-(--bg2) font-bold text-2xl md:text-3xl pb-2">
              Send Us a Message
            </h2>
            <Image src={ListDecoration} alt="listDecoration" width={200} />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Prefer WhatsApp? Chat with us directly for faster assistance on
              bookings and enquiries.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Name + Phone */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-1 flex-1">
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
              <div className="flex flex-col gap-1 flex-1">
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
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-(--bg2)">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="border border-(--bg3) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--bg2) transition"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-(--bg2)">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="e.g. Wedding Enquiry, VIP Room Booking"
                className="border border-(--bg3) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--bg2) transition"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-(--bg2)">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                rows={4}
                className="border border-(--bg3) rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-(--bg2) transition resize-none"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-(--bg2) text-white rounded-lg hover:bg-red-800 hover:scale-105 transition duration-300 text-sm font-semibold cursor-pointer"
            >
              <FaWhatsapp className="text-lg" />
              Send via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
