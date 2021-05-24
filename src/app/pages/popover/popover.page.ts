import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';



@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
// inyectasr 
  constructor( private popoverController: PopoverController ) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss : false
    });
    // quitar return para llamar desde el padre
    await popover.present();

    // imprimir en consola data desde el hijo
    const { data } = await popover.onWillDismiss();
    console.log(data);
  }

}
