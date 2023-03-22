import { HttpParams } from '@angular/common/http';

export const tokenUrl = (code: string) => {
  return `http://localhost:9090/oauth2/token?` + params(code);

  // const redirectUrl = `http://127.0.0.1:4200/admin/authorized&grant_type=authorization_code&code=${code}&code_verifier=qPsH306-ZDDaOE8DFzVn05TkN3ZZoVmI_6x4LsVglQI`;
  // return `http://localhost:9090/oauth2/token?client_id=client&redirect_uri=${redirectUrl}`;
};

const params = (code: string) => {
  let code_verifier: any = sessionStorage.getItem('codeVerifier');
  let params = new HttpParams()
    .append('response_type', 'code')
    .append('grant_type', 'authorization_code')
    .append('code', code)
    .append('code_verifier', code_verifier)
    .append('client_id', 'client')
    .append('redirect_uri', 'http://127.0.0.1:4200/admin/authorized');
  return params.toString();
};
