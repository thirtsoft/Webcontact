import { GalleryService } from 'src/services/gallery.service';
import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  pagePhotos:any;
  currentPage: number=1; // pour définir la page
  size:number = 10; // pour définir la taille
  pages:Array<number>=[];
 // private _url: string = "https://pixabay.com/api/?key=11749248-c6605741f69a3f7c714d3beac&q=marrakech&per_page=10&page=1";

  constructor(private gallerService: GalleryService) { }

  ngOnInit() {
  }

  onSearch(dataForm) {
    this.gallerService.Search(dataForm.motCle, this.size, this.currentPage)
        .subscribe(data=> {
        //  console.log(data); affichage sur la console
          this.pagePhotos=data;

        })
  }

}
