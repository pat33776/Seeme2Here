import { Pipe, PipeTransform } from '@angular/core';

//pipe decorator --> this allow us to give a pipe name
@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(items: any[], searchStr: string) {
    if (!items) return [];

    if (!searchStr) return items;

    searchStr = searchStr.toLocaleLowerCase();

    return items.filter(data => {
      return data.title.toLocaleLowerCase().includes(searchStr);
    });
  }

}


