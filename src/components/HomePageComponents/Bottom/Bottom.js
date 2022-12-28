import "./Bottom.css";
import ProjectCard from "../ProjectCard/ProjectCard"
import { useState } from "react";
import Popup from "../Popup/Popup";
const Bottom = () => {
    const [projectIndex, setProjectIndex] = useState(0);
    const [popupState, setPopupState] = useState(false);
    const projects = [
        {
            ImageText: "BeroepsOprachtM10",
            Image: "https://media.discordapp.net/attachments/472832654602010634/1057295969466712114/image.png?width=720&height=353",
            popupText: "Voor dit project moet ik een webpagina maken in de style van Indeed met een aantal functies bijvoorbeeld een item selector waar je verschillende producten heb waar je op kan clicken om meer details te laten zien. Dit wordt allemaal met react gemaakt.",
            link: "https://github.com/MaxBouricius/BeroepsOpdrachtM9-10",
        },
        {
            ImageText: "Trello clone in react",
            Image: "https://media.discordapp.net/attachments/472832654602010634/1057295971106697337/image.png?width=720&height=289",
            popupText: "Hier moet ik een Trello clone maken door gebruik te maken van React-Redux.",
            link: "https://github.com/MaxBouricius/Trellie",
        },
        {
            ImageText: "ReactSearch",
            Image: "https://media.discordapp.net/attachments/472832654602010634/1057295971786182686/image.png?width=720&height=353",
            popupText: "Voor deze opdracht moest ik een zoek functie maken in React door gebruik te maken van de .filter JavaScript methode.",
            link: "https://github.com/MaxBouricius/React-search",
        },
        {
            ImageText: "ReactRouter",
            Image: "https://media.discordapp.net/attachments/472832654602010634/1057295969970049094/image.png?width=720&height=350",
            popupText: "Bij dit project hebben we geleerd hoe React-Router werkt doormiddel van een simpel formulier te maken die in meerdere routes werkt.",
            link: "",
        },
        {
            ImageText: "ReactDashboard",
            Image: "https://media.discordapp.net/attachments/472832654602010634/1057295970481733692/image.png?width=720&height=355",
            popupText: "Hier hebben we geleerd hoe je iets toevoegt aan de state zonder backend.",
            link: "",
        },
        {
            ImageText: "Project IK",
            Image: "https://cdn.discordapp.com/attachments/472832654602010634/1036609093516939274/IKproject.png",
            popupText: "Dit was mijn eerste echte website die ik gemaakt heb voor een school project.",
            link: "https://github.com/MaxBouricius/Project-IK",
        },
        {
            ImageText: "CPP-Calculator",
            Image: "https://cdn.discordapp.com/attachments/472832654602010634/1036609020812865536/unknown.png",
            popupText: "In this project heb ik geleerd hoe ik een Switch expressie kan gebruiken samen met een Case clausule om een simpele command prompt calculator te maken.",
            link: "https://github.com/MaxBouricius/CPP-Calculator"
        },
        {
            ImageText: "Project Input Output",
            Image: "https://cdn.discordapp.com/attachments/472832654602010634/1036609102656327730/IOproject.png",
            popupText: "Dit project was voor mij een introductie tot Unity game engine eigenlijk gewoon proberen en kijken of ik het iets vond, uiteindelijk heb ik gekozen om hier niet mee door te gaan.",
            link: "https://github.com/MaxBouricius/IO-project-",
        },
        {
            ImageText: "XR-lab Hilversum project VTD",
            Image: "https://cdn.discordapp.com/attachments/1016700032730275971/1031503591258730516/unknown.png",
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