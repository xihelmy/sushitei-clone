import NavBottom from "./NavBottom";
import NavTop from "./NavTop";

export default function Nav() {
  return (
    <nav className="w-full items-center uppercase">
      <div className="container">
        <NavTop />
        <NavBottom />
      </div>
    </nav>
  );
}
