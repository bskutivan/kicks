import React from 'react';
import './default.scss';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import HomepageLayout from './layouts/HomepageLayout';
import Registration from './pages/Registration';
import MainLayout from './layouts/MainLayout';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main">
             <Switch>
            <Route exact path="/" render={() => (
                <HomepageLayout>
                    <Homepage />
                </HomepageLayout>
            )} />
            <Route path="/registration" render={() => (
                <MainLayout>
                    <Registration />
                </MainLayout>
            )} />
             </Switch>
            </div>
        </div>
    );
}

export default App;

