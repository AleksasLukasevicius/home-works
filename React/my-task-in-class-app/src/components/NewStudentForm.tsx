import React from "react";
import { useState } from "react";
import axios from "axios";

export const NewStudentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState<null | number>(null);
  // const [newStudent, setNewStudent] = useState<any[]>([]);

  const handleStudentSubmit: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();

    axios
      .post("localhost:5001/create-student", {
        firstName,
        lastName,
        age,
      })
      .then((result: any) => console.info(result))
      .catch((error: any) => console.error(error));
  };

  console.info({ firstName, lastName, age });

  return (
    <form onSubmit={handleStudentSubmit} method="post">
      <input
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
        name=""
        id=""
      />
      <input
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        name=""
        id=""
      />
      <input
        value={age ?? ""}
        onChange={(event) => {
          setAge(+event.target.value);
        }}
        type="number"
        name=""
        id=""
      />

      <button>Add</button>
    </form>
  );
};
