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
        <ul className="navbar-list flex flex-col">
          <li className="header-container flex items-center justify-center h-32">
            <h2 className="header-logo">Cars</h2>
          </li>
          <div className="h-screen space-y-5">
            <NavLink
              onClick={() => navbarHandler('close-nav')}
              className="selector-container mx-5 px-5 font-bold h-10"
              exact="true"
              to="/"
            >
              <h2 className="selector">Cars</h2>
            </NavLink>
            <NavLink
              onClick={() => navbarHandler('close-nav')}
              className="selector-container mx-5 px-5 font-bold h-10"
              exact="true"
              to="/Reserve"
            >
              <h2 className="selector">Reserve</h2>
            </NavLink>
            <NavLink
              onClick={() => navbarHandler('close-nav')}
              className="selector-container mx-5 px-5 font-bold h-10"
              exact="true"
              to="/MyReservations"
            >
              <h2 className="selector w-full">My reservations</h2>
            </NavLink>
            <NavLink
              onClick={() => navbarHandler('close-nav')}
              className="selector-container mx-5 px-5 font-bold h-10"
              exact="true"
              to="/AddCar"
            >
              <h2 className="selector">Add cars</h2>
            </NavLink>
            <NavLink
              onClick={() => navbarHandler('close-nav')}
              className="selector-container mx-5 px-5 font-bold h-10"
              exact="true"
              to="/DeleteCar"
            >
              <h2 className="selector">Delete cars</h2>
            </NavLink>
          </div>
          <li className="social-container">
            <div className="absolute inset-x-0 bottom-0 h-16">
              <div className="social-main-container d-flex space-x-4">
                <ImTwitter />
                <ImFacebook />
                <ImGithub />
                <ImPinterest />
              </div>
              <p className="rights-res-desk">Most rights are reserved</p>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
