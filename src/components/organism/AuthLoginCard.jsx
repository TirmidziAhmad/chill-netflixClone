import AuthButton from "../molecules/AuthButton";
import AuthLoginForm from "../molecules/AuthLoginForm";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../atomic/Logo";
import { useState } from "react";
import AuthStore from "../../store/AuthStore";
import useFetch from "../../hooks/useFetch";
function AuthLoginCard() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const login = AuthStore((state) => state.login);
  const navigate = useNavigate();
  const { data: users, loading, error } = useFetch("/users");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const UserData = users.find((user) => user.username === userName && user.password === password);
      if (!UserData) {
        alert("Invalid username or password");
      } else {
        login(UserData);
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle error (show error message to user)
    }
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
      <AuthButton firstButton="login" secondButton="login" onClickFirstButton={handleSubmit} onClickSecondButton={handleSubmit} />
    </div>
  );
}

export default AuthLoginCard;
