import React from "react";
import { CarbCode } from "@/types";

const CarbCode: React.FC<{ carbcode: CarbCode }> = ({ carbcode }) => {
  const {
    mealType,
    targetTime,
    targetCaloriesMax,
    targetCaloriesMin,
    targetCarbsMax,
    targetCarbsMin,
    trackedCalories,
    trackedCarbs,
    trackedFat,
    trackedProtein,
    trackedTime,
    isTracked,
  } = carbcode;

  const mealTypeBgclasses = {
    Breakfast: "bg-breakfast",
    Lunch: "bg-lunch",
    Dinner: "bg-dinner",
  };
  const mealTypeErrorBgclasses = {
    Breakfast: "bg-lunch",
    Lunch: "bg-dinner",
    Dinner: "bg-breakfast",
  };

  const isTrackError =
    trackedCalories < targetCaloriesMin || trackedCalories > targetCaloriesMax;

  const displayTime = (targetTime: string) =>
    targetTime.split(":").slice(0, 2).join(":");

  return (
    <div className="m-2">
      <div
        className={`overflow-hidden rounded-lg ${mealTypeBgclasses[mealType]} board-item-content-container mx-auto`}
      >
        <div className="flex w-full justify-between items-center p-2 ">
          <span className="text-sm text-white font-bold">{mealType}</span>
          <span className="text-sm text-white">{displayTime(targetTime)}</span>
        </div>

        <div className="flex w-full justify-between items-center px-2 pb-2 ">
          <span className="text-xs text-white">{`${targetCaloriesMin}-${targetCaloriesMax} Kcal`}</span>
          <div className="w-0.5 h-0.5 bg-white rounded-full" />
          <span className="text-xs text-white">{`${targetCarbsMin}-${targetCarbsMax} C`}</span>
        </div>

        {isTracked && (
          <div className="bg-gray-back p-2 w-full">
            <div className="flex justify-between items-center ">
              <span className="text-xs text-white">{`${trackedCalories} Kcal`}</span>
              <span className="text-xs text-white">
                {displayTime(trackedTime)}
              </span>
            </div>

            <div className="flex w-full justify-between items-center mt-1 ">
              <span className="text-xs text-white">{`${trackedCarbs}g C`}</span>
              <div className="w-0.5 h-0.5 bg-white rounded-full" />
              <span className="text-xs text-white">{`${trackedProtein}g P`}</span>
              <div className="w-0.5 h-0.5 bg-white rounded-full" />
              <span className="text-xs text-white">{`${trackedFat}g F`}</span>
            </div>
          </div>
        )}

        {!isTrackError && isTracked && (
          <div className={`h-1 ${mealTypeBgclasses[mealType]} w-full`}></div>
        )}

        {isTrackError && isTracked && (
          <div
            className={`h-1 ${mealTypeErrorBgclasses[mealType]} w-full`}
          ></div>
        )}
      </div>
    </div>
  );
};

export default React.memo(CarbCode);
