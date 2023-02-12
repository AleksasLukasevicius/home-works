import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { PetList } from "../PetList/PetList";
import { Medications } from "../Medications/Medications";
import { Error } from "../Error";
import { Home } from "../Home";
import { Logo } from "../Logo/Logo";
import { Logs } from "../Logs/Logs";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <Logo />
        </Link>
        <nav>
          <Link to="/pets">Pets</Link>
          <Link to="/meds">Medications</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/meds" element={<Medications />} />
        <Route path="/logs/:id" element={<Logs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
