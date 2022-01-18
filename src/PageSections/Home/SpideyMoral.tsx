import React from "react";

function SpideyMoral() {
  return (
    <section
      className="h-screen flex items-center justify-center"
      id="power-resp"
      style={{
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2017/05/16/22/44/spider-man-2319337_960_720.png)",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      <div id="sentence" className="text-white text-center">
        <h2 className="text-[2rem]" id="powers">
          With Great Powers
        </h2>
        <p className="my-5 mx-auto inline-block p-3 bg-red uppercase font-[700]  text-white italic dark:bg-gray ease-in duration-300">
          comes
        </p>
        <h2 className="text-[2rem]" id="resp">
          Great Responsibility
        </h2>
      </div>
    </section>
  );
}

export default SpideyMoral;
