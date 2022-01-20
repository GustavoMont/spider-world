import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { PostContext } from "../Context/PostContext";
import { SpideyContext } from "../Context/SpideyContentCtx";
import PostType from "../Types/PostType"; // Tipo criado pra o contexto dos posts mas que auxilia no desenvolvimento

const FormPost = () => {
  const { comics } = useContext(SpideyContext); // Pegando todos os quadrinhos
  const { name } = useContext(AuthContext); // Pegando o nome salvo no contetxo de Authenticação
  const { posts, setPosts } = useContext(PostContext); // Pegando os posts salvos no contexto de Posts
  const [comic, setComic] = useState(""); // Lidar com campo dos quadrinhos
  const [text, setText] = useState(""); // Lidando com o texto do post
  const [anonimous, setAnonimous] = useState(false); // Lidando com o checkbox
  const [errorMsg, setErrorMsg] = useState(""); // Similar ao FormLogin
  useEffect(() => {
    if (posts.length !== 0) {
      // Prevenindo do array vazio inicial sobrescrever os que estão salvos no local storage
      localStorage.setItem("@spider-world-posts", JSON.stringify(posts));
    }
  }, [posts]); // toda vez que os Posts forem atualizados ele vai salvar no localstorage
  return (
    <div>
      <form
        className="flex flex-col text-black-100 dark:text-white pointer-events-auto"
        onSubmit={(e) => {
          e.preventDefault();
          if (!comic) {
            setErrorMsg("You didn't select any comic");
            return;
          }
          if (!text) {
            setErrorMsg("You didn't write anything");
            return;
          }

          const post: PostType = {
            name: anonimous ? undefined : name, // Se for um anônimo o nome fica indefinido
            comic,
            text,
          };
          if (setPosts) {
            // Tendo certeza de que a função não está nula
            setPosts([...posts, post]);
          }
          setComic("");
          setAnonimous(false);
          setText("");
          setErrorMsg("");
        }}
      >
        <label htmlFor="comic">What comic: </label>
        <select
          id="comic"
          value={comic}
          onChange={({ target }) => setComic(target.value)}
          className="dark:bg-black-100"
          aria-flowto="bottom"
        >
          <option value={""} disabled>
            Select one comic
          </option>
          {comics?.map((comic) => (
            <option value={comic.title} key={comic.id}>
              {comic.title}
            </option>
          ))}
        </select>
        <label htmlFor="text">Say it: </label>
        <textarea
          id="text"
          value={text}
          onChange={({ target }) => setText(target.value)}
          className="dark:bg-black-100"
        />
        <label htmlFor="anonimous" className="my-2">
          <input
            type="checkbox"
            name="anonimous"
            id="anonimous"
            checked={anonimous}
            onChange={({ target }) => setAnonimous(target.checked)}
            className="mr-2 cursor-pointer "
          />
          <span className="align-middle">Want to be anonimous</span>
        </label>
        <hr />
        {errorMsg && <p>{errorMsg}</p>}
        <button
          type="submit"
          className="bg-blue dark:bg-black-100 my-2 py-2 rounded-md text-white ease-in duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default FormPost;
