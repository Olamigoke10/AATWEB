// src/components/ui/Button.jsx
import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
