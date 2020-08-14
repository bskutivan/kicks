import React from 'react';
import './default.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import HomepageLayout from './layouts/HomepageLayout';
import Registration from './pages/Registration';
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout';
import { Switch, Route, Redirect } from 'react-router-dom';

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
            <Route path="/registration" render={() => currentUser ? <Redirect to="/" /> : (
                <MainLayout currentUser={currentUser}>
                    <Registration />
                </MainLayout>
            )} />
            <Route path="/login" render={() => (
                <MainLayout>
                    <Login />
                </MainLayout>
            )} />
             </Switch>
            </div>
        </div>
    );
}

export default App;

