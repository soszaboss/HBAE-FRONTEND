import { Component, ViewChild } from '@angular/core';
import {ModalConfig} from "src/app/_metronic/partials//layout/modals/modal.config";
import { ModalComponent } from 'src/app/_metronic/partials';
@Component({
  selector: 'app-tables-equipements',
  templateUrl: './tables-equipements.component.html',
})
export class TablesEquipementsComponent {
  @ViewChild('modal') private modalComponent: ModalComponent;
  modalConfig: ModalConfig = {
    modalTitle: 'Ajouter un Equipement',
    dismissButtonLabel: 'Ajouter',
    btnClass: 'btn btn-dark',
    // deleteButtonLabel: 'Delete',
  };
  constructor() {}
  async openModal() {
    return await this.modalComponent.openLg();
  }
  
  async openUpdateModal() {
    this.modalConfig.modalTitle = 'Modifier cet Equipement';
    this.modalConfig.dismissButtonLabel = 'Modifier';
    this.modalConfig.btnClass = 'btn btn-success';
    return await this.modalComponent.openLg();
  }
  

}
