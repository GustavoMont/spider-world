import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./Components/Menu";
import AuthContext from "./Context/AuthContext";
import { SpideyProvider } from "./Context/SpideyContentCtx";
import Page404 from "./pages/404";
import ComicsPage from "./pages/Comics";
import AllComics from "./pages/Comics/AllCommics";
import OneComic from "./pages/Comics/OneComic";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Join from "./pages/Join";

function Private({ children }: { children: JSX.Element }) {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth()) {
    return <Navigate to={"/join"} />;
  }

  return children;
}
const AppRoutes: React.FC = () => {
  return (
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
        <Route
          path="/community"
          element={
            <Private>
              <Feed />
            </Private>
          }
        />
      </Routes>
    </SpideyProvider>
  );
};

export default AppRoutes;
