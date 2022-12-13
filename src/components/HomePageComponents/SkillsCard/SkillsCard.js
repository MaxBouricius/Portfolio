import "./SkillsCard.css";
const SkillsCard = (props) =>{
    return(
        <article className="skills__card">
            <i id="icon" className={props.IconClass}></i>
            <p>{props.Time}</p>
        </article>
    )
}

export default SkillsCard;