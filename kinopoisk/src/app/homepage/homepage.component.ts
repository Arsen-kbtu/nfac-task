import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AppService } from '../app.service';
import { Film } from '../../models/film';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  app=AppService;
  recommendedFilms: Film[] = [];
  film: Film | undefined;
  constructor(private appService: AppService) { 
    
  }
  ngOnInit() {
    this.appService.getFilm("Avengers").subscribe(film => {
      this.recommendedFilms!.push(film);
    });
  }
}

