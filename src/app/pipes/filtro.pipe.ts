import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[],
            texto: string = '',
            columna: string = 'title',
            ): any[] {
    
   // validar si texto es exactamente = a vacio
   if ( texto === '' ){
     return arreglo;
   }

  // validar si arreglo viene vacio
  if ( !arreglo ){
   return arreglo;
  }

  texto = texto.toLocaleLowerCase();  // busqueda key sensitive

  // usar filter de JS  preguntar si item,lowercase es igual al texto
  return arreglo.filter(
    item => item[columna].toLowerCase().includes( texto )
  );
  }

}
