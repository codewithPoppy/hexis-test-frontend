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
  const macroData: {
    name: string;
    value: "calories" | "carbs" | "protein" | "fat";
    unit: string;
  }[] = [
    { name: "Calories", value: "calories", unit: "kcal" },
    { name: "Carbs", value: "carbs", unit: "g" },
    { name: "Protein", value: "protein", unit: "g" },
    { name: "Fat", value: "fat", unit: "g" },
  ];
  return (
    <div className="bg-gray-back-2 px-2 py-4">
      <div className="board-item-content-container mx-auto">
        {macroData.map(({ name, value, unit }, index: number) => (
          <React.Fragment key={value}>
            <div className="max-w-full h-1 rounded-full bg-gray-back relative overflow-hidden">
              <div
                style={{
                  width:
                    Math.floor((trackedData[value] / macro[value]) * 100) + "%",
                }}
                className={`absolute t-0 l-0 h-1 ${
                  index === 0 ? "bg-white" : "bg-light-blue"
                } rounded-full transition-all duration-500`}
              ></div>
            </div>
            <div className="flex w-full justify-between pt-1 pb-2 items-center h-6">
              <p className="text-xs ">{name}</p>
              <p className="text-xs">
                {trackedData[value] + "/" + macro[value] + unit}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Macro);
