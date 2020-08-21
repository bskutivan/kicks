import React from 'react';
import "./styles.css";
import Insta from "../../assets/icons/instagram.png"
import Twitter from "../../assets/icons/twitter.png"

const Footer = props => {
    return (
        <footer className="footer">
            <div className="wrap">
                <span>@2020 Kicks 👠</span> 
            </div>
            <div className="wrap">
                <a href="instagram">
                    <img alt="instagram" className="footer-img" src={Insta}  />
                </a>
                <a href="twitter">
                    <img alt="twitter" className="footer-img" src={Twitter} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;