import  { useState } from "react";
import { execCommand } from "../../../../../lib/formattingcontext";

const FontColor = () => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (newColor) => {
    setColor(newColor);
    execCommand("foreColor", newColor);
    
  };

  return (
    <>
      <div className="join">
        <button className="btn join-item font-normal btn-sm btn-square text-lg btn-ghost p-0" onClick={()=>execCommand("foreColor", color)}>
          A
          <hr
            className="-mt-5 w-2/3 border-2  bg-red-800"
            style={{ borderColor: color }}
          />
        </button>
        <div className="dropdown dropdown-end dropdown-bottom">
          <button
            tabIndex={0}
            role="button"
            className="btn join-item min-h-7 mt-1 min-w-4 h-7 w-3 btn-square btn-ghost p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div
            tabIndex={0}
            className="dropdown-content gap-3 z-[1] menu p-2 shadow bg-base-100 rounded-box h-32 w-48"
          >
            <input
              type="radio"
              value="#ff0000"
              name="radio"
              className="bg-red-600 checked:bg-red-600 radio"
              onChange={() => handleColorChange("#ff0000")}
            />
            <input
              type="radio"
              value="#ffff00"
              name="radio"
              className="bg-yellow-400 checked:bg-yellow-400 radio"
              onChange={() => handleColorChange("#ffff00")}
            />
            <input
              type="radio"
              value="#00ff00"
              name="radio"
              className="bg-green-500 checked:bg-green-500 radio"
              onChange={() => handleColorChange("#00ff00")}
            />
            <input
              type="radio"
              value="#800080"
              name="radio"
              className="bg-purple-600 checked:bg-purple-600 radio"
              onChange={() => handleColorChange("#800080")}
            />
            <input
              type="radio"
              value="#00ffff"
              name="radio"
              className="bg-cyan-600 checked:bg-cyan-600 radio"
              onChange={() => handleColorChange("#00ffff")}
            />
            <input
              type="radio"
              value="#000000"
              name="radio"
              className="bg-black checked:bg-black radio"
              defaultChecked
              onChange={() => handleColorChange("#000000")}
            />
            <input
              type="radio"
              value="#ffffff"
              name="radio"
              className="bg-white checked:bg-white radio"
              onChange={() => handleColorChange("#ffffff")}
            />
            <input
              type="radio"
              value="#2f2f2f"
              name="radio"
              className="bg-gray-800 checked:bg-gray-800 radio"
              onChange={() => handleColorChange("#2f2f2f")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FontColor;
