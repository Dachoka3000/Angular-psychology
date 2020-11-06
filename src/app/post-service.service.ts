import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';
import { Comment } from './comment';


@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  url = 'http://psychology9000.herokuapp.com/api';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '/post/'+"8c3f8c4f2448fd1822d97a0efdf9be9f601365d4");
  }

  addPost(val:any){
    return this.http.post(this.url + '/post/', val);
  }

  updatePost(val:any){
    return this.http.put(this.url + '/post/', val);
  }

  deletePost(val:any){
    return this.http.delete(this.url + '/post/'+val)
  }

}
