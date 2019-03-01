import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  pageContacts:any;
  motCle: string="";
  page:number=0;
  size:number=5;
  pages:Array<number>;

  constructor(public contactService: ContactService) { }

 // Affichage de la liste des contacts au démarrage de l'appli
  ngOnInit() {
    this.doSearch();
  }
// initialisation de la liste des contacts lors du démarrage de l'appli
  doSearch() {
    this.contactService.getContacts(this.motCle, this.page, this.size)
      .subscribe(data => {
        this.pageContacts = data;
       // this.pages = new Array(data.totalPages);
      }, error => {
        console.log(error);
      })
  }

// methode affichant tous les contacts au clic du bouton chercher
  chercher() {
    this.doSearch();
  }

}
