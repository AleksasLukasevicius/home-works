import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { VisitCount } from "./VisitCount";

export const MainRouter = (props: any) => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="*">Something</Link>
      </header>

      {props.children}

      <VisitCount />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>Kažkas ne taip</p>} />
      </Routes>
    </BrowserRouter>
  );
};
