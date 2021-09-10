import crypto from 'crypto'

export const garavatarPath = (string) => {
  console.log(string)
  const lowerCaseString = string.trim().toLowerCase();
  const md5 = crypto.createHash('md5');
  const digest = md5.update(lowerCaseString, 'binary').digest('hex');
  console.log(digest)
  return `https://www.gravatar.com/avatar/${digest}/?d=robohash`;
};