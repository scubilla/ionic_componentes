import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Componente } from '../../interfaces/interfaces';


// creamos una interface para estandarizar los botones
// se borra al usar en menu cargado en el json


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //componentes: Componente[] = [];
  componentes: Observable<Componente[]>;

   
  // inyectar menucontroller  metodo largo .. usar boton nomas
  constructor( private menuController: MenuController,
               private dataService: DataService) { }
  //constructor( ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts(); 
  }

  // mostrarMenu() { }

}
