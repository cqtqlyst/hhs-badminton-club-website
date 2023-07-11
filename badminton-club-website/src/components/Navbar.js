import Logo from "../images/Logo2NoBackgroundCropped.png";

function NavBar() {
  return (
    <nav className="nav">
      <div className="combined-logo-and-title">
        <div>
          <a href="/">
            <img src={Logo} alt="Logo" className="scaled-logo" />
          </a>
        </div>
        <a href="/" className="site-title">
          Homestead High School Badminton Club
        </a>
      </div>
      <ul>
        <li>
          <a href="/AboutUs">About Us</a>
        </li>
        <li>
          <a href="/Events">Events</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
