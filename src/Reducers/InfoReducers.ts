import { SpideyContent } from "../Types/SpideyContent";

export interface Action {
  type: "ALL_INFO";
  info: SpideyContent;
} // Ele lida com as informações dos quadrinhos que serão vistas na sua página

export function InfoReducer(state: SpideyContent, action: Action) {
  switch (action.type) {
    case "ALL_INFO":
      return action.info;
    default:
      return state;
  }
}
