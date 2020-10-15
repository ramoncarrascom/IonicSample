import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], texto: string = '', columna: string = 'title'): any[] {

    if (!texto || (texto && texto === '')) {
      return value;
    }

    texto = texto.toLocaleLowerCase();

    return value.filter( x => x[columna].toLowerCase().includes(texto));
  }

}
