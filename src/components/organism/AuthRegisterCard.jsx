import AuthButton from "../molecules/AuthButton";
import AuthRegisterForm from "../molecules/AuthRegisterForm";
import { Link } from "react-router-dom";
import Logo from "../atomic/Logo";

function AuthRegisterCard({}) {
  return (
    <div className={`bg-black bg-opacity-70 px-5 py-8 w-80 md:w-96 justify-center items-center rounded-lg`}>
      <Logo />
      <div className="text-center">
        <p className="">Daftar</p>
        <p>Selamat Datang</p>
      </div>
      <AuthRegisterForm />
      <div className="flex justify-between">
        <span>
          Sudah punya akun? <Link to="/login">Masuk</Link>
        </span>
      </div>
      <AuthButton firstButton="register" secondButton="register" />
    </div>
  );
}
export default AuthRegisterCard;
