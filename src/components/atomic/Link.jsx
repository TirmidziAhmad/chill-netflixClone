import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ to, children, className }) {
  return (
    <Link to={to} className={`px-4 py-2 text-white ${className}`}>
      {children}
    </Link>
  );
}

export default LinkButton;
