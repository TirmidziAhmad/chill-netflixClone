import AuthButton from "../molecules/AuthButton";
import AuthLoginForm from "../molecules/AuthLoginForm";
import Link from "../atomic/Link";
import Logo from "../atomic/Logo";

function AuthLoginCard({}) {
  return (
    <div className={`bg-black bg-opacity-70 px-5 py-8 w-80 md:w-96 justify-center items-center rounded-lg`}>
      <Logo />
      <div className="text-center">
        <p className="">Masuk</p>
        <p>Selamat Datang Kembali</p>
      </div>
      <AuthLoginForm />
      <div className="flex justify-between">
        <span>
          Belum punya akun? <Link to="/Register">Daftar</Link>
        </span>
        <span>
          <Link to="/Register"> Lupa kata sandi?</Link>{" "}
        </span>
      </div>
      <AuthButton firstButton="register" secondButton="Register" />
    </div>
  );
}
export default AuthLoginCard;
