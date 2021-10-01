import { useState } from "react";

export function BottomLineInput({
  IconComponent,
  onChange,
  value,
  placeholder,
  name,
  className,
}) {
  const [focus, setFocus] = useState(false);
  function sendClass() {
    if (value.trim() && focus) return "opacity-100";
    return "opacity-25";
  }
  return (
    <div
      className={"flex items-center border-b border-gray-400 py-2 " + className}
    >
      <input
        name={name}
        className="font-serif bg-gray-1 border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <button
        className={`flex-shrink-0 text-teal-500 text-sm pt-1 pr-2 text-2xl transition-all ${sendClass()}`}
        type="button"
      >
        <IconComponent className="text-2xl" />
      </button>
    </div>
  );
}
