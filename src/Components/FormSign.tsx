import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormSign = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  return (
    <form
      className="flex flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        const database = localStorage.getItem("@spider-world-users") || "";
        const users: [{ email: string }] = database && JSON.parse(database);
        const isRegistered =
          users &&
          users.reduce(
            (last, user: { email: string }) => user.email === email,
            false
          );
        if (isRegistered) {
          setErrorMsg("User already registered!");
          return;
        }

        if (confirm !== pass) {
          setErrorMsg("This password doesn't match!!!");
          return;
        }
        setErrorMsg("");
        localStorage.setItem(
          "@spider-world-users",
          JSON.stringify([...users, { name, email, date, pass }])
        );
        localStorage.setItem(
          "@spider-world-login",
          JSON.stringify({ name, email, isLogged: true })
        );
        setName("");
        setDate("");
        setPass("");
        setEmail("");
        setConfirm("");
        navigate("/community");
      }}
    >
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        className="p-1 rounded my-2 text-black-100"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <label htmlFor="nasc">Birth Day</label>
      <input
        type="date"
        name="nasc"
        id="nasc"
        className="p-1 rounded my-2 text-black-100"
        value={date.split("T")[0]}
        onChange={({ target }) => setDate(target.value)}
      />
      <label htmlFor="cad-email">E-mail: </label>
      <input
        type="email"
        name="cad-email"
        id="cad-email"
        className="p-1 rounded my-2 text-black-100"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <label htmlFor="cad-password">Password: </label>
      <input
        type="password"
        name="cad-password"
        id="cad-password"
        className="p-1 rounded my-2 text-black-100"
        value={pass}
        onChange={({ target }) => setPass(target.value)}
      />
      <label htmlFor="confirm">Confirm Password: </label>
      <input
        type="password"
        name="confirm"
        id="confirm"
        className="p-1 rounded my-2 text-black-100"
        value={confirm}
        onChange={({ target }) => {
          setConfirm(target.value);
          if (target.value !== pass) {
            setErrorMsg("This password doesn't match!!");
          } else setErrorMsg("");
        }}
      />
      {errorMsg && <p className="text-white text-[1.1rem]">{errorMsg}</p>}
      <hr />
      <button type="submit" className="bg-dark-red my-2 py-2 rounded-md ">
        Login
      </button>
    </form>
  );
};

export default FormSign;
