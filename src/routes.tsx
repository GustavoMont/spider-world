import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import { SpideyProvider } from "./Context/SpideyContentCtx";
import Home from "./pages/Home";

const AppRoutes: React.FC = () => (
  <SpideyProvider>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </SpideyProvider>
);

export default AppRoutes;
