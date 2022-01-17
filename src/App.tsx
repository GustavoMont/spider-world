import React from "react";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <div
        className="bg-dark-red dark:bg-black-100 fixed top-0 ease-in duration-300 left-0 w-screen h-screen -z-50 flex items-center justify-center"
        onClick={(e) => e.preventDefault}
      >
        <i className="fas fa-spider text-[10rem] ease-in duration-500 dark:text-white"></i>
      </div>
      <AppRoutes />
    </>
  );
};

export default App;
