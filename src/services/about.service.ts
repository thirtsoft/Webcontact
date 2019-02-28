import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
    info = {
        nom: "tairou",
        email: "thirdiallo@gmail.Com",
        tel: 779440310
      }
    
      comments = [
        {date: new Date(), message: "A"},
        {date: new Date(), message: "B"},
        {date: new Date(), message: "C"}
      ];

      addComment(c) {
        c.date = new Date();  
        this.comments.push(c); /* recuperer le commentaire saisie et l'ajoute automatiquement dans le tableau des commentaires (comments)*/
            
      }

      getAllComments() {
          return this.comments;
      }

      getInfo() {
          return this.info;
      }

}