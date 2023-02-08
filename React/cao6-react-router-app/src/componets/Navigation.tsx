import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Add } from "./Add";
import { Home } from "./Home";
import { Error } from "./Error";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <header className={styles.header}>
        <Link to="/home">Home</Link>
        <Link to="/add">Add order</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
