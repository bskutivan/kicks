import React from 'react';
import Casual from '../../assets/images/casual.jpg';
import Dress from './../../assets/images/dress.jpg';
import Performance from './../../assets/images/performance.jpg';
import './styles.css';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
            <div
                className="item"
                style={{
                    backgroundImage: `url(${Casual})`
                }}
            >
                <a>
                    Shop Casual Shoes
                </a>
            </div>
            <div
            style={{
                    backgroundImage: `url(${Dress})`
                }}
            >
                <a>
                    Shop Dress Shoes
                </a>
            </div>
            <div
            style={{
                    backgroundImage: `url(${Performance})`
                }}
           >
               <a>
                    Shop Performance Shoes
                </a>
           </div>
           </div>
        </div>
    );
};

export default Directory;