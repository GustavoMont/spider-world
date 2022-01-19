import { createContext } from "react";

interface Auth {
  isAuth(): Boolean;
}

function isAuth() {
  const register = localStorage.getItem("@spider-world-login") || "";
  const login: Boolean = register && JSON.parse(register).isLogged;
  return login;
}

const AuthContext = createContext<Auth>({ isAuth });

export default AuthContext;
