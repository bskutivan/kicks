import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/templogo.jpg"

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link>
                    <img src={Logo} alt="templogo"/>
                    </Link>
                </div>

                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/registration">
                            Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
