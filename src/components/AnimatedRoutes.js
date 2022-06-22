import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Main from "./Main";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Thankyou from "./Thankyou";

function AnimateRoutes(setCurrentPage) {
  const location = useLocation();
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8,
  };

  const pageVariants = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "-20vh",
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          path="about"
          element={
            <About
              pageTransition={pageTransition}
              pageVariants={pageVariants}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="projects"
          element={
            <Projects
              pageTransition={pageTransition}
              pageVariants={pageVariants}
            />
          }
        />
        <Route
          path="contact"
          element={
            <Contact
              pageTransition={pageTransition}
              pageVariants={pageVariants}
            />
          }
        />
        <Route
          path="thankyou"
          element={
            <Thankyou
              pageTransition={pageTransition}
              pageVariants={pageVariants}
            />
          }
        />
        <Route
          path="/"
          element={
            <Main
              pageTransition={pageTransition}
              pageVariants={pageVariants}
              setCurrentPage={setCurrentPage}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimateRoutes;
