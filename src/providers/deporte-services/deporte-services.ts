import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DeporteServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeporteServicesProvider {
  header: Headers;
  headerPost: Headers;
  options: RequestOptions;
  constructor(public http: Http) {
    console.log('Hello DeporteServicesProvider Provider');
  }

  public getDeporte(token) {
    this.headerPost = new Headers({
      'Content-Type': 'application-json',
      'Access-Control-Allow-Origin': '*',
      'auth': 'alejo',
      'password': 'admin'
    });
    let optionspost = new RequestOptions({
      headers: this.headerPost
    })
    return new Promise((resolve, reject) => {
      this.http.get('http://139.162.118.169:8080/deportealamano/webresources/com.co.deportealamano.entidades.deporte', optionspost)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        });
    });
  }

}

