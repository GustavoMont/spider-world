import React, { useState } from "react";
import Switch from "./Switch";

const Menu: React.FC = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const optionClasses = `absolute left-0 ease-in duration-500 flex dark:bg-black-100 flex-col justify-around items-center 
  w-screen h-[85vh] bg-red `;
  return (
    <nav className="px-2 bg-dark-red text-white h-[15vh] flex justify-between items-center z-50 dark:bg-black-100 fixed w-screen">
      <h1 className="text-[1.5rem] text-bold">Spider-World</h1>
      <div
        className={`ham-container ${
          open ? "active" : ""
        } w-[30px] h-[30px] relative cursor-pointer`}
        onClick={() => setOpen(!open)}
      >
        <div className="bar rounded absolute top-0" id="start"></div>
        <div
          className="bar rounded absolute top-1/2 translate-y-[-50%]"
          id="middle"
        ></div>
        <div className="bar rounded absolute top-[90%]" id="end"></div>
      </div>
      <ul className={`${optionClasses} ${open ? "top-[15vh]" : "top-[100vh]"}`}>
        <li>
          <Switch />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
