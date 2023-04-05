import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { MAINROUTES, MASTERDATA } from '../../app-routing.module';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.css'],
})
export class AuthorizedComponent {
  constructor(
    private authService: AuthService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getAuthorizationCode();
  }

  ngOnInit(): void {
    this.authService
      .getToken()
      .pipe(take(1))
      .subscribe((tokens) => {
        if ((tokens as any)?.id_token) {
          sessionStorage.setItem('id_token', (tokens as any).id_token);
          sessionStorage.setItem('refresh_token', (tokens as any).refresh_token);
          sessionStorage.setItem('access_token', (tokens as any).access_token);
          this.router.navigate([MAINROUTES.MASTER, MASTERDATA.COUNTRIES]);
        }
      });
  }

  getAuthorizationCode() {
    this.activateRoute.queryParams.subscribe((params) => {
      if (params?.['code']) {
        this.authService.code = params['code'];
      }
    });
  }
}
