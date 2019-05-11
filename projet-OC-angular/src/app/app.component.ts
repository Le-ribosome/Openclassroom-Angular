import { Component } from '@angular/core';
import { DeprecatedI18NPipesModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lastUpdate = new Date();

  posts = [
    {
      title: "Vous êtes une vieille dame. Arriverez-vous à passer devant tout le monde à la caisse ?",
      content: "A 75 printemps révolus, vous avez vos petites habitudes : faire vos courses à 18h30 tous les jours par exemple. Pour « voir du monde » principalement. Problème : vous n’aimez pas trop attendre et quand la file s’allonge à la caisse, vous voulez passer devant tout le monde.",
      loveIts: 3,
      created_at: "10/02/19, 11:00AM"
    },
    {
      title: "Un iPhone sur deux porterait la coque à strass sous la contrainte",
      content: "C’est une fois de plus une atteinte grave à la liberté des iPhone à disposer de leur corps. Les utilisateurs doivent immédiatement cesser de soumettre leur smartphone Apple à cette contrainte vestimentaire » s’exclame la secrétaire d’État chargée de l’Égalité entre les femmes et les hommes, Marlène Schiappa, hors d’elle. La militante féministe Caroline Fourest estime quant à elle que les iPhone victimes de ce type d’oppression devraient tous porter plainte contre Tim Cook, le PDG d’Apple. Et dénoncer cette contrainte esthétique sur Twitter avec le hashtag #BalanceTaCoque",
      loveIts: -1,
      created_at: "19/03/19, 9:00PM"
    },
    {
      title: "Emmanuel Macron promet un nouveau mot pour remplacer « prélèvement » qui remplaçait « abattage »",
      content: "Paris – Engagement fort pour Emmanuel Macron en faveur de la biodiversité. Face aux périls à venir, le président s’est personnellement engagé pour qu’un mot totalement nouveau puisse le plus rapidement possible remplacer le mot « prélèvement » qui remplaçait « abattage ». ",
      loveIts: 0,
      created_at: "11/12/19, 14:00PM"
    },
    {
      title: "Lancement d’un nouveau service de livraison à domicile qui vous mâche votre repas",
      content: "Paris – Plus le temps de manger et de mâcher ? Cette équation difficile est désormais résolue avec l’arrivée d’une nouvelle start-up de livraison à domicile Machoing qui vient chez vous pour vous mâcher votre propre repas avant ingestion. Reportage.",
      loveIts: 8,
      created_at: "09/02/19, 12:00AM"
    }
  ]

  isAuth = false;

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )
  };

  onVoteYes() {
    console.log("On allume tout");
  }


}
