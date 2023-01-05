import "./Contact.css"

const Contact = () => {
    return (
        <section className="section__wrapper">
            <article className="contact__inputSection">
                <p className="contact__title">Name</p>
                <input className="contact__text" type="text" placeholder="Name" />
                <p className="contact__title">Email</p>
                <input className="contact__text" type="text" placeholder="Email" />
                <p className="contact__title">Message/Question</p>
                <input className="contact__text" type="text" placeholder="Message/Question" />
                <input className="contact__button" type="button" value="Send!" />
                <p>(Dit gedeelte van de website is nog niet klaar)</p>
            </article>
            
        </section>
    )
}

export default Contact;