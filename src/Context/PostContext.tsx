import React, { createContext, useState } from "react";
import { useEffect } from "react";
import PostType from "../Types/PostType";

interface PostContextType {
  posts: PostType[];
  setPosts?: React.Dispatch<React.SetStateAction<PostType[]>>;
}

const PostContext = createContext<PostContextType>({
  posts: [{ comic: "INITIAL", text: "INITIAL" }],
});

function PostProvider({ children }: { children: JSX.Element }) {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    const database = localStorage.getItem("@spider-world-posts") || "";
    const posts = database ? JSON.parse(database) : [];

    setPosts(posts);
  }, []);
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
}

export { PostContext, PostProvider };
