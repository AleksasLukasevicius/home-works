import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Sveiki</p>} />
      </Routes>
    </BrowserRouter>
  );
};
