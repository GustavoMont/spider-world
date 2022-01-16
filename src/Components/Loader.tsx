import React from "react";

function Loader() {
  //     border: 16px solid #f3f3f3;
  //   border-radius: 50%;
  //   border-top: 16px solid #3498db;
  //   width: 120px;
  //   height: 120px;
  //   -webkit-animation: spin 2s linear infinite; /* Safari */
  //   animation: spin 2s linear infinite;
  return (
    <div className="loader border-[16px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-white border-t-[16px] border-t-red w-[7rem] h-[7rem] my-5"></div>
  );
}

export default Loader;
