function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Homestead High School Badminton Club
      </a>
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
