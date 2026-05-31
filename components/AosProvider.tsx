"use client";
import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
