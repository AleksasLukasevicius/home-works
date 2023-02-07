import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Add } from "./Add";
import { Home } from "./Home";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/home">Home</Link>
        <Link to="/add">Add order</Link>
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<h1>Ops! Where is my favoritre page</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
