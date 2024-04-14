import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AppService } from '../app.service';
import { Film } from '../../models/film';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  recommendedFilms: Film[] = [];
  film: Film | undefined;
  constructor(private appService: AppService) { 
    
  }
  ngOnInit() {
    this.appService.getFilm("Avengers").subscribe(film => {
      this.recommendedFilms!.push(film);
    });
    this.appService.getFilm("Fight Club").subscribe(film => {
      this.recommendedFilms!.push(film);
    });
    this.appService.getFilm("The Dark Knight").subscribe(film => {
      this.recommendedFilms!.push(film);
    });
    this.appService.getFilm("The Godfather").subscribe(film => {
      this.recommendedFilms!.push(film);
    });
    this.appService.getFilm("The Shawshank Redemption").subscribe(film => {
      this.recommendedFilms!.push(film);
    });
    
  }
}

