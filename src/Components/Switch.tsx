import React, { useState } from "react";
const alarm = require("../assets/black-suit.mp3");
const Switch = () => {
  const [toggle, setToggle] = useState<Boolean>(true);
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const toggleClass = " transform translate-x-8";

  return (
    <div
      className="md:w-14 md:h-7 w-14 h-6 flex items-center hover:opacity-90 ease-in duration-100 bg-white rounded-full cursor-pointer"
      onClick={async () => {
        const html = window.document.documentElement.classList;
        html.toggle("dark");
        if (html.contains("dark") && !isPlaying) {
          const mp3: HTMLAudioElement = new Audio(alarm);
          mp3.play();
          setIsPlaying(true);
          let timer = setInterval(() => {
            if (mp3.volume - 0.08 >= 0) {
              mp3.volume -= 0.05;
            }
          }, 175);
          setTimeout(() => {
            setIsPlaying(false);
            clearInterval(timer);
          }, 3500);
        }
        setToggle(!toggle);
      }}
    >
      {/* Switch */}
      <div
        className={
          "bg-blue md:w-6 md:h-6 h-8 w-8 dark:bg-gray flex justify-center items-center ease-in duration-300 rounded-full shadow-md transform" +
          (toggle ? null : toggleClass)
        }
      >
        <i
          className={`text-white  ${!toggle ? "fas fa-moon" : "fas fa-sun"}`}
        ></i>
      </div>
    </div>
  );
};

export default Switch;
