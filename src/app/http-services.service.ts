import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_CONFIG') private config: { apiUrl: string }
  ) {}

  requestData(apiUrl, callback) {
    const api = this.config.apiUrl + apiUrl;
    this.http.jsonp(api, 'callback').subscribe(function (data) {
      // console.log(data);

      callback(data['_body']);        /*回调函数*/

    }, function (err) {
      console.log(err);
    });
  }
}
