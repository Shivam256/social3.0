import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  ReactHTML,
  useState,
  useEffect,
} from "react";

type CustomInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
};

const CustomInput = ({
  label,
  name,
  value,
  onChange,
  type,
}: CustomInputProps) => {
  const [isFocused, setFocused] = useState<Boolean>(!(value == "") || false);

  useEffect(() => {
    if (value != "") {
      setFocused(true);
    }
  }, [value]);

  const toggleFocus = () => {
    if (value == "") {
      console.log(value, "ie ehweknr3lwe", value.length);
      setFocused(!isFocused);
    } else {
      setFocused(true);
    }
  };

  return (
    <div className="w-full">
      <label
        htmlFor=""
        className={`transition-al absolute duration-150 ease-in-out ${
          isFocused ? "-translate-y-5 text-xs" : ""
        }`}
      >
        {label}
      </label>
      <input
        type={type || "text"}
        className="w-full border-b-2 border-b-primary bg-background1 outline-none"
        onChange={onChange}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        name={name}
      />
    </div>
  );
};

export default CustomInput;
