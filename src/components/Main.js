import "../styles/main.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Main(methods) {
  const pageTransition = methods.pageTransition;
  const pageVariants = methods.pageVariants;
  const setCurrentPage = methods.setCurrentPage.setCurrentPage;
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
  return (
    <motion.div
      className="main"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="main-text">
        <div className="top">
          <h1>Hi,</h1>
          <p>
            I am Aakash Kathait&#x1F47D;, <br /> an enthusiastic fullstack
            developer.
          </p>
          <p>
            I like making things on internet look pretty and perform better.
          </p>
        </div>
        <div className="bottom">
          <p>Check out my projects here.</p>
          <Link
            className="contact-button"
            onClick={() => setCurrentPage("/projects")}
            to={"/projects"}
          >
            Click Here 🖱
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Main;
