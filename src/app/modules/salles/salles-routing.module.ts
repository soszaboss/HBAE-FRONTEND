import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionSallesComponent } from './gestion-salles/gestion-salles.component';
import { GestionEquipementsComponent } from './gestion-equipements/gestion-equipements.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manage-salles',
        component: GestionSallesComponent
      },
      {
        path: 'manage-equipements',
        component: GestionEquipementsComponent
      },
      { path: '', redirectTo: 'manage-salles', pathMatch: 'full' },
      { path: '**', redirectTo: 'manage-salles', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SallesRoutingModule {}
