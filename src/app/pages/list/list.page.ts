import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  // 3 crear objeto para descargar el json
  usuarios: Observable<any>;


  //1 inyectar el servicio creado services/data
  constructor( private dataService: DataService   ) { }

  ngOnInit() {

    //2 usar subscribe porque es un observable
    //this.dataService.getUsuarios().subscribe( console.log )
    //4 usar subscribe porque es un observable y  modificar el html
    this.usuarios = this.dataService.getUsuarios();

  }

}
