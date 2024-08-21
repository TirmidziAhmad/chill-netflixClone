import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Continue() {
  // Sample data for films
  const films = [
    { id: 1, title: "Film One", rating: 9.2, poster: "movie.png" },
    { id: 2, title: "Film Two", rating: 8.7, poster: "movie.png" },
    { id: 3, title: "Film Three", rating: 9.5, poster: "movie.png" },
    { id: 4, title: "Film Four", rating: 8.9, poster: "movie.png" },
    { id: 5, title: "Film Five", rating: 9.3, poster: "movie.png" },
    { id: 6, title: "Film Six", rating: 8.6, poster: "movie.png" },
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
                <div className="absolute top-0 left-0  bg-opacity-75 p-2 ">
                  <p className="bg-blue-800 px-2 py-1 rounded-2xl">Episode Baru</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t form-black bg-opacity-75 p-2 flex justify-between items-center">
                  <h3 className="text-sm font-semibold">{film.title}</h3>
                  <span className="text-white text-sm font-bold flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 flex">
                      <path
                        className="fill-white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    {film.rating}/5
                  </span>
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
