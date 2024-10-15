import ListFooter from "../atomic/ListFooter";

function FooterGenre() {
  const genreItems = {
    title: "Genre",
    subtitles: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Science Fiction", "Thriller", "War", "Western"],
  };
  return <ListFooter title={genreItems.title} subtitles={genreItems.subtitles} />;
}

export default FooterGenre;
