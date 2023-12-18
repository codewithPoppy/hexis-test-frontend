"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowLeftIcon, DocumentIcon, FuelPlanIcon, UserIcon } from "../Icons";
import Link from "next/link";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div
        className={`fixed h-screen max-w-[80px] bg-[#242543] transition-all group hover:max-w-[200px] z-[110] overflow-hidden`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="pt-6 flex flex-col items-start group-hover:items-start px-5 gap-8 z-[110] overflow-hidden">
          <Link href="/" className="flex items-center gap-4 cursor-pointer">
            <Image
              src="/hexis-logo.svg"
              alt="Hexis Logo"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-bold hidden group-hover:block">
              hexis
            </h1>
          </Link>

          <div className="pl-2 flex gap-3 items-center menu-item">
            <ArrowLeftIcon />
            <p className="text-sm font-bold hidden group-hover:block">back</p>
          </div>
          <div className="w-14 group-hover:w-32 h-0.5 transition-all bg-[#C4C4C4] opacity-20"></div>

          <Link
            href="/fuel-plan"
            className={`pl-2 flex gap-3 items-center menu-item overflow-hidden w-full ${
              pathname === "/fuel-plan" ? "menu-item-focused" : ""
            }`}
          >
            <FuelPlanIcon />
            <p className="text-sm font-bold hidden group-hover:block shrink truncate">
              Fuel Plan
            </p>
          </Link>

          <Link
            href="/notes"
            className={`pl-2 flex gap-3 items-center menu-item ${
              pathname === "/notes" ? "menu-item-focused" : ""
            }`}
          >
            <DocumentIcon />
            <p className="text-sm font-bold hidden group-hover:block">Notes</p>
          </Link>

          <Link
            href="/profile"
            className={`pl-2 flex gap-3 items-center menu-item ${
              pathname === "/profile" ? "menu-item-focused" : ""
            }`}
          >
            <UserIcon />
            <p className="text-sm font-bold hidden group-hover:block">
              Profile
            </p>
          </Link>
        </div>
      </div>
      {isHover && (
        <div
          className={`fixed w-screen h-screen z-[100] bg-black transition-all ${
            isHover ? "opacity-70 " : "opacity-0"
          }`}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
