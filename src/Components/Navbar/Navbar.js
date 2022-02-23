import '../../assets/navbar/navbar.css';
import {
  ImTwitter, ImFacebook, ImGithub, ImPinterest,
} from 'react-icons/im';

const Navbar = () => (
  <nav className="navbar-fixed-container">
    <ul className="navbar-list">
      <li className="header-container"><h2 className="header-logo">Cars</h2></li>
      <li className="selector-container"><h2 className="selector">Cars</h2></li>
      <li className="selector-container"><h2 className="selector">Reserve</h2></li>
      <li className="selector-container"><h2 className="selector">My reservations</h2></li>
      <li className="selector-container"><h2 className="selector">Add cars</h2></li>
      <li className="selector-container"><h2 className="selector">Delete cars</h2></li>
      <li className="social-container">
        <div className="social-main-container d-flex">
          <ImTwitter />
          <ImFacebook />
          <ImGithub />
          <ImPinterest />
        </div>
        <p className="rights-res-desk">Most rights are reserved</p>
      </li>
    </ul>
  </nav>
);

export default Navbar;
