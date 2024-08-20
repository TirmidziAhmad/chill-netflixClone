function HeroSection() {
  return (
    <section className="relative bg-black text-white h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="bgMasuk.jpeg" // Replace with your image URL
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto z-10 px-6 md:px-12">
        <div className="flex flex-col text-start w-full md:w-2/3 ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Duty After School</h1>
          <p className="mb-8">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
          </p>

          <div className="flex flex-row gap-4">
            <button className="bg-blue-900 hover:bg-red-700 px-8 py-3 rounded-3xl text-xl font-bold">Mulai</button>
            <button className="bg-gray-800 hover:bg-red-700 px-8 py-3 rounded-3xl text-xl font-bold flex justify-center items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              Selengkapnya
            </button>
            <p className="flex px-3 py-1 rounded-3xl text-xl font-bold justify-center items-center border">18+</p>
          </div>
        </div>
        <div className="md:w-1/3"></div>
      </div>
    </section>
  );
}

export default HeroSection;
