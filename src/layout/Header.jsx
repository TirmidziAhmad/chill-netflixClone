import { Link } from "react-router-dom";
import { useState } from "react";
function Header() {
  // State to track if the options list is visible
  const [showOptions, setShowOptions] = useState(false);

  // Toggle the visibility of the options list
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  return (
    <>
      <header className=" bg-black text-white  p-4 h-24 space-x-8 ">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8 ">
            {/* Logo for Large Screens */}
            <figure className="flex flex-grow items-center justify-center">
              <Link to="/" className="w-24 h-11 items-center justify-center hidden md:block">
                <img src="Logo.png" alt="Large Logo" className="w-full h-full object-contain" />
              </Link>
            </figure>

            {/* Logo for Small Screens */}
            <figure className="flex flex-grow items-center justify-center">
              <Link to="/" className="w-16 h-8 items-center justify-center block md:hidden">
                <img src="LogoMobile.png" alt="Small Logo" className="w-full h-full object-contain" />
              </Link>
            </figure>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <a href="/">Series</a>
                </li>
                <li>
                  <a href="/about">Film</a>
                </li>
                <li>
                  <a href="/services">Daftar Saya</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex space-x-8">
            <div className="relative flex gap-3">
              <img src="proofile.png" alt="" />
              <button onClick={toggleOptions}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {showOptions && (
                <ul className="absolute top-full right-0 mt-2 bg-black shadow-lg rounded-md w-48 z-10">
                  <li className="px-4 py-2 hover:text-blue-600  cursor-pointer flex gap-2">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    Profile Saya
                  </li>
                  <li className="px-4 py-2 hover:text-blue-600  cursor-pointer flex gap-2">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    Ubah Premium
                  </li>
                  <li className="px-4 py-2 hover:text-blue-600  cursor-pointer flex gap-2">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                    </svg>
                    Keluar
                  </li>
                </ul>
              )}
              {/* <Link to="/Masuk">Login</Link>
            <Link to="/Daftar">Register</Link> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
