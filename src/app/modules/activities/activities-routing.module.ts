import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionActivitesComponent } from './gestion-activites/gestion-activites.component';
import { GestionEquipementsComponent } from './gestion-equipements/gestion-equipements.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manage-activities',
        component: GestionActivitesComponent
      },
      {
        path: 'manage-equipements',
        component:GestionEquipementsComponent,
      },
      { path: '', redirectTo: 'manage-activities', pathMatch: 'full' },
      { path: '**', redirectTo: 'manage-activities', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiviesRoutingModule {}
