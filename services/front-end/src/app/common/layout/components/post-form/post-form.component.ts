import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { PostsService } from 'src/app/callToApi/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() closeForm = new EventEmitter()
  @Output() sendForm = new EventEmitter()
  register: Post = {
    author: "",
    author_fullname: "",
    category: "",
    language: "",
    originalPostId:"",
    title: "",
  }
  @Input() postChoosen: any = {}
  form = true;

  
  constructor(
    private postsServices: PostsService
  ) { }

  ngOnInit(): void {
  }

  onCloseForm(){
    this.form = false;
    this.closeForm.emit(this.form)
  }
  registerPost(){
    this.sendForm.emit(this.register)
    // this.postsServices.addTranslation(this.register).subscribe(data=>console.log(data))
    // this.register = {
    //   author: "",
    //   author_fullname: "",
    //   category: "",
    //   language: "",
    //   originalPostId:"",
    //   title: "",}
  }
  

}
