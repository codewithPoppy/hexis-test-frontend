import React from "react";
import { Macro } from "@/types";

const Macro: React.FC<{ macro: Macro }> = ({ macro }) => {
  return (
    <div className="bg-gray-back-2 px-2 py-4">
      <div className="board-item-content-container mx-auto">
        <div className="max-w-full h-1 rounded-full bg-gray-back relative">
          <div className="absolute t-0 l-0 h-1 bg-white w-1/2 rounded-full"></div>
        </div>
        <div className="flex w-full justify-between pt-1 pb-2 items-center h-6">
          <p className="text-xs ">Calories</p>
          <p className="text-xs">{macro.calories + "kcal"}</p>
        </div>

        <div className="max-w-full h-1 rounded-full bg-gray-back relative">
          <div className="absolute t-0 l-0 h-1 bg-light-blue w-1/2 rounded-full"></div>
        </div>
        <div className="flex w-full justify-between pt-1 pb-2 items-center h-6">
          <p className="text-xs ">Carbs</p>
          <p className="text-xs">{macro.carbs + "g"}</p>
        </div>
        <div className="max-w-full h-1 rounded-full bg-gray-back relative">
          <div className="absolute t-0 l-0 h-1 bg-light-blue w-1/2 rounded-full"></div>
        </div>
        <div className="flex w-full justify-between pt-1 pb-2 items-center h-6">
          <p className="text-xs ">Protein</p>
          <p className="text-xs">{macro.protein + "g"}</p>
        </div>
        <div className="max-w-full h-1 rounded-full bg-gray-back relative">
          <div className="absolute t-0 l-0 h-1 bg-light-blue w-1/2 rounded-full"></div>
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
