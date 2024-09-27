function Logo({ logo = "Logo.png" }) {
  return (
    <figure className="flex items-center justify-center">
      <img src={logo} alt="logo" />
    </figure>
  );
}

export default Logo;
