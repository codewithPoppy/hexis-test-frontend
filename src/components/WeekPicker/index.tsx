"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { addDays, startOfWeek, endOfWeek } from "date-fns";
import { enGB } from "date-fns/locale";
import { useFuelPlan } from "../FuelPlanContext";

const getStartOfWeek = (date: Date) => addDays(startOfWeek(date), 1);
const getEndOfWeek = (date: Date) => addDays(endOfWeek(date), 1);

const WeekPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { startDate, endDate, setStartDate, setEndDate } = useFuelPlan();

  const handleWeekSelect = (dates: (Date | null)[]) => {
    const selectDate: Date = dates[0] as Date;

    setStartDate(getStartOfWeek(selectDate));
    setEndDate(getEndOfWeek(selectDate));
    setIsOpen(false);
  };

  const handleWeekPrev = () => {
    setStartDate(addDays(startDate, -7));
    setEndDate(addDays(endDate, -7));
    setIsOpen(false);
  };

  const handleWeekNext = () => {
    setStartDate(addDays(startDate, 7));
    setEndDate(addDays(endDate, 7));
    setIsOpen(false);
  };

  return (
    <div className="rounded-lg h-14 flex justify-between items-center bg-gray-back gap-3 cursor-pointer relative w-[250px]">
      <button
        className="text-2xl px-3 font-bold text-light-blue cursor-pointer"
        onClick={handleWeekPrev}
      >{`<`}</button>
      <div className="relative z-[100]">
        <div onClick={() => setIsOpen(!isOpen)}>
          {format(startDate, "do MMM")} - {format(endDate, "do MMM")}
        </div>
        {isOpen && (
          <div className="absolute t-0 l-0 flex items-center justify-center">
            <DatePicker
              selected={startDate}
              startDate={startDate}
              endDate={endDate}
              onChange={handleWeekSelect}
              inline
              locale={enGB}
              selectsRange
              className="z-50"
              shouldCloseOnSelect={false}
            />
          </div>
        )}
      </div>
      <button
        className="text-2xl px-3 font-bold text-light-blue cursor-pointer"
        onClick={handleWeekNext}
      >{`>`}</button>
    </div>
  );
};

export default React.memo(WeekPicker);
