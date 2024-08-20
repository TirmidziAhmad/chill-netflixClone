import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Continue() {
  // Sample data for films
  const films = [
    { id: 1, title: "Film One", rating: 9.2, poster: "bgMasuk.jpeg" },
    { id: 2, title: "Film Two", rating: 8.7, poster: "bgMasuk.jpeg" },
    { id: 3, title: "Film Three", rating: 9.5, poster: "bgMasuk.jpeg" },
    { id: 4, title: "Film Four", rating: 8.9, poster: "bgMasuk.jpeg" },
    { id: 5, title: "Film Five", rating: 9.3, poster: "bgMasuk.jpeg" },
    { id: 6, title: "Film Six", rating: 8.6, poster: "bgMasuk.jpeg" },
    // Add more films as needed
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at once
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
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Melanjutkan Tonton Film</h2>
        <Slider {...settings}>
          {films.map((film) => (
            <div key={film.id} className="p-2">
              <div className="relative">
                <img src={film.poster} alt={film.title} className="w-full h-48 object-cover rounded-md" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-2 flex justify-between items-center">
                  <h3 className="text-sm font-semibold">{film.title}</h3>
                  <span className="text-yellow-400 text-sm font-bold">{film.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Continue;
