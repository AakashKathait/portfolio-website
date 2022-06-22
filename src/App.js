import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const [showNav, setShowNav] = useState(true);
  const [currentPage, setCurrentPage] = useState("");
  const baseURL = process.env.PUBLIC_URL;
  console.log(baseURL)
  //show and hide navbar on scroll
  let lastScroll = window.scrollY;
  window.addEventListener("scroll", () => {
    if (window.scrollY < 50) {
      setShowNav(true);
    } else if (lastScroll < window.scrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    lastScroll = window.scrollY + 20;
  });
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav">
          <Navbar
            showNav={showNav}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </nav>
        <div className="background-container">
          <div className="background">
            <div className="back-nav">
              <div className="box red"></div>
              <div className="box yellow"></div>
              <div className="box green"></div>
            </div>
            <div className="body">
              <AnimatedRoutes setCurrentPage={setCurrentPage} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;