import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="pt-[15vh] h-screen flex justify-center items-center">
      <div className="message bg-white text-black-100 w-[95%] mx-auto max-w-[500px] p-5 dark:bg-gray rounded-xl relative my-9">
        <h2 className="text-[2.5rem] text-dark-red dark:text-white">
          Page Not Found Sorry :(
        </h2>
        <p className="text-[1.2rem]">
          Probably you typed something wrong or this page was deleted.
        </p>
        <Link
          to={"/"}
          className="my-20 block text-blue text-[1.5rem] font-[700] dark:text-white hover:opacity-75 ease-in duration-200 hover:scale-105 "
        >
          <i className="fas fa-arrow-left cursor-pointer hover:scale-125 align-middle ease-in duration-100"></i>{" "}
          <span>Homecoming</span>
        </Link>
        <img
          src="http://img2.wikia.nocookie.net/__cb20130403143709/tehuncledolanshow/images/4/4a/SPODERMAN.gif"
          alt="Wrong-Spidey"
          className="absolute bottom-0 right-0 w-28 md:w-56 ease-in-out duration-500"
        />
      </div>
    </div>
  );
};

export default Page404;
