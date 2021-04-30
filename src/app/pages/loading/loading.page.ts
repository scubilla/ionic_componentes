import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  // crear objeto para usar sus metodos
  loading: HTMLIonLoadingElement; 

  // 2 inyectar el controller
  constructor( private loadingController: LoadingController ) { }

  ngOnInit() {
  }

  mostrarLoading(){
    this.presentLoading('Cargando...');
    // temporizar a 2 segundos
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
      
      
  };


  // 1 pegar de components
  async presentLoading( message:string) {
    this.loading = await this.loadingController.create({
      message,
    });

    await this.loading.present();
  
  }
  
};



