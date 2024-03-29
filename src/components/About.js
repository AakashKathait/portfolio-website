import "../styles/about.css";
import self from "../assets/character 18.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

function About(methods) {
  const pageTransition = methods.pageTransition;
  const pageVariants = methods.pageVariants;
  const setCurrentPage = methods.setCurrentPage.setCurrentPage;
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
  return (
    <motion.div
      className="about-container"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="about">
        <div className="img-container">
          <img src={self} />
        </div>
        <h1>How I got into this and more...</h1>
        <br />
        <p>
          Hi again, here I'll tell a little more about myself, how I got into
          coding and my future plans.
          <br />
          <br />
          I am a self-taught developer originally from India but currently
          living in Vancouver, Canada.
          <br />
          <br />
          I would describe myself as a curious person who tries to see things
          without a bias and like to hear other people's perspectives on things.
          Although I'm not the guy who would start a conversation, but I do love
          it when I get to talk to new people and hear their ideas, and since
          I'm not too outgoing I fulfil this desire of consuming new and
          thought-provoking dialogue through podcasts like the JRE&#x1f410; or
          StarTalk&#127756;.I also like learning new things and mastering them
          to the best of my ability, and that's how got into coding.
          <br />
          <br />
          <b>
            <i>How I got into coding...</i>
          </b>
          <br />
          <br />
          2 years ago, I wasn't sure what I wanted to do with my career, and I
          was studying something that I wasn't interested in. At that time I was
          also living with a friend who was working as a software developer and
          he suggested that I should try coding. I listened to him and began my
          research before I start learning.
          <br />
          <br />
          In the beginning, I had questions like:
          <br />
          <i>
            'Is it possible to get a developer job without any formal education
            in CS.'
          </i>
          <br />
          and although many people on the internet say that you can get a job
          without any formal education, now that I am looking for one I realize
          how hard it is (but not impossible).
          <br />
          and at that time I was convinced by my research that I can get a job
          if I just get good enough (which is true).
          <br />
          So I began learning,
          <br />
          <br />
          Before that, I had never even thought about how the Internet works or
          how websites were made and learning all that was so mind-blowing to me
          that I never stopped, since then I've been learning and making cool
          stuff to improving my skills. I always thought that it was really cool
          to be able to code (thanks to movies like "The Social Network") but
          after practicing it for so many hours and realizing how powerful it
          is, I have developed genuine respect and love for the job.
          <br />
          <br />
          Other than that, I plan to get into the tech industry to be a part of
          something cool and have a job that I love.
          <br />
          <br />
          for my personal interests, I like learning stuff from Youtube like
          music theory on my guitar, solving rubix cubes and what not, I'm also
          a big gaming nerd (RDR2- my all time fav), and I love listening to
          music and hope to be a part time musician one day. (leave some song
          recommendations in{" "}
          <Link
            className="inline-contact"
            to={"/contact"}
            onClick={() => setCurrentPage("/contact")}
          >
            contact section
          </Link>
          )
        </p>
      </div>
    </motion.div>
  );
}

export default About;
