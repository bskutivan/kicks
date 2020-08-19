import React from 'react';
import './default.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import HomepageLayout from './layouts/HomepageLayout';
import Registration from './pages/Registration';
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import store from './redux/store';

const client = new ApolloClient({
    request: (operation) => {
      const token = localStorage.getItem('id_token')
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      })
    },
    uri: '/graphql',
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Provider store={store}>
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
                    </Provider>
                </div>
            </Router>
        </ApolloProvider>
    )
}

export default App;

