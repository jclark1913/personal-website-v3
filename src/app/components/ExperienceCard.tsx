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
    <div className="flex flex-col">
      <div>{title}</div>
      <div>{institution}</div>
      <div>{date}</div>
      <div>{info ? info : ""}</div>
    </div>
  );
};

export default ExperienceCard;
