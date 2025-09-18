// src/components/ui/DropdownMenu.jsx
import React, { useState } from "react";

export function DropdownMenu({ trigger, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={item.onClick}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
