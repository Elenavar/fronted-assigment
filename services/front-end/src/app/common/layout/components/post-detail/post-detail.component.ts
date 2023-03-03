import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Post} from '../../../../model/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  @Output() closeDetail = new EventEmitter()
@Input() postChoosen: Post = {
      author: "",
      author_fullname: "",
      category: "",
      language: "",
      id: "",
      title: "",
      selftext: "",
      url: "",}

  detail = false;
  constructor() { }

  ngOnInit(): void {
  }

  onCloseDetail(){
    this.detail=false
    this.closeDetail.emit(this.detail)
  }
}
