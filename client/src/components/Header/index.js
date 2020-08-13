import React from 'react';
<<<<<<< HEAD
import './styles.scss';
import { Link } from 'react-router-dom';
import Logo from './src/images/templogo.jpg';
=======
import './styles.css';
import Logo from '../../assets/images/templogo.jpg';
>>>>>>> 93860e30cbbd122bfcd6c285bb888b40a2349499

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
<<<<<<< HEAD
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
=======
                    <img src={Logo} alt="templogo"/>
>>>>>>> 93860e30cbbd122bfcd6c285bb888b40a2349499
                </div>
            </div>
        </header>
    );
};

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> 93860e30cbbd122bfcd6c285bb888b40a2349499
