export const getBasketTotal = (basket) => {
  const total = basket.reduce((amount, item) => item.price + amount, 0);
  return total;
};
