import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {
    private _url:string = "http://localhost:8080/chercherContacts?mc=A&size=5&page=0";


    constructor(private http: HttpClient) {

    }
   // Methode afficher la liste des contact
    getContacts() {
        return this.http.get(this._url)
            .map(resp => resp);
    }

}