import AuthButton from "../molecules/AuthButton";
import AuthLoginForm from "../molecules/AuthLoginForm";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../atomic/Logo";
import { useState } from "react";
import useAuthStore from "../../store/AuthStore";

function AuthLoginCard() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoginSuccessful = login(userName, password);
    if (isLoginSuccessful) {
      navigate("/");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Google login clicked");
    // Note: You might need to add a new action in your AuthStore for Google login
  };

  return (
    <div className={`bg-black bg-opacity-70 px-5 py-8 w-80 md:w-96 justify-center items-center rounded-lg`}>
      <Logo className={"flex items-center justify-center"} />
      <div className="text-center">
        <p className="">Masuk</p>
        <p>Selamat Datang Kembali</p>
      </div>

      <AuthLoginForm userName={userName} password={password} setUserName={setUserName} setPassword={setPassword} onSubmit={handleSubmit} />

      <div className="flex justify-between mt-4">
        <span>
          Belum punya akun? <Link to="/register">Daftar</Link>
        </span>
        <span>
          <Link to="/forgot-password">Lupa kata sandi?</Link>
        </span>
      </div>

      <AuthButton firstButton="login" secondButton="login" onClickFirstButton={handleSubmit} onClickSecondButton={handleGoogleLogin} />
    </div>
  );
}

export default AuthLoginCard;
