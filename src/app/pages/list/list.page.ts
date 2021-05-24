import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
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

  @ViewChild(IonList) ionList: IonList;

  //1 inyectar el servicio creado services/data
  constructor( private dataService: DataService   ) { }

  ngOnInit() {

    //2 usar subscribe porque es un observable
    //this.dataService.getUsuarios().subscribe( console.log )
    //4 usar subscribe porque es un observable y  modificar el html
    this.usuarios = this.dataService.getUsuarios();

  }

  favorite(user: any) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }

  share(user: any) {
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }

  delete(user: any) {
    console.log('delete', user.name);
    this.ionList.closeSlidingItems();
  }

  




}
