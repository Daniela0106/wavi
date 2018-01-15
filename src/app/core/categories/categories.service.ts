import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class CategoriesService {

  constructor(private http:HttpClient) {
  }

  getCategories(): Observable <any>{

    return this.http.get<any>('https://api.vimeo.com/' + 'categories', {
      headers: new HttpHeaders()
        .append('Authorization', 'Bearer d2f633a193b8d0be379f4d72cf0256f3')
      }).subscribe(
        data => {
          var str = JSON.stringify(data.data); //Converting the JSON to String
          var chunksOfResponse = str.split("/categories/");
          var categories = [];
          var categoryName;
          for (var j = 0; j < ((chunksOfResponse.length)); ++j) {
            if (chunksOfResponse[j].indexOf("/channels") != -1) {
              categoryName = chunksOfResponse[j].split("/channels").shift();
                categories.push(categoryName);
            }
          }console.log('Categories names: ', categories);
        },
        err => {
            console.log("Error occured.")
        }
      );
    }
}