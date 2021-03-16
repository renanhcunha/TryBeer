const setUserData = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const getCartItems = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart'));
  if (cartItems) return cartItems;
  localStorage.setItem('cart', JSON.stringify([]));
  return [];
};

const updateCartItemsQty = (updatedCartItems) => {
  localStorage.setItem('cart', JSON.stringify(updatedCartItems));
};

module.exports = {
  setUserData,
  getCartItems,
  updateCartItemsQty,
};
