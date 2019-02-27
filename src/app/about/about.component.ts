import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  info = {
    nom: "med",
    email: "med@gmail.Com",
    tel: 45678789
  }

  comments = [
    {date: new Date(), message: "A"},
    {date: new Date(), message: "B"},
    {date: new Date(), message: "C"}
  ];

  commentaire={date:null, message:""};

  constructor() { }

  ngOnInit() {
  }
  // Méthode d'ajout d'un commentaire au clic sur bouton
  onAddCommentaire(commentaire) {
    commentaire.date = new Date();
    this.comments.push(commentaire); /* recuperer le commentaire saisie et l'ajoute automatiquement dans le tableau des commentaires (comments)*/
    this.commentaire.message = ""; // Permet de vider les champs après ajout du commentaire
                                           
  }

}
