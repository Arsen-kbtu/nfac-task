import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from 'rxjs';
import {Film} from '../models/film';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getFilm(title: string): Observable<Film> {
    return this.http.get<Film>(`https://www.omdbapi.com/?apikey=${environment.omdbApiKey}&t=${title}`) 

  }
  getFilms(title: string): Observable<Film[]> {
    return this.http.get<Film[]>(`https://www.omdbapi.com/?apikey=${environment.omdbApiKey}&s=${title}`)
  }
}