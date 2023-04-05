import { HttpParams } from '@angular/common/http';
import { generateCodeChallenge } from '../pkce/pkce';

export const redirectUrl = () => {
  var x = 'http://localhost:9090/oauth2/authorize?' + params().toString();

  console.log(x);

  return x;
  // const redirectUri =
  //   'http://127.0.0.1:4200/admin/authorized&code_challenge=QYPAZ5NU8yvtlQ9erXrUYR-T5AGCjCF47vN-KsaI2A8&code_challenge_method=S256';
  // return `http://localhost:9090/oauth2/authorize?response_type=code&client_id=client&scope=openid&redirect_uri=${redirectUri}`;
};

const params = () => {
  let params = new HttpParams()
    .append('response_type', 'code')
    .append('client_id', 'client')
    .append('scope', 'openid')
    .append('redirect_uri', 'http://127.0.0.1:4200/admin/authorized')
    .append('code_challenge', generateCodeChallenge())
    .append('code_challenge_method', 'S256');

  console.log(params.toString());
  return params.toString();
};

// export default redirectUrl;
