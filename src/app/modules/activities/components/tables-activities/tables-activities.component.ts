import { Component, ViewChild } from '@angular/core';
import {ModalConfig} from "src/app/_metronic/partials//layout/modals/modal.config";
import { ModalComponent } from 'src/app/_metronic/partials';
@Component({
  selector: 'app-tables-activities',
  templateUrl: './tables-activities.component.html',
})
export class TablesActivitiesComponent {
  @ViewChild('modal') private modalComponent: ModalComponent;
  modalConfig: ModalConfig = {
    modalTitle: 'Ajouter une Activité',
    dismissButtonLabel: 'Ajouter',
    btnClass: 'btn btn-dark',
    // deleteButtonLabel: 'Delete',
  };
  constructor() {}
  async openModal() {
     await this.modalComponent.openXl();
  }
  
  async openUpdateModal() {
    this.modalConfig.modalTitle = 'Modifier cet Equipement';
    this.modalConfig.dismissButtonLabel = 'Modifier';
    this.modalConfig.btnClass = 'btn btn-success';
    return await this.modalComponent.openLg();
  }
}
