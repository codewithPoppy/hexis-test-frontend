"use client";
import React from "react";
import { HideEnergyIcon, MoreInfoIcon } from "../Icons";

import "react-datepicker/dist/react-datepicker.css";
import WeekPicker from "../WeekPicker";
import { useFuelPlan } from "../FuelPlanContext";

const Navbar = () => {
  const { hideMacros, setHideMacros } = useFuelPlan();

  return (
    <div className="flex gap-3 items-center h-14 mb-8">
      <WeekPicker />

      <button
        onClick={() => setHideMacros((hideMacros) => !hideMacros)}
        className="rounded-lg px-5 py-2 h-14 bg-gray-back-2 hover:bg-gray-900 flex items-center border-light-blue border-2 cursor-pointer gap-2"
      >
        <HideEnergyIcon />
        {hideMacros ? "Show" : "Hide"} Energy & Macros
      </button>

      <MoreInfoIcon />

      <div className="ml-auto flex gap-4 h-full items-center">
        <div className="h-full w-14 rounded-full bg-light-blue flex items-center justify-center text-2xl">
          SB
        </div>
        <h4 className="font-bold text-2xl">Sarah Brown</h4>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
