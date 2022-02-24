import '../../assets/navbar/navbar.css';
import { useState } from 'react';
import {
  ImTwitter, ImFacebook, ImGithub, ImPinterest,
} from 'react-icons/im';
import { IoCloseCircle } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navState, navbarHandler] = useState('close-nav');

  return (
    <>
      <nav className="burger-menu-nav">
        <GiHamburgerMenu onClick={() => navbarHandler('show-nav')} />
      </nav>
      <nav className={`navbar-fixed-container ${navState}`}>
        <IoCloseCircle onClick={() => navbarHandler('close-nav')} />
        <ul className="navbar-list">
          <li className="header-container"><h2 className="header-logo">Cars</h2></li>
          <NavLink
            onClick={() => navbarHandler('close-nav')}
            className="selector-container"
            exact="true"
            to="/"
          >
            <h2 className="selector">Cars</h2>
          </NavLink>
          <NavLink
            onClick={() => navbarHandler('close-nav')}
            className="selector-container"
            exact="true"
            to="/Reserve"
          >
            <h2 className="selector">Reserve</h2>
          </NavLink>
          <NavLink
            onClick={() => navbarHandler('close-nav')}
            className="selector-container"
            exact="true"
            to="/MyReservations"
          >
            <h2 className="selector">My reservations</h2>
          </NavLink>
          <NavLink
            onClick={() => navbarHandler('close-nav')}
            className="selector-container"
            exact="true"
            to="/AddCar"
          >
            <h2 className="selector">Add cars</h2>
          </NavLink>
          <NavLink
            onClick={() => navbarHandler('close-nav')}
            className="selector-container"
            exact="true"
            to="/DeleteCar"
          >
            <h2 className="selector">Delete cars</h2>
          </NavLink>
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
    </>
  );
};

export default Navbar;
