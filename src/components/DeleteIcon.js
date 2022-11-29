import React from "react";

function DeleteIcon({ size = 24, color = "#fff" }) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M10 18a1 1 0 001-1v-6a1 1 0 00-2 0v6a1 1 0 001 1zM20 6h-4V5a3 3 0 00-3-3h-2a3 3 0 00-3 3v1H4a1 1 0 000 2h1v11a3 3 0 003 3h8a3 3 0 003-3V8h1a1 1 0 100-2zM10 5a1 1 0 011-1h2a1 1 0 011 1v1h-4V5zm7 14a1 1 0 01-1 1H8a1 1 0 01-1-1V8h10v11zm-3-1a1 1 0 001-1v-6a1 1 0 00-2 0v6a1 1 0 001 1z"
      ></path>
    </svg>
  );
}

export default DeleteIcon;
