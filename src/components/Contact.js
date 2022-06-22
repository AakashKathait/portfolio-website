import "../styles/contact.css";
import githubImg from "../assets/github.svg";
import instaImg from "../assets/instagram.svg";
import linkedinImg from "../assets/linkedin.svg";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Contact(methods) {
  const pageTransition = methods.pageTransition;
  const pageVariants = methods.pageVariants;
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <motion.div
      className="contact-container"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="contact-info">
        <h1 className="heading">Contact Me</h1>
        <span>
          <h3>Email:</h3> aakashkathait01@gmail.com
        </span>
        <span>
          <h3>Phone:</h3> 778-883-5262
        </span>
        <span>
          <a
            href="https://github.com/AakashKathait"
            target="_blank"
            rel="noreferrer"
          >
            <img className="svg" src={githubImg} />
          </a>
          <a
            href="https://www.instagram.com/aakash_kathait_/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <img className="svg" src={instaImg} />
          </a>
          <a
            href="https://www.linkedin.com/in/aakash-kathait-4863851a7"
            target="_blank"
            rel="noreferrer"
          >
            <img className="svg" src={linkedinImg} />
          </a>
        </span>
      </div>
      <h1 className="heading">Leave me a message</h1>
      <form
        action="https://formsubmit.co/aakashkathait02@gmail.com"
        method="POST"
        className="contact-form"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_subject"
          value="Message from Portfolio website"
        />
        <input type="hidden" name="_template" value="basic" />
        <input
          type="hidden"
          name="_next"
          value="https://webcoords.com/thankyou"
        />
        <label htmlFor="name">Name*</label>
        <input required id="name" name="name" type={"text"} />
        <label htmlFor="email">Email*</label>
        <input required id="email" name="email" type={"email"} />
        <label htmlFor="message">Message*</label>
        <input required id="message" name="message" type={"text"} />
        <div className="button-container">
          <button type="submit">Send</button>
        </div>
      </form>
    </motion.div>
  );
}

export default Contact;
