import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl ="http://127.0.0.1:8000"; 

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
 constructor(private http : HttpClient) { }

 getAllMovies():Observable<any>{
   return this.http.get(this.baseurl + '/movies/',
   {headers: this.httpHeaders})
 }

 getOneMovies(id:any):Observable<any>{
  return this.http.get(this.baseurl + '/movies/'+id+'/',
  {headers: this.httpHeaders})
}

updateMovie(movie:any):Observable<any>{
  const body = {title:movie.title,desc:movie.desc,year:movie.year};
  return this.http.put(this.baseurl + '/movies/'+movie.id+'/',body,{headers: this.httpHeaders});
}
 
}