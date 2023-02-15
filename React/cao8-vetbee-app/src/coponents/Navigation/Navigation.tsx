import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { PetList } from "../PetList/PetList";
import { MedicationsTable } from "../Medications/MedicationsTable";
import { Error } from "../Error";
import { Home } from "../Home";
import { Logo } from "../Logo/Logo";
import { Logs } from "../Logs/Logs";
import { AddPetForm } from "../PetList/AddPetForm";
import { AddMedications } from "../Medications/AddMedications";
import { useContext } from "react";
import { ProductsContext } from "../ProductsContext/ProductsContext";

export const Navigation = () => {
  const products = useContext(ProductsContext);
  console.info({ products });
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
        <Route path="/add-pet" element={<AddPetForm />} />
        <Route path="/meds" element={<MedicationsTable />} />
        <Route path="/add-meds" element={<AddMedications />} />
        <Route path="/logs/:id" element={<Logs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>
        <p>Copyright VeetBee 2023. All rights reserved</p>
      </footer>
    </BrowserRouter>
  );
};
