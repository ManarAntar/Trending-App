import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
declare var $:any;
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { }
  trendingPeople:any[]=[];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  personName:string='';
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

    this._MoviesService.getTrended('person').subscribe({
      next: (response) => {
        for (let i = 0; i < response.results.length; i++){
          if(response.results[i].profile_path == null){
            response.results[i].profile_path='../../assets/imgs/images (1).png';
          }else{
            response.results[i].profile_path=this.imgPrefix+response.results[i].profile_path;
          }
        }
        this.trendingPeople = response.results
      }
    });
  }
}
  