import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

import { connect } from "react-redux";

const Checkout = ({ baskets }) => {
  const { basket } = baskets;
  const basketLenght = basket.length;
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB4234928_.jpg"
          alt="Ad"
          className="checkout_ad"
        />

        {basketLenght === 0 ? (
          <div>
            <h2>Basket is Empty</h2>
            <p>
              You have no items in your cart. To buy one or more items, click
              "Add to Cart" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkoutProduct_title">Your Cart has</h2>

            {/* List out all checkout products */}
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basketLenght > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  baskets: state.basket,
});

export default connect(mapStateToProps)(Checkout);
