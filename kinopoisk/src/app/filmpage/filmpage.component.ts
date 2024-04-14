import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Film } from '../../models/film';

@Component({
  selector: 'app-filmpage',
  standalone: true,
  imports: [],
  templateUrl: './filmpage.component.html',
  styleUrl: './filmpage.component.css'
})
export class FilmpageComponent {
  film: Film | undefined;
  constructor(private route  : ActivatedRoute, private appService: AppService) { }
  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    this.appService.getFilm(title!).subscribe(film => {
      this.film = film;
    });
  }
}
