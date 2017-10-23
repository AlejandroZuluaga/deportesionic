import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginServicesProvider {
  header: Headers;
  headerPost: Headers;
  options: RequestOptions;

  constructor(public http: Http) {

  }
  public login(postParams) {
    let body = 'email=' + postParams.email;
    this.headerPost = new Headers({
      'Content-Type':'application/json',
      'auth': 'alejo',
      'passwd': 'admin'
    })
    let optionspost = new RequestOptions({
      headers: this.headerPost
    })
    return new Promise((resolve, reject) => {
      this.http.post('http://139.162.118.169:8080/deportealamano/webresources/com.co.deportealamano.entidades.usuario', body, optionspost)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        });
    });

  }

}
