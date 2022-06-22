import logo from "../../assets/star_wars_logo.png";
function Header() {
  // position absolute fixed
  return (
    <header className="bg-black">
      <div>
        <img src={logo} alt="starwars logo" style={{ width: "250px" }} />
      </div>
      <input placeholder="Search 🔎" />
    </header>
  );
}
export default Header;
