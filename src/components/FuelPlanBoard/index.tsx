"use client";
import { format, eachDayOfInterval } from "date-fns";
import { useFuelPlan } from "../FuelPlanContext";
import BoardHeader from "./BoardHeader";
import BoardContent from "./BoardContent";
import "./index.css";
import { useMemo } from "react";

function FuelPlanboard() {
  const { startDate, endDate } = useFuelPlan();

  const days = useMemo(
    () =>
      eachDayOfInterval({
        start: new Date(startDate),
        end: new Date(endDate),
      }).map((date) => format(date, "EEE d")),
    [startDate, endDate]
  );

  return (
    <div className="w-full grow board custom-scrollbar flex flex-col overflow-x-auto overflow-y-auto">
      <BoardHeader days={days} />
      <BoardContent startDate={startDate} endDate={endDate} />
    </div>
  );
}

export default FuelPlanboard;
