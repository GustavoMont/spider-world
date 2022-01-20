import React from "react";
import FormLogin from "../Components/FormLogin";
import FormSign from "../Components/FormSign";

function Join() {
  return (
    <div className="pt-[18vh] h-screen">
      <div className="forms-container w-[90vw] mx-auto md:grid md:grid-cols-12 md:grid-rows-1 md:gap-x-8 ">
        <div
          className="login bg-red dark:bg-gray p-3 mb-8 text-white md:col-start-1 md:row-start-1 md:col-span-6 md:max-h-[300px] rounded-lg"
          data-barrier
        >
          <h3 className="text-[1.5rem]">Login</h3>
          <FormLogin />
        </div>
        <div className="cadastro bg-blue dark:bg-gray p-3 text-white  md:col-start-7 md:col-span-7 md:row-start-1 rounded-lg">
          <h3 className="text-[1.5rem]">Sign in:</h3>
          <FormSign />
        </div>
      </div>
    </div>
  );
}

export default Join;
