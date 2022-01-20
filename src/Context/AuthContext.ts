import { createContext } from "react";

interface Auth {
  // Type do Auth Context
  isAuth(): Boolean;
  name: string;
}

// Função que verifica se está logado ou não
function isAuth() {
  const register = localStorage.getItem("@spider-world-login") || "";
  const login: Boolean = register && JSON.parse(register).isLogged;
  return login;
}

const database = localStorage.getItem("@spider-world-login") || "";
const name: string = database && JSON.parse(database).name;

const AuthContext = createContext<Auth>({ isAuth, name }); // Função e nome erão repassaos

export default AuthContext;
