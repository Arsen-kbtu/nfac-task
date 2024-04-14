import { Component } from '@angular/core';
import { Film } from '../../models/film';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';
  foundFilms: Film[] = [];
  constructor(private route  : ActivatedRoute, private appService: AppService) {

   }
  ngOnInit() {
    this.searchText=this.route.snapshot.paramMap.get('searchText')!;
    this.appService.getFilms(this.searchText).subscribe((data: any) => {
      this.foundFilms = data.Search;
    },
    (error: any) => {
      console.error('Error fetching films:', error);
    });
  }
}
