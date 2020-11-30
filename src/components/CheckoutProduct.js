import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { connect } from "react-redux";
import { removeFromBasket } from "../actions/basketActions";

const CheckoutProduct = ({
  id,
  title,
  image,
  price,
  rating,
  removeFromBasket,
}) => {
  const handleClick = () => {
    removeFromBasket(id);
  };

  return (
    <div className="checkout_product">
      <img src={image} alt="checkout product" className="checkout_image" />

      <div className="checkout_info">
        <p className="checkout_title">{title}</p>

        <p className="checkout_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon className="star" />
              </p>
            ))}
        </div>

        <button onClick={handleClick}>Remove from cart</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  baskets: state.basket,
});

export default connect(mapStateToProps, { removeFromBasket })(CheckoutProduct);
