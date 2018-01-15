import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VideosService {

    constructor(private http: HttpClient) {
    }

    getVideosByCategory() : any {

    this.http.get<any>('https://api.vimeo.com/'+ 'categories/' + 'sports' + '/videos?per_page=12', {
    headers:
        new HttpHeaders()
        .append('Authorization', 'Bearer d2f633a193b8d0be379f4d72cf0256f3')
        }).subscribe(
            data => {
                console.log('data: ', data);
            },
            err => {
                console.log("Error occured.")
            }
        );
    }

    
}