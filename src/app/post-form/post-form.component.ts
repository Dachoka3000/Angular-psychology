import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import {Post} from '../post';
import { Comment } from '../comment';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
