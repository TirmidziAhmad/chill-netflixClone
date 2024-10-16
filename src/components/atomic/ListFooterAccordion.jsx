import { useState } from "react";
import ListFooter from "../atomic/ListFooter";

function FooterGenreAccordion() {
  // State to manage which accordion section is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Array of sections with titles and subtitles
  const genreItems = [
    { title: "Genre", subtitles: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Science Fiction", "Thriller", "War", "Western"] },
    { title: "Help", subtitles: ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"] },
  ];

  // Toggle specific section
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active state for clicked section
  };

  return (
    <div className="mt-10">
      {/* Render each item in genreItems as its own accordion section */}
      {genreItems.map((item, index) => (
        <div key={index} className="mb-4">
          {/* Accordion button */}
          <button className="flex w-full justify-between items-center " onClick={() => handleToggle(index)}>
            <div className="font-bold">{item.title}</div>
            <div>
              {/* Arrow icon direction changes based on active section */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? "rotate-90" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </button>

          {/* Accordion content: only render when section is active */}
          {activeIndex === index && (
            <div className="accordion-content mt-2">
              <ListFooter subtitles={item.subtitles} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FooterGenreAccordion;
