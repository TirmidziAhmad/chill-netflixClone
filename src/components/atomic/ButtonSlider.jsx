function ButtonSlider({ onClick, direction }) {
  const icons = {
    next: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      ),
      style: "right-0 -mr-4", // Style for next button
    },
    prev: {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
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
