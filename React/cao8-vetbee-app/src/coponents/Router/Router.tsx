import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { PetList } from "../PetList/PetList";
import { MedicationsTable } from "../Medications/MedicationsTable";
import { Error } from "../pages/Error";
import { Home } from "../pages/Home";
import { Logo } from "../Logo/Logo";
import { Logs } from "../Logs/Logs";
import { AddPetForm } from "../PetList/AddPetForm";
import { AddMedicationForm } from "../Medications/AddMedicationForm";
import { useContext } from "react";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import { AddLogForm } from "../Logs/AddLogForm";
import { AddPrescriptionForm } from "../Prescription/AddPrescriptionForm";

export const Router = () => {
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
        <Route path="/add-meds" element={<AddMedicationForm />} />
        <Route path="/logs/:id" element={<Logs />} />
        <Route path="/add-log/" element={<AddLogForm />} />
        <Route path="/add-prescription" element={<AddPrescriptionForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>
        <p>Copyright © VeetBee 2023. All rights reserved</p>
      </footer>
    </BrowserRouter>
  );
};
