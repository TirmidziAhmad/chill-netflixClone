import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopRatingSlider() {
  // Sample data for films
  const films = [
    { id: 1, title: "Film One", rating: 9.2, poster: "moviePotrait.png" },
    { id: 2, title: "Film Two", rating: 8.7, poster: "moviePotrait.png" },
    { id: 3, title: "Film Three", rating: 9.5, poster: "moviePotrait.png" },
    { id: 4, title: "Film Four", rating: 8.9, poster: "moviePotrait.png" },
    { id: 5, title: "Film Five", rating: 9.3, poster: "moviePotrait.png" },
    { id: 6, title: "Film Six", rating: 8.6, poster: "moviePotrait.png" },
    // Add more films as needed
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Rilis Baru</h2>
        <Slider {...settings}>
          {films.map((film) => (
            <div key={film.id} className="p-2">
              <div className="relative">
                <div className="w-full h-96 overflow-hidden rounded-md flex items-center justify-center">
                  <img src={film.poster} alt={film.title} className="h-full object-cover" />
                </div>
                <div className="absolute top-0 left-0  bg-opacity-75 p-2 ">
                  <p className="bg-blue-800 px-2 py-1 rounded-2xl">Episode Baru</p>
                </div>
                <div className="absolute top-0 right-1 bg-red-700 p-2 flex justify-between items-center rounded text-center">
                  <h3 className="text-sm font-semibold">
                    Top <br /> 10
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TopRatingSlider;
