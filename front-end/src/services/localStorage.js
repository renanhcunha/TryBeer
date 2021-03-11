const setUserData = (user) => {
  localStorage.setItem(JSON.stringify(user));
};

module.exports = {
  setUserData,
};
