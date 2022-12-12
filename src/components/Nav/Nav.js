import "./Nav.css"
const Nav = () => {
  return (
    <>
      <div className="navbarWrapper">
        <ul className="navbar">
          <li className="navbar__listitem"><a href="/aboutme">AboutMe</a></li>
          <li className="navbar__listitem navbar__listitem--home"><a href="/">Home</a></li>
          <li className="navbar__listitem"><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </>
  )
}

export default Nav;