import React, { useState } from "react";
import "./App.css";
import { NewStudentForm } from "./components/NewStudentForm";
import { PostList } from "./components/PostList";

function App() {
  const [posts, setPosts] = useState<any[]>([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
  ]);
  return (
    <div className="App">
      <NewStudentForm />

      <PostList posts={posts} />
    </div>
  );
}

export default App;
