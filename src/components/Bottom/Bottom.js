import "./Bottom.css";
import ProjectCard from "../ProjectCard/ProjectCard"
import { useState } from "react";
import Popup from "../Popup/Popup";
const Bottom = () => {
    const [projectIndex, setProjectIndex] = useState(0);
    const [popupState, setPopupState] = useState(false);
    const projects = [
        {
            ImageText: "CPP-Calculator",
            CoverImage: "https://cdn.discordapp.com/attachments/472832654602010634/1036609020812865536/unknown.png"
        },
        {
            ImageText: "Project IK",
            CoverImage: "https://cdn.discordapp.com/attachments/472832654602010634/1036609093516939274/IKproject.png"
        },
        {
            ImageText: "Project Input Output",
            CoverImage: "https://cdn.discordapp.com/attachments/472832654602010634/1036609102656327730/IOproject.png"
        },

    ]
    return (
        <>
            {popupState ? <Popup popup={projects[projectIndex]} setter={setPopupState} /> : null}
            <section className="bottom">
                <h2 className="bottom__h2">Projects</h2>
                <hr className="bottom__hr" />
                <div className="bottom__projects">
                    {projects.map((project, index) => {
                        return (
                            <div onClick={() => { setProjectIndex(index); setPopupState(true) }}>
                                <ProjectCard ImageText={project.ImageText} CoverImage={project.CoverImage} />
                            </div>
                        )
                    })}
                </div>

            </section>
        </>
    )
}
export default Bottom;