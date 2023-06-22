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
          <a href="/ForMembers">For Members</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
