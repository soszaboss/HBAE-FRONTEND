import { Component, ViewChild } from '@angular/core';
import {ModalConfig} from "src/app/_metronic/partials//layout/modals/modal.config";
import { ModalComponent } from 'src/app/_metronic/partials';


@Component({
  selector: 'app-tables-Salles',
  templateUrl: './tables-salles.component.html',
  styleUrls: ['./tables-salles.component.scss'],
})
export class TablesSallesComponent {
  @ViewChild('modal') private modalComponent: ModalComponent;
  modalConfig: ModalConfig = {
    modalTitle: 'Ajouter une Salle',
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