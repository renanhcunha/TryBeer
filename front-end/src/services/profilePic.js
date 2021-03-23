import md5 from 'crypto-js/md5';
import { getUserData } from './localStorage';

const imgSRC = () => {
  const email = getUserData().email;
  const hash = md5(email);
  const gravatarURL = 'https://www.gravatar.com/avatar/';
  return `${gravatarURL}${hash}`;
}

export default imgSRC;
