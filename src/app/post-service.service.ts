import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';
import { Comment } from './comment';


const url = 'http://psychology9000.herokuapp.com/api/post/';


@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  myPosts:any;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get('/api/post/');
  }

  getUserPosts(){
    interface ApiResponse{
      items:any;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('/api/post/8c3f8c4f2448fd1822d97a0efdf9be9f601365d4/').toPromise().then(response=>{
        this.myPosts=response;
        resolve();

      },error=> {
        reject()
      })
    })
    return promise
  }

  addPost(val:any){
    return this.http.post(url + '/post/', val);
  }

  updatePost(val:any){
    return this.http.put(url + '/post/', val);
  }

  deletePost(val:any){
    return this.http.delete(url + '/post/'+val)
  }

}
