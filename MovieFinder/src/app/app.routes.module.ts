import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'movie/:id', component: DetailsComponent },
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutesModule { }