"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CarbCode, DayPlan, Macro, Workout } from "@/types";
import { format, eachDayOfInterval } from "date-fns";
import BoardContentDayItem from "./BoardContentDayItem";
import { useQuery } from "@apollo/client";
import { GET_MACROS } from "@/queries/macros";
import { GET_CARBCODES } from "@/queries/carbcodes";
import { GET_WORKOUTS } from "@/queries/workouts";
import Loader from "./Loader";

interface BoardContentProps {
  startDate: Date;
  endDate: Date;
}

const BoardContent: React.FC<BoardContentProps> = ({ startDate, endDate }) => {
  const {
    loading: macrosLoading,
    error: macrosError,
    data: macrosData,
    refetch: macrosRefetch,
  } = useQuery(GET_MACROS, {
    variables: { from: startDate, to: endDate },
  });

  const {
    loading: carbCodesLoading,
    error: carbCodesError,
    data: carbCodesData,
    refetch: carbCodesRefetch,
  } = useQuery(GET_CARBCODES, {
    variables: { from: startDate, to: endDate },
  });

  const {
    loading: workOutsLoading,
    error: workOutsError,
    data: workOutsData,
    refetch: workOutsRefetch,
  } = useQuery(GET_WORKOUTS, {
    variables: { from: startDate, to: endDate },
  });

  const [loading, setLoading] = useState(false);
  const [macros, setMacros] = useState<Macro[]>([]);
  const [carbCodes, setCarbCodes] = useState<CarbCode[]>([]);
  const [workOuts, setWorkOuts] = useState<Workout[]>([]);

  useEffect(() => {
    if (macrosData && macrosData.macros && !macrosError) {
      setMacros(macrosData.macros);
    }
  }, [macrosData, macrosError]);

  useEffect(() => {
    if (carbCodesData && carbCodesData.carbCodes && !carbCodesError) {
      setCarbCodes(carbCodesData.carbCodes);
    }
  }, [carbCodesData, carbCodesError]);

  useEffect(() => {
    if (workOutsData && workOutsData.workouts && !workOutsError) {
      setWorkOuts(workOutsData.workouts);
    }
  }, [workOutsData, workOutsError]);

  useEffect(() => {
    const loadingStates = [macrosLoading, carbCodesLoading, workOutsLoading];
    setLoading(loadingStates.some((state) => state));
  }, [macrosLoading, carbCodesLoading, workOutsLoading]);

  const refetchAll = useCallback(() => {
    macrosRefetch();
    carbCodesRefetch();
    workOutsRefetch();
  }, [macrosRefetch, carbCodesRefetch, workOutsRefetch]);

  useEffect(() => {
    refetchAll();
  }, [startDate, endDate, refetchAll]);

  const days = eachDayOfInterval({
    start: new Date(startDate),
    end: new Date(endDate),
  });

  const dayPlans: DayPlan[] = days.map((day) => {
    const dayMacros = macros.filter(
      (macro) => macro.date === format(day, "yyyy-MM-dd")
    );

    const dayCarbCodes = carbCodes.filter(
      (carbCode) => carbCode.date === format(day, "yyyy-MM-dd")
    );

    const dayWorkouts =
      workOuts.filter(
        (workout) => workout.date === format(day, "yyyy-MM-dd")
      ) ?? [];

    return {
      date: day,
      macro: dayMacros?.[0],
      planItems: [...dayCarbCodes, ...dayWorkouts].sort((a, b) =>
        a.createdAt > b.createdAt ? 1 : -1
      ),
    };
  });

  if (macrosError || carbCodesError || workOutsError)
    return (
      <div className="flex w-full justify-center flex-col items-center mt-5 text-xsl">
        <p>Error occurred while fetching the data</p>
        <p>Refresh the page to try again</p>
      </div>
    );
  return (
    <>
      <Loader loading={loading} />

      <div className="board-content grow flex flex-col">
        <div className="flex justify-between grow">
          {dayPlans.map((item: DayPlan, index: number) => (
            <BoardContentDayItem
              key={index}
              dayPlan={item}
              setData={{ setMacros, setCarbCodes, setWorkOuts }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(BoardContent);
