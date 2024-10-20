import { Link } from "react-router-dom";

function ButtonLink({ children, style = "first", ...props }) {
  const styles = {
    first: "bg-blue-800 hover:bg-blue-600 ",
    second: "bg-gray-800 hover:bg-gray-400 ",
    // Add more styles here
  };

  return (
    <Link className={`flex px-4 py-2 rounded-2xl text-white text-sm font-medium items-center justify-center ${styles[style]} ${props.className}`} {...props}>
      {children}
    </Link>
  );
}

export default ButtonLink;
