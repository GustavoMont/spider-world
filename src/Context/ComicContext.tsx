import React, { createContext, useState, useEffect } from "react";
import { SpideyContent } from "../Types/SpideyComics";

import generateAuth from "../utils/handleEndPoints";

const baseUrl =
  "https://gateway.marvel.com/v1/public/characters/1009610/comics";

export const ComicsContext = createContext<SpideyContent[]>([]);

export const ComicsProvider: React.FC = ({ children }) => {
  const [comics, setComics] = useState<SpideyContent[]>([]);
  useEffect(() => {
    (async () => {
      const req = await fetch(`${baseUrl}${generateAuth()}`);
      const comics = await req.json();
      setComics(comics.data.results);
    })();
  }, []);
  return (
    <ComicsContext.Provider value={comics}>{children}</ComicsContext.Provider>
  );
};
