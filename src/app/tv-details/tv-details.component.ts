import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
declare var $:any;
@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  tvId: string = '';
  tvDetails:any;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) { }

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

    this.tvId = this._ActivatedRoute.snapshot.params['id'],
    this._MoviesService.getMediaDetails(this.tvId,'tv').subscribe({
      next:(response)=>{
        this.tvDetails=response
      }
      
    });
  }

}
