import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { connect } from "react-redux";
import { setUser, clearUser } from "./actions/basketActions";
import { auth } from "./firebase";
import "./App.css";

function App({ baskets, setUser, clearUser }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        // user is logged in
        setUser(authuser);
        // eslint-disable-next-line
      } else {
        // user is logged out
        clearUser();
        // eslint-disable-next-line
      }
    });

    return () => {
      // Any cleanup goes here
      unsubscribe();
      // eslint-disable-next-line
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  baskets: state.basket,
});

export default connect(mapStateToProps, { setUser, clearUser })(App);
