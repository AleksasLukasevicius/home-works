import { useReducer } from "react";
import { TActionType } from "../types/TActionType";

export const studentsReducer = (
  state: { studentsAmount: number },
  action: {
    type: TActionType;
  }
) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        studentsAmount: state.studentsAmount + 1,
      };
    case "REMOVE_STUDENT":
      return {
        studentsAmount: state.studentsAmount - 1,
      };
    default:
      return { studentsAmount: state.studentsAmount };
  }

  // if (action.type === "ADD_STUDENT") {
  //   return {
  //     studentsAmount: state.studentsAmount + 1,
  //   };
  // }
  // if (action.type === "REMOVE_STUDENT") {
  //   return {
  //     studentsAmount: state.studentsAmount - 1,
  //   };
  // }
  // // throw Error("Action type not found");
  // return { studentsAmount: state.studentsAmount };
};
