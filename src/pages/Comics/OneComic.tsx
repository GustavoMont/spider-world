/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import { SpideyContext } from "../../Context/SpideyContentCtx";
import { useParams } from "react-router-dom";

const OneComic = () => {
  const { state, comics } = useContext(SpideyContext);
  const { id } = useParams();

  const info =
    state.id === 1
      ? comics?.filter((item) => item.id === Number(id))[0]
      : state;

  if (!info) {
    return <Loader />;
  }

  return (
    <div
      className="bg-white dark:bg-gray font-[700] rounded-md drop-shadow-md text-dark-red dark:text-white ease-in duration-300 w-[85vw] mx-auto my-3 py-5 grid grid-cols-5 grid-row-4 md:grid-cols-2 md:items-center max-w-[760px]"
      data-barrier
    >
      <div className="title text-center py-1 col-span-3 col-start-2 md:col-span-1 md:col-start-1 ">
        <h2>{info?.title}</h2>
      </div>
      <hr className="w-[90%] mx-auto col-span-5 my-1 row-start-2 md:col-span-1 md:w-[95%]" />
      <div className="thumbnail relative col-span-3 col-start-2  row-start-3 row-end-4 w-full mx-auto border-2 h-[17rem] md:col-span-1 md:col-start-1 md:w-[60%] md:h-[19rem]">
        <div
          className="image-container w-full h-full"
          style={{
            backgroundImage: `url(${info?.thumbnail?.path}/portrait_incredible.${info?.thumbnail?.extension})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="price text-white absolute align-middle top-[-6px] rotate-12 right-[-15px] bg-green px-2 py-1 rounded-lg">
          <p>{"$" + info?.prices?.[0].price}</p>
        </div>
      </div>
      <hr className="w-[90%] mx-auto col-span-5 my-2 row-start-4 md:hidden" />
      <div className="discription text-center row-start-5 col-start-1 col-span-5 px-10 md:px-4 md:col-span-1 md:col-start-2 md:row-start-3 md:text-left justify-self-center">
        <p>{info?.textObjects?.[0]?.text || "Description Not available"}</p>
      </div>
    </div>
  );
};

export default OneComic;
