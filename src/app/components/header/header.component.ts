import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  // recibir por input el texto que queremos mostrar
  @Input() titulo: string = '';
  
}
