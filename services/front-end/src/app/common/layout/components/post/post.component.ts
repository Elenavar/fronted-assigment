import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Post} from '../../../../model/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post = {
    author: "",
        author_fullname: "",
        category: "",
        language: "",
        id: "",
        title: "",
        selftext: "",
        url: "",
  }

  @Output() showDetail = new EventEmitter();
  @Output() showForm = new EventEmitter();
   form = false;

  constructor(){}

  onShowDetail(){
    this.showDetail.emit(this.post.id);
  }

  onShowForm(){
    this.form = !this.form
    this.showForm.emit(this.form)
  }

}
