import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }
  getTrended(media: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media}/week?api_key=b0705758b2392fabe6afe867ebc2af4c`)
  }
  getMediaDetails(id:string,media:string): Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${media}/${id}?api_key=b0705758b2392fabe6afe867ebc2af4c`)
  }
  getMediaByPagination (pageNum:number,media:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/${media}?api_key=b0705758b2392fabe6afe867ebc2af4c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}`)
  }
}



