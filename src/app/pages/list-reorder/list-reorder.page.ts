import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['uno','dos','tres','cuatro','cinco'];
  
  // crear propiedad bool para boton Toggle  reordenar ->> apagado lleva llaves cuadradas en el html
  reordenarDisabled: boolean = true; 




  constructor() { }

  ngOnInit() {
  }

  doReorder( event: any ){
    console.log(event); 
  
    // funciones de js para reordenar desde los parametro que se ven en consola
    // quiero recuperar solo el primer elemento
    const itemMover = this.personajes.splice( event.detail.from, 1 )[0];
    // insertar item cortado en la posicion correcta
    this.personajes.splice( event.detail.to, 0 , itemMover );

    event.detail.complete();
    console.log(this.personajes);
  }

}
