import {Component, OnInit, Input} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Observable} from 'rxjs/Observable';
import { VideosService } from '../../core/videos/videos.service';

@Component({
  selector: 'wavi-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  @Input() categories: any[];
  @Input() videos: any[];
  private data: Observable<Array<number>>;
  private values: Array<number> = [];

  constructor(private translate: TranslateService, private videosService: VideosService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  switchCategory(category: string) {
    console.log('category: ', category);
    this.getVideos (category);
    console.log('videos:', this.videos);
    // this.videos = VideosService.getVideosByCategory(category);
    // getVideos(): void {
    //   this.videos = this.videosService.getVideosByCategory();
    // }
  }

  getVideos(categoryName): void {
    this.videosService.getVideosByCategory(categoryName).subscribe(data=>{this.videos = data});
  }

  ngOnInit() {
    this.getVideos('art');
  }
  

}