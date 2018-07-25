import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutesModule } from './app.routes.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieComponent } from './movie/movie.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';

import { MoviesService } from './services/movies.service';

@NgModule({
  //components must be imported in declarations
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent,
    FooterComponent,
    AboutComponent,
    DetailsComponent,
    NotfoundComponent
  ],
  //modules must be imported in imports
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    FormsModule
  ],
  //services must be imported in providers
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
