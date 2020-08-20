import React from 'react';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import ProductsPg from './pages/ProductsPg';
// import HomepageLayout from './layouts/HomepageLayout';
import Registration from './pages/Registration';
import Login from './pages/Login';
// import MainLayout from './layouts/MainLayout';
import Footer from './components/Footer';
import Detail from './pages/Detail';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import store from './redux/store';
import OrderHistory from './pages/OrderHistory';
import Success from './pages/Success';

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
                <Provider store={store}>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Homepage} />                                   
                        <Route path="/signup" component={Registration} />
                        <Route path="/login" component={Login}/>
                        <Route path="/products" component={ProductsPg} />
                        <Route path="/orderHistory" component={OrderHistory} />
                        <Route exact path="/success" component={Success} />
                        <Route path="/products/:id" component={Detail} />
                    </Switch>
                    <Footer />
                </Provider>
            </Router>
        </ApolloProvider>
    )
}

export default App;

