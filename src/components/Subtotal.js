import React from "react";
import CurrencyFormat from "react-currency-format";
import { connect } from "react-redux";
import { getBasketTotal } from "../getBasketTotal";

const Subtotal = ({ baskets }) => {
  const { basket } = baskets;
  const basketItems = basket.length;
  return (
    <div className="subtotal">
      {/* price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basketItems} items): <strong>{`${value}`}</strong>{" "}
            </p>
            <small className="subtotal_gifts">
              <input type="checkbox" />
              This order contains gifts
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  baskets: state.basket,
});

export default connect(mapStateToProps)(Subtotal);
