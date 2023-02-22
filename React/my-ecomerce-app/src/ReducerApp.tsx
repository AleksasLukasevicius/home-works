import { useReducer } from "react";
import { OrangeButton, WhiteButton } from "./componets/Button/Button.styled";
import type { TActionType } from "./types/TActionType";
import { studentsReducer } from "./utils/studentsReducer";

export const App = () => {
  const [state, dispatch] = useReducer(studentsReducer, {
    studentsAmount: 100,
  });

  // const AddStudent = () => {
  //   dispatch({ type: "ADD_STUDENT" });
  // };

  const RemoveStudent = () => {
    dispatch({ type: "REMOVE_STUDENT" });
  };

  const modifyStudent = (type: TActionType) => {
    dispatch({ type });
  };

  return (
    <div className="App">
      <h1>Reducer App</h1>
      <h2>Studentu skaičius: {state?.studentsAmount}</h2>
      <OrangeButton
        onClick={() => {
          modifyStudent("ADD_STUDENT");
        }}
      >
        Add Student
      </OrangeButton>
      <WhiteButton onClick={RemoveStudent}>Remove Student</WhiteButton>
    </div>
  );
};
