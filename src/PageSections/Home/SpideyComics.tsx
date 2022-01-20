import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader";
import { SpideyContext } from "../../Context/SpideyContentCtx";

function handleTitle(title: string) {
  if (title.length > 25) {
    return title.slice(0, 25) + "...";
  }
  return title;
}

interface ComicsComponent {
  height: string | null;
}

const Comics = ({ height }: ComicsComponent) => {
  // Altura máxima da seção
  const { comics, dispatch } = useContext(SpideyContext);
  const navegate = useNavigate();
  if (!comics || comics.length === 0) {
    // Enquanto não tiver quadrinhos renderia o Loader
    return <Loader />;
  }
  return (
    <section className="relative">
      <h2 className="text-white text-[2rem] px-3 text-center" data-barrier>
        Comics
      </h2>
      <div
        className={`container border-2 w-[90vw] mx-auto ${
          height && "rounded-bl-none rounded-br-none border-b-transparent"
        } rounded-lg bg-black-70 overflow-hidden ${height}`}
      >
        <div
          className="flex flex-col md:flex-row md:flex-wrap w-[90%] mx-auto justify-around  items-center"
          id="app"
        >
          {comics.map((item, index) => (
            <div
              data-aos={`flip-${index % 2 === 0 ? "left" : "right"}`}
              data-aos-easing="ease"
              data-aos-duration="1500"
              className="my-8 mx-auto w-[90%] md:w-[30%] lg:w-1/5 lg:mx-5 cursor-pointer"
              key={item?.id}
            >
              <h2 className="text-white text-center mb-2  ">
                {handleTitle(item.title)}
              </h2>
              <div
                className={`comic rounded-md w-full h-[60vh] md:h-[18rem] lg:h-[23rem] lg border-4 ease-in duration-300 border-dark-red dark:border-white max-w-[800px] cursor-pointer hover:scale-125`}
                onClick={() => {
                  dispatch({ type: "ALL_INFO", info: item }); // Passa as informações do quadrinho pro estado
                  navegate(`/comics/${item.id}`);
                }}
              >
                <div
                  className="thumbnail w-full h-[100%] bg-container"
                  style={{
                    backgroundImage: `url(${item.thumbnail?.path}/detail.${item.thumbnail?.extension})`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {height && (
        <Link
          to={"/comics"}
          className="bg-blue hover:bg-white block text-center ease-in-out duration-500 uppercase py-3 mb-5 rounded-lg border rounded-tl-none rounded-tr-none border-white dark:bg-black-80 dark:hover:bg-white font-[400] text-white hover:text-blue dark:hover:text-black-100 w-[90vw] mx-auto"
        >
          Ver todos
        </Link>
      )}
    </section>
  );
};

export default Comics;
