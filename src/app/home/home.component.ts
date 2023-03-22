import { Component } from '@angular/core';
import { HttpService } from '../administration/services/http.service';
import { HttpHeaders } from '@angular/common/http';
import demoUrl from '../administration/constants/demo';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private httpService: HttpService) {}

  public demoContent: string = '';

  ngOnInit(): void {
    this.getDemoInformation();
  }
  private getDemoInformation() {
    const token = sessionStorage.getItem('id_token');
    const bearerToken = `Bearer ${token}`;
    const options = {
      headers: new HttpHeaders({ Authorization: bearerToken }),
      responseType: 'text',
    };

    this.httpService
      .doGet(demoUrl(), options)
      .pipe(take(1))
      .subscribe((content) => {
        console.log(content);
        //this.demoContent = content;
        (this.demoContent as any) = content;
      });
  }
}
