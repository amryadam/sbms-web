import * as crypto from 'crypto-js';

// Generate 32 Byte random
const generateRandom = () => {
  return crypto.lib.WordArray.random(32);
};

//  Encode the random with Base64URL
const generateCodeVerifier = (random: crypto.lib.WordArray) => {
  let c = crypto.enc.Base64url.stringify(random);
  console.log('generateCodeVerifier === ' + c);
  return c;
};

// Hash the encoded random  with SHA-256
export const generateCodeChallenge = () => {
  let random = generateRandom();
  sessionStorage.setItem('codeVerifier', generateCodeVerifier(random));
  const codeVerifier: any = sessionStorage.getItem('codeVerifier');
  let c = crypto.enc.Base64url.stringify(crypto.SHA256(codeVerifier));
  console.log('generateCodeChallenge === ' + c);
  return c;
};

// base64Url2 = (str: any) => {
//   return str
//     .toString(crypto.enc.Base64)
//     .replace(/=/g, '')
//     .replace(/\+/g, '-')
//     .replace(/\//g, '_');
// };
//
// generateCodeVerifier2 = () => {
//   let s = this.base64Url2(crypto.enc.Base64.stringify(this.random));
//   console.log('generateCodeVerifier2 === ' + s);
//   return s;
// };
//
// generateCodeChallenge2 = () => {
//   const codeVerifier: any = sessionStorage.getItem('codeVerifier2');
//   let s = this.base64Url2(crypto.SHA256(codeVerifier));
//   console.log('generateCodeChallenge2 === ' + s);
//   return s;
// };
