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
            Image: "https://cdn.discordapp.com/attachments/472832654602010634/1036609020812865536/unknown.png",
            popupText: "In this project heb ik geleerd hoe ik een Switch expressie kan gebruiken samen met een Case clausule om een simpele command prompt calculator te maken.",
            link: "https://github.com/MaxBouricius/CPP-Calculator"
        },
        {
            ImageText: "Project IK",
            Image: "https://cdn.discordapp.com/attachments/472832654602010634/1036609093516939274/IKproject.png",
            popupText: "",
            link: "https://github.com/MaxBouricius/Project-IK",
        },
        {
            ImageText: "Project Input Output",
            Image: "https://cdn.discordapp.com/attachments/472832654602010634/1036609102656327730/IOproject.png",
            popupText: "",
            link: "https://github.com/MaxBouricius/IO-project-",
        },
        {
            ImageText: "",
            Image: "",
            popupText: "",
            link: "",
        },
        {
            ImageText: "",
            Image: "",
            popupText: "",
            link: "",
        },
        {
            ImageText: "",
            Image: "",
            popupText: "",
            link: "",
        },
    ]
    return (
        <>
            {popupState ? <Popup popup={projects[projectIndex]} setter={setPopupState}  project={projects}/> : false}
            <section className="bottom">
                <h2 className="bottom__h2">Projects</h2>
                <hr className="bottom__hr" />
                <div className="bottom__projects">
                    {projects.map((project, index) => {
                        return (
                            <div onClick={() => { setProjectIndex(index); setPopupState(true) }}>
                                <ProjectCard projects={project} />
                            </div>
                        )
                    })}
                </div>

            </section>
        </>
    )
}
export default Bottom;