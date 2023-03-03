import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl='http://localhost:8080/api/posts'

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    return this.http.get<any>(this.apiUrl)
    }
  

  // getOnePost(id:string){
  //   return (this.http.get<any>(this.apiUrl)
  //   .subscribe(response=>{
  //     return(response.data.data.find(post=>post.id===id))
  //   }))
  //   }
  }

