import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  // inyectar el servicio
  constructor( private modalController: ModalController ) { }
  
  ngOnInit() {
  }

  // cuando hay await se usa async
  async mostrarModal(){
    const modal = await this.modalController.create({
      component: ModalInfoPage,
    });

    await modal.present();
  }

}
