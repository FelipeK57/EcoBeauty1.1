import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"} className="flex items-center">
      <img className="size-14 mr-3" src="./logo.svg" alt="Logo" />
      <span className="hidden lg:block font-semibold text-lg text-[#4A5630]">ECO</span>
      <span className="hidden lg:block font-light text-lg text-[#022C22]">BEAUTY</span>
    </Link>
  );
}

export default Logo;
