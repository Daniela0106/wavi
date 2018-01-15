import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoriesService } from '../app/core/videos/categories.service';
import { VideosService } from '../app/core/categories/videos.service';


@Component({
  selector: 'app-wavi',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Wavi';

  constructor(private http: HttpClient, private videosService: VideosService, private categoriesService: CategoriesService){
  }


  // HTTP GET Method example
  // ngOnInit(): void {
  //
  //   interface UserResponse {
  //     login: string;
  //     bio: string;
  //     company: string;
  //   }
  //
  //   this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(
  //       data => {
  //         console.log("User Login: " + data.login);
  //         console.log("Bio: " + data.bio);
  //         console.log("Company: " + data.company);
  //       },
  //       err => {
  //         console.log("Error occured.")
  //       }
  //   );
  // }
  //

  heroes: {};

  ngOnInit (){
    this.getVideos();
    this.getCategories();
  }

  getVideos(): void {
    this.heroes = this.videosService.getVideosByCategory();
  }

  getCategories(): void {
    this.heroes = this.categoriesService.getCategories();
  }
}