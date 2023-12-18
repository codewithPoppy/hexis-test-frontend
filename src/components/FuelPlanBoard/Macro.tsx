import React from "react";
import { Macro } from "@/types";

interface MacroProps {
  macro: Macro;
  trackedData: {
    calories: number;
    carbs: number;
    protein: number;
    fat: number;
  };
}

const Macro: React.FC<MacroProps> = ({ macro, trackedData }) => {
  return (
    <div className="bg-gray-back-2 px-2 py-4">
      <div className="board-item-content-container mx-auto">
        <div className="max-w-full h-1 rounded-full bg-gray-back relative overflow-hidden">
          <div
            style={{
              width:
                Math.floor((trackedData.calories / macro.calories) * 100) + "%",
            }}
            className="absolute t-0 l-0 h-1 bg-white rounded-full transition-all duration-500"
          ></div>
        </div>
        <div className="flex w-full justify-between pt-1 pb-2 items-center h-6">
          <p className="text-xs ">Calories</p>
          <p className="text-xs">{macro.calories + "kcal"}</p>
        </div>

        <div className="max-w-full h-1 rounded-full bg-gray-back relative overflow-hidden">
          <div
            style={{
              width: Math.floor((trackedData.carbs / macro.carbs) * 100) + "%",
            }}
            className="absolute t-0 l-0 h-1 bg-light-blue w-1/2 rounded-full transition-all duration-500"
          ></div>
        </div>
        <div className="flex w-full justify-between pt-1 pb-2 items-center h-6">
          <p className="text-xs ">Carbs</p>
          <p className="text-xs">{macro.carbs + "g"}</p>
        </div>
        <div className="max-w-full h-1 rounded-full bg-gray-back relative overflow-hidden">
          <div
            style={{
              width:
                Math.floor((trackedData.protein / macro.protein) * 100) + "%",
            }}
            className="absolute t-0 l-0 h-1 bg-light-blue w-1/2 rounded-full transition-all duration-500"
          ></div>
        </div>
        <div className="flex w-full justify-between pt-1 pb-2 items-center h-6">
          <p className="text-xs ">Protein</p>
          <p className="text-xs">{macro.protein + "g"}</p>
        </div>
        <div className="max-w-full h-1 rounded-full bg-gray-back relative overflow-hidden">
          <div
            style={{
              width: Math.floor((trackedData.fat / macro.fat) * 100) + "%",
            }}
            className="absolute t-0 l-0 h-1 bg-light-blue w-1/2 rounded-full transition-all duration-500"
          ></div>
        </div>
        <div className="flex w-full justify-between pt-1 pb-2 items-center h-6">
          <p className="text-xs ">Fat</p>
          <p className="text-xs">{macro.fat + "g"}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Macro);
