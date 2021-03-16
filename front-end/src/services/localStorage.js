const setUserData = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const logOff = () => (
  localStorage.removeItem('user')
);

module.exports = {
  setUserData,
  logOff,
};
