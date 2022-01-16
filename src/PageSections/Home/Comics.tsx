import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import generateAuth from "../../utils/handleEndPoints";

const baseUrl =
  "https://gateway.marvel.com/v1/public/characters/1009610/comics";

interface SpideyComic {
  id: number;
  title: string;
  textObject: [
    {
      type: string;
      language: string;
      text: string;
    }
  ];
  prices: [
    {
      type: string;
      price: number;
    }
  ];
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Comics: React.FC = () => {
  const [comics, setComics] = useState<[SpideyComic]>();
  useEffect(() => {
    (async () => {
      const req = await fetch(`${baseUrl}${generateAuth()}`);
      const comics = await req.json();
      setComics(comics.data.results);
    })();
  }, []);
  if (!comics) {
    return <Loader />;
  }
  return (
    <div
      className="flex flex-col w-[90%] mx-auto justify-around items-center"
      id="app"
    >
      {comics.map((comic, index) => (
        <div
          className="comic w-[90%] h-[60vh] border border-white max-w-[800px] my-1"
          key={comic.id}
          data-aos={`fade-${index % 2 === 0 ? "left" : "right"}`}
        >
          <div
            className="thumbnail w-full h-[100%] bg-container"
            style={{
              backgroundImage: `url(${comic?.thumbnail.path}/detail.${comic?.thumbnail.extension})`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Comics;
