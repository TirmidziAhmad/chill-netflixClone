import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-black text-white flex items-center justify-between p-4 h-24 space-x-8">
        <div className="flex items-center space-x-8">
          {" "}
          <Link to="/" className="flex items-center justify-center w-24 h-11">
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
      </header>
    </>
  );
}

export default Header;
