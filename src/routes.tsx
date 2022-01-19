import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import { SpideyProvider } from "./Context/SpideyContentCtx";
import Page404 from "./pages/404";
import ComicsPage from "./pages/Comics";
import AllComics from "./pages/Comics/AllCommics";
import OneComic from "./pages/Comics/OneComic";
import Home from "./pages/Home";
import Join from "./pages/Join";

const AppRoutes: React.FC = () => (
  <SpideyProvider>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comics" element={<ComicsPage />}>
        <Route index element={<AllComics />} />
        <Route path=":id" element={<OneComic />} />
      </Route>
      <Route path="join" element={<Join />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </SpideyProvider>
);

export default AppRoutes;
