import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import store from './redux/store';
  
import Header from './components/Header';
import Homepage from './pages/Homepage';

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
                      <Header />
                      <Switch>
                        <Route exact path="/" component={HomePage} />
                      </Switch>                         
                    </Provider>
                </div>
            </Router>
        </ApolloProvider>
    )
}

export default App;