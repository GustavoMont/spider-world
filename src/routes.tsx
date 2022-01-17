import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import { ComicsProvider } from "./Context/SpideyContentCtx";
import Home from "./pages/Home";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={
        <ComicsProvider>
          <Menu />
          <Home />
        </ComicsProvider>
      }
    />
  </Routes>
);

export default AppRoutes;
