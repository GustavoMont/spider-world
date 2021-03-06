import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/home.css";
import Comics from "../PageSections/Home/SpideyComics";
import SpideyMoral from "../PageSections/Home/SpideyMoral";
import SpideyProfile from "../PageSections/Home/SpideyProfile";

const Home: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <>
      <SpideyMoral />
      <SpideyProfile />
      <Comics height={"max-h-[370vh]"} />
      {/* <Comunity /> */}
    </>
  );
};

export default Home;
