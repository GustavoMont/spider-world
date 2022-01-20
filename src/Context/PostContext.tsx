import React, { createContext, useState } from "react";
import { useEffect } from "react";
import PostType from "../Types/PostType"; // Tipo do Post

interface PostContextType {
  posts: PostType[];
  setPosts?: React.Dispatch<React.SetStateAction<PostType[]>>; // Tipo retornado pelo useState
}

const PostContext = createContext<PostContextType>({
  posts: [{ comic: "INITIAL", text: "INITIAL" }],
}); // Atribuindo um valor inicial

function PostProvider({ children }: { children: JSX.Element }) {
  const [posts, setPosts] = useState<PostType[]>([]); //O tipo é um array de posts
  useEffect(() => {
    const database = localStorage.getItem("@spider-world-posts") || ""; // Simula o mínimo de uma base de dados
    const posts = database ? JSON.parse(database) : []; // se a base de dados não exista mand um array vazio

    setPosts(posts);
  }, []);
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {/*Passando o estado para o provider */}
      {children}
    </PostContext.Provider>
  );
}

export { PostContext, PostProvider };
