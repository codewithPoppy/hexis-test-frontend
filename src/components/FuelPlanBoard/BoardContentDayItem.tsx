import { CarbCode, DayPlan, Workout, Macro } from "@/types";
import React, { useState, useRef, useEffect } from "react";
import MacrosComponent from "./Macro";
import CarbCodeComponent from "./CarbCode";
import WorkoutComponent from "./Workout";
import ConfirmationModal, { ConfirmationModalRef } from "./ConfirmationModal";
import AddNewModal, { AddNewModalRef } from "./AddNewModal";
import { useMutation } from "@apollo/client";
import { ADD_MACRO, DELETE_MACRO } from "@/queries/macros";
import { ADD_CARBCODE, DELETE_CARBCODE } from "@/queries/carbcodes";
import { ADD_WORKOUT, DELETE_WORKOUT } from "@/queries/workouts";
import Loader from "./Loader";

interface BoardContentDayItemProps {
  dayPlan: DayPlan;
  setData: {
    setMacros: React.Dispatch<React.SetStateAction<Macro[]>>;
    setCarbCodes: React.Dispatch<React.SetStateAction<CarbCode[]>>;
    setWorkOuts: React.Dispatch<React.SetStateAction<Workout[]>>;
  };
}

const BoardContentDayItem: React.FC<BoardContentDayItemProps> = ({
  dayPlan,
  setData,
}) => {
  const { macro, planItems } = dayPlan;
  const { setMacros, setCarbCodes, setWorkOuts } = setData;

  const [loading, setLoading] = useState(false);
  const [isHover, setHover] = useState(false);
  const confirmationModalRef = useRef<ConfirmationModalRef>(null);
  const addNewModalRef = useRef<AddNewModalRef>(null);

  const [addMacro, { loading: addMacroLoading }] = useMutation(ADD_MACRO);
  const [addCarbCode, { loading: addCarbCodeLoading }] =
    useMutation(ADD_CARBCODE);
  const [addWorkout, { loading: addWorkoutLoading }] = useMutation(ADD_WORKOUT);

  const [deleteMacro, { loading: deleteMacroLoading }] =
    useMutation(DELETE_MACRO);
  const [deleteCarbCode, { loading: deleteCarbCodeLoading }] =
    useMutation(DELETE_CARBCODE);
  const [deleteWorkout, { loading: deleteWorkoutLoading }] =
    useMutation(DELETE_WORKOUT);

  const isCarbCode = (item: CarbCode | Workout) => {
    return item && "mealType" in item ? true : false;
  };
  const isWorkout = (item: CarbCode | Workout) => {
    return item && "popupType" in item ? true : false;
  };

  const handleClickNew = () => {
    addNewModalRef.current?.open();
  };
  const handleClickDelete = () => {
    confirmationModalRef.current?.open();
  };
  const handleConfirmYes = async () => {
    if (planItems.length === 0) {
      if (macro) {
        const res = await deleteMacro({ variables: { id: macro.id } });
        if (res.data.deleteMacro === "success")
          setMacros((prev) => prev.filter((item) => item.id !== macro.id));
      }
    } else {
      const lastItem = planItems.at(-1);
      if (!lastItem) return;
      if ("mealType" in lastItem) {
        const res = await deleteCarbCode({ variables: { id: lastItem.id } });
        if (res.data.deleteCarbCode === "success")
          setCarbCodes((prev) =>
            prev.filter((item) => item.id !== lastItem.id)
          );
      } else {
        const res = await deleteWorkout({ variables: { id: lastItem.id } });
        if (res.data.deleteWorkout === "success")
          setWorkOuts((prev) => prev.filter((item) => item.id !== lastItem.id));
      }
    }
  };

  const handleCarbCode = async () => {
    const res = await addCarbCode({
      variables: { date: dayPlan.date },
    });
    const newCarbCode = res.data.addCarbCode as CarbCode;
    setCarbCodes((prev) => [...prev, newCarbCode]);
  };

  const handleMacros = async () => {
    const res = await addMacro({ variables: { date: dayPlan.date } });
    const newMacros = res.data.addMacro as Macro;
    setMacros((prev) => [...prev, newMacros]);
  };

  const handleWorkout = async () => {
    const res = await addWorkout({ variables: { date: dayPlan.date } });
    const newWorkout = res.data.addWorkout as Workout;
    setWorkOuts((prev) => [...prev, newWorkout]);
  };

  useEffect(() => {
    const loadingStates = [
      addMacroLoading,
      addCarbCodeLoading,
      addWorkoutLoading,
      deleteMacroLoading,
      deleteCarbCodeLoading,
      deleteWorkoutLoading,
    ];
    setLoading(loadingStates.some((state) => state));
  }, [
    addMacroLoading,
    addCarbCodeLoading,
    addWorkoutLoading,
    deleteMacroLoading,
    deleteCarbCodeLoading,
    deleteWorkoutLoading,
  ]);

  return (
    <>
      <div
        className="grow flex flex-col items-center gap-3 board-content-item"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="board-item-content w-full pb-10">
          {!!macro && <MacrosComponent macro={macro} />}
          {planItems.map((item, index) => (
            <React.Fragment key={index}>
              {isCarbCode(item) && (
                <CarbCodeComponent carbcode={item as CarbCode} />
              )}
              {isWorkout(item) && (
                <WorkoutComponent workout={item as Workout} />
              )}
            </React.Fragment>
          ))}
          {isHover && (
            <div className="board-item-content w-full p-2 flex gap-2 board-item-content-container mx-auto">
              <button
                onClick={handleClickNew}
                className="grow border-2 hover:bg-gray-back-2 bg-gray-back rounded-lg border-light-blue p-1 flex items-center justify-center board-item-content-container mx-auto"
              >
                +
              </button>
              {!!macro || planItems.length > 0 ? (
                <button
                  onClick={handleClickDelete}
                  className="grow border-2 hover:bg-gray-back-2 bg-gray-back rounded-lg border-light-blue p-1 flex items-center justify-center board-item-content-container mx-auto"
                  disabled={!macro && planItems.length === 0}
                >
                  x
                </button>
              ) : null}
            </div>
          )}
        </div>
      </div>
      <AddNewModal
        ref={addNewModalRef}
        onClickCarbCode={handleCarbCode}
        onClickMacros={handleMacros}
        onClickWorkout={handleWorkout}
        hasMacro={!!macro}
      />
      <ConfirmationModal
        ref={confirmationModalRef}
        onClickYes={handleConfirmYes}
      />
      <Loader loading={loading} />
    </>
  );
};

export default BoardContentDayItem;
