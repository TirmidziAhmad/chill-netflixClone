import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="  bg-black text-white  p-4 h-24 space-x-8 ">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8 ">
            {/* Logo for Large Screens */}
            <figure className="flex flex-grow items-center justify-center">
              <Link to="/" className="w-24 h-11 items-center justify-center hidden md:block">
                <img src="large-logo.png" alt="Large Logo" className="w-full h-full object-contain" />
              </Link>
            </figure>

            {/* Logo for Small Screens */}
            <figure className="flex flex-grow items-center justify-center">
              <Link to="/" className="w-16 h-8 items-center justify-center block md:hidden">
                <img src="small-logo.png" alt="Small Logo" className="w-full h-full object-contain" />
              </Link>
            </figure>
            <Link to="/" className="flex items-center justify-center w-24 h-11 md:block">
              <img src="Logo.png" alt="logo" className="" />
            </Link>
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
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
