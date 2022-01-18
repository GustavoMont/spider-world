import Aos from "aos";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const ComicsPage = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="pt-[15vh]">
      <Outlet />
    </div>
  );
};

export default ComicsPage;
