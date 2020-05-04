import React, { Component } from 'react';
import config from '../../config';
import { Link } from 'gatsby';

import FB from '../assets/img/grau_fb.png';
import INSTA from '../assets/img/grau_insta.png';



export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  render() {
    const { openMenu } = this.state;
    const { activeLink } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <a
            className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
            href="/offen"
          >
            {config.siteTitle}
          </a>

          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler  ${openMenu ? '' : 'collapsed'}`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-center mx-auto">
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'home' ? 'active' : ''
                }`}
              >
                <Link className="nav-link text-uppercase text-expanded" to="/">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'about' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/anlass"
                >
                  Anlass
                </Link>
              </li>
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'products' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/produkte"
                >
                  Produkte
                </Link>
              </li>
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'store' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/offen"
                >
                  Öffnungszeiten
                </Link>
              </li>

              <li
                className={`nav-item px-lg-3`}
              >
                <a href="https://www.facebook.com/After-Dark-Bar-Z%C3%BCrich-102219657935463/" target="_blank" 
                rel="noopener norefferer"> <img src={FB} 
                alt="FB logo" /> </a>


              </li>

              <li
                className={`nav-item px-lg-1`}
              >
                <a href="https://www.instagram.com/afterdark_barzh/" target="_blank" rel="noopener norefferer"> <img src={INSTA} 
                alt="Instagram logo" /> </a>


              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
