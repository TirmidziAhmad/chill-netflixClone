function Logo({ logo = "Logo.png" }) {
  return (
    <figure className="flex items-center justify-center ">
      <img className="object-contain w-40" src={logo} alt="logo" />
    </figure>
  );
}

export default Logo;
