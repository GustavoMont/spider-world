import React, { createContext, useState, useEffect, useReducer } from "react";
import { Action, InfoReducer } from "../Reducers/InfoReducers";
import { SpideyContent } from "../Types/SpideyContent";

import generateAuth from "../utils/handleEndPoints";

const baseUrl = "https://gateway.marvel.com/v1/public/characters/1009610";

interface ContextType {
  comics: SpideyContent[] | null;
  state: SpideyContent;
  dispatch: React.Dispatch<Action>;
}

export const SpideyContext = createContext<ContextType>({
  comics: null,
  state: { id: 1, title: "INITIAL" },
  dispatch: () => null,
});

export const SpideyProvider: React.FC = ({ children }) => {
  const [comics, setComics] = useState<SpideyContent[]>([]);
  const [state, dispatch] = useReducer(InfoReducer, {
    id: 1,
    title: "INITIAL",
  });

  useEffect(() => {
    (async () => {
      const reqComics = await fetch(`${baseUrl}/comics${generateAuth()}`);
      const comics = await reqComics.json();
      setComics(comics.data.results);
    })();
  }, []);
  return (
    <SpideyContext.Provider value={{ comics, state, dispatch }}>
      {children}
    </SpideyContext.Provider>
  );
};
