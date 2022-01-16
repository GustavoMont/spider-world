import React from "react";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <div className="bg-dark-red -z-50 relative min-h-screen">
        <i className="fas fa-spider -z-50 darkmode fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[250px] dark:text-white"></i>
        <AppRoutes />
      </div>
    </>
  );
};

export default App;
