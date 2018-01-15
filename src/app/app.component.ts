import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-wavi',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Wavi';

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {

    interface UserResponse {

    }

    // this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(
    //     data => {
    //       console.log("User Login: " + data.login);
    //       console.log("Bio: " + data.bio);
    //       console.log("Company: " + data.company);
    //     },
    //     err => {
    //       console.log("Error occured.")
    //     }
    // );


    //
    // return this.http.get('https://api.vimeo.com/'+ 'categories/' + 'sports' + '/videos?per_page=12', {
    //   headers:
    //       new HttpHeaders()
    //           .append('Access-Control-Allow-Methods', 'GET,POST')
    //           .append('Access-Control-Allow-Origin', 'http://localhost:4200')
    //           .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method")
    //           .append('Authorization', "effa86d0284056eacb391c194926a789")
    //   , responseType:'text'})
    //     .subscribe(data => data {
    //     console.log(data);
    // });

    this.http.get<any>('https://api.vimeo.com/'+ 'categories/' + 'sports' + '/videos?per_page=12', {
      headers:
          new HttpHeaders()
              // .append('Access-Control-Allow-Methods', 'GET,OPTIONS')
              // .append('Access-Control-Allow-Origin', 'http://localhost:4200')
              // .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Request-Method")
              .append('Authorization', 'Bearer d2f633a193b8d0be379f4d72cf0256f3')
    }).subscribe(
        data => {
          console.log('data: ', data);
          // console.log("User Login: " + data.login);
          // console.log("Bio: " + data.bio);
          // console.log("Company: " + data.company);
        },
        err => {
          console.log("Error occured.")
        }
    );


  }
}