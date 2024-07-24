import React from "react";
import { CgSpinner } from "react-icons/cg";

export const LoadingSpinner: React.FC = () => {

  return (
    <div className="loading">
      <div className="animate-spin">
        <CgSpinner size={28} />
      </div>
    </div>
  );
};
