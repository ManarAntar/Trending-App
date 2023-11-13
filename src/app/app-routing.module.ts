import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,title:'Home' },
  { path: 'about', component: AboutComponent },
  { path: 'movies', component: MoviesComponent,title:'Movies' },
  { path: 'movie details/:id', component: MovieDetailsComponent,title:'Movie details' },
  { path: 'artists' ,component: PeopleComponent,title:'Artists' },
  { path: 'tv show', component: TvComponent,title:'Tv Shows' },
  { path: 'tv details/:id',component:TvDetailsComponent,title:'Tv show details'},
  // { path: 'login', component: LoginComponent,title:'Login' },
  // { path: 'register', component: RegisterComponent,title:'Register' },
  { path: 'settings', loadChildren: ()=> import('./settings/settings.module').then((x)=>x.SettingsModule),title:'Settings'},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
