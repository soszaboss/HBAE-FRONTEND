import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SallesRoutingModule } from './salles-routing.module';
import { SallesComponent } from './salles.component';
import { GestionSallesComponent } from './gestion-salles/gestion-salles.component';
import { TablesSallesComponent } from './components/tables-salles/tables-salles.component';
import { ModalSallesComponent } from './components/modal/modal.component';
import { FormsComponent } from './components/forms/forms.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { TablesEquipementsComponent } from './components/tables-equipements/tables-equipements.component';
import { GestionEquipementsComponent } from './gestion-equipements/gestion-equipements.component';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { TimeFieldComponent } from './components/time-field/time-field.component';

@NgModule({
  declarations: [
    SallesComponent,
    TablesSallesComponent,
    GestionSallesComponent,
    ModalSallesComponent,
    FormsComponent,
    TablesEquipementsComponent, 
    GestionEquipementsComponent,
    TimeFieldComponent,

  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    SallesRoutingModule,
    FormsModule,
    FlatpickrModule.forRoot()
    ],
    bootstrap: [TimeFieldComponent],
    exports: [TimeFieldComponent]
})
export class SallesModule { }
