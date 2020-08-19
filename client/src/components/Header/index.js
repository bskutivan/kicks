import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/templogo.jpg"
import Auth from "../../utils/auth";

const Header = props => {

    function showNavigation() {
        if (Auth.loggedIn()) {
          return (
            <ul className="flex-row">
              <li className="mx-1 nav-item">
                <Link to="/orderHistory">
                  Order History
                </Link>
              </li>
              <li className="mx-1 nav-item">
                {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                <a href="/" onClick={() => Auth.logout()}>
                  Logout
                </a>
              </li>
            </ul>
          );
        } else {
          return (
            <ul className="flex-row">
              <li className="mx-1 nav-item">
                <Link to="/signup">
                  Signup
                </Link>
              </li>
              <li className="mx-1 nav-item">
                <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
          );
        }
    }
    
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="templogo"/>
                    </Link>
                </div>
                

                <div className="callToActions">
                    <nav>
                        {showNavigation()}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
