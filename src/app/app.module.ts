import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { NetworkComponent } from './network/network.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';
import { SearchByNamePipe } from './search-by-name.pipe';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    NetworkComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    MovieDetailsComponent,
    SeemorePipe,
    SearchPipe,
    SearchByNamePipe,
    TvDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
