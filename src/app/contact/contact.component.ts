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

  constructor(public contactService: ContactService) { }
  
// initialisation de la liste des contacts lors du démarrage de l'appli
  ngOnInit() {
    this.contactService.getContacts()
      .subscribe(data => {
        this.pageContacts = data;
      }, error => {
        console.log(error);
      })
  }

}
