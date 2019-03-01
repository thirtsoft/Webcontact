import { Contact } from './../model/model.contact';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {
   // private _url:string = "http://localhost:8080/chercherContacts?mc=A&size=5&page=0";


    constructor(private http: HttpClient) {

    }
   // Methode afficher la liste des contact
    getContacts(motCle:string,page:number,size:number) {
        return this.http.get("http://localhost:8080/chercherContacts?mc="
                +motCle+"&page="+page+"&size="+size)
            .map(resp => resp);
    }

    // Methode d'ajout d'un nouveau  contact
    saveContact(contact: Contact) {
        return this.http.post("http://localhost:8080/contacts", contact)
            .map(resp => resp);
    }

}

