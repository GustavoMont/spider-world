import React from "react";

interface PostType {
  name?: string;
  comic: string;
  content: string;
}

const Post = ({ name, comic, content }: PostType) => {
  return (
    <div className="post bg-blue p-2 md:p-5 lg:w-[90%] md:w-full rounded-md text-white mx-auto mb-2">
      <div className="post-header flex items-center py-2">
        <div
          className="profile-pic w-[50px] h-[50px] lg:w-[80px] border lg:h-[80px] rounded-full bg-cover overflow-hidden"
          style={{
            backgroundImage:
              "url(https://iconape.com/wp-content/png_logo_vector/spider-man-comic-new-logo.png",
          }}
        >
          <div className="fade w-full h-full bg-black-80 flex items-center justify-center">
            <span className="text-[2rem] font-[700]">{name?.[0] || "?"}</span>
          </div>
        </div>
        <div className="text ml-2 md:ml-3 border text-[.8rem] whitespace-pre-wrap w-[70%]">
          <div className="name">{name || "Someone"} said it about:</div>
          <div className="comic-name text-[.7rem]">{comic}</div>
        </div>
      </div>
      <hr />
      <div className="post-content pl-11 flex items-center min-h-[5rem]">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
