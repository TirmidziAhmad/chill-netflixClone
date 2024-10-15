function Logo({ logo = "Logo.png", className }) {
  return (
    <figure className={className}>
      <img className="object-contain w-40" src={logo} alt="logo" />
    </figure>
  );
}

export default Logo;
