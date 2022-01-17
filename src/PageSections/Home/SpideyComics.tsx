import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import { ComicsContext } from "../../Context/ComicContext";

const Comics: React.FC = () => {
  const comics = useContext(ComicsContext);
  if (!comics || comics.length === 0) {
    return <Loader />;
  }
  return (
    <section className="relative">
      <h2 className="text-white text-[2rem] px-3 text-center">Comics</h2>
      <div className="container border-2 w-[90vw] mx-auto border-white rounded-bl-none rounded-br-none border-b-transparent rounded-lg bg-black-70 overflow-hidden h-[370vh]">
        <div
          className="flex flex-col w-[90%] mx-auto justify-around items-center"
          id="app"
        >
          {comics.map((item, index) => (
            <div
              className="comic rounded-md w-[90%] h-[60vh] border-4 border-dark-red dark:border-white max-w-[800px] my-1"
              key={item?.id}
              data-aos={`fade-${index % 2 === 0 ? "left" : "right"}`}
            >
              <div
                className="thumbnail w-full h-[100%] bg-container"
                style={{
                  backgroundImage: `url(${item?.thumbnail.path}/detail.${item?.thumbnail.extension})`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <Link
        to={"/comics"}
        className="bg-blue block text-center uppercase py-3 mb-5 rounded-lg border rounded-tl-none rounded-tr-none border-white dark:bg-black-80 font-[400] text-white w-[90vw] mx-auto"
      >
        Ver todos
      </Link>
    </section>
  );
};

export default Comics;
