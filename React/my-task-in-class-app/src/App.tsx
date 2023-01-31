import React from "react";
import "./App.css";
import { NewStudentForm } from "./components/NewStudentForm";
import { PostItem } from "./components/PostItem";

function App() {
  return (
    <div className="App">
      <NewStudentForm />

      <PostItem post={{ id: 1, title: "Javascript", body: "Description" }} />
      <PostItem post={{ id: 2, title: "Javascript", body: "Description" }} />
      <PostItem post={{ id: 3, title: "Javascript", body: "Description" }} />
      <PostItem post={{ id: 4, title: "Javascript", body: "Description" }} />
    </div>
  );
}

export default App;
