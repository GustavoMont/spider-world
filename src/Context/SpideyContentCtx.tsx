import React, { createContext, useState, useEffect } from "react";
import { SpideyContent } from "../Types/SpideyContent";

import generateAuth from "../utils/handleEndPoints";

const baseUrl = "https://gateway.marvel.com/v1/public/characters/1009610";

interface SpideyContextType {
  comics: SpideyContent[];
  series: SpideyContent[];
}

export const SpideyContext = createContext<Partial<SpideyContextType>>({});

export const ComicsProvider: React.FC = ({ children }) => {
  const [comics, setComics] = useState<SpideyContent[]>([]);
  const [series, setSeries] = useState<SpideyContent[]>([]);
  useEffect(() => {
    (async () => {
      const reqComics = await fetch(`${baseUrl}/comics${generateAuth()}`);
      const comics = await reqComics.json();
      setComics(comics.data.results);
      const reqSeries = await fetch(`${baseUrl}/series${generateAuth()}`);
      const series = await reqSeries.json();
      setSeries(series.data.results);
    })();
  }, []);
  return (
    <SpideyContext.Provider value={{ comics, series }}>
      {children}
    </SpideyContext.Provider>
  );
};
