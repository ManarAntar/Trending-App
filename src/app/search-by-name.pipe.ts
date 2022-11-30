import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(trendingTv:any[], term:string): any[] {
    return trendingTv.filter((tv)=>tv.name.toLowerCase().includes(term.toLocaleLowerCase()));
  }

}
