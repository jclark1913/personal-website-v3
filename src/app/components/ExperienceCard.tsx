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
    <div className="text-paragraphtext flex flex-col border-normalborder hover:border-hoverborder border rounded-lg p-4 text-sm mt-2">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="font-bold">{title}</div>
        <div>{institution}</div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div>{date}</div>
        <div className="hidden md:flex">{info ? info : ""}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
