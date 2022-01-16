import React, { useState } from "react";
const alarm = require("../assets/black-suit.mp3");
const Switch: React.FC = () => {
  const [toggle, setToggle] = useState<Boolean>(true);

  const toggleClass = " transform translate-x-5";

  return (
    <div
      className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-blue rounded-full p-1 cursor-pointer"
      onClick={async () => {
        const html = window.document.documentElement.classList;
        html.toggle("dark");
        if (html.contains("dark")) {
          const mp3: HTMLAudioElement = new Audio(alarm);
          mp3.play();
        }
        setToggle(!toggle);
      }}
    >
      {/* Switch */}
      <div
        className={
          "bg-white md:w-6 md:h-6 h-5 w-5 ease-in duration-300 rounded-full shadow-md transform" +
          (toggle ? null : toggleClass)
        }
      ></div>
    </div>
  );
};

export default Switch;
