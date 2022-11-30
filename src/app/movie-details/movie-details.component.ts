import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
declare var $: any;
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId: string = '';
  movieDetails: any;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) { }

  ngOnInit(): void {

    /* Start Loading Screen */
    $(document).ready(function () {
      $('#loading .spinner').fadeOut(1000, function () {
        $('#loading').fadeOut(1000, function () {
          $('#loading').remove();
        });
      });
    });
    /* end Loading Screen */

    this.movieId = this._ActivatedRoute.snapshot.params['id'];
    this._MoviesService.getMediaDetails(this.movieId, 'movie').subscribe({
      next: (response) => this.movieDetails = response
    })
  }

}
