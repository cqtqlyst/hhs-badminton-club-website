import InstLogo from "../images/instlogo.png";

function Footer() {
  return (
    <div className="footer">
      <div class = "sections">
        <div class = "contact">
          <div class = "header1">Contact</div>
          <p>hhsbadminton@gmail.com</p>
          <p>OR</p>
          <p>you can email any one of our officers!</p>
        </div>
        <div class = "links">
          <div class = "header2">Links</div>
          <div class = "instagram">
            <div>Follow our Instagram!</div>
            <a href = "https://www.instagram.com/hhsbadmintonclub/"target="_blank"> 
              <img src={InstLogo} alt="Logo" className="scaled-logo" />
            </a>
          </div>

          <div class = "email_list">
            <p> Join our email list for events if you are not already on it:</p>
            <p><a href="https://docs.google.com/forms/d/1lupv1cI0rS5KztBhfOGyJpIEz6jOTOnL3Qvlck26ufA/viewform?edit_requested=true" class = "email_list_link" target="_blank">HHS Badminton Club Email List</a></p>

          </div>
        </div>
        <div class = "credits">
          <div class = "header3">Credits</div>{" "}
          <p>This website was made by <br>
          </br>Aayush Gaywala and Siddharth Balaji.<br>
          </br> You can read more about them above.</p>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
