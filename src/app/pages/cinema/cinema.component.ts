import { Component, OnInit } from '@angular/core';
import { CinemaService } from './../../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.styl']
})
export class CinemaComponent implements OnInit {

  constructor(private cinemaService: CinemaService) {
  }

  ngOnInit() {
    console.log(this.cinemaService.getData());
  }

}
