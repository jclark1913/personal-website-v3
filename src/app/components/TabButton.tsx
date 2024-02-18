import React from "react";

interface TabButtonProps {
  active: boolean;
  selectActiveTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectActiveTab,
  children,
}) => {
  const buttonStyling = active
    ? "text-headertext border-b-2 border-blue-500 "
    : "text-experiencetabinactive";
  return (
    <button onClick={selectActiveTab}>
      <p
        className={`mr-3 font-semibold hover:text-headertext ${buttonStyling}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
