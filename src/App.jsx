import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLoginPage from "./pages/AuthLoginPage";
import AuthRegisterPage from "./pages/AuthRegisterPage";
import ListNav from "./components/atomic/ListNav";
import DropDownList from "./components/atomic/ListDropDown";
import CardMovieLabeled from "./components/molecules/CardMovieLabeled";
import CardMovie from "./components/atomic/CardMovie";
import LabelTopTen from "./components/atomic/LabelTopTen";
import LabelNewEpisode from "./components/atomic/LabelNewEpisode";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LabelNewEpisode />} />
        <Route path="/login" element={<AuthLoginPage />} />
        <Route path="/register" element={<AuthRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
