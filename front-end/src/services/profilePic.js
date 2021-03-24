import { MD5 } from 'crypto-js';
import { getUserData } from './localStorage';

const imgSRC = () => {
  const { email } = getUserData();
  const hash = MD5(email);
  const gravatarURL = 'https://www.gravatar.com/avatar/';
  return `${gravatarURL}${hash}?s=250`;
};

export default imgSRC;
