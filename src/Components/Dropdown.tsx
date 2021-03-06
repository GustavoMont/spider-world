import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SpideyContext } from "../Context/SpideyContentCtx";
import { SpideyContent } from "../Types/SpideyContent";

interface DropdownComp {
  infos: SpideyContent[] | null; // O dropdown precisa receber informação sobre os quadrinhos
  title: string; // O titulo do dropdown
  closeMenu: React.Dispatch<React.SetStateAction<Boolean>>; // Quando eu clicar em uma opção quero que o menu feche
}

function Dropdown({ infos, title, closeMenu }: DropdownComp) {
  const { dispatch } = useContext(SpideyContext); // Para repassar todas as informações para a página /comics/:id
  return (
    <div>
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
            if (index >= 7) {
              return null; // Limite máximo para não quebrar o layout
            }
            return (
              <li className="" key={info.id}>
                <Link
                  onClick={() => {
                    dispatch({ type: "ALL_INFO", info });
                    closeMenu(false);
                  }}
                  to={`${title}/${info.id}`}
                  className="bg-white dark:bg-gray dark:text-white hover:bg-red hover:text-white py-2 px-4 block dark:hover:bg-white dark:hover:text-gray  whitespace-no-wrap lg:w-[19rem] lg:py-3"
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
              className="rounded-t bg-white dark:bg-gray dark:text-white hover:bg-red hover:text-white py-2 px-4 block whitespace-no-wrap"
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
