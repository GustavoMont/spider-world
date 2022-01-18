import React from "react";
import { Link } from "react-router-dom";
import { SpideyContent } from "../Types/SpideyContent";

interface DropdownComp {
  infos: SpideyContent[] | null;
  title: string;
  closeMenu: React.Dispatch<React.SetStateAction<Boolean>>;
}

function Dropdown({ infos, title, closeMenu }: DropdownComp) {
  return (
    <div className="p-10">
      <div className="dropdown inline-block relative">
        <button className="bg-white dark:bg-gray text-red dark:text-white font-semibold py-2 px-4 rounded inline-flex items-center">
          <span className="mr-1">{title}</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul className="dropdown-menu absolute z-50 hidden text-red pt-1">
          {infos?.map((info, index) => {
            if (index >= 8) {
              return null;
            }
            return (
              <li className="" key={info.id}>
                <Link
                  onClick={() => closeMenu(false)}
                  to={`${title}/${info.id}`}
                  className="bg-white dark:bg-gray dark:text-white hover:bg-red hover:text-white py-2 px-4 block dark:hover:bg-white dark:hover:text-gray  whitespace-no-wrap lg:w-[18rem] lg:py-3"
                >
                  {info.title}
                </Link>
              </li>
            );
          })}
          <li className="">
            <Link
              onClick={() => closeMenu(false)}
              to={`${title}`}
              className="rounded-t bg-white dark:bg-gray dark:text-white hover:bg-gray py-2 px-4 block whitespace-no-wrap"
            >
              Ver todos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
