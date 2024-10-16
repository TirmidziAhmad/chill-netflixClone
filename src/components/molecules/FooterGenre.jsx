import ListFooter from "../atomic/ListFooter";

function FooterGenre() {
  const genreItems = {
    title: "Genre",
    subtitles: ["Aksi", "Anak-anak", "Anime", "Britania", "Drama", "Fantasi Ilmiah & Fantasi", "Kejahatan", "KDrama", "Komedi", "Petualangan", "Perang", "Romantis", "Sains & Alam", "Thriller"],
  };
  return <ListFooter title={genreItems.title} subtitles={genreItems.subtitles} />;
}

export default FooterGenre;
