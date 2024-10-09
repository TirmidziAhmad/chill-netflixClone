import React from "react";

function SectionHero() {
  return (
    <section className="relative bg-cover bg-center h-[50vh] sm:h-[70vh] lg:h-[80vh] xl:h-[600px]" style="background-image: url()">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative p-6 sm:p-12 xl:pt-64 mx-auto">
        <p>text</p>
      </div>
    </section>
  );
}

export default SectionHero;
