import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  trendingMovie: any[] = [];
  allTrendingMovie: any[] = [];
  allTrendingTv: any[] = [];
  allTrendingPeople: any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private _MoviesService: MoviesService) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      200: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 8
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this._MoviesService.getTrended('movie').subscribe({
      next: (response) => {
        this.allTrendingMovie = response.results,
          this.trendingMovie = this.allTrendingMovie.slice(0, 10)
      }
    });
    this._MoviesService.getTrended('tv').subscribe({
      next: (response) => {
        this.allTrendingTv = response.results
        this.trendingTv = response.results.slice(0, 10);
      }
    });
    this._MoviesService.getTrended('person').subscribe({
      next: (response) => {
        for (let i = 0; i < response.results.length; i++) {
          if (response.results[i].profile_path == null) {
            response.results[i].profile_path = '../../assets/imgs/images (1).png';
          } else {
            response.results[i].profile_path = this.imgPrefix + response.results[i].profile_path;
          }
        }
        this.allTrendingPeople = response.results,
          this.trendingPeople = response.results.slice(0, 10)
      }
    });

    $('.showMovie').click(function () {
      if ($('.moreMovie').hasClass('d-none')) {

        $('.moreMovie').show(50, function () {
          $('.moreMovie').removeClass('d-none').addClass('d-flex');
        });
      } else {
        $('.moreMovie').hide(1200, function () {
          $('.moreMovie').removeClass('d-flex').addClass('d-none');
        });
      }
    });

    $('.showTv').click(function () {
      if ($('.moreTv').hasClass('d-none')) {
        $('.moreTv').show(50, function () {
          $('.moreTv').removeClass('d-none').addClass('d-flex');
        });
      } else {
        $('.moreTv').hide(1200, function () {
          $('.moreTv').removeClass('d-flex').addClass('d-none');
        });
      }
    });

    $('.showPeople').click(function () {
      if ($('.morePeople').hasClass('d-none')) {
        $('.morePeople').show(50, function () {
          $('.morePeople').removeClass('d-none').addClass('d-flex');
        });
      } else {
        $('.morePeople').hide(1200, function () {
          $('.morePeople').removeClass('d-flex').addClass('d-none');
        });
      }
    });

    /* Start Loading Screen */
    $(document).ready(function () {
      $('#loading .spinner').fadeOut(1000, function () {
        $('#loading').fadeOut(1000, function () {
          $('#loading').remove();
        })
      })
    })
    /* end Loading Screen */

  }
  ngOnDestroy(): void {

  }

}
