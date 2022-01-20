import React, { useState } from "react";
const blacksuit = require("../assets/black-suit.mp3"); // Tema do traje preto do Homem Aranha 3
const Switch = () => {
  const [toggle, setToggle] = useState<Boolean>(true); // Lidar com estado do toggle
  const [isPlaying, setIsPlaying] = useState<Boolean>(false); // Lidar com estado do áudio
  const toggleClass = " transform translate-x-8";

  return (
    <div
      className="md:w-14 md:h-7 w-14 h-6 flex items-center hover:opacity-90 ease-in duration-100 bg-white rounded-full cursor-pointer"
      onClick={async () => {
        const html = window.document.documentElement.classList;
        html.toggle("dark"); // set para o darkmode
        if (html.contains("dark") && !isPlaying) {
          // faz com que toque apenas se for do light pro dark mode
          // E se o tema não estiver sendo tocado
          const mp3: HTMLAudioElement = new Audio(blacksuit);
          mp3.play();
          setIsPlaying(true);
          let timer = setInterval(() => {
            if (mp3.volume - 0.08 >= 0) {
              mp3.volume -= 0.05;
            }
          }, 175); // Fazendo fade out do audio
          setTimeout(() => {
            setIsPlaying(false);
            clearInterval(timer);
          }, 3500); // Para o intervalo e seta o playing como falso
        }
        setToggle(!toggle); // ALterna entre ligado e desligado
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
