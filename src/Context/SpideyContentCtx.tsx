import React, { createContext, useState, useEffect, useReducer } from "react";
import { Action, InfoReducer } from "../Reducers/InfoReducers";
import { SpideyContent } from "../Types/SpideyContent";

import generateAuth from "../utils/handleEndPoints";

const baseUrl = "https://gateway.marvel.com/v1/public/characters/1009610";

interface ContextType {
  comics: SpideyContent[] | null; // Comics é um array de objetos SpideyContent
  state: SpideyContent; // State é simplesmente o Objeto Spidey Context, it is from reducer
  dispatch: React.Dispatch<Action>; // dispatch é o que vem pleo reducer
}

export const SpideyContext = createContext<ContextType>({
  comics: null,
  state: { id: 1, title: "INITIAL" },
  dispatch: () => null,
}); // Valor inicial

export const SpideyProvider: React.FC = ({ children }) => {
  const [comics, setComics] = useState<SpideyContent[]>([]); // Estado inicial
  const [state, dispatch] = useReducer(InfoReducer, {
    id: 1,
    title: "INITIAL",
  }); // Iniciando o reducer

  useEffect(() => {
    (async () => {
      const reqComics = await fetch(`${baseUrl}/comics${generateAuth()}`);
      const comics = await reqComics.json();
      setComics(comics.data.results);
    })(); // Assim que a página carrega ele faz a requisi~]ao e manda a resposta pra o comics
  }, []);
  return (
    <SpideyContext.Provider value={{ comics, state, dispatch }}>
      {/*Passando os valores para o provider */}
      {children}
    </SpideyContext.Provider>
  );
};
