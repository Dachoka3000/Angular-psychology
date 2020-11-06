import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service'
import { AlertService } from '../alert.service';
import { Post } from '../post';
import { Comment } from '../comment';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {


  constructor(private postService:PostServiceService) { 
    
  }
  PostList:any=[];


  ngOnInit() {
    this.refreshPostList();
  }
  refreshPostList(){
    this.postService.getPosts().subscribe(data=>{
      this.PostList=data;
    })
  }

}
