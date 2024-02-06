import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

//POUR FAIRE LE EDIT D4ABORD IL FAUT CREE LA ROOT {path: "edit/:id", component: ReservationFormComponent}, AVEC LE 
//MEME COMPOSANT DE AJOUTER "new" APRES IL FAUT ALLER DANS DANS LE COMPONENT HTML DE CETTE COMPOSANT
const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "list", component: ReservationListComponent},
  {path: "new", component: ReservationFormComponent},
  {path: "edit/:id", component: ReservationFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
