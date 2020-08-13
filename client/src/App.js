<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import store from './redux/store';
  
import Header from './components/Header';
import Home from './pages/Homepage';

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
                        <Route exact path="/" component={Home} />
                      </Switch>                         
                    </Provider>
                </div>
            </Router>
        </ApolloProvider>
    )
>>>>>>> 93860e30cbbd122bfcd6c285bb888b40a2349499
}

export default App;

=======
  
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';


function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Kicks</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="./server/orders">Orders</Link>
                    <Link to="./server/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/server/Products">Shoes</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">Kicks</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
>>>>>>> d1656b9f1aa1fcd3065096af174e5318f01dc641
