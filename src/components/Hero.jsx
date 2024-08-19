function HeroSection() {
  return (
    <hero className="relative bg-black text-white h-screen flex flex-col justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://path-to-your-background-image.jpg" // Replace with your image URL
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-start px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Unlimited movies, TV shows, and more.</h1>
        <p className="text-xl md:text-2xl mb-8">Watch anywhere. Cancel anytime.</p>

        <div className="flex flex-col md:flex-row justify-center items-center">
          <input type="email" placeholder="Email address" className="px-4 py-3 text-black w-full md:w-96 mb-4 md:mb-0 md:mr-4 rounded-md" />
          <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-md text-xl font-bold">Get Started</button>
        </div>
      </div>
    </hero>
  );
}

export default HeroSection;
