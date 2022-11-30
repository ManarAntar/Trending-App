import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import { Label } from 'ng2-charts';
declare var $: any;
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  trendingMovie: any[] = [];
  allTrendingMovie:any[]=[];
  pages: number[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  term:string='';
  // labelArr: any[]=[];
  // dataArr: any[]=[];
  // xLabels: Label[]=[];
  // xData: ChartDataSets[]=[];
  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {

        /* Start Loading Screen */
        $(document).ready(function(){
          $('#loading .spinner').fadeOut(1000,function(){
            $('#loading').fadeOut(1000,function(){
              $('#loading').remove();
            })
          })
        })
         /* end Loading Screen */

    this.pages = new Array(10).fill(' ').map((x, i) => i + 1);
    this._MoviesService.getTrended('movie').subscribe({
      next: (response) =>{
        this.allTrendingMovie = response.results.slice(0,19);
        // this.labelArr= ['x', 'y', 'z', 'f', 'h', 'q'];
        // this.dataArr = [20, 4, 34, 50, 12, 29];

      } 
    });
    this._MoviesService.getMediaByPagination(1,'movie').subscribe({
      next: (response) => this.trendingMovie = response.results
    })
  }


  getMoviesByPage(pageNumber: number)
   {
    this._MoviesService.getMediaByPagination(pageNumber,'movie').subscribe({
      next: (response) => this.trendingMovie = response.results
    })
  }
}
 