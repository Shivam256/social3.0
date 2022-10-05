import React from "react";

type CustomButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CustomButton = ({ children, onClick }: CustomButtonProps) => {
  return (
    <button onClick={onClick} className="bg-primary py-1 px-8 rounded-md text-background1 font-bold">
      {children}
    </button>
  );
};

export default CustomButton;
