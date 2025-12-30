import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { IoMenu, IoClose } from "react-icons/io5";
import scrollToTop from "../components/scrollToTop";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); // Hook to get the current location
  const [activePage, setActivePage] = useState(location.pathname);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      // const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc =
    location.pathname === "/exegesis" ||
    location.pathname === "/exegesis/gospelofchrist"
      ? "https://d14n4fsapeewqj.cloudfront.net/temp/ogbbilogo.webp"
      : "https://d14n4fsapeewqj.cloudfront.net/temp/bbilogo.webp";
  const menuColour =
    location.pathname === "/exegesis" ||
    location.pathname === "/exegesis/gospelofchrist"
      ? "og-color"
      : "https://d14n4fsapeewqj.cloudfront.net/temp/bbilogo.webp";

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link to="/" onClick={scrollToTop}>
          <img
            className={`header-logo ${scrolled ? "scrolled" : ""}`}
            src={logoSrc}
            alt="BBI Logo"
          />
        </Link>
      </div>
      <div className="desktop-menu">
        <ul className="menuop">
          {" "}
          <li>
            <Link className="menu-item" to="/" onClick={scrollToTop}>
              Home
            </Link>
          </li>{" "}
          <li>
            <Link className="menu-item" to="/about" onClick={scrollToTop}>
              About us
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/exegesis" onClick={scrollToTop}>
              Biblical Exegesis
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/contact" onClick={scrollToTop}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={`alt-menu ${scrolled ? "scrolled" : ""}`}>
        <span className="menu-icons" onClick={toggleDropdown}>
          {isDropdownVisible ? (
            <IoClose className="close-icon" />
          ) : (
            <IoMenu className={`menu-icon ${scrolled ? "scrolled" : ""}`} />
          )}
        </span>
      </div>
      <div
        className={`alt-menu-dropdown ${isDropdownVisible ? "show" : "hiding"}`}
      >
        <div className="menuop">
          <div>
            <Link
              className="menu-it"
              to="/"
              onClick={() => {
                toggleDropdown();
                scrollToTop();
              }}
            >
              Home
            </Link>
          </div>{" "}
          <div>
            <Link
              className="menu-it"
              to="/about"
              onClick={() => {
                toggleDropdown();
                scrollToTop();
              }}
            >
              About us
            </Link>
          </div>
          <div>
            <Link
              className="menu-it"
              to="/exegesis"
              onClick={() => {
                toggleDropdown();
                scrollToTop();
              }}
            >
              Biblical Exegesis
            </Link>
          </div>
          <div>
            <Link
              className="menu-it"
              to="/contact"
              onClick={() => {
                toggleDropdown();
                scrollToTop();
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
