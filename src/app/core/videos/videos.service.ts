import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class VideosService {

    constructor(private http: HttpClient) {
    }

    getVideosByCategory (categoryName) {
        return this.http.get('https://api.vimeo.com/'+ 'categories/' + categoryName + '/videos?per_page=12', {
            headers: new HttpHeaders()
                .append('Authorization', 'Bearer d2f633a193b8d0be379f4d72cf0256f3')
        }).map((data:any) => {
                var videos = JSON.stringify(data.data); //Converting the JSON to String
                return videos
            }
        );
    }
    
}



