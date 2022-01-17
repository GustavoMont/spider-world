import React, { useContext, useState } from "react";
import { SpideyContext } from "../Context/SpideyContentCtx";
import Dropdown from "./Dropdown";
import Switch from "./Switch";

const Menu: React.FC = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const optionClasses = `dark:bg-black-100 w-screen h-[85vh] bg-red `;
  const { comics, series } = useContext(SpideyContext);
  document.body.style.overflow = open ? "hidden" : "auto";
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
      <div
        className={`menu-options overflow-y-auto absolute left-0 ease-in flex items-center duration-500 ${optionClasses} ${
          open ? "top-[15vh]" : "top-[100vh]"
        }`}
      >
        <ul
          className={`min-h-[80%] w-[90%] flex flex-col justify-evenly items-center mx-auto`}
        >
          <li>
            <Switch />
          </li>
          <li>
            <Dropdown infos={comics} title="Comics" />
          </li>
          <li>
            <Dropdown infos={series} title="Series" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
