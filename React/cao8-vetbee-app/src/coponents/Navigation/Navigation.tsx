import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { PetList } from "../PetList/PetList";
import { Medications } from "../Medications/GetMedicationsTable";
import { Error } from "../Error";
import { Home } from "../Home";
import { Logo } from "../Logo/Logo";
import { Logs } from "../Logs/Logs";
import { AddPet } from "../PetList/AddPet";
import { AddMedications } from "../Medications/AddMedications";

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
        <Route path="/add-pet" element={<AddPet />} />
        <Route path="/meds" element={<Medications />} />
        <Route path="/add-meds" element={<AddMedications />} />
        <Route path="/logs/:id" element={<Logs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer contentEditable>
        <p>Copyright VeetBee 2023. All rights reserved</p>
      </footer>
    </BrowserRouter>
  );
};
