import "./ProjectCard.css";
const ProjectCard = ({ projects }) => {
    return (
        <section className="ProjectCard"> 
            <img className="ProjectCard__image" src={projects.Image} alt="image" />
            <p className="ProjectCard__imageText">{projects.ImageText}</p>
        </section>
    )
}
export default ProjectCard;