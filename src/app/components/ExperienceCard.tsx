import React from "react";

interface ExperienceCardProps {
  title: string;
  institution: string;
  date: string;
  info: string | null;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  institution,
  date,
  info,
}) => {
  return (
    <div className="flex flex-col border-[#33353F] border rounded-lg p-4 text-sm mt-2">
      <div className="flex flex-row justify-between">
        <div className="font-bold">{title}</div>
        <div>{institution}</div>
      </div>
      <div className="flex flex-row justify-between">
        <div>{date}</div>
        <div>{info ? info : ""}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
