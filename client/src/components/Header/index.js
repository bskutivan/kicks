import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/templogo.jpg';

const Header = () => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="templogo"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
