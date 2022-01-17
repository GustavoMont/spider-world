import React from "react";
import { Link } from "react-router-dom";

const Comunity = () => {
  return (
    <section
      className="h-screen relative flex items-center"
      id="spidey-profile"
    >
      <div
        data-aos="zoom-in-up"
        className="bg-white-80 dark:bg-black-70 rounded-lg w-[95vw] m-auto p-4"
      >
        <h2 className="text-[2rem] text-dark-red dark:text-white text-center">
          Join in Our Comunity
        </h2>
        <div
          className="bg-red dark:bg-gray text-white rounded-lg drop-shadow-md lg p-5"
          id="message"
        >
          <p className="text-center  text-[1.2rem]">
            We are a group of people around who love this character and love to
            meet people who love this character!!
          </p>
        </div>
        <Link
          to={"/join"}
          className="bg-blue dark:bg-gray w-full block my-5 p-3 text-center font-extrabold text-white rounded-full"
        >
          Join to Us
        </Link>
      </div>
    </section>
  );
};

export default Comunity;
