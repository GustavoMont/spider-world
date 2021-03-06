import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SpideyContext } from "../Context/SpideyContentCtx";
import Dropdown from "./Dropdown";
import Switch from "./Switch";

const Menu: React.FC = () => {
  const [open, setOpen] = useState<Boolean>(false); //  Lidar com estado do menu
  const [bg, setBg] = useState<Boolean>(false); // lidar com estado do background
  const navigate = useNavigate();
  const optionClasses = `dark:bg-black-100 w-screen h-[85vh] bg-red`;
  const { comics } = useContext(SpideyContext);
  window.onscroll = () => {
    setBg(true);
    const firtsBarrier = document.querySelectorAll("[data-barrier]")[0];
    const barrierPos = firtsBarrier.getBoundingClientRect().top;
    /*Sempre q o primeiro elemento com o atribuuto [data-barrier] chegar numa 
    altura de 60 px do to o background vai ganhar sua cor*/
    if (barrierPos < 60) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  document.body.style.overflow = open ? "hidden" : "auto";
  return (
    <nav
      className={`px-2 md:px-10 ease-in duration-300 ${
        // eslint-disable-next-line no-useless-concat
        (bg || open) && "bg-blue " + " dark:bg-black-100"
      }  text-white h-[15vh] flex justify-between ease-in duration-300 items-center z-50 fixed w-screen md:h-[10vh] lg:px-10`}
      id="menu"
    >
      <h1 className="text-[1.5rem] text-white text-bold">
        {window.location.pathname !== "/" && (
          <i
            className="fas fa-arrow-left text-white cursor-pointer mr-3 hover:scale-125 hover:text-white-80 ease-in duration-100"
            onClick={() => navigate(-1)}
          ></i>
        )}
        <Link to={"/"}>Spider-World</Link>
      </h1>
      <div
        className={`ham-container lg:hidden ${
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
        className={`menu-options overflow-y-auto absolute lg:overflow-y-visible left-0 ease-in flex dark:bg-black-100 w-screen 
        h-[85vh] md:h-[90vh] bg-red lg:w-3/6 items-center duration-500 ${optionClasses} ${
          open ? "top-[15vh] md:top-[10vh] " : "top-[100vh]"
        } lg:static lg:h-[100%] lg:bg-transparent lg:dark:bg-transparent`}
      >
        <ul
          className={`min-h-[80%] w-[90%] lg:flex-row relative flex flex-col justify-evenly items-center mx-auto lg:w-[100%] lg:mx-0`}
        >
          <li>
            <Switch />
          </li>
          <li>
            <Dropdown infos={comics} title="Comics" closeMenu={setOpen} />
          </li>
          {/* {!isAuth() ? (
            <li>
              <Link
                onClick={() => setOpen(false)}
                to={"/join"}
                className="bg-white hover:bg-dark-red dark:bg-gray dark:hover:bg-white ease-in duration-300 dark:text-white text-dark-red hover:text-white dark:hover:text-gray w-40 py-3 text-center font-bold rounded-md block lg:w-28"
              >
                Join to Us
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  to={window.location.pathname === "/" ? "/community" : "/"}
                  className="ease-in duration-300 text-white font-bold rounded-md block"
                >
                  {window.location.pathname === "/" ? "Community" : "Home"}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    localStorage.removeItem("@spider-world-login");
                    navigate("/");
                    setOpen(false);
                  }}
                  to={"/join"}
                  className="ease-in duration-300 text-white font-bold rounded-md block"
                >
                  Sign out
                </Link>
              </li>
            </>
          )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
