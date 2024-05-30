import Banner from "./Banner/page";
import Nav from "./Nav";

function Header() {
  return (
    <header className="bg-black text-white">
      <Nav />
      <Banner />
    </header>
  );
}

export default Header;
