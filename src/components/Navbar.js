import "../styles/navbar.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import githubImg from "../assets/github copy.svg";
import instaImg from "../assets/instagram.svg";
import linkedinImg from "../assets/linkedin.svg";

function Navbar({ showNav, currentPage, setCurrentPage }) {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  function handleChange(e) {
    const page = e.target.id;
    setCurrentPage(page);
    setToggleNavbar(false);
  }
  const location = useLocation()
  useEffect(() => {
    setCurrentPage(location.pathname)
  }, [])
  return (
    <div className={showNav ? "navbar-container" : "hide navbar-container"}>
      <div className="navbar">
        <div className="logo">DEV</div>
        <div
          className={toggleNavbar ? "hamburger toggle" : "hamburger"}
          onClick={() => {
            setToggleNavbar((oldState) => !oldState);
          }}
        >
          <div className="line first-line"></div>
          <div className="line second-line"></div>
        </div>
        <div className="links">
          <ul style={{ top: toggleNavbar ? "0" : "-100vh" }}>
            <li
              style={{
                animation: toggleNavbar
                  ? `navLink-fade 0.5s ease forwards ${1 / 7 + 0.3}s`
                  : "",
              }}
            >
              <Link
                className={currentPage === "/" ? "active" : "nav-link"}
                id="/"
                onClick={handleChange}
                to="/"
              >
                Home
              </Link>
            </li>
            <li
              style={{
                animation: toggleNavbar
                  ? `navLink-fade 0.5s ease forwards ${2 / 7 + 0.3}s`
                  : "",
              }}
            >
              <Link
                className={currentPage === "/about" ? "active" : "nav-link"}
                id="/about"
                onClick={handleChange}
                to="/about"
              >
                About
              </Link>
            </li>
            <li
              style={{
                animation: toggleNavbar
                  ? `navLink-fade 0.5s ease forwards ${3 / 7 + 0.3}s`
                  : "",
              }}
            >
              <Link
                className={currentPage === "/projects" ? "active" : "nav-link"}
                id="/projects"
                onClick={handleChange}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li
              style={{
                animation: toggleNavbar
                  ? `navLink-fade 0.5s ease forwards ${4 / 7 + 0.3}s`
                  : "",
              }}
            >
              <Link
                className={currentPage === "/contact" ? "active" : "nav-link"}
                id="/contact"
                onClick={handleChange}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="socials-container">
          <span>
            <a
              style={{
                opacity: toggleNavbar ? "1" : "0",
                animation: toggleNavbar
                  ? `socials-fade-out 0.5s ease forwards ${1 / 7}s`
                  : `socials-fade-in 0.5s ease forwards ${1 / 7}s`,
              }}
              href="https://github.com/AakashKathait"
              target="_blank"
              rel="noreferrer" 
            >
              <img className="socials" src={githubImg} />
            </a>
            <a
              style={{
                opacity: toggleNavbar ? "1" : "0",
                animation: toggleNavbar
                  ? `socials-fade-out 0.5s ease forwards ${2 / 7}s`
                  : `socials-fade-in 0.5s ease forwards ${2 / 7}s`,
              }}
              href="https://www.instagram.com/aakash_kathait_/?hl=en"
              target="_blank"
              rel="noreferrer" 
            >
              <img className="socials" src={instaImg} />
            </a>
            <a
              style={{
                opacity: toggleNavbar ? "1" : "0",
                animation: toggleNavbar
                  ? `socials-fade-out 0.5s ease forwards ${3 / 7}s`
                  : `socials-fade-in 0.5s ease forwards ${3 / 7}s`,
              }}
              href="https://www.linkedin.com/in/aakash-kathait-4863851a7"
              target="_blank"
              rel="noreferrer" 
            >
              <img className="socials" src={linkedinImg} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
