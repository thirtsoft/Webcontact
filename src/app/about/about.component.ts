import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  infos:{
    nom:string,
    email:string,
    tel:number
  };
  comments = [];
  
  commentaire={date:null, message:""};

  constructor(private aboutService: AboutService) {
    this.infos = this.aboutService.getInfo(); // recupère les infos au démarrage de l'appli
    this.comments = this.aboutService.getAllComments(); // recupère le tableau des comments au démarrage de l'appli
   }

  ngOnInit() {
  }
  // Méthode d'ajout d'un commentaire au clic sur bouton
  onAddCommentaire(commentaire) {
    this.aboutService.addComment(commentaire);
    //this.comments.push(commentaire); /* recuperer le commentaire saisie et l'ajoute automatiquement dans le tableau des commentaires (comments)*/
    this.commentaire.message = ""; // Permet de vider les champs après ajout du commentaire
    this.comments = this.aboutService.getAllComments(); // Charge la liste
                                           
  }

}
