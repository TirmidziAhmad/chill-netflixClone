import PropTypes from "prop-types";

function Button({ children, style = "first", type = "button", ...props }) {
  const styles = {
    first: "bg-blue-800 hover:bg-blue-600 ",
    second: "bg-gray-800 hover:bg-gray-400 ",
    third: "bg-gray-500 hover:bg-red-800 ",
    fourth: "bg-red-500 hover:bg-red-800 ",
    fifth: "bg-transparent border",
  };

  return (
    <button
      type={type}
      {...props}
      className={`flex px-4 py-2 rounded-2xl text-white text-sm font-medium items-center justify-center ${props.className} ${styles[style]} ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={props.disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOf(["first", "second", "third", "fourth"]),
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
