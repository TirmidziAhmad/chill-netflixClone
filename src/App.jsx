import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLoginPage from "./pages/AuthLoginPage";
import AuthRegisterPage from "./pages/AuthRegisterPage";
import NavBar from "./components/organism/NavBar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/register" element={<AuthRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
