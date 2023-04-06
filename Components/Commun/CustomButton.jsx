import React from "react";

function CustomButton({ text, variant, prefixIcon, className }) {
  return (
    <button
      className={` f14  bold customButton text-white p-3 ${variant} ${className}`}>
      {prefixIcon ? <i className={`bi bi-${prefixIcon} me-5`} /> : null}
      {text}
    </button>
  );
}

export default CustomButton;
