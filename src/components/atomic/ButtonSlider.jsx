function ButtonSlider({ onClick, direction }) {
  const icons = {
    next: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      ),
      style: "right-0 -mr-4", // Style for next button
    },
    prev: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      ),
      style: "left-0 -ml-4", // Style for prev button
    },
  };

  return (
    <button onClick={onClick} className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 p-2 rounded-full transition duration-300 ease-in-out hover:bg-gray-600 ${icons[direction].style}`}>
      {icons[direction].icon} {/* Render the correct icon based on the direction */}
    </button>
  );
}

export default ButtonSlider;
