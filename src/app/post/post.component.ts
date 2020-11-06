import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service'
import { Post } from '../post';
import { Comment } from '../comment';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {


  constructor(public postService:PostServiceService) { 
    
  }
  PostList:Post[];

  // refreshPostList(){
  //   this.postService.getUserPosts().then((success)=>{
  //     this.PostList=this.postService.myPosts;
  //   },(error)=>{
  //     console.log(error)
  //   })
    
  // }

  ngOnInit(){
    this.postService.getPosts().subscribe(
    data=>{
    this.PostList=data;
    }
    );
  } 
  

}
