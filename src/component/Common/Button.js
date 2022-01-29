import React from "react";

export default function Button(props) {
  const { text, onClick, className, buttonClassName, other } = props;

  return (
    <div className={className}>
      <button onClick={onClick} className={buttonClassName}>
        {other && other}
        {text}
      </button>
    </div>
  );
}
