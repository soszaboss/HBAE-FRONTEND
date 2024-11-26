import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipementsComponent } from './equipements.component';



const routes: Routes = [
  {
    path: '',
    component: EquipementsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipmentsRoutingModule {}
