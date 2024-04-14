import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kinopoisk';
  searchText: string = '';
  constructor(private router: Router) { }
  search() {
    console.log(this.searchText);
    this.router.navigate(['/search', this.searchText]);
  }
}
