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
      componentProps: {
        nombre: 'Simon',
        pais: 'Paraguay'
      }

    });

    await modal.present();

    // const resp = await modal.onDidDismiss();
    // en vez de resp usamos "desestructracion"
    // const {data} = await modal.onDidDismiss();
    
    const {data} = await modal.onWillDismiss();
    console.log('onWillDissmiss');

    console.log(data);
  }

}
