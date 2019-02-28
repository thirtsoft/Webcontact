import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GalleryService {
  /* currentPage: number=1; // pour définir la page
  size:number = 10; // pour définir la taille */

  constructor(private http: HttpClient) { }

  Search(motCle:string, size:number, page:number) {
      return this.http.get("https://pixabay.com/api/?key=11749248-c6605741f69a3f7c714d3beac&q="
                          +motCle+"&per_page="+size+"&page="+page)
            .map(resp => resp)
      }
}