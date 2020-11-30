import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { auth } from "../firebase";
import { connect } from "react-redux";

const Navbar = ({ baskets }) => {
  const { basket, user } = baskets;
  const basketLenght = basket.length;
  const email = user?.email;
  const userName = email?.substring(0, email?.lastIndexOf("@"));

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo"
          className="header-logo"
        />
      </Link>

      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="search-icon" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"} className="header-link">
          <div onClick={login} className="header-options">
            <span className="option1">Hello {userName}</span>
            <span className="option2">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link className="header-link">
          <div className="header-options">
            <span className="option1">Return</span>
            <span className="option2"> & Orders</span>
          </div>
        </Link>
        <Link className="header-link">
          <div className="header-options">
            <span className="option1">Your</span>
            <span className="option2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header-link">
          <div className="header-basket">
            <ShoppingCartIcon />
            <span className="option2 basket-count">{basketLenght}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  baskets: state.basket,
});

export default connect(mapStateToProps)(Navbar);
