function Button({ children, onClick, style = "first" }) {
  const styles = {
    first: "bg-blue-800 hover:bg-blue-600 ",
    second: "bg-gray-800 hover:bg-gray-400 ",
    third: "bg-gray-500 hover:bg-red-800 ",
    fourth: "bg-transparent border ",
  };
  return (
    <button onClick={onClick} className={`flex flex-col px-4 py-2 rounded-2xl text-white text-sm font-medium text-center ${styles[style]}`}>
      {children}
    </button>
  );
}
export default Button;
