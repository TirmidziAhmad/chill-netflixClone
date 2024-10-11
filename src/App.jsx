import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLoginPage from "./pages/AuthLoginPage";
import AuthRegisterPage from "./pages/AuthRegisterPage";
import HomePage from "./pages/HomePage";
import HomePageTemplate from "./components/templates/HomePageTemplate";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageTemplate />} />
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/register" element={<AuthRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
