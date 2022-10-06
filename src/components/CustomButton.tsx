import React from "react";

type CustomButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const CustomButton = ({ children, onClick, disabled }: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || false}
      className="rounded-md bg-primary py-1 px-8 font-bold text-background1"
    >
      {children}
    </button>
  );
};

export default CustomButton;
