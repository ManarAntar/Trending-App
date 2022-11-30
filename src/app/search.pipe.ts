import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trendingMovie:any[],term:string): any[] {
    return trendingMovie.filter((movie)=>movie.title.toLowerCase().includes(term.toLowerCase()));
  }

}
