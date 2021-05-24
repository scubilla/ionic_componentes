import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  //2 crear arrar para descargar albumes
  albumes: any[] = [];
  textoBuscar: string = '';
  
  // 1 inyectar el servicio albumdes
  constructor( private dataService: DataService ) { }

  // 3 descargar el array 
  ngOnInit() {
    this.dataService.getAlbumes().subscribe( albumes => {
    this.albumes = albumes;
    });
  }

  onSearchChange( event ){
    //console.log( event );
    this.textoBuscar = event.detail.value;
  }

}
