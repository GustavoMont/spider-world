import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const [email, setEmail] = useState<string>(""); // Para lidar com campo de email
  const [pass, setPass] = useState<string>(""); // Para lidar com campo de senha
  const [errorMsg, setErrorMsg] = useState<string>(""); // Todo erro de submição gerá uma mensagem que vai aparecer acima do butão
  const navigate = useNavigate();
  return (
    <form
      className="flex flex-col text-white "
      onSubmit={(e) => {
        e.preventDefault();
        const database = localStorage.getItem("@spider-world-users") || ""; // Base de dados salva no localstorage
        const users = database && JSON.parse(database); // Apenas se houver base de dados eu vou convertê-la
        const user: { name: string; pass: string; email: string } =
          users &&
          users.reduce(
            (last: boolean, user: { email: string; name: string }) =>
              user.email === email ? user : last,
            false
          ); // Procurar o e-mail na base de dados caso não ache vai gerar uma erro

        if (!user) {
          setErrorMsg("User not registered!!");
          return;
        }
        const canAuth = user?.pass === pass; // Checando se a senha digitada coincide com a senha salva
        if (!canAuth) {
          setErrorMsg("E-mail or password is incorrect!!");
          return;
        }
        const jsonUser = JSON.stringify({
          name: user.name,
          email,
          isLogged: true,
        }); // Gerando um JSON de login e salvando ele no localstorage
        localStorage.setItem("@spider-world-login", jsonUser);
        //Limpando o formulário
        setErrorMsg("");
        setEmail("");
        setPass("");
        navigate("/community"); // indo pra pagina community
      }}
    >
      <label htmlFor="email">E-mail: </label>
      <input
        type="email"
        name="email"
        id="email"
        className="p-1 rounded my-2 text-black-100 dark:text-white dark:bg-black-100"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        className="p-1 rounded my-2 text-black-100"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <hr />
      {errorMsg && <p className="text-white text-[1.1rem]">{errorMsg}</p>}
      <button
        type="submit"
        className="bg-blue dark:bg-black-100 my-2 py-2 rounded-md"
      >
        Login
      </button>
    </form>
  );
}

export default FormLogin;
