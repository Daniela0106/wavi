import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoriesService } from '../app/core/categories/categories.service';
import { VideosService } from '../app/core/videos/videos.service';


@Component({
  selector: 'app-wavi',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Wavi';

  constructor(private http: HttpClient, private videosService: VideosService, private categoriesService: CategoriesService){
  }

  videos: {};
  categories: {};

  ngOnInit (){
    this.getVideos();
    this.getCategories();
  }

  getVideos(): void {
    this.videos = this.videosService.getVideosByCategory();
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe(data=>{this.categories = data});
  }

}