import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const navigate = useNavigate();
  return (
    <form
      className="flex flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        const database = localStorage.getItem("@spider-world-users") || "";
        const users = database && JSON.parse(database);
        const user: { name: string; pass: string; email: string } =
          users &&
          users.reduce(
            (last: boolean, user: { email: string; name: string }) =>
              user.email === email && user,
            false
          );

        if (!user) {
          setErrorMsg("User not registered!!");
          return;
        }
        const canAuth = user?.pass === pass;
        if (!canAuth) {
          setErrorMsg("E-mail or password is incorrect!!");
          return;
        }
        const jsonUser = JSON.stringify({
          name: user.name,
          email,
          isLogged: true,
        });
        localStorage.setItem("@spider-world-login", jsonUser);
        setErrorMsg("");
        setEmail("");
        setPass("");
        navigate("/comumnity");
      }}
    >
      <label htmlFor="email">E-mail: </label>
      <input
        type="email"
        name="email"
        id="email"
        className="p-1 rounded my-2 text-black-100"
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
      <button type="submit" className="bg-blue my-2 py-2 rounded-md">
        Login
      </button>
    </form>
  );
}

export default FormLogin;
