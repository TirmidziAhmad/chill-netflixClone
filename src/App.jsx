import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Masuk from "./pages/Masuk";
import Daftar from "./pages/Daftar";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Masuk" element={<Masuk />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
