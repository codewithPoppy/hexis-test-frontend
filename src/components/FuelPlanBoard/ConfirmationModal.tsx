import React, { useState, useImperativeHandle } from "react";

interface ConfirmationModalProps {
  onClickYes?: Function;
  onClickNo?: Function;
}

export interface ConfirmationModalRef {
  open: Function;
  close: Function;
}

const ConfirmationModal = React.forwardRef(
  (props: ConfirmationModalProps, ref) => {
    const { onClickNo, onClickYes } = props;
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(
      ref,
      (): ConfirmationModalRef => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      })
    );

    const handleYes = () => {
      setIsOpen(false);
      onClickYes && onClickYes();
    };

    const handleNo = () => {
      setIsOpen(false);
      onClickNo && onClickNo();
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
              Are you sure?
            </h2>
            <p className="text-gray-600 mb-4">
              This will delete your last item
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded mr-2"
                onClick={handleYes}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded"
                onClick={handleNo}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )
    );
  }
);

ConfirmationModal.displayName = "ConfirmationModal";

export default ConfirmationModal;
