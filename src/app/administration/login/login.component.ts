import { Component, OnInit } from '@angular/core';
import { redirectUrl } from '../constants/redirect';
import { LayoutService } from '../../layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  valCheck: string[] = ['remember'];
  password!: string;

  constructor(public layoutService: LayoutService) {}

  redirect() {
    window.location.href = redirectUrl();
  }

  ngOnInit(): void {}
}
