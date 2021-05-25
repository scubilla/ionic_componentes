import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [
    FiltroPipe
  ],
  // exportar
  exports:[
    FiltroPipe
  ]
})
export class PipesModule { }
