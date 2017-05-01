import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CinemaService {

  constructor(private http: Http) { }

  getData() {
    this.http.get('//gonzalez-kudago.betaagency.ru/public-api/v1.3/movies/?location=msk&fields=id,title,body_text,poster&page_size=100')
      .toPromise()
      .then((response) => {
        console.log('Все отлично =>', response.json().results);
      }, (error) => {
        console.log('Ошибка =>', error);
      });
  }
}
