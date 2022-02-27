import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialVimeo,
  TiSocialPinterest,
} from 'react-icons/ti';
import './Nav.css';

const Nav = ({ routes }) => (
  <nav>
    <div className="brand-logo">
      <span>Car Space</span>
    </div>

    <ul className="nav-links">
      {routes.map(({ name, path, isNavItem }) => (
        <li key={path} className="nav-link">
          {isNavItem && (
            <NavLink
              style={({ isActive }) => ({
                display: 'block',
                margin: '1rem 0',
                color: isActive ? '#fff' : '',
              })}
              to={path}
            >
              {name}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
    <div>
      <div className="social">
        <TiSocialTwitter />
        <TiSocialFacebook />
        <TiSocialVimeo />
        <TiSocialPinterest />
      </div>
      <small>
        &copy;
        {new Date().getFullYear()}
        {' '}
        Car Space, Inc.
      </small>
    </div>
  </nav>
);

Nav.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Nav;
