function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto items-center justify-between flex">
        {/* Logo and Copyright Section */}
        <div className="flex flex-col justify-center w-1/3">
          <img src="Logo.png" alt="Logo" className="w-52" />
          <p>@2023 Chill All Rights Reserved.</p>
        </div>

        {/* Genre and Help Sections */}
        <div className="flex justify-around flex-grow ">
          {/* Genre Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold ">Genre</h3>
            <ul className="flex gap-5">
              <div className="flex flex-col">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Aksi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Anak-anak
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Anime
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Britania
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Drama
                  </a>
                </li>
              </div>
              <div className="flex flex-col">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Fantasi Ilmiah & Fantasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Kejahatan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    KDrama
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Komedi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Petualangan
                  </a>
                </li>
              </div>
              <div className="flex flex-col">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Perang
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Romantis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Sains & Alam
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Thriller
                  </a>
                </li>
              </div>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-bold  ">Bantuan</h3>
            <ul className="flex-col ">
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Kontak Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
