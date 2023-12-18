"use client";
import React from "react";

const BoardHeader: React.FC<{ days: string[] }> = ({ days }) => {
  return (
    <div className="flex justify-between sticky top-0 z-50">
      {days.map((day: string, index: number) => (
        <div
          className="grow board-head-item flex justify-start items-center bg-gray-back box-border"
          key={index}
        >
          <div className="board-head-item-content mx-auto p-2">{day}</div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(BoardHeader);
