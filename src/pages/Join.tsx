import React from "react";
import FormLogin from "../Components/FormLogin";
import FormSign from "../Components/FormSign";

function Join() {
  return (
    <div className="pt-[18vh] h-screen ">
      <div className="forms-container w-[90vw] mx-auto">
        <div className="login bg-red  p-3 text-white" data-barrier>
          <h3 className="text-[1.5rem]">Login</h3>
          <FormLogin />
        </div>
        <div className="cadastro bg-blue p-3 text-white">
          <h3 className="text-[1.5rem]">Sign in:</h3>
          <FormSign />
        </div>
      </div>
    </div>
  );
}

export default Join;
