import React from 'react';
import './styles.css';
import Logo from '../../assets/images/templogo.jpg';

const Header = props => {
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