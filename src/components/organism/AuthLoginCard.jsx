import AuthButton from "../molecules/AuthButton";
import AuthLoginForm from "../molecules/AuthLoginForm";
import { Link } from "react-router-dom";
import Logo from "../atomic/Logo";

function AuthLoginCard({}) {
  return (
    <div className={`bg-black bg-opacity-70 px-5 py-8 w-80 md:w-96 justify-center items-center rounded-lg`}>
      <Logo className={"flex items-center justify-center"} />
      <div className="text-center">
        <p className="">Masuk</p>
        <p>Selamat Datang Kembali</p>
      </div>
      <AuthLoginForm />
      <div className="flex justify-between">
        <span>
          Belum punya akun? <Link to="/register">Daftar</Link>
        </span>
        <span>
          <Link to="/register"> Lupa kata sandi?</Link>{" "}
        </span>
      </div>
      <AuthButton firstButton="login" secondButton="login" />
    </div>
  );
}
export default AuthLoginCard;
