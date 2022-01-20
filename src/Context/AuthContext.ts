import { createContext } from "react";

interface Auth {
  isAuth(): Boolean;
  name: string;
}

function isAuth() {
  const register = localStorage.getItem("@spider-world-login") || "";
  const login: Boolean = register && JSON.parse(register).isLogged;
  return login;
}

const database = localStorage.getItem("@spider-world-login") || "";
const name: string = database && JSON.parse(database).name;

const AuthContext = createContext<Auth>({ isAuth, name });

export default AuthContext;
