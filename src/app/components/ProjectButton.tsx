import React from "react";

interface ProjectButtonProps {
  active: boolean;
  selectActiveFilter: () => void;
  children: React.ReactNode;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({
  active,
  selectActiveFilter,
  children,
}) => {
  const buttonStyling = active
    ? "text-white border-b border-blue-500 "
    : "text-slate-200";
  return (
    <button onClick={selectActiveFilter}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonStyling}`}>
        {children}
      </p>
    </button>
  );
};

export default ProjectButton;
