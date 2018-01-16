import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoriesService {

    constructor(private http:HttpClient) {
    }

    getCategories() {
        return this.http.get('https://api.vimeo.com/' + 'categories', {
            headers: new HttpHeaders()
                .append('Authorization', 'Bearer d2f633a193b8d0be379f4d72cf0256f3')
        }).map((data:any) => {
                var str = JSON.stringify(data.data); //Converting the JSON to String
                var chunksOfResponse = str.split("/categories/");
                var categories = [];
                var categoryName;
                for (var j = 0; j < ((chunksOfResponse.length)); ++j) {
                    if (chunksOfResponse[j].indexOf("/channels") != -1) {
                        categoryName = chunksOfResponse[j].split("/channels").shift();
                        categories.push(categoryName);
                    }
                }
                return categories
            }
        );
    }

}