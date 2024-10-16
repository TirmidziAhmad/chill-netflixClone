import { Link } from "react-router-dom";

function FooterSection({ title, subtitles }) {
  return (
    <div className="flex flex-col">
      {/* Display the title */}
      <h3 className="font-bold mb-2">{title}</h3>
      {/* List of subtitles, arranged into two columns */}
      <ul className="grid grid-rows-4 grid-flow-col gap-y-2 gap-x-16">
        {subtitles.map((subtitle, index) => (
          <li key={index}>
            <Link to={`/${subtitle.toLowerCase()}`} className="hover:underline">
              {subtitle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterSection;
