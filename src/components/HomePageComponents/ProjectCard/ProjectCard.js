import "./ProjectCard.css";
const ProjectCard = ({ CoverImage, ImageText }) => {
    return (
        <section className="ProjectCard"> 
            <img className="ProjectCard__image" src={CoverImage} alt="" />
            <p className="ProjectCard__imageText">{ImageText}</p>
        </section>
    )
}
export default ProjectCard;