import md5 from 'crypto-js/md5';
import { getUserData } from './localStorage';

const imgSRC = () => {
  const email = getUserData().email;
  const hash = md5(email);
  console.log(hash);
  const gravatarURL = 'https://www.gravatar.com/avatar/';
  return (
    fetch(`${gravatarURL}${hash}`)
  );
}

export default imgSRC;
