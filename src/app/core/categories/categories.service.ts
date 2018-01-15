import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

    constructor(private http: HttpClient) {
    }

    getCategories() : void {

        this.http.get<any>('https://api.vimeo.com/'+ 'categories', {
            headers:
                new HttpHeaders()
                    .append('Authorization', 'Bearer d2f633a193b8d0be379f4d72cf0256f3')
        }).subscribe(
            data => {
                console.log('Categories: ', data);
            },
            err => {
                console.log("Error occured.")
            }
        );
    }


}