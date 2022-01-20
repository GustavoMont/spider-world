import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { PostContext } from "../Context/PostContext";
import { SpideyContext } from "../Context/SpideyContentCtx";
import PostType from "../Types/PostType";

const FormPost = () => {
  const { comics } = useContext(SpideyContext);
  const { name } = useContext(AuthContext);
  const { posts, setPosts } = useContext(PostContext);
  const [comic, setComic] = useState("");
  const [text, setText] = useState("");
  const [anonimous, setAnonimous] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    if (posts.length !== 0) {
      localStorage.setItem("@spider-world-posts", JSON.stringify(posts));
    }
  }, [posts]);
  return (
    <div>
      <form
        className="flex flex-col text-black-100 dark:text-white"
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
            name: anonimous ? undefined : name,
            comic,
            text,
          };
          if (setPosts) {
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
