import { Link } from "react-router-dom";
import Logo from "./Logo";

const links = [
  { id: 1, name: "INICIO", url: "/" },
  { id: 2, name: "NOSOTROS", url: "/aboutus" },
  { id: 3, name: "QUIZ", url: "/quiz" },
];

function Navbar() {
  return (
    <header className="flex flex-col lg:flex-row px-4 items-center gap-6 w-full py-4 lg:px-44 xl:px-52">
      <Logo />
      <nav className="flex flex-grow justify-end items-center">
        <ul className="flex gap-10 lg:gap-16">
          {links.map((link) => (
            <li key={link.id}>
              <Link className={`font-semibold text-sm md:text-lg md:px-8 py-3 px-4 ${link.name === "QUIZ" && "bg-accent px-4 text-white rounded-lg"}`} to={link.url}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
