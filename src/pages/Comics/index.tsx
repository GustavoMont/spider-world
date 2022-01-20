import Aos from "aos";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const ComicsPage = () => {
  useEffect(() => {
    Aos.init({}); // Aciona a lib do aos
  }, []);
  return (
    <div className="pt-[15vh]">
      <Outlet /> {/*Vai renderizar a página all comics ou a OneCOmic */}
    </div>
  );
};

export default ComicsPage;
