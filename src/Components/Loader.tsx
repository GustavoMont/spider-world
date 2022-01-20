import React from "react";
// Componente renderizado apenas em algumas páginas que podem demorar a puxar informações
// seu estilo está no arquivo index.css fora os que estão no tailwind
function Loader() {
  return (
    <div className="py-10">
      <div className="loader border-[16px] rounded-full mx-auto border-white border-t-[16px] border-t-red w-[7rem] h-[7rem] dark:border-gray dark:border-t-white"></div>
    </div>
  );
}

export default Loader;
