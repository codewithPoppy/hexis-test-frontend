import React, { useState, useImperativeHandle } from "react";

interface AddNewModalProps {
  onClickCarbCode?: Function;
  onClickWorkout?: Function;
  onClickMacros?: Function;
  hasMacro: boolean;
}

export interface AddNewModalRef {
  open: Function;
  close: Function;
}

const AddNewModal = React.forwardRef(
  (
    {
      onClickCarbCode,
      onClickWorkout,
      onClickMacros,
      hasMacro,
    }: AddNewModalProps,
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(
      ref,
      (): AddNewModalRef => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      })
    );

    const handleCarbCode = () => {
      setIsOpen(false);
      onClickCarbCode && onClickCarbCode();
    };

    const handleWorkout = () => {
      setIsOpen(false);
      onClickWorkout && onClickWorkout();
    };

    const handleMacros = () => {
      setIsOpen(false);
      onClickMacros && onClickMacros();
    };

    return (
      isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="bg-white rounded-lg p-6 z-50">
            <h2 className="text-xl text-gray-600 font-bold mb-4">
              Which Object would you like to create?
            </h2>
            <div className="flex justify-center gap-3">
              <button
                className="px-4 py-2 bg-gray-700 text-white rounded disabled:bg-gray-500"
                onClick={handleCarbCode}
                disabled={!hasMacro}
              >
                Carb Code
              </button>
              <button
                className="px-4 py-2 bg-gray-700 text-white rounded disabled:bg-gray-500"
                onClick={handleWorkout}
                disabled={!hasMacro}
              >
                Workout
              </button>
              <button
                className="px-4 py-2 bg-gray-700 text-white rounded disabled:bg-gray-500"
                onClick={handleMacros}
                disabled={hasMacro}
              >
                Macros
              </button>
            </div>
          </div>
        </div>
      )
    );
  }
);

AddNewModal.displayName = "AddNewModal";

export default AddNewModal;
