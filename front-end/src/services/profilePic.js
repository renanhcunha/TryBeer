import { md5 } from 'crypto-js';
import { getUserData } from './localStorage';

const imgSRC = () => {
  const { email } = getUserData();
  const hash = md5(email);
  const gravatarURL = 'https://www.gravatar.com/avatar/';
  return `${gravatarURL}${hash}`;
};

export default imgSRC;
