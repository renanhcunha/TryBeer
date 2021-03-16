const setUserData = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const getUserData = () => JSON.parse(localStorage.getItem('user'));

const logOff = () => (
  localStorage.removeItem('user')
);

module.exports = {
  setUserData,
  getUserData,
  logOff,
};
