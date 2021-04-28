import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Simon';
  // objeto usuario
  usuario = {
    email:'',
    password:''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('submit')
    console.log(this.usuario)
    
  }


}
