import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  movies = [{title: 'test'}];
  title:any;
  desc:any;
  year:any;

  constructor(private api:ApiService){
    this.getMovies()
  }
   getMovies = () =>{
     this.api.getAllMovies().subscribe(
       data =>{
         this.movies = data;
       },
       error => {
         console.log(error);
      }       
    )
  }
  movieClicked=(movie:any)=>{
    //console.log(movie.id);
    this.api.getOneMovies(movie.id).subscribe(
      data =>{
        this.title = data.title;
         this.desc = data.desc;
         this.year = data.year;
      },
      error => {
        console.log(error);
     }       
   )
  }
}