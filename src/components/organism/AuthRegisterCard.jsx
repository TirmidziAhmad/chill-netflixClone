import AuthButton from "../molecules/AuthButton";
import AuthRegisterForm from "../molecules/AuthRegisterForm";
import { Link } from "react-router-dom";
import Logo from "../atomic/Logo";
import { useState } from "react";
import useAuthStore from "../../store/AuthStore";
import { useNavigate } from "react-router-dom";
function AuthRegisterCard() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const register = useAuthStore((state) => state.register);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      register({ username: userName, password: password });
      navigate("/login");
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <div className={`bg-black bg-opacity-70 px-5 py-8 w-80 md:w-96 justify-center items-center rounded-lg`}>
      <Logo className={"flex items-center justify-center"} />
      <div className="text-center">
        <p className="">Daftar</p>
        <p>Selamat Datang</p>
      </div>
      <AuthRegisterForm userName={userName} password={password} confirmPassword={confirmPassword} setUserName={setUserName} setPassword={setPassword} setConfirmPassword={setConfirmPassword} onSubmit={handleSubmit} />
      <div className="flex justify-between">
        <span>
          Sudah punya akun? <Link to="/login">Masuk</Link>
        </span>
      </div>
      <AuthButton firstButton="register" secondButton="register" onClickFirstButton={handleSubmit} />
    </div>
  );
}
export default AuthRegisterCard;
