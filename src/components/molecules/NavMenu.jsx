import LogoResponsive from "../atomic/LogoResponsive";
import ListNav from "../atomic/ListNav";

function NavMenu({}) {
  const navItems = [
    { label: "Series", path: "/" },
    { label: "Film", path: "/login" },
    { label: "Daftar Saya", path: "/register" },
  ];
  return (
    <div className="flex">
      <LogoResponsive />
      <ListNav navItems={navItems} />
    </div>
  );
}

export default NavMenu;
