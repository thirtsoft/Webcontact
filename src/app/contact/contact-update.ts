import { ContactService } from './../../services/contact.service';
import { Contact } from './../../model/model.contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.html'
})
export class ContactUpdateComponent implements OnInit {
  contact:Contact = new Contact();
  mode:number=1;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  saveContact() {
   // console.log(this.contact);
    this.contactService.saveContact(this.contact)
      .subscribe(data => {
        data = this.contact;
        this.mode = 2;
      }, error => {
        console.log(error);
      })
  }

}
