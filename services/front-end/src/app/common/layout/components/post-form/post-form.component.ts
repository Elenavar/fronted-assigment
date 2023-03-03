import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Post } from 'src/app/model/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() closeForm = new EventEmitter()
  register: Post = {
    author: "",
    author_fullname: "",
    category: "",
    language: "",
    original_post_id:"",
    title: "",
  }
  form = true;

  
  constructor() { }

  ngOnInit(): void {
  }

  onCloseForm(){
    this.form = false;
    this.closeForm.emit(this.form)
  }
  registerPost(){
    console.log(this.register)
    this.register = {
      author: "",
      author_fullname: "",
      category: "",
      language: "",
      original_post_id:"",
      title: "",}
  }
  

}
