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
    ? "text-white border-b border-blue-500 "
    : "text-slate-200";
  return (
    <button onClick={selectActiveTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonStyling}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
