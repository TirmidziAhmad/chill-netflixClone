import { useState } from "react";
import { Link } from "react-router-dom";
function Daftar() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="bg-[url('assets/bg/bgDaftar.jpeg')] h-screen bg-cover bg-center">
        <div className="flex items-center h-screen bg-black bg-opacity-40">
          <div className="mx-auto bg-black bg-opacity-60 p-4 rounded-md text-white text-center space-y-4 w-11/12 max-w-md">
            <img className="mx-auto" src="/Logo.png" alt="logo" />

            <p>Daftar</p>
            <p className="text-center">Selamat datang kembali!</p>
            <form className="flex flex-col text-start space-y-4" action="" method="post">
              <div>
                <label htmlFor="username">Username</label>
                <input className="rounded-2xl px-3 py-1 bg-transparent border border-white w-full" type="text" id="username" placeholder="Daftarkan username" />
              </div>
              <div className="relative">
                <label htmlFor="password">Kata Sandi</label>
                <input className="rounded-2xl px-3 py-1 bg-transparent border border-white w-full pr-10" type={showPassword ? "text" : "password"} id="password" placeholder="Daftarkan kata sandi" />
                <button type="button" className="absolute inset-y-0 right-4 top-5 flex items-center scroll-px-3" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s3-7 11-7 11 7 11 7-3 7-11 7S1 12 1 12z" />
                      <path d="M12 12c1.08 0 2.07-.59 2.74-1.5L5.26 6.26C6.03 5.59 7.02 5 8.1 5c2.38 0 4.57 1.19 6.5 3 1.77 1.63 2.79 3.68 2.89 5.5-1.09 1.04-2.34 1.78-3.85 2.24L12 12z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s3-7 11-7 11 7 11 7-3 7-11 7S1 12 1 12z" />
                      <path d="M12 12c-1.08 0-2.07.59-2.74 1.5L18.74 17.74C17.97 18.41 16.98 19 15.9 19c-2.38 0-4.57-1.19-6.5-3-1.77-1.63-2.79-3.68-2.89-5.5 1.09-1.04 2.34-1.78 3.85-2.24L12 12z" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="relative">
                <label htmlFor="password">Kata Sandi</label>
                <input className="rounded-2xl px-3 py-1 bg-transparent border border-white w-full pr-10" type={showPassword ? "text" : "password"} id="password" placeholder="Daftarkan kata sandi" />
                <button type="button" className="absolute inset-y-0 right-4 top-5 flex items-center scroll-px-3" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s3-7 11-7 11 7 11 7-3 7-11 7S1 12 1 12z" />
                      <path d="M12 12c1.08 0 2.07-.59 2.74-1.5L5.26 6.26C6.03 5.59 7.02 5 8.1 5c2.38 0 4.57 1.19 6.5 3 1.77 1.63 2.79 3.68 2.89 5.5-1.09 1.04-2.34 1.78-3.85 2.24L12 12z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s3-7 11-7 11 7 11 7-3 7-11 7S1 12 1 12z" />
                      <path d="M12 12c-1.08 0-2.07.59-2.74 1.5L18.74 17.74C17.97 18.41 16.98 19 15.9 19c-2.38 0-4.57-1.19-6.5-3-1.77-1.63-2.79-3.68-2.89-5.5 1.09-1.04 2.34-1.78 3.85-2.24L12 12z" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
            <div className="flex justify-between">
              <div className="flex text-start">
                <p>
                  Sudah punya akun? <Link to="/masuk">Masuk</Link>
                </p>
              </div>
              <button>Lupa kata sandi?</button>
            </div>
            <div className="flex justify-center">
              <button className="flex justify-center w-full border px-3 py-1 bg-white bg-opacity-25 border-white rounded-xl">Daftar</button>
            </div>
            <p className="text-center">Atau</p>
            <div className="flex justify-center">
              <button className="flex w-full justify-center border px-3 py-1 border-white rounded-xl">
                <svg className="w-4 h-4 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#4285F4" d="M45.09 24.54c0-1.61-.14-3.15-.39-4.64H24v9.14h11.88c-.51 2.72-1.97 5.02-3.96 6.55v5.44h6.39c3.74-3.45 5.88-8.52 5.88-14.49z" />
                  <path fill="#34A853" d="M24 48c6.3 0 11.57-2.09 15.42-5.67l-7.38-5.74c-2.04 1.37-4.65 2.17-8.04 2.17-6.18 0-11.42-4.17-13.29-9.75H3.02v6.14C6.8 43.17 14.77 48 24 48z" />
                  <path fill="#FBBC05" d="M10.71 28.1c-.56-1.65-.88-3.4-.88-5.1s.32-3.45.88-5.1v-6.15H3.02C1.11 15.55 0 19.64 0 24s1.11 8.45 3.02 12.25l7.69-6.15z" />
                  <path fill="#EA4335" d="M24 9.44c3.36 0 6.37 1.16 8.74 3.42l6.5-6.5C34.53 2.45 29.86 0 24 0 14.77 0 6.8 4.83 3.02 12.25l7.69 6.15C12.58 13.61 17.82 9.44 24 9.44z" />
                </svg>
                <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Daftar;
