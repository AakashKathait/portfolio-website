import "../styles/projects.css";
import weatherAppImg from "../assets/project-images/WeatherApp.png";
import hopAndCoImg from "../assets/project-images/HopAndCo.png";
import ticTacToeImg from "../assets/project-images/TicTacToe.png";
import blogAppImg from "../assets/project-images/BlogApp.png";
import studentListImg from "../assets/project-images/StudentList.png";
import WordScramblerImg from "../assets/project-images/WordScrambler.png";
import { motion } from "framer-motion";
import Project from "./Project";
import { useEffect } from "react";

function Projects(methods) {
  const pageTransition = methods.pageTransition;
  const pageVariants = methods.pageVariants;
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const projects = [
    {
      name: "Blog App",
      img: blogAppImg,
      link: "https://arrayblogapp.herokuapp.com/",
      description:
        "A fullstack Blog application with REST APIs, authentication, and cloud database storage",
    },
    {
      name: "Student Grades List",
      img: studentListImg,
      link: "https://aakashkathait.github.io/students-list-app/",
      description:
        "Fetches student data from API and displays on the screen. Can also add tags to students and search them by their names or tags",
    },
    {
      name: "Tic-Tac-Toe",
      img: ticTacToeImg,
      link: "https://aakashkathait.github.io/Tic-Tac-Toe/",
      description:
        "Game of Tic-Tac-Toe where you can play vs computer or vs another player (when playing against computer, you can choose either easy mode (the easier one) or the hard mode which is impossible to beat ).",
    },
    {
      name: "Word Scrambler Game",
      img: WordScramblerImg,
      link: "https://aakashkathait.github.io/word-scrambler-game/",
      description:
        "Game where a scrambeled sentence is displayed and you have to guess it, guessing 10 sentences wins you the game. *Not Responsive to mobile layout*",
    },
    {
      name: "Hop and Co",
      img: hopAndCoImg,
      link: "https://hopandco.ca/",
      description: "A catering website",
    },

    {
      name: "Weather App",
      img: weatherAppImg,
      link: "https://aakashkathait.github.io/Weather-app/",
      description:
        "Weather application that uses weather and image API to get the weather and image of searched or current location",
    },
  ];

  return (
    <motion.div
      className="projects-container"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="heading">
        <h1>Projects</h1>
      </div>
      <div className="project-card-container">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              name={project.name}
              img={project.img}
              link={project.link}
              description={project.description}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
