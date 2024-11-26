import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import { GestionActivitesComponent } from './gestion-activites/gestion-activites.component';
import { ActiviesRoutingModule } from './activities-routing.module';
import { DateTimeFieldComponent } from './components/date-time-field/date-time-field.component';
import { FormsComponent } from './components/forms/forms.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { TablesEquipementsComponent } from './components/tables-equipements/tables-equipements.component';
import { GestionEquipementsComponent } from './gestion-equipements/gestion-equipements.component';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { TablesActivitiesComponent } from './components/tables-activities/tables-activities.component';
import { ModalActivitiesComponent } from './components/modal/modal.component';
import { SallesModule } from '../salles/salles.module';
@NgModule({
  declarations: [
    ActivitiesComponent,
    GestionActivitesComponent,
    TablesActivitiesComponent,
    ModalActivitiesComponent,
    FormsComponent,
    TablesEquipementsComponent, 
    GestionEquipementsComponent,
    DateTimeFieldComponent,
  ],

  imports: [
    CommonModule,
    ActiviesRoutingModule, 
    FormsModule,
    FlatpickrModule.forRoot(),
    InlineSVGModule,
    SallesModule
    ],
    bootstrap: [DateTimeFieldComponent]

})
export class ActivitiesModule { }
