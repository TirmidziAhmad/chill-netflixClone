import ListFooter from "../atomic/ListFooter";

function FooterHelp() {
  const genreItems = {
    title: "Help",
    subtitles: ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"],
  };
  return <ListFooter title={genreItems.title} subtitles={genreItems.subtitles} />;
}

export default FooterHelp;
