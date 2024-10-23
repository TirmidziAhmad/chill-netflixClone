function PremiumBenefit() {
  const benefits = [
    { icon: "download.png", text: "Download Konten Pilihan" },
    { icon: "noAds.png", text: "Tidak Ada iklan" },
    { icon: "movie.png", text: "Tonton Semua Konten" },
    { icon: "4k.png", text: "Kualitas Maksimal Sampai Dengan 4K" },
    { icon: "responsive.png", text: "Tonton di Tv, Tablet, Mobile, dan Laptop" },
    { icon: "subtitle.png", text: "Subtitle Untuk Konten Pilihan" },
  ];
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 mdgrid-rows-3 md:gap-8">
      {benefits.map((benefit, index) => (
        <div className="flex flex-col items-center" key={index}>
          <img src={benefit.icon} alt="benefit" />
          <p>{benefit.text}</p>
        </div>
      ))}
    </div>
  );
}

export default PremiumBenefit;
