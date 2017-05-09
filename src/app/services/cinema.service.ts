import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CinemaService {
  constructor(private http: Http) { }

  getData() {
    return this.http.get('//gonzalez-kudago.betaagency.ru/public-api/v1.3/movies/?location=msk&fields=id,title,body_text,poster&page_size=100')
      .map((response:Response)=>{
        // console.log('Возврат из сервиса', response.json().results);
        // return response.json().results;

        let cinemaList = response.json().results;
        let movies = [];
        for(let index in cinemaList){
            // console.log(cinemaList[index]);
            let movie = cinemaList[index];
            movies.push({ title: movie.title, poster: movie.poster.image });
        }
        console.log('cinemaList из сервиса перед return', movies)
        return movies;


    });
  }
}
