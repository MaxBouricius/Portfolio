import "./AboutSection.css";

const AboutSection = () => {
    return (
        <section className="section__wrapper">
            <article className="about">
                <img className="about__image" src="https://cdn.discordapp.com/attachments/472832654602010634/1051631829393883136/20221110_115153.jpg" alt="d" />
                <div className="about__text">
                    <h2>Hello, nice to meet you</h2>
                    <h2>I'm Max.</h2>
                    <p>This is me, Max Bouricius.
                        <br />
                        I am an ambitious full-stack developer and am hoping to go in the direction of AI.
                        <br />
                        I am currently studying software development at Mediacollege Amsterdam.
                        <br />
                        I have a passion for react and hope to do it comercially aswell.
                        <br />
                        In my free time I like to read, talk to people and play games. Currently my favorite novel is The Beginning After the End.
                        <br />
                        Other things I like to do in my free time is practice piano and work on my personal projects, be that computer building or something else.
                    </p>
                </div>

            </article>
        </section>
    )
}

export default AboutSection;