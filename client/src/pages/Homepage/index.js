import React from 'react';
import Directory from './../../components/Directory';
import Cart from '../../components/Cart';
import './styles.css';

const Home = () => {
    return (
        <section className="homepage">
            <Cart />
            <Directory />
        </section>
    );
};

export default Home;