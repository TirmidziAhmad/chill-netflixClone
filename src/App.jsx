import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLoginPage from "./pages/AuthLoginPage";
import AuthRegisterPage from "./pages/AuthRegisterPage";
import NavList from "./components/atomic/NavList";
import DropDownList from "./components/atomic/DropDownList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DropDownList />} />
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/register" element={<AuthRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
