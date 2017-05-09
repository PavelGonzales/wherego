import { Component, OnInit } from '@angular/core';
import { CinemaService } from './../../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.styl']
})
export class CinemaComponent implements OnInit {
  title = 'title';
  poster = null;
  movies = [];

  constructor(private cinemaService: CinemaService) {
    console.log(this.movies);
  }

  ngOnInit(){
    this.cinemaService.getData().subscribe((movies) => {
      console.log('movies в subscribe', movies)
      this.movies = movies;
      // this.title = this.movies[0].title;
    });
    // console.log('movies', this.cinemaService.getData());
    console.log('movies', this.movies);
    
  }

  showMovie() {
    this.poster = this.movies[0].poster;
    this.title = this.movies[0].title;
  }


}
