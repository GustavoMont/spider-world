import React, { useState } from "react";
import { useContext } from "react";
import FormPost from "../Components/FormPost";
import Post from "../Components/Post";
import { PostContext } from "../Context/PostContext";

const Feed = () => {
  const [openModal, setOpenModal] = useState(false); // Administrar o formulário dos posts
  const { posts } = useContext(PostContext); // Posts que estão salvos na base de dados
  return (
    <div className="pt-[15vh] gap-x-2 md:grid md:grid-cols-10 lg:grid-cols-12 grid-rows-[50px_1fr] lg:gap-x-7 lg:justify-items-center px-1 lg:px-8 min-h-screen">
      <h2
        className="text-center text-white text-[1.3rem] col-start-3 col-span-5 row-start-1 row-span-1"
        data-barrier
      >
        What's People think about:
      </h2>
      <div className="post-container bg-white dark:bg-gray p-2 lg:p-8 rounded-lg row-start-2 lg:col-start-2 lg:col-span-7 md:col-start-1 md:col-span-7 w-full h-min">
        {posts.length === 0 ? (
          <h1>Sem publicações</h1>
        ) : (
          posts.map((post, index) => {
            return (
              <Post
                comic={post.comic}
                name={post?.name}
                content={post.text}
                key={index}
              />
            );
          })
        )}
      </div>
      <div
        className={`absolute md:static top-[0] pointer-events-none ${
          openModal ? "opacity-100" : "opacity-0 left-[100vw] "
        } md:opacity-100 h-full left-0 w-full bg-black-70 md:bg-transparent flex items-center md:items-start px-2 md:p-0 z-50 md:z-0 row-start-2 md:col-start-8 md:col-span-4 lg:col-start-9 lg:col-span-4 ease-in duration-500`}
      >
        <div
          className="add-post bg-white dark:bg-gray w-full  
      rounded-t-sm rounded-b-xl p-7 border border-red md:max-h-[400px]"
        >
          <FormPost />
        </div>
      </div>
      <div
        className={`add-btn flex md:hidden items-center justify-center bg-blue dark:bg-white w-[50px] h-[50px] rounded-full 
        text-white dark:text-black-100 fixed z-50 right-5 bottom-9 ease-in duration-300 cursor-pointer
        ${openModal ? "translate-y-[-65vh] rotate-45" : undefined}
        `}
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        <i className="fas fa-plus"></i>
      </div>
    </div>
  );
};

export default Feed;
