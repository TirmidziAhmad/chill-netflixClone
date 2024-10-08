import React, { useState } from "react";

function AccordionFooter({ sections }) {
  // State to track which section is open
  const [openSection, setOpenSection] = useState(null);

  // Toggle section visibility
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <footer className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sections.map((section, index) => (
          <AccordionSection key={index} title={section.title} subtitles={section.subtitles} isOpen={openSection === index} onToggle={() => toggleSection(index)} />
        ))}
      </div>
    </footer>
  );
}

function AccordionSection({ title, subtitles, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 pb-2">
      {/* Accordion Header */}
      <button className="w-full text-left font-semibold py-2 text-black hover:text-gray-700 flex justify-between" onClick={onToggle}>
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>

      {/* Subtitles */}
      <ul className={`mt-2 space-y-1 ${isOpen ? "block" : "hidden"} md:block`}>
        {subtitles.map((subtitle, index) => (
          <li key={index} className="text-gray-600">
            {subtitle}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccordionFooter;
