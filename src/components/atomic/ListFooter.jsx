function FooterSection({ title, subtitles }) {
  return (
    <div className="flex ">
      <li className="font-bold">{title}</li>
      <ul className="grid grid-rows-5">
        {subtitles.map((subtitle, index) => (
          <li key={index}>{subtitle}</li>
        ))}
      </ul>
    </div>
  );
}
