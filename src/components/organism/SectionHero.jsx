import Button from "../atomic/Button";

function SectionHero({ image, title, desc }) {
  return (
    <section className="relative bg-cover bg-center h-[50vh] sm:h-[70vh] lg:h-[80vh] xl:h-[600px]" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="relative p-6 sm:p-12 xl:pt-64 mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
          <h1 className="mt-4 text-gray-300">{desc}</h1>
          <div className="mt-6 flex items-center space-x-4">
            <Button style="first">Mulai</Button>
            <Button style="second">Selengkapnya</Button>
            <div className=" bg-gray-300 rounded-full p-2">18+</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
