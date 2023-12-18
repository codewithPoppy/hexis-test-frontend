"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { addDays, startOfWeek, endOfWeek } from "date-fns";

const getStartOfWeek = (date: Date) => addDays(startOfWeek(date), 1);
const getEndOfWeek = (date: Date) => addDays(endOfWeek(date), 1);

interface FuelPlanContextProps {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  endDate: Date;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}

const FuelPlanContext = createContext<FuelPlanContextProps | undefined>(
  undefined
);

export const FuelPlanProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [startDate, setStartDate] = useState(getStartOfWeek(new Date()));
  const [endDate, setEndDate] = useState(getEndOfWeek(new Date()));
  return (
    <FuelPlanContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </FuelPlanContext.Provider>
  );
};

export const useFuelPlan = (): FuelPlanContextProps => {
  const context = useContext(FuelPlanContext);
  if (!context) {
    throw new Error("useFuelPlan must be used within a FuelPlanProvider");
  }
  return context;
};
