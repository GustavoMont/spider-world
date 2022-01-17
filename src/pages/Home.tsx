import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/home.css";
import Comics from "../PageSections/Home/SpideyComics";
import SpideyMoral from "../PageSections/Home/SpideyMoral";
import SpideyProfile from "../PageSections/Home/SpideyProfile";
import Comunity from "../PageSections/Home/Comunity";

const Home: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SpideyMoral />
      <SpideyProfile />
      <Comics height={"h-[370vh]"} />
      <Comunity />
    </>
  );
};

export default Home;
