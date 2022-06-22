function Project({ name, img, link, description }) {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="project-image-container">
          <img src={img} />
        </div>
        <div className="project-name-container">
          <h1 className="project-name">{name}</h1>
          <p className="project-description">{description}</p>
        </div>
      </a>
    </div>
  );
}

export default Project;
