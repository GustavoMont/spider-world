import { SpideyContent } from "../Types/SpideyContent";

export interface Action {
  type: "ALL_INFO";
  info: SpideyContent;
}

export function InfoReducer(state: SpideyContent, action: Action) {
  switch (action.type) {
    case "ALL_INFO":
      return action.info;
    default:
      return state;
  }
}
