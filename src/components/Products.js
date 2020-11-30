import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { connect } from "react-redux";
import { addToBasket } from "../actions/basketActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({
  baskets,
  id,
  title,
  image,
  price,
  rating,
  addToBasket,
}) => {
  const { basket } = baskets;

  const numItems = basket.length;

  const handleClick = () => {
    addToBasket(id, title, image, price, rating);
    toast.info(`Item added to cart`);
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon className="star" />
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={handleClick}>Add to Cart</button>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  baskets: state.basket,
});
export default connect(mapStateToProps, { addToBasket })(Products);
