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
            popupText: "For this project I made a webpage in the style of the website Indeed, with a bunch of functions like an item selector where you can add product, and then select them for more information on the product and a login function using php. This project is made fully in ReactJS using React-Router and React-Redux as well.",
            popupText2: "",
            link: "https://github.com/MaxBouricius/BeroepsOpdrachtM9-10",
        },
        {
            ImageText: "Trello clone in react",
            Image: "https://media.discordapp.net/attachments/472832654602010634/1057295971106697337/image.png?width=720&height=289",
            popupText: "For this project I made a basic clone of the project management app/website Trello.",
            popupText2: "(This is a Skill-building project, that means that I follow the teacher Jeroen Rijsdijk in making this app after which I have to thoroughly explain how it works in order for it to be accepted.)",
            link: "https://github.com/MaxBouricius/Trellie",
        },
        {
            ImageText: "ReactSearch",
            Image: "https://media.discordapp.net/attachments/472832654602010634/1057295971786182686/image.png?width=720&height=353",
            popupText: "For this project I made a search function in ReactJS using the .filter method from JavaScript.",
            popupText2: "(This is a Skill-building project, that means that I follow the teacher Jeroen Rijsdijk in making this app after which I have to thoroughly explain how it works in order for it to be accepted.)",
            link: "https://github.com/MaxBouricius/React-search",
        },
        {
            ImageText: "ReactRouter",
            Image: "https://media.discordapp.net/attachments/472832654602010634/1057295969970049094/image.png?width=720&height=350",
            popupText: "In this project I learned how to use React-Router by making a simple form app that works in multiple routes.",
            popupText2: "(This is a Skill-building project, that means that I follow the teacher Jeroen Rijsdijk in making this app after which I have to thoroughly explain how it works on order for it to be accepted.)",
            link: "",
        },
        {
            ImageText: "ReactDashboard",
            Image: "https://media.discordapp.net/attachments/472832654602010634/1057295970481733692/image.png?width=720&height=355",
            popupText: "In this project I learned how to add things to the state without any backend just ReactJS",
            popupText2: "(This is a Skill-building project, that means that I follow the teacher Jeroen Rijsdijk in making this app after which I have to thoroughly explain how it works in order for it to be accepted.)",
            link: "",
        },
        {
            ImageText: "Project IK",
            Image: "https://cdn.discordapp.com/attachments/472832654602010634/1036609093516939274/IKproject.png",
            popupText: "This was my very first website that I made for school.",
            popupText2: "",
            link: "https://github.com/MaxBouricius/Project-IK",
        },
        {
            ImageText: "CPP-Calculator",
            Image: "https://cdn.discordapp.com/attachments/472832654602010634/1036609020812865536/unknown.png",
            popupText: "In this project I learned how to use a Switch expression with a Case clause to make a simple command prompt calculator.",
            popupText2: "",
            link: "https://github.com/MaxBouricius/CPP-Calculator"
        },
        {
            ImageText: "Project Input Output",
            Image: "https://cdn.discordapp.com/attachments/472832654602010634/1036609102656327730/IOproject.png",
            popupText: "This project was an introduction to Unity Game Engine just to see if it was something I would enjoy, but in the end I did not go any further with this software.",
            popupText2: "",
            link: "https://github.com/MaxBouricius/IO-project-",
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