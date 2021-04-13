import { Component, OnInit } from '@angular/core';

// creamos una interface para estandarizar los botones
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  // cargar cada uno de los componentes
  componentes: Componente[] = [
   {
    icon: 'american-football-outline',
    name: 'Action Sheet',
    redirectTo: '/action-sheet'
   },
   {
    icon: 'alert-circle-outline',
    name: 'Alert',
    redirectTo: '/alert'
   },
   {
    icon: 'beaker-outline',
    name: 'Avatar',
    redirectTo: '/avatar'
   }
  ];

  constructor() { }

  ngOnInit() {
  }

}
