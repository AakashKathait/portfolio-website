import "../styles/main.css";
import bgImage from "../assets/cesar-couto-sKuVjm0xyLY-unsplash.jpg";

function BackgroundImg() {
  return (
    <div
      className="main-background"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

export default BackgroundImg;
