import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
declare var $: any;

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  trendingTv:any[]=[];
  imgPrefix:string='https://image.tmdb.org/t/p/w500';
  tvName:string='';
  pages:number[]=[];
  constructor(private _MoviesService:MoviesService) { }
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

    this.pages=new Array(10).fill('').map((x,i)=>i+1),
    this._MoviesService.getMediaByPagination(1,'tv').subscribe({
      next: (response) => { this.trendingTv = response.results }
    });
  }
  getTvByPage(pageNum:number){
    this._MoviesService.getMediaByPagination(pageNum,'tv').subscribe({
      next: (response) => { this.trendingTv = response.results }
    });
  }

}
