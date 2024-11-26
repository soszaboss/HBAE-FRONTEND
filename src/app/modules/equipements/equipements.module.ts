import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipementsComponent } from './equipements.component';
import { EquipmentsRoutingModule } from './equipements-routing.module';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { TablesEquipementsComponent } from './components/tables-equipements/tables-equipements.component';
import { FormsComponent } from './components/forms/forms.component';
import { ModalEquipementsComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    EquipementsComponent,
    TablesEquipementsComponent,
    FormsComponent,
    ModalEquipementsComponent
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    EquipmentsRoutingModule,
]
})
export class EquipementsModule { }
