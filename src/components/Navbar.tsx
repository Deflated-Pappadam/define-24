import { useEffect, useState } from "react";
import Logo from "../assets/hash_logo.svg";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const size = useWindowSize();
  useEffect(() => {
    setNavOpen(false);
  }, [size]);

  return (
    <nav className="absolute left-0 top-[60px] w-full bg-transparent">
      <div className="flex h-[90px] items-center justify-between overflow-hidden  px-5">
        <img className="md:hidden" src={Logo} alt="logo" />
        <div
          style={{
            flexDirection: `${navOpen ? "column" : "row"}`,
            backgroundColor: `${navOpen ? "#051a25" : "transparent"}`,
            color: `${navOpen ? "#faffe7" : "#051a25"}`,
            display: `${navOpen || size.width! >= 768 ? "flex" : "none"}`,
            position: `${navOpen ? "absolute" : "relative"}`,
            top: `${navOpen ? "80px" : "initial"}`,
            left: `${navOpen ? "0px" : "initial"}`,
            zIndex: "100",
          }}
          className="relative w-full items-center justify-around font-semibold"
        >
          <a
            className=" transition-all duration-300 hover:font-black hover:text-pink"
            href="#home"
          >
            home
          </a>
          <a
            className=" transition-all duration-300 hover:font-black hover:text-pink"
            href="#about"
          >
            about
          </a>
          <a
            className=" transition-all duration-300 hover:font-black hover:text-pink"
            href="#theme"
          >
            theme
          </a>
          <img className="hidden md:block" src={Logo} alt="logo" />
          <a
            className=" transition-all duration-300 hover:font-black hover:text-pink"
            href="#prizes"
          >
            prizes
          </a>
          <a
            className=" transition-all duration-300 hover:font-black hover:text-pink"
            href="#sponsors"
          >
            sponsors
          </a>
          <a
            className=" transition-all duration-300 hover:font-black hover:text-pink"
            href="#gallery"
          >
            gallery
          </a>
        </div>
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="visible md:hidden"
        >
          {navOpen ? "X" : "="}
        </button>
      </div>
    </nav>
  );
}
