import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsuarios() {

    return this.http.get('https://jsonplaceholder.typicode.com/users');
    
  }

  getMenuOpts() {

    return this.http.get<Componente[]>('/assets/data/menu-opts.json');

  }

  getAlbums() {
    
    return this.http.get<any[]>('/assets/data/albums.json');

  }

  getHeroes() {
    
    return this.http.get<any[]>('/assets/data/superheroes.json')
      .pipe(
        delay(1500)
      );

  }
}
