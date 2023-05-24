import React from "react";
import "./input.scss";

function TextInput(props) {
  const { placeholder } = props;
  return (
      <input
        type="text"
        placeholder={placeholder}
        className="w-full outline-none bg-transparent border-b border-[#323bac20] hover:border-[#323bac] focus:border-[#323bac] pl-1 text-[#323bac] "
      />
  );
}

export default TextInput;
