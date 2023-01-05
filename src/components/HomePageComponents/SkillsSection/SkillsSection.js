import "./SkillsSection.css";
import SkillsCard from "../SkillsCard/SkillsCard";
const SkillsSection = () => {
    return (
        <>
            <section className="skills">
                <h2 className="skills__h2">Skills</h2>
                <hr className="bottom__hr" />
                <div className="skills__cards">
                    <SkillsCard Time="6 Maanden" IconClass="fa-brands fa-react" />
                    <SkillsCard Time="2 Jaar" IconClass="fa-brands fa-html5" />
                    <SkillsCard Time="2 Jaar" IconClass="fa-brands fa-css3-alt" />
                    <SkillsCard Time="1 Jaar" IconClass="fa-brands fa-js" />
                    <SkillsCard Time="3 maanden" IconClass="fa-brands fa-php" />
                </div>
            </section>
        </>
    )
}

export default SkillsSection;