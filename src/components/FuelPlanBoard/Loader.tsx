import React from "react";

const Loader: React.FC<{ loading: boolean }> = ({ loading }) => {
  if (!loading) return null;
  return (
    <div className="fixed inset-0 bg-black opacity-50 z-[110] flex justify-center items-center">
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
    </div>
  );
};

export default React.memo(Loader);
