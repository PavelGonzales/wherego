import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CinemaService {
  constructor(private http: Http) { }

  getData() {
    return this.http
      .get('//gonzalez-kudago.betaagency.ru/public-api/v1.3/movies/?location=msk&fields=id,title,body_text,poster&page_size=100')
      .map((response:Response)=> response.json().results );
  }
}
