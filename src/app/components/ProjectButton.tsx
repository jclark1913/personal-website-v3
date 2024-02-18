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
    ? "text-experiencetabactive border-b-2 border-blue-500 "
    : "text-experiencetabinactive";
  return (
    <button onClick={selectActiveFilter}>
      <p
        className={`mr-3 font-semibold hover:text-experiencetabactive ${buttonStyling}`}
      >
        {children}
      </p>
    </button>
  );
};

export default ProjectButton;
